package main

import (
	"./lib/scraper/moovit"
	"./lib/scraper/openstreetmap"
	"./lib/scraper/waze"
	"./lib/scraper/car2go"
	"./lib/scraper/enjoy"
	"./lib/scraper/sharengo"

	"./lib/trip"

	"encoding/json"
	"fmt"
	"log"
	"os"
)

func main() {
	if len(os.Args) < 5 {
		fmt.Println("usage:\n\t scrapemaster <fromLat> <fromLon> <toLat> <toLon>")
		return
	}
	fromLat := os.Args[1]
	fromLon := os.Args[2]
	toLat := os.Args[3]
	toLon := os.Args[4]

	logfile, err := os.OpenFile("scrapers_error.log", os.O_RDWR | os.O_CREATE | os.O_APPEND, 0666)
	if err != nil {
		fmt.Println("scrapemaster: can't open/create log file:", err)
		return
	}
	defer logfile.Close()
	log.SetOutput(logfile)

	moovitResult := moovit.GetRoutes(fromLat, fromLon, toLat, toLon)
	openstreetmapBikeResult := openstreetmap.GetBikeRoutes(fromLat, fromLon, toLat, toLon)
	openstreetmapFootResult := openstreetmap.GetFootRoutes(fromLat, fromLon, toLat, toLon)
	wazeResult := waze.GetRoutes(fromLat, fromLon, toLat, toLon)
	car2goResult := car2go.GetRoutes(fromLat, fromLon, toLat, toLon, "bin/car2go")
	sharengoResult := sharengo.GetRoutes(fromLat, fromLon, toLat, toLon, "bin/sharengo")
	enjoyResult := enjoy.GetRoutes(fromLat, fromLon, toLat, toLon, "bin/enjoy")

	var results trip.BigJson
	results.MoovitRoutes = moovitResult
	results.OpenStreetMapBikeRoutes = openstreetmapBikeResult
	results.OpenStreetMapFootRoutes = openstreetmapFootResult
	results.WazeRoutes = wazeResult
	results.Car2GoRoutes = car2goResult
	results.EnjoyRoutes = enjoyResult
	results.SharengoRoutes = sharengoResult

	emp, _ := json.MarshalIndent(results, "", "  ")
	fmt.Println(string(emp))
}
