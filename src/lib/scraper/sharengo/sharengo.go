package sharengo

import (
	"../../trip"
	"../openstreetmap"
	"../waze"

	"compress/gzip"
	"encoding/json"
	"fmt"
	"math"
	"io/ioutil"
	"log"
	"os"
	"strconv"
	"time"
)

func GetTrips(from, to trip.Location, dirName string) []trip.Trip {
	trips := make([]trip.Trip, 0)

	carPosition, err := findTheClosestCar(from, dirName)
	if err != nil {
		log.Println("sharengo: failed to fetch position of the closest car:", err)
		return trips
	}

	osmTrips := openstreetmap.GetTrips(from, carPosition)
	for i, osmTrip := range osmTrips {
		if osmTrip.Duration > (1 * time.Hour) {
			osmTrips[i].Duration = 23 * time.Hour
			osmTrips[i].TripTooLong = true
		}
	}

	wazeTrips := waze.GetTrips(carPosition, to)
	if len(wazeTrips) == 0 {
		log.Println("sharengo: waze trips are empty:", len(osmTrips), len(wazeTrips))
		trips = append(trips, Sum(osmTrips[1], trip.Trip{}))
		return trips
	}

	sharengoRoutes := Sum(osmTrips[1], wazeTrips[0])
	trips = append(trips, sharengoRoutes)
	return trips
}

func Sum(trip1, trip2 trip.Trip) trip.Trip {
	var trip trip.Trip

	trip.ServiceName = "SHARENGO"
	trip.ScrapedApp = trip1.ScrapedApp + " + " + trip2.ScrapedApp
	trip.VehicleType = trip1.VehicleType + " + " + "SHARED CAR/SCOOTER"
	trip.From = trip1.From
	trip.To = trip2.To
	trip.StartTime = trip1.StartTime
	trip.EndTime = trip2.EndTime
	trip.Duration = trip1.Duration + trip2.Duration
	trip.Distance = trip1.Distance + trip2.Distance
	trip.TripTooLong = trip1.TripTooLong || trip2.TripTooLong

	return trip
}

func findTheClosestCar(from trip.Location, dirName string) (trip.Location, error) {
	var closestCarPosition trip.Location
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return closestCarPosition, err
	}
	// sharengo_error.log is the last file,
	// I need the previous one with len()-2

	var latestJsonDumpFilename string
	if files[len(files) - 2].Size() > 1000 {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - 2].Name()
	} else {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - 3].Name()
	}

	file, err := os.Open(latestJsonDumpFilename)
	if err != nil {
		return closestCarPosition, err
	}
	defer file.Close()
	log.Println("sharengo: OPEN FILE", latestJsonDumpFilename)

	gzReader, err := gzip.NewReader(file)
	if err != nil {
		return closestCarPosition, err
	}
	defer gzReader.Close()

	latestJsonDump, err := ioutil.ReadAll(gzReader)
	if err != nil {
		return closestCarPosition, err
	}

	sharengoResult := Result{}
	err = json.Unmarshal([]byte(latestJsonDump), &sharengoResult)
	if err != nil {
		return closestCarPosition, err
	}

	fromLat, err := strconv.ParseFloat(from.Latitude, 64)
	if err != nil {
		return closestCarPosition, err
	}
	fromLon, err := strconv.ParseFloat(from.Longitude, 64)
	if err != nil {
		return closestCarPosition, err
	}

	carLat, err := strconv.ParseFloat(sharengoResult.Data.Data[0].Latitude, 64)
	if err != nil {
		return closestCarPosition, err
	}
	carLon, err := strconv.ParseFloat(sharengoResult.Data.Data[0].Longitude, 64)
	if err != nil {
		return closestCarPosition, err
	}

	closestCar := [2]float64{carLat, carLon}
	minimumDistance := distance(closestCar[0], closestCar[1], fromLat, fromLon)

	for _, result := range sharengoResult.Data.Data[1:] {
		lat, err := strconv.ParseFloat(result.Latitude, 64)
		if err != nil {
			return closestCarPosition, err
		}
		lon, err := strconv.ParseFloat(result.Longitude, 64)
		if err != nil {
			return closestCarPosition, err
		}

		distance := distance(lat, lon, fromLat, fromLon)
		if distance < minimumDistance {
			minimumDistance = distance
			closestCar[0] = lat
			closestCar[1] = lon
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
