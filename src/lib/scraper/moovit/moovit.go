package moovit

import (
	"../../trip"

	"fmt"
	"log"
	"time"
)

func init() {
	err := getWebPage()
	if err != nil {
		log.Println("moovit: failed to get webpage:", err)
		fmt.Println("ERROR: look at the logfile for more details. Sleeping.")
		for {
			time.Sleep(24 * time.Hour)
		}
	}
}

func GetTrips(from, to trip.Location) []trip.Trip {
	trips := make([]trip.Trip, 0)

	// fetch
	x, err := getLocationName(from.Latitude, from.Longitude)
	if err != nil {
		log.Println("moovit: failed to get location name:", err)
		return trips
	}
	from.Name = x

	y, err := getLocationName(to.Latitude, to.Longitude)
	if err != nil {
		log.Println("moovit: failed to get location name:", err)
		return trips
	}
	to.Name = y

	headerParams, err := getParamsNeededForHeader(from.Name, to.Name)
	if err != nil {
		log.Println("moovit: failed to get params for header:", err)
		return trips
	}

	cookie, err := getMagicCookie(headerParams)
	if err != nil {
		log.Println("moovit: failed to get magic cookie:", err)
		return trips
	}

	_, _ = getMagicKey(headerParams, cookie) // not needed (?)
	fromMetadata, err := getLocationInfo(from.Name, headerParams, cookie)
	if err != nil {
		log.Println("moovit: failed to fetch location name:", err)
		return trips
	}

	toMetadata, err := getLocationInfo(to.Name, headerParams, cookie)
	if err != nil {
		log.Println("moovit: failed to get location info:", err)
		return trips
	}

	token, err := getMagicToken(fromMetadata, toMetadata, headerParams, cookie)
	if err != nil {
		log.Println("moovit: failed to get magic token:", err)
		return trips
	}

	moovitRoutes, err := getSuggestedRoutes(fromMetadata, toMetadata, token, cookie)
	if err != nil {
		log.Println("moovit: failed to fetch routes:", err)
		return trips
	}

	// execute
	for _, moovitResult := range moovitRoutes.Results[1:] { // Results[0] is metadata
		var trip trip.Trip
		travels := make([]travel, 0)
		for _, routeStep := range moovitResult.Result.Itinerary.Legs[:] {
			if timestamp := routeStep.WalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
				var travel travel
				travel.start = time.Unix(0, timestamp.StartTime * int64(time.Millisecond))
				travel.end = time.Unix(0, timestamp.EndTime * int64(time.Millisecond))
				travels = append(travels, travel)
			}
		}
		trip.ServiceName = "ATM"
		trip.ScrapedApp = "MOOVIT"
		trip.StartTime = timeIn(travels[0].start, "Europe/London")
		trip.EndTime = timeIn(travels[len(travels)-1].end, "Europe/London")
		trip.Duration = trip.EndTime.Sub(trip.StartTime)
		trip.VehicleType = "METRO/BUS/TRAM"
		trips = append(trips, trip)
	}

	return trips
}
