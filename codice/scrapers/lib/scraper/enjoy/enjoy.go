// Package enjoy fornisce una funzione GetRoutes che calcola il tragitto più
// veloce per andare da un punto A a un punto B usando il servizio car sharing
// di Enjoy.
// Per calcolare la tratta, la funzione cerca la macchina C più vicina
// al punto di partenza A, chiede allo scraper di Openstreetmap di calcolare
// il tragitto a piedi dal punto di partenza A alla macchina C, e infine
// chiede a Waze di calcolare quanto impiegherebbe a percorrere la tratta
// da C al punto di arrivo B, in base ai dati in tempo reale del traffico
// e dei disservizi stradali.
// Matematicamente:
//   C = MacchinaPiùVicina
//   Percorso(A, B) = PercorsoAPiedi(A, C) + PercorsoInMacchina(C, B)
package enjoy

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

var carCounter = 0

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
	routes.FreeCars = carCounter

	carCounter = 0
	
	return routes
}

// Questa funzione cerca la macchina più vicina da un punto di partenza A.
// Per farlo, cerca nella directory dirName il file json coi dati più recenti
// di tutte le macchine parcheggiate utilizzabili, lo apre, lo legge e
// uno per uno scorre tutti i risultati salvando man mano la macchina più vicina
// trovata con la funzione util.Distance
func findTheClosestCar(fromLat, fromLon string, dirName string) (JsonEntry, error) {
	var closestCar JsonEntry
	files, err := ioutil.ReadDir(dirName)
	if err != nil {
		return closestCar, fmt.Errorf("findtheclosestcar: failed to read directory " + dirName, err)
	}
	latestJsonDumpFilename := dirName + "/" + files[len(files) - 3].Name()

	for i := 3; (files[len(files) - i].Size() < 1000) && (i < len(files)-1); i++ {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - (i+1)].Name()
	}

	latestJsonDump, err := ioutil.ReadFile(latestJsonDumpFilename)
	if err != nil {
		return closestCar, fmt.Errorf("findtheclosestcar: failed to read the file " + latestJsonDumpFilename, err)
	}

	enjoyResult := JsonFile{}
	err = json.Unmarshal(latestJsonDump, &enjoyResult)
	if err != nil {
		return closestCar, fmt.Errorf("findtheclosestcar: failed to unmarshal file " + latestJsonDumpFilename, err)
	}

	// Coordinate float64
	fromLatFloat, _ := strconv.ParseFloat(fromLat, 64)
	fromLonFloat, _ := strconv.ParseFloat(fromLon, 64)

	// lat, lon
	if len(enjoyResult) == 0 {
		return closestCar, fmt.Errorf("no cars found")
	}

	closestCar = enjoyResult[0]
	minimumDistance := util.Distance(fromLatFloat, fromLonFloat, closestCar.Lat, closestCar.Lon)

	for _, result := range enjoyResult[1:] {
		distance := util.Distance(fromLatFloat, fromLonFloat, result.Lat, result.Lon)
		if distance < minimumDistance {
			minimumDistance = distance
			closestCar = result
		}
	}

	carCounter = len(enjoyResult)
	return closestCar, nil
}
