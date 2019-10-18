// HTTP GET request to scrap moovit
package main

import (
	"../../src/httpwrap"
	"../../src/moovit"

	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

type Token struct {
	Token string
}

func main() {
	// First: get https homepage
	urlMoovit := "https://moovitapp.com/"

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}
	response.Body.Close()

	// Second: emulate script: get a magic cookie (rbzid)
	urlMoovitSecond := "https://moovitapp.com/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499ec9bd71e4b42-8570-44e3-89b6-845326fa43b6" // wtf?

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "*/*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Referer", "https://moovitapp.com/")
	header.Add("Cookie", "cookieconsent_status=dismiss")

	response, err = httpwrap.Get(urlMoovitSecond, header, url.Values{}, []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}

	// printParams(response)
	// printBody(response)
	var rbzidCookie *http.Cookie

	for _, cookie := range response.Cookies() {
		if cookie.Name == "rbzid" {
			rbzidCookie = cookie
			break
		}
	}

	response.Body.Close()

	// Third: get some keys
	urlMoovitThird := "https://moovitapp.com/api/user?customerId=4480&langId=41"

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("Content-Type", "application/json;charset=utf-8")
	header.Add("Content-Length", "2")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Referer", "https://moovitapp.com/")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	response, err = httpwrap.Get(urlMoovitThird, header, url.Values{}, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatal(err)
	}
	response.Body.Close()

	// Fourth: set start point (lat, lon)
	// Test: a partire da Via Orefici 21 (45.464720, 9.186787)
	urlMoovitFourth := "https://moovitapp.com/api/location?latitude=45464720&longitude=9186787&query=45.464720,+9.186787"

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("MOOVIT_USER_KEY", "F27213") // static
	header.Add("MOOVIT_METRO_ID", "223") // static
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Referer", "https://moovitapp.com/")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	response, err = httpwrap.Get(urlMoovitFourth, header, url.Values{}, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatal(err)
	}

	var startPointsResult moovit.JsonStartPoints
	if err := json.NewDecoder(response.Body).Decode(&startPointsResult); err != nil {
		log.Fatal(err)
	}
	response.Body.Close()

	json, err := json.MarshalIndent(startPointsResult, "", "  ")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(json))
}

func generateResponseParams(param url.Values) url.Values {
	params := url.Values{}
	for key, stringSlice := range param {
		for _, string := range stringSlice {
			params.Add(key, string)
		}
	}

	return params
}

func printParams(response *http.Response) {
	fmt.Println("***** HEADERS *****")
	for headerName, headerValue := range response.Header {
		fmt.Printf("%v: %v\n", headerName, headerValue)
	}
	fmt.Println()

	fmt.Println("***** PARAMS *****")
	for _, cookie := range response.Cookies() {
		fmt.Printf("%v: %v\n", cookie.Name, cookie.Value)
	}
	fmt.Println()
}

func printBody(response *http.Response) {
	fmt.Println("***** BODY *****")
	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
			log.Fatal(err)
	}
	fmt.Printf("%s\n", bodyBytes)
}
