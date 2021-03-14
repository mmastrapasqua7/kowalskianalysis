// Package sharengo fornisce una funzione GetRoutes che calcola il tragitto più
// veloce per andare da un punto A a un punto B usando il servizio car sharing
// di Car2go.
// Per calcolare la tratta, la funzione cerca la macchina C più vicina
// al punto di partenza A, chiede allo scraper di Openstreetmap di calcolare
// il tragitto a piedi dal punto di partenza A alla macchina C, e infine
// chiede a Waze di calcolare quanto impiegherebbe a percorrere la tratta
// da C al punto di arrivo B, in base ai dati in tempo reale del traffico
// e dei disservizi stradali.
// Matematicamente:
//   C = MacchinaPiùVicina
//   Percorso(A, B) = PercorsoAPiedi(A, C) + PercorsoInMacchina(C, B)
package sharengo

import (
	"../openstreetmap"
	"../waze"
	"../../util"

	"encoding/json"
	"io/ioutil"
	"log"
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
	routes.FreeCars = carCounter

	carCounter = 0
	
	return routes
}

// Questa funzione cerca la macchina più vicina da un punto di partenza A.
// Per farlo, cerca nella directory dirName il file json coi dati più recenti
// di tutte le macchine parcheggiate utilizzabili, lo apre, lo legge e
// uno per uno scorre tutti i risultati salvando man mano la macchina più vicina
// trovata con la funzione util.Distance
func findTheClosestCar(fromLat, fromLon, dirName string) (JsonEntry, error) {
	var closestCar JsonEntry
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return closestCar, err
	}
	latestJsonDumpFilename := dirName + "/" + files[len(files) - 3].Name()

	latestJsonDump, err := ioutil.ReadFile(latestJsonDumpFilename)
	if err != nil {
		return closestCar, err
	}

	sharengoResult := JsonFile{}
	err = json.Unmarshal(latestJsonDump, &sharengoResult)
	if err != nil {
		return closestCar, err
	}

	// Coordinate float64
	fromLatFloat, err := strconv.ParseFloat(fromLat, 64)
	fromLonFloat, err := strconv.ParseFloat(fromLon, 64)

	// lat, lon string
	closestCar = sharengoResult.Data[0]
	closestCarLatFloat, _ := strconv.ParseFloat(closestCar.Latitude, 64)
	closestCarLonFloat, _ := strconv.ParseFloat(closestCar.Longitude, 64)
	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, closestCarLatFloat, closestCarLonFloat)

	for _, result := range sharengoResult.Data[1:] {
		closestCarLatResult, _ := strconv.ParseFloat(result.Latitude, 64)
		closestCarLonResult, _ := strconv.ParseFloat(result.Longitude, 64)

		distance := util.Distance(fromLatFloat, fromLonFloat, closestCarLatResult, closestCarLonResult)
		if distance < minimumDistance {
			minimumDistance = distance
			closestCar = result
		}
	}

	carCounter = len(sharengoResult)
	return closestCar, nil
}
