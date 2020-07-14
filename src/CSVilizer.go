package main

import (
	"./lib/scraper"

	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"
	"strconv"
	"os"
)

func main() {
	files, _ := ioutil.ReadDir("./")
	jsonFiles := selectJsonFiles(files)

	printCSVHeader()
	for _, jf := range jsonFiles {
		CSVilize(jf)
	}
}

func CSVilize(jsonFile string) {
	results := parse(jsonFile)

	for i := 0; i < len(results.Results); i++ {
		r := results.Results[i]
		fmt.Printf("%s,%s,%s,%s,", r.FromLat, r.FromLon, r.ToLat, r.ToLon)

		fmt.Printf("%f,", r.DistanceInKm)

		fmt.Printf("%s,", r.BigResult.OpenStreetMapFootRoutes.Distance())

		fmt.Printf("%s,", Date(&results))

		fmt.Printf("%s,", r.BigResult.HerewegoRoutes.String())

		fmt.Printf("%s,", r.BigResult.OpenStreetMapBikeRoutes.String())

		fmt.Printf("%s,", r.BigResult.OpenStreetMapFootRoutes.String())

		fmt.Printf("%s,", r.BigResult.WazeRoutes.String())

		walkResult, _ := strconv.ParseFloat(r.BigResult.Car2GoRoutes.WalkResult.String(), 32)
		carResult, _ := strconv.ParseFloat(r.BigResult.Car2GoRoutes.CarResult.String(), 32)
		fmt.Printf("%.0f,", walkResult + carResult)

		walkResult, _ = strconv.ParseFloat(r.BigResult.EnjoyRoutes.WalkResult.String(), 32)
		carResult, _ = strconv.ParseFloat(r.BigResult.EnjoyRoutes.CarResult.String(), 32)
		fmt.Printf("%.0f,", walkResult + carResult)

		fmt.Printf("%d,", r.BigResult.Car2GoRoutes.FreeCars)
		fmt.Printf("%d\n", r.BigResult.EnjoyRoutes.FreeCars)
	}
}

func Date(rf *scraper.ResultFile) string {
	date := strings.Split(rf.Date, "-")
	result := fmt.Sprintf("%s,%s,%s", date[0], date[1], date[2][:2])

	date = strings.Split(date[2][3:], ":")
	result += "," + date[0] + "," + date[1] + "," + date[2]

	return result
}

func printCSVHeader() {
	fmt.Println("Lat,Lon,Elat,Elon,ADistance,FDistance,Year,Month,Day,Hour,Minute,Second,Public,Public2,Bike,Foot,Car,Car2Go,Enjoy,Car2GoFreeCars,EnjoyFreeCars")
}

func selectJsonFiles(files []os.FileInfo) []string {
	jsonFiles := make([]string, 0)
	for _, file := range files {
		if strings.Contains(file.Name(), ".json") {
			jsonFiles = append(jsonFiles, file.Name())
		}
	}
	return jsonFiles
}

func parse(jsonFile string) scraper.ResultFile {
	data, err := ioutil.ReadFile(jsonFile)
	if err != nil {
		fmt.Println("main: error while reading file", jsonFile, err)
	}

	var rf scraper.ResultFile
	if err := json.Unmarshal(data, &rf); err != nil {
		fmt.Println("main: error while unmarshaling json", jsonFile, err)
	}

	return rf
}
