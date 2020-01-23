package moovit

import (
	"../../trip"

	"time"
)

func init() {
	getWebPage()
}

func GetTrips(from, to trip.Location) []trip.Trip {
	// fetch
	from.Name = getLocationName(from.Latitude, from.Longitude)
	to.Name = getLocationName(to.Latitude, to.Longitude)
	headerParams := getParamsNeededForHeader(from.Name, to.Name)
	cookie := getMagicCookie(headerParams)
	_ = getMagicKey(headerParams, cookie) // not needed (?)
	fromMetadata := getLocationInfo(from.Name, headerParams, cookie)
	toMetadata := getLocationInfo(to.Name, headerParams, cookie)
	token := getMagicToken(fromMetadata, toMetadata, headerParams, cookie)
	moovitRoutes := getSuggestedRoutes(fromMetadata, toMetadata, token, cookie)

	// execute
	trips := make([]trip.Trip, 0)
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
		trip.StartTime = timeIn(travels[0].start, "Europe/London")
		trip.EndTime = timeIn(travels[len(travels)-1].end, "Europe/London")
		trip.Duration = trip.EndTime.Sub(trip.StartTime)
		trip.VehicleType = "ATM"
		trip.ScrapedApp = "MOOVIT"
		trips = append(trips, trip)
	}

	return trips
}
