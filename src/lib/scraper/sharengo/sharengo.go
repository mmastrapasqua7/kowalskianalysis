package sharengo

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

	carPosition, err := findTheClosestCar(fromLat, fromLon, dirName + "/sharengo")
	if err != nil {
		log.Println("sharengo: failed to fetch position of the closest car:", err)
		return routes
	}

	osmRoutes := openstreetmap.GetFootRoutes(fromLat, fromLon, carPosition[0], carPosition[1])
	wazeRoutes := waze.GetRoutes(carPosition[0], carPosition[1], toLat, toLon)

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

	// lat, lon
	carLatFloat, err := strconv.ParseFloat(sharengoResult.Data.Data[0].Latitude, 64)
	if err != nil {
		return nil, err
	}
	carLonFloat, err := strconv.ParseFloat(sharengoResult.Data.Data[0].Longitude, 64)
	if err != nil {
		return nil, err
	}

	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, carLatFloat, carLonFloat)
	closestCarPositionLatFloat := carLatFloat
	closestCarPositionLonFloat := carLonFloat

	for _, result := range sharengoResult.Data.Data[1:] {
		carLatFloatResult, _ := strconv.ParseFloat(result.Latitude, 64)
		carLonFloatResult, _ := strconv.ParseFloat(result.Longitude, 64)

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
