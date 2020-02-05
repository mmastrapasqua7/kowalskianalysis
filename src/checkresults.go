package main

import (
	"./lib/trip"

	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"
	"os"
	"os/exec"
)

func main() {
	// var rf trip.ResultFile
	files, err := ioutil.ReadDir(".")
	if err != nil {
		fmt.Println("main: error while reading directory:", err)
		os.Exit(1)
	}

	resultFileNames := make([]string, 0)
	for _, file := range files {
		if strings.Contains(file.Name(), ".json") {
			resultFileNames = append(resultFileNames, file.Name())
		}
	}

	for _, resultFileName := range resultFileNames {
		extractXZFile(resultFileName)
		jsonFilename := strings.Split(resultFileName, ".")[0] + ".json"

		data, err := ioutil.ReadFile(jsonFilename)
		if err != nil {
			fmt.Println("main: error while reading file" + jsonFilename, err)
			continue
		}

		var rf trip.ResultFile
		if err := json.Unmarshal(data, &rf); err != nil {
			fmt.Println("main: error while unmarshaling json" + jsonFilename, err)
			continue
		}

		fmt.Println("FILENAME:", jsonFilename)
		checkResults(rf)

		if err := os.Remove(jsonFilename); err != nil {
			fmt.Println("main: error while removing json file " + jsonFilename, err)
			continue
		}
	}
}

func extractXZFile(filename string) error {
	cmd := exec.Command("tar", "-xJf", filename)
	if err := cmd.Start(); err != nil {
		return err
	}
	if err := cmd.Wait(); err != nil {
		return err
	}
	return nil
}

func checkResults(rf trip.ResultFile) {
	printRow()
	fmt.Println("ID:", rf.Id)
	fmt.Println("DATE:", rf.Date)

	data, _ := json.Marshal(rf.Results)
	dataChecksum := fmt.Sprintf("%x", sha256.Sum256(data))
	fileChecksum := rf.ResultsSha256Sum
	if dataChecksum == fileChecksum {
		fmt.Println("CHECKSUM: OK")
	} else {
		fmt.Println("CHECKSUM: FAILED!!!")
		fmt.Printf("%x\n%x\n", dataChecksum, fileChecksum)
		printRow()
		fmt.Println()
		return
	}

	for _, result := range rf.Results {
		fmt.Println("From: " + result.FromLat + ", " + result.FromLon)
		fmt.Println("To:   " + result.ToLat + ", " + result.ToLon)

		result.BigResult.MoovitRoutes.Print()
		fmt.Println()
		result.BigResult.OpenStreetMapBikeRoutes.Print()
		fmt.Println()
		result.BigResult.OpenStreetMapFootRoutes.Print()
		fmt.Println()
		result.BigResult.WazeRoutes.Print()
		fmt.Println()
		result.BigResult.Car2GoRoutes.Print()
		fmt.Println()
		result.BigResult.EnjoyRoutes.Print()
		fmt.Println()
		result.BigResult.SharengoRoutes.Print()
	}
	printRow()
	fmt.Println()
}

func printRow() {
	fmt.Println("---------------------------------------------------------------")
}
