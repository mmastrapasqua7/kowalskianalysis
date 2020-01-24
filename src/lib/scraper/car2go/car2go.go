package car2go

import (
	"../../trip"
	"../openstreetmap"
	"../waze"

	"encoding/json"
	"fmt"
	"math"
	"io/ioutil"
	"log"
	"time"
)

func GetTrips(from, to trip.Location, dirName string) []trip.Trip {
	trips := make([]trip.Trip, 0)

	carPosition, err := findTheClosestCar(from, dirName)
	if err != nil {
		log.Println("car2go: failed to fetch position of the closest car:", err)
		return trips
	}

	osmTrips := openstreetmap.GetTrips(from, carPosition)
	for i, osmTrip := range osmTrips {
		if osmTrip.Duration > (1 * time.Hour) {
			osmTrips[i].Duration = 23 * time.Hour
		}
	}

	wazeTrips := waze.GetTrips(carPosition, to)
	if len(wazeTrips) == 0 {
		log.Println("car2go: waze trips are empty:", len(osmTrips), len(wazeTrips))
		trips = append(trips, Sum(osmTrips[1], trip.Trip{}))
		return trips
	}

	// // RETRY
	// for i := 0; len(wazeTrips) == 0 && i < 100; i++ { // retry
	// 	lat, _ := strconv.ParseFloat(carPosition.Latitude, 64)
	// 	lon, _ := strconv.ParseFloat(carPosition.Longitude, 64)
	// 	lat += float64(i) * 10e-6
	// 	lon += float64(i) * 10e-6
	//
	// 	newCarPosition := trip.Location{fmt.Sprintf("%.06f", lat), fmt.Sprintf("%.06f"), "unknown"}
	// 	wazeTrips = waze.GetTrips(newCarPosition, to)
	// }

	car2goRoutes := Sum(osmTrips[1], wazeTrips[0])
	trips = append(trips, car2goRoutes)
	return trips
}

func Sum(trip1, trip2 trip.Trip) trip.Trip {
	var trip trip.Trip

	trip.From = trip1.From
	trip.To = trip2.To
	trip.StartTime = trip1.StartTime
	trip.EndTime = trip2.EndTime
	trip.Duration = trip1.Duration + trip2.Duration
	trip.Distance = trip1.Distance + trip2.Distance
	trip.VehicleType = trip1.VehicleType + " + " + "SHARED CAR"
	trip.ServiceName = "CAR2GO"
	trip.ScrapedApp = trip1.ScrapedApp + " + " + trip2.ScrapedApp

	return trip
}

func findTheClosestCar(from trip.Location, dirName string) (trip.Location, error) {
	var closestCarPosition trip.Location
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return closestCarPosition, err
	}
	// car2go_error.log is the last file,
	// I need the previous one with len()-2
	latestJsonDumpFilename := dirName + "/" + files[len(files) - 2].Name()

	latestJsonDump, err := ioutil.ReadFile(latestJsonDumpFilename)
	if err != nil {
		return closestCarPosition, err
	}
	car2goResult := Car2goResult{}
	err = json.Unmarshal([]byte(latestJsonDump), &car2goResult)
	if err != nil {
		return closestCarPosition, err
	}

	closestCar := [2]float64{car2goResult[0].Loc[1], car2goResult[0].Loc[0]} // lon lat
	minimumDistance := 100000000000.0
	for _, result := range car2goResult[1:] {
		// [lon, lat] inside json
		if len(result.Loc) > 0 {
			lat := result.Loc[1]
			lon := result.Loc[0]

			distance := distance(closestCar[0], closestCar[1], lat, lon)
			if distance < minimumDistance {
				minimumDistance = distance
				closestCar[0] = lat
				closestCar[1] = lon
			}
		}

	}

	closestCarPosition.Latitude = fmt.Sprintf("%.06f", closestCar[0])
	closestCarPosition.Longitude = fmt.Sprintf("%.06f", closestCar[1])
	return closestCarPosition, nil
}

func distance(lat1, lon1, lat2, lon2 float64) float64 {
	var la1, lo1, la2, lo2, earthRadius float64

	la1 = lat1 * math.Pi / 180
	lo1 = lon1 * math.Pi / 180
	la2 = lat2 * math.Pi / 180
	lo2 = lon2 * math.Pi / 180
	earthRadius = 6378100

	h := hsin(la2-la1) + math.Cos(la1) * math.Cos(la2) * hsin(lo2-lo1)
	return 2 * earthRadius * math.Asin(math.Sqrt(h))
}

func hsin(theta float64) float64 {
	return math.Pow(math.Sin(theta/2), 2)
}
