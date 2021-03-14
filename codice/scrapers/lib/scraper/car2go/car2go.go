// Package car2go fornisce una funzione GetRoutes che calcola il tragitto più
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

var carCounter = 0

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
		return closestCar, err
	}
	latestJsonDumpFilename := dirName + "/" + files[len(files) - 3].Name()

	for i := 3; (files[len(files) - i].Size() < 1000) && (i < len(files)-1); i++ {
		latestJsonDumpFilename = dirName + "/" + files[len(files) - (i+1)].Name()
	}

	latestJsonDump, err := ioutil.ReadFile(latestJsonDumpFilename)
	if err != nil {
		return closestCar, err
	}

	car2goResult := JsonFile{}
	err = json.Unmarshal(latestJsonDump, &car2goResult)
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

	carCounter = len(car2goResult)
	return closestCar, nil
}
