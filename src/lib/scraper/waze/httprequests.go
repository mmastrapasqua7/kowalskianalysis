package waze

import (
	"../../httpwrap"
	"../../trip"

	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

func getWebPage() {
	urlWaze := "https://www.waze.com/it/livemap"

	header := http.Header{}
	header.Add("Host", "www.waze.com")
	header.Add("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1")
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Connection", "keep-alive")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlWaze, header, nil, nil)
	if err != nil {
		log.Fatalf("getWebPage: ", err)
	}
	response.Body.Close()
}

func getCookies() []*http.Cookie {
	urlWaze := "https://www.waze.com/login/get"

	response, err := http.Get(urlWaze)
	if err != nil {
		log.Fatalf("getCookies: ", err)
	}
	defer response.Body.Close()

	return response.Cookies()
}

func setCookieConsent() {
	urlWaze := "https://www.waze.com/web_api/request_info?source=cookie_consent"

	response, err := http.Get(urlWaze)
	if err != nil {
		log.Fatalf("setCookieConsent: ", err)
	}
	defer response.Body.Close()
}

func getSuggestedRoutes(from, to trip.Location, cookies []*http.Cookie) Result {
	urlWaze := "https://www.waze.com/row-RoutingManager/routingRequest?"

	header := http.Header{}
	header.Add("Host", "www.waze.com")
	header.Add("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1")
	header.Add("Accept", "*/*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://www.waze.com/it/livemap")
	// header.Add("Connection", "keep-alive")
	// header.Add("TE", "Trailers")

	// NB: Queste due entry causano errore di protocollo,
	// da togliere in tutte le richieste

	params := url.Values{}
	params.Add("at", "0")
	params.Add("clientVersion", "4.0.0")
	params.Add("from", "x:" + from.Longitude + " y:" + from.Latitude) // invertiti
	params.Add("nPaths", "2")
	params.Add("options", "AVOID_TRAILS:t,ALLOW_UTURNS:t")
	params.Add("returnGeometries", "true")
	params.Add("returnInstructions", "true")
	params.Add("returnJSON", "true")
	params.Add("timeout", "60000")
	params.Add("to", "x:" + to.Longitude + " y:" + to.Latitude)

	response, err := httpwrap.Get(urlWaze, header, params, cookies)
	if err != nil {
		log.Fatalf("getSuggestedRoutes: ", err)
	}
	defer response.Body.Close()

	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	var tripPlans Result
	json.Unmarshal(bodyBytes, &tripPlans)

	// emp, _ := json.MarshalIndent(tripPlans, "", "  ")
	// fmt.Println(string(emp))
	return tripPlans
}
