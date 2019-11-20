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

	waze.GetWebPage()

	cookies := waze.GetCookies()

	waze.SetCookieConsent()

	waze.GetTripPlans(startLat, startLon, endLat, endLon, cookies)
}
