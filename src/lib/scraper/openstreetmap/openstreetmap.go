package openstreetmap

import (
	"../../trip"

	"time"
)

func init() {
	getWebPage()
}

func GetTrips(from, to trip.Location) []trip.Trip {
	trips := make([]trip.Trip, 0)

	bikeTrip := getSuggestedRoutes(from, to, "bike")
	var trip1 trip.Trip
	trip1.StartTime = time.Now()
	trip1.EndTime = time.Now().Add(time.Duration(bikeTrip.Routes[0].Duration) * time.Second)
	trip1.Duration = trip1.EndTime.Sub(trip1.StartTime)
	trip1.Distance = bikeTrip.Routes[0].Distance
	trip1.VehicleType = "BIKE"
	trip1.ScrapedApp = "OPENSTREETMAP"
	trips = append(trips, trip1)

	footTrip := getSuggestedRoutes(from, to, "foot")
	var trip2 trip.Trip
	trip2.StartTime = time.Now()
	trip2.EndTime = time.Now().Add(time.Duration(footTrip.Routes[0].Duration) * time.Second)
	trip2.Duration = trip2.EndTime.Sub(trip2.StartTime)
	trip2.Distance = footTrip.Routes[0].Distance
	trip2.VehicleType = "FOOT"
	trip2.ScrapedApp = "OPENSTREETMAP"
	trips = append(trips, trip2)

	return trips
}
