package waze

import (
	"../../trip"

	"fmt"
	"log"
	"time"
)

func init() {
	err := getWebPage()
	if err != nil {
		log.Println("waze: failed to get webpage:", err)
		fmt.Println("ERROR: look at the logfile for more details. Sleeping.")
		for {
			time.Sleep(24 * time.Hour)
		}
	}
}

func GetTrips(from, to trip.Location) []trip.Trip {
	trips := make([]trip.Trip, 0)

	// fetch
	cookies, err := getCookies()
	if err != nil {
		log.Println("waze: failed to get cookies:", err)
		return trips
	}

	err = setCookieConsent()
	if err != nil {
		log.Println("waze: failed to set cookie consent", err)
		return trips
	}

	wazeRoutes, err := getSuggestedRoutes(from, to, cookies)
	if err != nil {
		log.Println("waze: failed to fetch routes:", err)
		return trips
	}

	if len(wazeRoutes.Alternatives) == 0 {
		log.Println("waze: no routes found")

		var emptyTrip trip.Trip
		emptyTrip.Duration = 1 * time.Minute
		trips = append(trips, emptyTrip)
	}

	// execute
	for _, route := range wazeRoutes.Alternatives {
		var trip trip.Trip
		trip.StartTime = time.Now()
		trip.EndTime = time.Now().Add(time.Duration(route.Response.TotalRouteTime) * time.Second)
		trip.Duration = trip.EndTime.Sub(trip.StartTime)
		trip.VehicleType = "OWN CAR"
		trip.ScrapedApp = "WAZE"
		trips = append(trips, trip)
	}

	return trips
}
