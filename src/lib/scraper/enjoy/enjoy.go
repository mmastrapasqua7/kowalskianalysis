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

	closestCarPosition, err := findTheClosestCar(fromLat, fromLon, dirName + "/enjoy")
	if err != nil {
		log.Println("enjoy: failed to fetch position of the closest car:", err)
		return routes
	}

	osmRoutes := openstreetmap.GetFootRoutes(fromLat, fromLon, closestCarPosition[0], closestCarPosition[1])
	wazeRoutes := waze.GetRoutes(closestCarPosition[0], closestCarPosition[1], toLat, toLon)


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

	enjoyResult := JsonFile{}
	err = json.Unmarshal([]byte(latestJsonDump), &enjoyResult)
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
	carLatFloat := enjoyResult[0].Lat
	carLonFloat := enjoyResult[0].Lon

	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, carLatFloat, carLonFloat)
	closestCarPositionLatFloat := carLatFloat
	closestCarPositionLonFloat := carLonFloat

	for _, result := range enjoyResult[1:] {
		carLatFloatResult := result.Lat
		carLonFloatResult := result.Lon

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
