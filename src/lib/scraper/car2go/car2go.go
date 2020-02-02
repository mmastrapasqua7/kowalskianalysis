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

	carPosition, err := findTheClosestCar(fromLat, fromLon, dirName + "/car2go")
	if err != nil {
		log.Println("car2go: failed to fetch position of the closest car:", err)
		return routes
	}

	osmRoutes := openstreetmap.GetFootRoutes(fromLat, fromLon, carPosition[0], carPosition[1])
	wazeRoutes := waze.GetRoutes(carPosition[0], carPosition[1], toLat, toLon)

	routes.WalkResult = osmRoutes
	routes.CarResult = wazeRoutes
	return routes
}

func findTheClosestCar(fromLat, fromLon string, dirName string) ([]string, error) {
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return nil, err
	}
	latestJsonDumpFilename := dirName + "/" + files[len(files) - 2].Name()

	latestJsonDump, err := ioutil.ReadFile(latestJsonDumpFilename)
	if err != nil {
		return nil, err
	}

	car2goResult := JsonFile{}
	err = json.Unmarshal([]byte(latestJsonDump), &car2goResult)
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

	// [lon, lat]
	carLatFloat := car2goResult[0].Loc[1]
	carLonFloat := car2goResult[0].Loc[0]

	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, carLatFloat, carLonFloat)
	closestCarPositionLatFloat := carLatFloat
	closestCarPositionLonFloat := carLonFloat

	for _, result := range car2goResult[1:] {
		carLatFloatResult := result.Loc[1]
		carLonFloatResult := result.Loc[0]

		distance := util.Distance(fromLatFloat, fromLonFloat, carLatFloatResult, carLonFloatResult)
		if distance < minimumDistance {
			minimumDistance = distance
			closestCarPositionLatFloat = carLatFloatResult
			closestCarPositionLonFloat = carLonFloatResult
		}
	}

	return []string{fmt.Sprintf("%.06f", closestCarPositionLatFloat),
									fmt.Sprintf("%.06f", closestCarPositionLonFloat)}, nil
}
