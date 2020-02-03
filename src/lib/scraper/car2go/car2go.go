package car2go

import (
	"../openstreetmap"
	"../waze"
	"../../util"

	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"strconv"
)

func GetRoutes(fromLat, fromLon, toLat, toLon string, dirName string) Result {
	var routes Result

	closestCar, err := findTheClosestCar(fromLat, fromLon, dirName + "/car2go")
	if err != nil {
		log.Println("car2go: failed to fetch position of the closest car:", err)
		return routes
	}
	carLat := fmt.Sprintf("%.06f", closestCar.Loc[1])
	carLon := fmt.Sprintf("%.06f", closestCar.Loc[0])

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

	latestJsonDump, err := ioutil.ReadFile(latestJsonDumpFilename)
	if err != nil {
		return closestCar, err
	}

	car2goResult := JsonFile{}
	err = json.Unmarshal([]byte(latestJsonDump), &car2goResult)
	if err != nil {
		return closestCar, err
	}

	// Coordinate float64
	fromLatFloat, _ := strconv.ParseFloat(fromLat, 64)
	fromLonFloat, _ := strconv.ParseFloat(fromLon, 64)

	// [lon, lat float64]
	closestCar = car2goResult[0]
	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, closestCar.Loc[1], closestCar.Loc[0])

	for _, result := range car2goResult[1:] {
		distance := util.Distance(fromLatFloat, fromLonFloat, result.Loc[1], result.Loc[0])
		if distance < minimumDistance {
			minimumDistance = distance
			closestCar = result
		}
	}

	return closestCar, nil
}
