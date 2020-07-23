package main

import (
	"fmt"
	"encoding/csv"
	"encoding/json"
	"io"
	"log"
	"os"
	"net/http"
)

func main() {
	csvFile, _ := os.Open(os.Args[1])
	r := csv.NewReader(csvFile)

	for {
		record, err := r.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatal(err)
		}

		for _, value := range record {
			fmt.Printf("%v,", value)
		}
		fmt.Printf("%.4f\n", GetCarRoute(record[0], record[1], record[2], record[3]))
	}
}

func GetCarRoute(lat, lon, elat, elon string) float64 {
	url := "https://routing.openstreetmap.de/routed-car/route/v1/driving/" +
		lon + "," + lat + ";" + elon + "," + elat + "?overview=false&steps=false"

	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	decoder := json.NewDecoder(resp.Body)
	var r Response

	err = decoder.Decode(&r)
	if err != nil {
		log.Fatal(err)
	}

	if len(r.Routes) == 0 {
		return 0.
	} else {
		return r.Routes[0].Distance / 1000.
	}
}

type Response struct {
	Code   string `json:"code"`
	Routes []struct {
		Distance float64 `json:"distance"`
		Duration float64 `json:"duration"`
		Legs     []struct {
			Distance float64       `json:"distance"`
			Duration float64       `json:"duration"`
			Steps    []interface{} `json:"steps"`
			Summary  string        `json:"summary"`
			Weight   float64       `json:"weight"`
		} `json:"legs"`
		Weight     float64 `json:"weight"`
		WeightName string  `json:"weight_name"`
	} `json:"routes"`
	Waypoints []struct {
		Hint     string    `json:"hint"`
		Location []float64 `json:"location"`
		Name     string    `json:"name"`
	} `json:"waypoints"`
}
