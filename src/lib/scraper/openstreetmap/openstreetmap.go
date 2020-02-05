// Package openstreetmap fornisce una funzione GetRoutes che chiede al servizio
// Openstreetmap il tragitto più veloce per andare da un punto A a un punto B
// andando a piedi o in bicicletta
package openstreetmap

import (
	"fmt"
	"log"
	"time"
)

func init() {
	err := GetWebPage()
	if err != nil {
		log.Println("openstreetmap: failed to get webpage:", err)
		fmt.Println("ERROR: look at the logfile for more details. Sleeping.")
		for {
			time.Sleep(24 * time.Hour)
		}
	}
}

func GetBikeRoutes(fromLat, fromLon, toLat, toLon string) Result {
	var empty Result

	routes, err := getSuggestedRoutes(fromLat, fromLon, toLat, toLon, "bike")
	if err != nil {
		log.Println("openstreetmap: failed to fetch bike routes:", err)
		return empty
	}

	return routes
}

func GetFootRoutes(fromLat, fromLon, toLat, toLon string) Result {
	var empty Result

	routes, err := getSuggestedRoutes(fromLat, fromLon, toLat, toLon, "foot")
	if err != nil {
		log.Println("openstreetmap: failed to fetch foot routes:", err)
		return empty
	}

	return routes
}
