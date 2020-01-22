// Date 2 coordinate (latitudine, longitudine) di partenza e arrivo,
// questo programma chiede a tutti gli scrapers (Moovit, Waze) di
// calcolare le tratte migliori in tempo reale e restituirle in una struttura
// dati di tipo trip.Trip per poi stamparne in forma simil-tabella
// tutte le info dei vari percorsi proposti

package main

import (
	"./lib/geoloc"
	"./lib/trip"
	"./lib/scraper/moovit"
	"./lib/scraper/waze"
	"./lib/scraper/openstreetmap"

	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 5 {
		fmt.Println("usage:\n\t scrapall <fromLat> <fromLon> <toLat> <toLon>")
		return
	}
	from := geoloc.Location{os.Args[1], os.Args[2], "unknown"}
	to := geoloc.Location{os.Args[3], os.Args[4], "unkown"}

	moovitTrips := moovit.GetTrips(from, to)
	wazeTrips := waze.GetTrips(from, to)
	openstreetmapTrips := openstreetmap.GetTrips(from, to)

	trips := make([][]trip.Trip, 0)
	trips = append(trips, moovitTrips)
	trips = append(trips, wazeTrips)
	trips = append(trips, openstreetmapTrips)

	for _, serviceTrips := range trips {
		for _, trip := range serviceTrips[:2] {
			fmt.Println(trip.TimeTable())
		}
	}
}
