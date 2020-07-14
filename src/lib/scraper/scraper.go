package scraper

import (
	"./car2go"
	"./enjoy"
	"./herewego"
	"./moovit"
	"./openstreetmap"
	// "./sharengo"
	"./waze"
	"../util"

	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"strings"
	"time"
)

type Request struct {
	From    []string `json:"from"`
	To      []string `json:"to"`
	Comment string   `json:"_comment"`
}

type JsonRequestsFile []Request

type ResultFile struct {
	Id               int
	Date             string
	ResultsSha256Sum string
	Results          []Result
}

type Result struct {
	FromLat, FromLon string
	ToLat, ToLon     string
	DistanceInKm     float64
	BigResult        BigJson
}

type BigJson struct {
	// MoovitRoutes            moovit.Result
	HerewegoRoutes          herewego.Result
	OpenStreetMapBikeRoutes openstreetmap.Result
	OpenStreetMapFootRoutes openstreetmap.Result
	WazeRoutes              waze.Result
	Car2GoRoutes            car2go.Result
	EnjoyRoutes             enjoy.Result
	// SharengoRoutes          sharengo.Result
}

func GetRoutesFromAllServices(fromLat, fromLon, toLat, toLon string, carsharingDataDir string) BigJson {
	return BigJson{
		herewego.GetRoutes(fromLat, fromLon, toLat, toLon),
		openstreetmap.GetBikeRoutes(fromLat, fromLon, toLat, toLon),
		openstreetmap.GetFootRoutes(fromLat, fromLon, toLat, toLon),
		waze.GetRoutes(fromLat, fromLon, toLat, toLon),
		car2go.GetRoutes(fromLat, fromLon, toLat, toLon, carsharingDataDir),
		enjoy.GetRoutes(fromLat, fromLon, toLat, toLon, carsharingDataDir)}
}

func ReadRequests(f string) JsonRequestsFile {
	data, err := ioutil.ReadFile(f)
	if err != nil {
		fmt.Println("scrapemaster: can't open request file " + f + ":", err)
		os.Exit(-1)
	}

	requests := JsonRequestsFile{}
	if err := json.Unmarshal(data, &requests); err != nil {
		fmt.Println("scrapemaster: can't unmarshal request file " + f + ":", err)
		os.Exit(-1)
	}
	return requests
}

func SaveResult(rf ResultFile, outputDir string) {
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
	compressFile(outputDir, resultFile.Name())
}

func RefreshSessions() {
	// for err := moovit.GetWebPage(); err != nil; err = waze.GetWebPage() {
	// 	log.Println("moovit: failed to get webpage:", err)
	// 	time.Sleep(1 * time.Minute)
	// }

	for err := waze.GetWebPage(); err != nil; err = waze.GetWebPage() {
		log.Println("waze: failed to get webpage:", err)
		time.Sleep(1 * time.Minute)
	}

	for err := openstreetmap.GetWebPage(); err != nil; err = openstreetmap.GetWebPage() {
		log.Println("openstreetmap: failed to get webpage:", err)
		time.Sleep(1 * time.Minute)
	}

	for err := herewego.GetWebPage(); err != nil; err = herewego.GetWebPage() {
		log.Println("herewego: failed to get webpage:", err)
		time.Sleep(1 * time.Minute)
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

func compressFile(dir, f string) {
	oldDir := chdir(dir)
	defer chdir(oldDir)

	strings := strings.Split(f, "/")
	f = strings[len(strings)-1]

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

func chdir(d string) string {
	currentDir, err := os.Getwd()
	if err != nil {
		log.Println("trip: can't get working directory:", err)
		os.Exit(-1)
	}

	if err := os.Chdir(d); err != nil {
		log.Println("trip: can't change working directory:", err)
		os.Exit(-1)
	}

	return currentDir
}

// OLD PASTICCIO

type ResultFile1 struct {
	Id               int
	Date             string
	ResultsSha256Sum string
	Results          []Result1
}

type Result1 struct {
	FromLat, FromLon string
	ToLat, ToLon     string
	DistanceInKm     float64
	BigResult        BigJson1
}

type BigJson1 struct {
	MoovitRoutes            moovit.Result
	// HerewegoRoutes          herewego.Result
	OpenStreetMapBikeRoutes openstreetmap.Result
	OpenStreetMapFootRoutes openstreetmap.Result
	WazeRoutes              waze.Result
	Car2GoRoutes            car2go.Result
	EnjoyRoutes             enjoy.Result
	// SharengoRoutes          sharengo.Result
}
