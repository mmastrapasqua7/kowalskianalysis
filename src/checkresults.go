package main

import (
	"./lib/scraper"

	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"strings"
	"os"
	"os/exec"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("usage:\n\t checkresults [result_dir]")
		os.Exit(0)
	}
	resultDir := os.Args[1]

	files, err := ioutil.ReadDir(resultDir)
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

	oldDir := chdir(resultDir)
	defer chdir(oldDir)

	for _, resultFileName := range resultFileNames {
		extractXZFile(resultFileName)
		jsonFilename := strings.Split(resultFileName, ".")[0] + ".json"

		data, err := ioutil.ReadFile(jsonFilename)
		if err != nil {
			fmt.Println("main: error while reading file", jsonFilename, err)
			continue
		}

		var rf scraper.ResultFile
		if err := json.Unmarshal(data, &rf); err != nil {
			fmt.Println("main: error while unmarshaling json", jsonFilename, err)
			continue
		}

		fmt.Println("FILENAME:", jsonFilename)
		checkResults(rf)

		if err := os.Remove(jsonFilename); err != nil {
			fmt.Println("main: error while removing json file", jsonFilename, err)
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

func checkResults(rf scraper.ResultFile) {
	printRow()
	fmt.Println("# ID:", rf.Id)
	fmt.Println("# DATE:", rf.Date)

	data, _ := json.Marshal(rf.Results)
	dataChecksum := fmt.Sprintf("%x", sha256.Sum256(data))
	fileChecksum := rf.ResultsSha256Sum
	if dataChecksum == fileChecksum {
		fmt.Println("# CHECKSUM: OK")
	} else {
		fmt.Println("# CHECKSUM: FAILED!!!")
		fmt.Printf("# %x\n%x\n", dataChecksum, fileChecksum)
		printRow()
		fmt.Println()
		return
	}

	for _, result := range rf.Results {
		fmt.Println("# From:", result.FromLat + ", " + result.FromLon)
		fmt.Println("# To:  ", result.ToLat + ",", result.ToLon)
		fmt.Printf("# Distance: %.03f km\n\n", result.DistanceInKm)

		// fmt.Println(result.BigResult.MoovitRoutes.String()) // Rotto
		fmt.Println(result.BigResult.OpenStreetMapBikeRoutes.String())
		fmt.Println(result.BigResult.OpenStreetMapFootRoutes.String())
		fmt.Println(result.BigResult.WazeRoutes.String())
		fmt.Println(result.BigResult.Car2GoRoutes.WString())
		fmt.Println(result.BigResult.EnjoyRoutes.String())
		// fmt.Println(result.BigResult.SharengoRoutes.String()) // Rotto
	}
	printRow()
	fmt.Println()
}

func printRow() {
	fmt.Println("---------------------------------------------------------------")
}

func chdir(d string) string {
	currentDir, err := os.Getwd()
	if err != nil {
		log.Println("trip: can't get working directory:", err)
		os.Exit(-1)
	}

	if err := os.Chdir(d); err != nil {
		log.Println("trip: can't change working directory:", err)
		os.Exit(-1)
	}

	return currentDir
}
