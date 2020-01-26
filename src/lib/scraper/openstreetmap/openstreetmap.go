package openstreetmap

import (
	"../../trip"

	"fmt"
	"log"
	"time"
)

func init() {
	err := getWebPage()
	if err != nil {
		log.Println("openstreetmap: failed to get webpage:", err)
		fmt.Println("ERROR: look at the logfile for more details. Sleeping.")
		for {
			time.Sleep(24 * time.Hour)
		}
	}
}

func GetTrips(from, to trip.Location) []trip.Trip {
	trips := make([]trip.Trip, 0)

	bikeTrip, err := getSuggestedRoutes(from, to, "bike")
	if err != nil {
		log.Println("openstreetmap: failed to fetch bike routes:", err)
		return trips
	}
	var trip1 trip.Trip
	trip1.ScrapedApp = "OPENSTREETMAP"
	// trip1.ServiceName = ""
	trip1.VehicleType = "OWN BIKE"
	trip1.StartTime = time.Now()
	trip1.EndTime = time.Now().Add(time.Duration(bikeTrip.Routes[0].Duration) * time.Second)
	trip1.Duration = trip1.EndTime.Sub(trip1.StartTime)
	trip1.Distance = bikeTrip.Routes[0].Distance
	trips = append(trips, trip1)

	footTrip, err := getSuggestedRoutes(from, to, "foot")
	if err != nil {
		log.Println("openstreetmap: failed to fetch foot routes:", err)
		return trips
	}
	var trip2 trip.Trip
	trip2.ScrapedApp = "OPENSTREETMAP"
	// trip2.ServiceName = ""
	trip2.VehicleType = "OWN FEET"
	trip2.StartTime = time.Now()
	trip2.EndTime = time.Now().Add(time.Duration(footTrip.Routes[0].Duration) * time.Second)
	trip2.Duration = trip2.EndTime.Sub(trip2.StartTime)
	trip2.Distance = footTrip.Routes[0].Distance
	trips = append(trips, trip2)

	return trips
}
