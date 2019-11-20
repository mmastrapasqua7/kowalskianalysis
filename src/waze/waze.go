package waze

import (
	"../../src/httpwrap"

	"log"
	"net/http"
)

func GetWebPage() {
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
		log.Fatalf("GetWebPage: ", err)
	}
	response.Body.Close()
}

func GetCookies() []*http.Cookie {
	urlWaze := "https://www.waze.com/login/get"

	response, err := http.Get(urlWaze)
	if err != nil {
		log.Fatalf("GetCookies: ", err)
	}
	defer response.Body.Close()

	return response.Cookies()
}

func SetCookieConsent() {
	urlWaze := "https://www.waze.com/web_api/request_info?source=cookie_consent"

	response, err := http.Get(urlWaze)
	if err != nil {
		log.Fatalf("SetCookieConsent: ", err)
	}
	defer response.Body.Close()

	httpwrap.PrintBody(response)
}

func GetTripPlans(cookies []*http.Cookie) {
	urlWaze := "https://www.waze.com/row-RoutingManager/routingRequest?at=0&clientVersion=4.0.0&from=x%3A9.155227600000002%20y%3A45.46849100000001&nPaths=3&options=AVOID_TRAILS%3At%2CALLOW_UTURNS%3At&returnGeometries=true&returnInstructions=true&returnJSON=true&timeout=60000&to=x%3A9.2129635%20y%3A45.458389"

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

	response, err := httpwrap.Get(urlWaze, header, nil, cookies)
	if err != nil {
		log.Fatalf("GetTripPlans: ", err)
	}
	defer response.Body.Close()

	httpwrap.PrintBody(response)
}
