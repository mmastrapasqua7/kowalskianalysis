package waze

import (
	"fmt"
	"log"
	"time"
)

func init() {
	err := getWebPage()
	if err != nil {
		log.Println("waze: failed to get webpage:", err)
		fmt.Println("ERROR: look at the logfile for more details. Sleeping.")
		for {
			time.Sleep(24 * time.Hour)
		}
	}
}

func GetRoutes(fromLat, fromLon, toLat, toLon string) Result {
	var empty Result

	cookies, err := getCookies()
	if err != nil {
		log.Println("waze: failed to get cookies:", err)
		return empty
	}

	err = setCookieConsent()
	if err != nil {
		log.Println("waze: failed to set cookie consent", err)
		return empty
	}

	routes, err := getSuggestedRoutes(fromLat, fromLon, toLat, toLon, cookies)
	if err != nil {
		log.Println("waze: failed to fetch routes:", err)
		return empty
	}

	if len(routes.Alternatives) == 0 {
		log.Println("waze: no routes found")
		return empty
	}

	return routes
}
