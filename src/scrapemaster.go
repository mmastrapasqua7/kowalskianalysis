package main

import (
	"./lib/scraper"
	"./lib/util"

	"fmt"
	"log"
	"os"
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

	requests := scraper.ReadRequests(requestFile)
	for i := 0; true; i++ {
		resultFile := scraper.ResultFile{Id: i, Date: time.Now().Format("2006-01-02 15:04:05")}

		for _, request := range requests {
			result := scraper.Result{
				FromLat: request.From[0],
				FromLon: request.From[1],
				ToLat: request.To[0],
				ToLon: request.To[1],
			}

			result.DistanceInKm = util.DistanceInKilometersFromStrings(
				result.FromLat, result.FromLon, result.ToLat, result.ToLon)

			result.BigResult = scraper.GetRoutesFromAllServices(
				request.From[0], request.From[1],
				request.To[0], request.To[1],
				carsharingDataDir)

			resultFile.Results = append(resultFile.Results, result)
			time.Sleep(30 * time.Second)
		}

		scraper.SaveResult(resultFile, outputDir)

		if hour := time.Now().Hour(); hour == 1 {
			time.Sleep(6 * time.Hour) // wait 07:00
			scraper.RefreshSessions()
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

func createFile(f string) *os.File {
	file, err := os.OpenFile(f, os.O_RDWR | os.O_CREATE | os.O_APPEND, 0666)
	if err != nil {
		fmt.Println("scrapemaster: can't open/create file " + f + ":", err)
		os.Exit(1)
	}
	return file
}
