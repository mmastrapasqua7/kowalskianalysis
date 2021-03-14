package main

import (
	"./lib/scraper"
	"./lib/util"

	"fmt"
	"log"
	"os"
	"time"
)

const (
	RANDOM_ROUTES_COUNT = 10
	RANDOM_ROUTES_MIN_DISTANCE = 2.0 // km
	REPEAT_INTERVAL = 10.0 // min
)

func main() {
	checkParams(os.Args)
	requestFile := os.Args[1]
	carsharingDataDir := os.Args[2]
	outputDir := os.Args[3]

	random := false
	if len(os.Args) > 4 {
		random = true
	}

	logfile := createFile(outputDir + "/scraper_error.log")
	defer logfile.Close()
	log.SetOutput(logfile)

	var requests scraper.JsonRequestsFile
	if random {
		requests = scraper.GetRandomRoutes(RANDOM_ROUTES_COUNT, RANDOM_ROUTES_MIN_DISTANCE)
	} else {
		requests = scraper.ReadRequests(requestFile)
	}

	// timeToSleep := int((REPEAT_INTERVAL / float64(len(requests))) * 60.0)
	// requestTicker := time.NewTicker(time.Duration(timeToSleep) * time.Second)
	requestTicker := time.NewTicker(60 * time.Second)
	refreshSessionsTicker := time.NewTicker(1 * time.Hour)

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
				request.From[0], request.From[1], request.To[0], request.To[1])

			result.BigResult = scraper.GetRoutesFromAllServices(
				request.From[0], request.From[1],
				request.To[0], request.To[1],
				carsharingDataDir)

			resultFile.Results = append(resultFile.Results, result)

			_ = <-requestTicker.C
		}

		scraper.SaveResult(resultFile, outputDir)

		if hour := time.Now().Hour(); hour == 1 {
			time.Sleep(6 * time.Hour) // wait 07:00
		}

		select {
		case <-refreshSessionsTicker.C:
			scraper.RefreshSessions()
		default:
		}

		if random {
			requests = scraper.GetRandomRoutes(RANDOM_ROUTES_COUNT, RANDOM_ROUTES_MIN_DISTANCE)
		}
	}
}

func checkParams(args []string) {
	if len(args) < 4 {
		fmt.Println("usage:\n\t scrapemaster <requests.json> <scraped_data_dir> <output_dir> [random]")
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
