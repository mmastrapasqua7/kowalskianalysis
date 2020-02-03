package sharengo

import (
	"../openstreetmap"
	"../waze"
	"../../util"

	"compress/gzip"
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
	"strconv"
)

func GetRoutes(fromLat, fromLon, toLat, toLon string, dirName string) Result {
	var routes Result

	closestCar, err := findTheClosestCar(fromLat, fromLon, dirName + "/sharengo")
	if err != nil {
		log.Println("sharengo: failed to fetch position of the closest car:", err)
		return routes
	}

	osmRoutes := openstreetmap.GetFootRoutes(fromLat, fromLon, closestCar.Latitude, closestCar.Longitude)
	wazeRoutes := waze.GetRoutes(closestCar.Latitude, closestCar.Longitude, toLat, toLon)

	routes.ChosenCar = closestCar
	routes.WalkResult = osmRoutes
	routes.CarResult = wazeRoutes
	return routes
}

func findTheClosestCar(fromLat, fromLon, dirName string) (JsonEntry, error) {
	var closestCar JsonEntry
	// Read dir, Open file, Attach reader, Read data
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return closestCar, err
	}

	var latestJsonDumpFilename string
	if files[len(files) - 2].Size() > 1000 {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - 2].Name()
	} else {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - 3].Name()
	}

	file, err := os.Open(latestJsonDumpFilename)
	if err != nil {
		return closestCar, err
	}
	defer file.Close()

	gzReader, err := gzip.NewReader(file)
	if err != nil {
		return closestCar, err
	}
	defer gzReader.Close()

	latestJsonDump, err := ioutil.ReadAll(gzReader)
	if err != nil {
		return closestCar, err
	}

	sharengoResult := JsonFile{}
	err = json.Unmarshal([]byte(latestJsonDump), &sharengoResult)
	if err != nil {
		return closestCar, err
	}

	// Coordinate float64
	fromLatFloat, err := strconv.ParseFloat(fromLat, 64)
	fromLonFloat, err := strconv.ParseFloat(fromLon, 64)

	// lat, lon string
	closestCar = sharengoResult.Data.Data[0]
	closestCarLatFloat, _ := strconv.ParseFloat(closestCar.Latitude, 64)
	closestCarLonFloat, _ := strconv.ParseFloat(closestCar.Longitude, 64)
	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, closestCarLatFloat, closestCarLonFloat)

	for _, result := range sharengoResult.Data.Data[1:] {
		closestCarLatResult, _ := strconv.ParseFloat(result.Latitude, 64)
		closestCarLonResult, _ := strconv.ParseFloat(result.Longitude, 64)

		distance := util.Distance(fromLatFloat, fromLonFloat, closestCarLatResult, closestCarLonResult)
		if distance < minimumDistance {
			minimumDistance = distance
			closestCar = result
		}
	}

	return closestCar, nil
}
