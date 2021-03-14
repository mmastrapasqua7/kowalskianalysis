// Package moovit fornisce una funzione GetRoutes che chiede al servizio Moovit
// il tragitto più veloce per andare da un punto A a un punto B usando i
// servizi di mezzi pubblici ATM e passanti Trenord. Le risposte sono date
// in tempo reale e tenendo conto di orari, scioperi e disservizi
package moovit

import (
	"fmt"
	"log"
	"time"
)

func init() {
	err := GetWebPage()
	if err != nil {
		log.Println("moovit: failed to get webpage:", err)
		fmt.Println("ERROR: look at the logfile for more details. Sleeping.")
		for {
			time.Sleep(24 * time.Hour)
		}
	}
}

func GetRoutes(fromLat, fromLon, toLat, toLon string) Result {
	var empty Result

	fromName, err := getLocationName(fromLat, fromLon)
	if err != nil {
		log.Println("moovit: failed to get location name:", err)
		return empty
	}

	toName, err := getLocationName(toLat, toLon)
	if err != nil {
		log.Println("moovit: failed to get location name:", err)
		return empty
	}

	headerParams, err := getParamsNeededForHeader(fromName, toName)
	if err != nil {
		log.Println("moovit: failed to get params for header:", err)
		return empty
	}

	cookie, err := getMagicCookie(headerParams)
	if err != nil {
		log.Println("moovit: failed to get magic cookie:", err)
		return empty
	}

	_, _ = getMagicKey(headerParams, cookie) // not needed (?)

	fromMetadata, err := getLocationInfo(fromName, headerParams, cookie)
	if err != nil {
		log.Println("moovit: failed to get location info:", err)
		return empty
	}

	toMetadata, err := getLocationInfo(toName, headerParams, cookie)
	if err != nil {
		log.Println("moovit: failed to get location info:", err)
		return empty
	}

	token, err := getMagicToken(fromMetadata, toMetadata, headerParams, cookie)
	if err != nil {
		log.Println("moovit: failed to get magic token:", err)
		return empty
	}

	routes, err := getSuggestedRoutes(fromMetadata, toMetadata, token, cookie)
	if err != nil {
		log.Println("moovit: failed to fetch routes:", err)
		return empty
	}

	return routes
}
