package waze

import (
	"../../trip"

	"time"
)

func init() {
	getWebPage()
}

func GetTrips(from, to trip.Location) []trip.Trip {
	// fetch
	cookies := getCookies()
	setCookieConsent()
	wazeRoutes := getSuggestedRoutes(from, to, cookies)

	// execute
	trips := make([]trip.Trip, 0)
	for _, route := range wazeRoutes.Alternatives[:] {
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
