// Date 2 coordinate (latitudine, longitudine) di partenza e arrivo,
// lo scraper chiede a Waze di calcolare in tempo reale il miglior percorso
// in automobile per percorrere la tratta
package main

import (
	"../src/waze"

	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 5 {
		fmt.Println("usage:\n\t waze <startLat> <startLon> <endLat> <endLon>")
		return
	}

	startLat := os.Args[1]
	startLon := os.Args[2]
	endLat := os.Args[3]
	endLon := os.Args[4]

	// Scraping sequence
	// 1
	waze.GetWebPage()

	// 2
	cookies := waze.GetCookies()

	// 3
	waze.SetCookieConsent()

	// 4
	waze.GetTripPlans(startLat, startLon, endLat, endLon, cookies)
}
