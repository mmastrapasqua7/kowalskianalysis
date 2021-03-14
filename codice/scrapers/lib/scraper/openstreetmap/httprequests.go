package openstreetmap

import (
	"../../httpwrap"

	"encoding/json"
	"io/ioutil"
	"net/http"
)

func GetWebPage() error {
	urlWaze := "https://www.openstreetmap.org/"

	header := http.Header{}
	header.Add("Host", "www.openstreetmap.org")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0")
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlWaze, header, nil, nil)
	if err != nil {
		return err
	}
	response.Body.Close()
	return nil
}

func getSuggestedRoutes(fromLat, fromLon, toLat, toLon string, routeType string) (Result, error) {
	var tripPlans Result

	fromString := fromLon + "," + fromLat
	toString := toLon + "," + toLat
	urlWaze := "https://routing.openstreetmap.de/routed-" + routeType + "/route/v1/driving/" + fromString + ";" + toString +"?overview=false&geometries=polyline&steps=false"

	header := http.Header{}
	header.Add("Host", "routing.openstreetmap.de")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0")
	header.Add("Accept", "application/json, text/javascript, */*; q=0.01")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://www.openstreetmap.org/")
	header.Add("Origin", "https://www.openstreetmap.org")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")

	// NB: Queste due entry causano errore di protocollo,
	// da togliere in tutte le richieste

	response, err := httpwrap.Get(urlWaze, header, nil, nil)
	if err != nil {
		return tripPlans, err
	}
	defer response.Body.Close()

	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return tripPlans, err
	}
	json.Unmarshal(bodyBytes, &tripPlans)

	// emp, _ := json.MarshalIndent(tripPlans, "", "  ")
	// fmt.Println(string(emp))
	return tripPlans, nil
}
