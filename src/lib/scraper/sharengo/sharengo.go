package sharengo

import (
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
)

func GetRoutes(fromLat, fromLon, toLat, toLon string, dirName string) Result {
	var routes Result

	carPosition, err := findTheClosestCar(fromLat, fromLon, dirName)
	if err != nil {
		log.Println("sharengo: failed to fetch position of the closest car:", err)
		return routes
	}

	osmRoutes := openstreetmap.GetFootRoutes(fromLat, fromLon, carPosition[0], carPosition[1])
	// if len(osmRoutes) == 0 {
	// 	log.Println("sharengo: osm trips are empty:", len(osmRoutes))
	// 	return routes
	// }

	wazeRoutes := waze.GetRoutes(carPosition[0], carPosition[1], toLat, toLon)
	// if len(wazeRoutes) == 0 {
	// 	log.Println("sharengo: waze trips are empty:", len(wazeTrips))
	// 	return routes
	// }

	routes.WalkResult = osmRoutes
	routes.CarResult = wazeRoutes
	return routes
}

func findTheClosestCar(fromLat, fromLon, dirName string) ([]string, error) {
	// Read dir, Open file, Attach reader, Read data
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return nil, err
	}

	var latestJsonDumpFilename string
	if files[len(files) - 2].Size() > 1000 {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - 2].Name()
	} else {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - 3].Name()
	}

	file, err := os.Open(latestJsonDumpFilename)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	log.Println("sharengo: OPEN FILE", latestJsonDumpFilename)

	gzReader, err := gzip.NewReader(file)
	if err != nil {
		return nil, err
	}
	defer gzReader.Close()

	latestJsonDump, err := ioutil.ReadAll(gzReader)
	if err != nil {
		return nil, err
	}

	sharengoResult := JsonFile{}
	err = json.Unmarshal([]byte(latestJsonDump), &sharengoResult)
	if err != nil {
		return nil, err
	}

	// Coordinate float64
	fromLatFloat, err := strconv.ParseFloat(fromLat, 64)
	if err != nil {
		return nil, err
	}
	fromLonFloat, err := strconv.ParseFloat(fromLon, 64)
	if err != nil {
		return nil, err
	}
	carLatFloat, err := strconv.ParseFloat(sharengoResult.Data.Data[0].Latitude, 64)
	if err != nil {
		return nil, err
	}
	carLonFloat, err := strconv.ParseFloat(sharengoResult.Data.Data[0].Longitude, 64)
	if err != nil {
		return nil, err
	}

	minimumDistance := distance(fromLatFloat, fromLonFloat, carLatFloat, carLonFloat)
	closestCarPositionLatFloat := carLatFloat
	closestCarPositionLonFloat := carLonFloat

	for _, result := range sharengoResult.Data.Data[1:] {
		carLatFloatResult, _ := strconv.ParseFloat(result.Latitude, 64)
		carLonFloatResult, _ := strconv.ParseFloat(result.Longitude, 64)

		distance := distance(fromLatFloat, fromLonFloat, carLatFloatResult, carLonFloatResult)
		if distance < minimumDistance {
			minimumDistance = distance
			closestCarPositionLatFloat = carLatFloatResult
			closestCarPositionLonFloat = carLonFloatResult
		}
	}

	return []string{fmt.Sprintf("%.06f", closestCarPositionLatFloat),
									fmt.Sprintf("%.06f", closestCarPositionLonFloat)}, nil
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
