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
		log.Fatalf("GetWebPage: ", err)
	}
	defer response.Body.Close()

	return response.Cookies()
}
