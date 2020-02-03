package enjoy

import (
	"../openstreetmap"
	"../waze"
	"../../util"

	"compress/gzip"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"strconv"
)

func GetRoutes(fromLat, fromLon, toLat, toLon string, dirName string) Result {
	var routes Result

	closestCar, err := findTheClosestCar(fromLat, fromLon, dirName + "/enjoy")
	if err != nil {
		log.Println("enjoy: failed to fetch position of the closest car:", err)
		return routes
	}
	carLat := fmt.Sprintf("%.06f", closestCar.Lat)
	carLon := fmt.Sprintf("%.06f", closestCar.Lon)

	osmRoutes := openstreetmap.GetFootRoutes(fromLat, fromLon, carLat, carLon)
	wazeRoutes := waze.GetRoutes(carLat, carLon, toLat, toLon)

	routes.ChosenCar = closestCar
	routes.WalkResult = osmRoutes
	routes.CarResult = wazeRoutes
	return routes
}

func findTheClosestCar(fromLat, fromLon string, dirName string) (JsonEntry, error) {
	var closestCar JsonEntry
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return closestCar, err
	}
	latestJsonDumpFilename := dirName + "/" + files[len(files) - 2].Name()

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

	enjoyResult := JsonFile{}
	err = json.Unmarshal([]byte(latestJsonDump), &enjoyResult)
	if err != nil {
		return closestCar, err
	}

	// Coordinate float64
	fromLatFloat, _ := strconv.ParseFloat(fromLat, 64)
	fromLonFloat, _ := strconv.ParseFloat(fromLon, 64)

	// lat, lon
	closestCar = enjoyResult[0]
	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, closestCar.Lat, closestCar.Lon)

	for _, result := range enjoyResult[1:] {
		distance := util.Distance(fromLatFloat, fromLonFloat, result.Lat, result.Lon)
		if distance < minimumDistance {
			minimumDistance = distance
			closestCar = result
		}
	}

	return closestCar, nil
}
