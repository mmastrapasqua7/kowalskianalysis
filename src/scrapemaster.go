// Date 2 coordinate (latitudine, longitudine) di partenza e arrivo,
// questo programma chiede a tutti gli scrapers (Moovit, Waze) di
// calcolare le tratte migliori in tempo reale e restituirle in una struttura
// dati di tipo trip.Trip per poi stamparne in forma simil-tabella
// tutte le info dei vari percorsi proposti

package main

import (
	"./lib/scraper/car2go"
	"./lib/scraper/moovit"
	"./lib/scraper/openstreetmap"
	"./lib/scraper/waze"
	"./lib/trip"

	"log"
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 5 {
		fmt.Println("usage:\n\t scrapall <fromLat> <fromLon> <toLat> <toLon>")
		return
	}
	from := trip.Location{os.Args[1], os.Args[2], "unknown"}
	to := trip.Location{os.Args[3], os.Args[4], "unkown"}

	logfile, err := os.OpenFile("scrapers_error.log", os.O_RDWR | os.O_CREATE | os.O_APPEND, 0666)
	if err != nil {
		fmt.Println("scrapemaster: can't open/create file:", err)
		return
	}
	defer logfile.Close()
	log.SetOutput(logfile)

	moovitTrips := moovit.GetTrips(from, to)
	wazeTrips := waze.GetTrips(from, to)
	openstreetmapTrips := openstreetmap.GetTrips(from, to)
	car2goTrips := car2go.GetTrips(from, to, "bin/car2go")

	trips := make([]trip.Trip, 0)
	trips = append(trips, moovitTrips...)
	trips = append(trips, wazeTrips...)
	trips = append(trips, openstreetmapTrips...)
	trips = append(trips, car2goTrips...)

	trip.PrintTimeTable(trips)
}
