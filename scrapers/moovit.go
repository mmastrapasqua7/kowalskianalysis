package main

import (
	"../src/httpwrap"
	"../src/moovit"

	"bytes"
	"compress/gzip"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"strconv"
	"time"
)

func main() {
	//////////////////////////////
	// First: http get homepage //
	//////////////////////////////
	urlMoovit := "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223"

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://www.google.it/")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}
	response.Body.Close()
	/////////////////////////////////////////
	// Second: http post search startPoint //
	/////////////////////////////////////////
	urlMoovit = "https://moovitapp.com/index/api/location/search"

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "*/*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Content-Type", "application/json")
	header.Add("Content-Length", "93")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Referer", "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223")
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	jsonRequest := moovit.InlineSuggestion{"F36562", "45.455788, 9.210964", 223, 45464720, 9186787}

	params, err := json.Marshal(jsonRequest)
	if err != nil {
		log.Fatal(err)
	}
	// fmt.Println(bytes.NewBuffer(params).String())

	response, err = httpwrap.Post(urlMoovit, header, bytes.NewBuffer(params), []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}

	var startPointHint moovit.InlineSuggestionResult
	if err := json.NewDecoder(response.Body).Decode(&startPointHint); err != nil {
		log.Fatal(err)
	}

	_	, err = json.MarshalIndent(startPointHint, "", "  ")
	if err != nil {
		log.Fatal(err)
	}

	response.Body.Close()
	//////////////////////////////////////
	// Third: http post search endPoint //
	//////////////////////////////////////
	urlMoovit = "https://moovitapp.com/index/api/location/search"

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "*/*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Content-Type", "application/json")
	header.Add("Content-Length", "93")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Referer", "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223")
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	jsonRequest = moovit.InlineSuggestion{"F36562", "45.477728, 9.184571", 223, 45464720, 9186787}

	params, err = json.Marshal(jsonRequest)
	if err != nil {
		log.Fatal(err)
	}
	// fmt.Println(bytes.NewBuffer(params).String())

	response, err = httpwrap.Post(urlMoovit, header, bytes.NewBuffer(params), []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}

	var endPointHint moovit.InlineSuggestionResult
	if err := json.NewDecoder(response.Body).Decode(&endPointHint); err != nil {
		log.Fatal(err)
	}

	_, err = json.MarshalIndent(endPointHint, "", "  ")
	if err != nil {
		log.Fatal(err)
	}
	// fmt.Println(string(json))

	response.Body.Close()
	////////////////////////////////////////
	// Fourth: http get send something(?) //
	////////////////////////////////////////
	urlMoovit = "https://moovitapp.com/?"

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("Upgrade-Insecure-Requests", "1")

	// NB: Lasciando alla libreria di fare l'encoding dei parametri, l'ordine
	// viene rimescolato. Se moovit non dovesse rispondere correttamente, e'
	// probabile che per questioni di efficienza moovit faccia
	// un parsing in sequenza hard-coded
	params1 := url.Values{}
	params1.Add("metroId", "223")
	params1.Add("lang", "it")
	params1.Add("customerId", "4908")
	params1.Add("ref", "5")
	params1.Add("poiType", "index")
	params1.Add("from", "Via Cadore, 48")
	params1.Add("to", "Largo La Foppa")
	params1.Add("fll", "")
	params1.Add("tll", "")

	response, err = httpwrap.Get(urlMoovit, header, params1, []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}
	response.Body.Close()
	//////////////////////////////////////////
	// Fifth: http get magic cookie (rbzid) //
	//////////////////////////////////////////
	urlMoovit = "https://moovitapp.com/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499ec9bd71e4b42-8570-44e3-89b6-845326fa43b6"

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "*/*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + params1.Encode()) // NB: NB precedente
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	response, err = httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}

	var rbzidCookie *http.Cookie
	for _, cookie := range response.Cookies() {
		if cookie.Name == "rbzid" {
			rbzidCookie = cookie
			break
		}
	}

	fmt.Println(rbzidCookie.Name, rbzidCookie.Value)
	response.Body.Close()

	////////////////////////////////
	// Sixth: http post something //
	////////////////////////////////
	urlMoovit = "https://moovitapp.com/api/user?customerId=4908&langId=77&metroId=223" // hardcoded

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + params1.Encode())
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("Content-Type", "application/json;charset=utf-8")
	header.Add("Content-Length", "2")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	params2, err := json.Marshal(struct{}{})
	if err != nil {
		log.Fatal(err)
	}

	response, err = httpwrap.Post(urlMoovit, header, bytes.NewBuffer(params2), []*http.Cookie{})
	if err != nil {
		log.Fatal(err)
	}

	var someKey moovit.SomeKey
	if err := json.NewDecoder(response.Body).Decode(&someKey); err != nil {
		log.Fatal(err)
	}

	_, err = json.MarshalIndent(someKey, "", "  ")
	if err != nil {
		log.Fatal(err)
	}
	// fmt.Println(string(jsonSomeKey))
	response.Body.Close()
	/////////////////////////////////////////////
	// Seventh: http get token to read results //
	/////////////////////////////////////////////
	urlMoovit = "https://moovitapp.com/api/route/search?"

	timeNow := strconv.FormatInt(time.Now().UnixNano(), 10)
	timeNow = timeNow[0:len(timeNow)-6]

	params3 := url.Values{}
	params3.Add("fromLocation_caption", "Via Cadore 48")
	params3.Add("fromLocation_id", "7815168") // TODO: fetchare dato
	params3.Add("fromLocation_latitude", "45457800")
	params3.Add("fromLocation_longitude", "9212940")
	params3.Add("fromLocation_type", "3")
	params3.Add("isCurrentTime", "true")
	params3.Add("multiModal", "false")
	params3.Add("routeTypes", "3,2,1,0,7,6,4")
	params3.Add("time", timeNow) // "1571649590057")
	params3.Add("timeType", "2")
	params3.Add("toLocation_caption", "Largo La Foppa")
	params3.Add("toLocation_id", "7814269") // TODO: fetchare dato
	params3.Add("toLocation_latitude", "45478070")
	params3.Add("toLocation_longitude", "9184900")
	params3.Add("toLocation_type", "3")
	params3.Add("tripPlanPref", "2")

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + params1.Encode())
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	response, err = httpwrap.Get(urlMoovit, header, params3, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatal(err)
	}

	var token moovit.Token
	if err := json.NewDecoder(response.Body).Decode(&token); err != nil {
		log.Fatal(err)
	}
	// fmt.Println(token.Value)

	response.Body.Close()
	/////////////////////////////////////////////////
	// Eighth: http (try to) get trip plan results //
	/////////////////////////////////////////////////
	urlMoovit = "https://moovitapp.com/api/route/result?offset=0&token=" + token.Value

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?from=Via%20Cadore%2048&to=Largo%20La%20Foppa&fll=45.4578_9.21294&tll=45.47807_9.1849&customerId=4908&ref=5&poiType=Index&metroId=223&lang=it")
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	response, err = httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatal(err)
	}

	magicHeader := response.Header.Get("If-None-Match")
	printBody(response)
	response.Body.Close()
	time.Sleep(2)

	urlMoovit = "https://moovitapp.com/api/route/result?offset=0&token=" + token.Value

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?from=Via%20Cadore%2048&to=Largo%20La%20Foppa&fll=45.4578_9.21294&tll=45.47807_9.1849&customerId=4908&ref=5&poiType=Index&metroId=223&lang=it")
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("If-None-Match", magicHeader)
	header.Add("TE", "Trailers")

	response, err = httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatal(err)
	}

	printBody(response)
	response.Body.Close()
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

	var reader io.ReadCloser
	switch response.Header.Get("Content-Encoding") {
	case "gzip":
	    reader, _ = gzip.NewReader(response.Body)
	    defer reader.Close()
	default:
	    reader = response.Body
	}

	bodyBytes, err := ioutil.ReadAll(reader)
	if err != nil {
			log.Fatal(err)
	}
	fmt.Printf("%s\n\n", bodyBytes)
}
