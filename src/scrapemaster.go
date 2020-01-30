// Date 2 coordinate (latitudine, longitudine) di partenza e arrivo,
// questo programma chiede a tutti gli scrapers (Moovit, Waze) di
// calcolare le tratte migliori in tempo reale e restituirle in una struttura
// dati di tipo trip.Trip per poi stamparne in forma simil-tabella
// tutte le info dei vari percorsi proposti

package main

import (
	// normal
	"./lib/scraper/moovit"
	"./lib/scraper/openstreetmap"
	// "./lib/scraper/waze"

	// sharing
	// "./lib/scraper/car2go"
	// "./lib/scraper/enjoy"
	// "./lib/scraper/sharengo"

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
	// wazeTrips := waze.GetTrips(from, to)
	// car2goTrips := car2go.GetTrips(from, to, "bin/car2go")
	// enjoyTrips := enjoy.GetTrips(from, to, "bin/enjoy")
	// sharengoTrips := sharengo.GetTrips(from, to, "bin/sharengo")

	var results trip.BigJson
	results.MoovitRoutes = moovitResult
	results.OpenStreetMapBikeRoutes = openstreetmapBikeResult
	results.OpenStreetMapFootRoutes = openstreetmapFootResult

	emp, _ := json.MarshalIndent(results, "", "  ")
	fmt.Println(string(emp))
}
