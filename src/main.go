package main

import (
	"./lib/scraper/moovit"
	"./lib/scraper/openstreetmap"
	"./lib/scraper/waze"
	"./lib/scraper/car2go"
	"./lib/scraper/enjoy"
	"./lib/scraper/sharengo"
	"./lib/trip"
	"./lib/util"

	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"time"
)

func main() {
	checkParams(os.Args)
	requestFile := os.Args[1]
	carsharingDataDir := os.Args[2]
	outputDir := os.Args[3]

	logfile := createFile(outputDir + "/scraper_error.log")
	defer logfile.Close()
	log.SetOutput(logfile)

	for i := 0; true; i++ {
		resultFile := trip.ResultFile{Id: i, Date: time.Now().Format("2006-01-02 15:04:05")}

		for _, request := range readRequests(requestFile) {
			result := trip.Result {
				FromLat: request.From[0],
				FromLon: request.From[1],
				ToLat: request.To[0],
				ToLon: request.To[1],
			}

			result.BigResult = getRoutesFromAllServices(
				request.From[0], request.From[1],
				request.To[0], request.To[1],
				carsharingDataDir)

			resultFile.Results = append(resultFile.Results, result)
			time.Sleep(30 * time.Second)
		}

		saveResult(resultFile, outputDir)

		if hour := time.Now().Hour(); hour == 1 {
			time.Sleep(6 * time.Hour) // wait 07:00
		}
	}
}

func checkParams(args []string) {
	if len(args) < 4 {
		fmt.Println("usage:\n\t scrapemaster [requests.json] [scraped_data_dir] [output_dir]")
		os.Exit(0)
	}

	requestFile := args[1]
	carsharingDataDir := args[2]
	outputDir := args[3]

	if _, err := os.Stat(requestFile); os.IsNotExist(err) {
		fmt.Println("scrapemaster: " + requestFile + " doesn't exist:", err)
		os.Exit(-1)
	}

	if _, err := os.Stat(carsharingDataDir); os.IsNotExist(err) {
		fmt.Println("scrapemaster: " + carsharingDataDir + " doesn't exist:", err)
		os.Exit(-1)
	}

	if _, err := os.Stat(outputDir); os.IsNotExist(err) {
		log.Println("scrapemaster: " + outputDir + " doesn't exist. Creating one...")

		if err := os.Mkdir(outputDir, 0755); err != nil {
			fmt.Println("scrapemaster: can't create output directory:", err)
			os.Exit(-1)
		}
	}
}

func getRoutesFromAllServices(fromLat, fromLon, toLat, toLon string, carsharingDataDir string) trip.BigJson {
	return trip.BigJson{
		moovit.GetRoutes(fromLat, fromLon, toLat, toLon),
		openstreetmap.GetBikeRoutes(fromLat, fromLon, toLat, toLon),
		openstreetmap.GetFootRoutes(fromLat, fromLon, toLat, toLon),
		waze.GetRoutes(fromLat, fromLon, toLat, toLon),
		car2go.GetRoutes(fromLat, fromLon, toLat, toLon, carsharingDataDir),
		enjoy.GetRoutes(fromLat, fromLon, toLat, toLon, carsharingDataDir),
		sharengo.GetRoutes(fromLat, fromLon, toLat, toLon, carsharingDataDir)}
}

func readRequests(f string) trip.JsonRequestsFile {
	data, err := ioutil.ReadFile(f)
	if err != nil {
		fmt.Println("scrapemaster: can't open request file " + f + ":", err)
		os.Exit(-1)
	}

	requests := trip.JsonRequestsFile{}
	if err := json.Unmarshal(data, &requests); err != nil {
		fmt.Println("scrapemaster: can't unmarshal request file " + f + ":", err)
		os.Exit(-1)
	}
	return requests
}

func saveResult(rf trip.ResultFile, outputDir string) {
	resultFile := createFile(outputDir + "/" + util.FormattedData(time.Now()) + ".json")

	// checksum results
	data, _ := json.Marshal(rf.Results)
	rf.ResultsSha256Sum = fmt.Sprintf("%x", sha256.Sum256(data))

	// write and close
	data, _ = json.Marshal(rf)
	if _, err := resultFile.Write(data); err != nil {
		log.Println("scrapemaster: can't write to file", resultFile.Name(), err)
	}
	if err := resultFile.Close(); err != nil {
		log.Println("scrapemaster: can't close file", resultFile.Name(), err)
	}

	// compress
	compressFile(resultFile.Name())
}

func createFile(f string) *os.File {
	file, err := os.OpenFile(f, os.O_RDWR | os.O_CREATE | os.O_APPEND, 0666)
	if err != nil {
		fmt.Println("scrapemaster: can't open/create file " + f + ":", err)
		os.Exit(1)
	}
	return file
}

func compressFile(f string) {
	// exec and wait
	cmd := exec.Command("tar", "-cJf", f + ".tar.xz", f)
	if err := cmd.Start(); err != nil {
		log.Println("scrapemaster: can't compress file " + f + ":", err)
		os.Exit(-1)
	}
	if err := cmd.Wait(); err != nil {
		log.Println("scrapemaster: command error:", err)
		os.Exit(-1)
	}

	// remove
	if err := os.Remove(f); err != nil {
		log.Println("scrapemaster: can't delete uncompressed file" + f + ":", err)
		os.Exit(-1)
	}
}

func refreshSessions() {
	for err := moovit.GetWebPage(); err != nil; err = waze.GetWebPage() {
		log.Println("moovit: failed to get webpage:", err)
		time.Sleep(1 * time.Minute)
	}


	for err := waze.GetWebPage(); err != nil; err = waze.GetWebPage() {
		log.Println("waze: failed to get webpage:", err)
		time.Sleep(1 * time.Minute)
	}

	for err := openstreetmap.GetWebPage(); err != nil; openstreetmap.GetWebPage() {
		log.Println("openstreetmap: failed to get webpage:", err)
		time.Sleep(1 * time.Minute)
	}
}
