// Date 2 coordinate (latitudine, longitudine) di partenza e arrivo,
// lo scraper chiede a Moovit di calcolare in tempo reale il miglior percorso
// coi mezzi pubblici per percorrere la tratta
package main

import (
	"../src/moovit"

	"fmt"
	"os"
)

type Coordinate struct {
	Latitude, Longitude string
}

type Location struct {
	Coordinate
	Name string
}

func main() {
	if len(os.Args) < 5 {
		fmt.Println("usage:\n\t moovit <startLat> <startLon> <endLat> <endLon>")
		return
	}

	startPoint := Location{}
	startPoint.Latitude = os.Args[1]
	startPoint.Longitude = os.Args[2]
	endPoint := Location{}
	endPoint.Latitude = os.Args[3]
	endPoint.Longitude = os.Args[4]

	// Scraping sequence
	// 1
	moovit.GetWebPage()

	// 2
	startPoint.Name = moovit.GetLocationName(startPoint.Latitude, startPoint.Longitude)
	endPoint.Name = moovit.GetLocationName(endPoint.Latitude, endPoint.Longitude)

	// 3
	headerParams := moovit.GetParamsNeededForHeader(startPoint.Name, endPoint.Name)

	// 4
	cookie := moovit.GetMagicCookie(headerParams)

	// 5
	_ = moovit.GetMagicKey(headerParams, cookie) // not needed (?)

	// 6
	startPointMetadata := moovit.GetLocationInfo(startPoint.Name, headerParams, cookie)
	endPointMetadata := moovit.GetLocationInfo(endPoint.Name, headerParams, cookie)

	// 7
	token := moovit.GetMagicToken(startPointMetadata, endPointMetadata, headerParams, cookie)

	// 8
	moovit.PrintTripPlans(startPointMetadata, endPointMetadata, token, cookie)
}
