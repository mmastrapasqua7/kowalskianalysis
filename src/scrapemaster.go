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

	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"time"
)

type JsonRequestsFile []struct {
	From    []string `json:"from"`
	To      []string `json:"to"`
	Comment string   `json:"_comment"`
}

type ResultFile struct {
	Id      int
	Date    string
	Results []Result
}

type Result struct {
	FromLat, FromLon string
	ToLat, ToLon     string
	BigResult        trip.BigJson
}

func main() {
	// Arguments
	if len(os.Args) < 4 {
		fmt.Println("usage:\n\t scrapemaster [input.json] [scrapedDataDir] [outputDir]")
		os.Exit(0)
	}
	jsonRequestsFilename := os.Args[1]
	scrapedDataDir := os.Args[2]
	outputDir := os.Args[3]

	// Logfile
	logfile := createFile("scraper_error.log")
	log.SetOutput(logfile)
	defer logfile.Close()

	// Read requests
	requests := readJsonRequests(jsonRequestsFilename)

	for i := 0; true; i++ {
		resultFilename := outputDir + "/scrapemaster_" + util.FormattedData(time.Now()) + ".json"
		resultFile := createFile(resultFilename)
		var resultFileStruct ResultFile
		resultFileStruct.Id = i
		resultFileStruct.Date = time.Now().Format("2006-01-02 15:04:05")

		for _, request := range requests {
			var resultStruct Result
			resultStruct.FromLat = request.From[0]
			resultStruct.FromLon = request.From[1]
			resultStruct.ToLat = request.To[0]
			resultStruct.ToLon = request.To[1]

			moovitResult := moovit.GetRoutes(request.From[0], request.From[1], request.To[0], request.To[1])
			openstreetmapBikeResult := openstreetmap.GetBikeRoutes(request.From[0], request.From[1], request.To[0], request.To[1])
			openstreetmapFootResult := openstreetmap.GetFootRoutes(request.From[0], request.From[1], request.To[0], request.To[1])
			wazeResult := waze.GetRoutes(request.From[0], request.From[1], request.To[0], request.To[1])
			car2goResult := car2go.GetRoutes(request.From[0], request.From[1], request.To[0], request.To[1], scrapedDataDir)
			sharengoResult := sharengo.GetRoutes(request.From[0], request.From[1], request.To[0], request.To[1], scrapedDataDir)
			enjoyResult := enjoy.GetRoutes(request.From[0], request.From[1], request.To[0], request.To[1], scrapedDataDir)

			var results trip.BigJson
			results.MoovitRoutes = moovitResult
			results.OpenStreetMapBikeRoutes = openstreetmapBikeResult
			results.OpenStreetMapFootRoutes = openstreetmapFootResult
			results.WazeRoutes = wazeResult
			results.Car2GoRoutes = car2goResult
			results.EnjoyRoutes = enjoyResult
			results.SharengoRoutes = sharengoResult

			resultStruct.BigResult = results
			resultFileStruct.Results = append(resultFileStruct.Results, resultStruct)

			time.Sleep(30 * time.Second)
		}

		data, _ := json.MarshalIndent(resultFileStruct, "", "\t")
		_, err := resultFile.Write(data)
		if err != nil {
			log.Println("ERROR: scrapemaster: can't write to file" + resultFilename, err)
		}

		err = resultFile.Close()
		if err != nil {
			log.Println("ERROR: scrapemaster: can't close file" + resultFilename, err)
		}

		// emp, _ := json.MarshalIndent(results, "", "  ")
		// fmt.Println(string(emp))
		time.Sleep(10 * time.Minute)
	}
}

func readJsonRequests(jsonFilename string) JsonRequestsFile {
	requestsData, err := ioutil.ReadFile(jsonFilename)
	if err != nil {
		log.Println("scrapemaster: can't open input file" + jsonFilename, err)
		os.Exit(1)
	}

	requests := JsonRequestsFile{}
	err = json.Unmarshal([]byte(requestsData), &requests)
	if err != nil {
		log.Println("scrapemaster: can't unmarshal json file" + jsonFilename, err)
		os.Exit(1)
	}

	return requests
}

func createFile(filename string) *os.File {
	file, err := os.OpenFile(filename, os.O_RDWR | os.O_CREATE | os.O_APPEND, 0666)
	if err != nil {
		log.Println("scrapemaster: can't open/create file" + filename, err)
		os.Exit(1)
	}

	return file
}
