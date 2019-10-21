package moovit

import (
	"../../src/httpwrap"

	"bytes"
	"compress/gzip"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strconv"
	// "strings"
	"time"
)

func GetWebPage() {
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
		log.Fatalf("GetWebPage: ", err)
	}
	defer response.Body.Close()
}

func GetLocationName(latitude, longitude string) string {
	urlMoovit := "https://moovitapp.com/index/api/location/search"

	header := http.Header{}
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

	requestPayload := InlineSuggestion{"F36562", latitude + ", " + longitude, 223, 45464720, 9186787}
	requestJsonPayload, err := json.Marshal(requestPayload)
	if err != nil {
		log.Fatalf("GetLocationName: jsonMarshal: ", err)
	}

	response, err := httpwrap.Post(urlMoovit, header, bytes.NewBuffer(requestJsonPayload), []*http.Cookie{})
	if err != nil {
		log.Fatalf("GetLocationName: ", err)
	}
	defer response.Body.Close()

	var result InlineSuggestionResult
	if err := json.NewDecoder(response.Body).Decode(&result); err != nil {
		log.Fatalf("GetLocationName: jsonUnmarshal", err)
	}
	locationName := result[0].Title

	return locationName
}

func GetParamsNeededForHeader(startPointName, endPointName string) url.Values {
	urlMoovit := "https://moovitapp.com/?"

	header := http.Header{}
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

	params := url.Values{}
	params.Add("metroId", "223")
	params.Add("lang", "it")
	params.Add("customerId", "4908")
	params.Add("ref", "5")
	params.Add("poiType", "index")
	params.Add("from", startPointName)
	params.Add("to", endPointName)
	params.Add("fll", "")
	params.Add("tll", "")

	response, err := httpwrap.Get(urlMoovit, header, params, []*http.Cookie{})
	if err != nil {
		log.Fatalf("GetParamsNeededForHeader: ", err)
	}
	defer response.Body.Close()

	return params
}

func GetMagicCookie(refererHeaderParams url.Values) *http.Cookie {
	urlMoovit := "https://moovitapp.com/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499ec9bd71e4b42-8570-44e3-89b6-845326fa43b6"

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "*/*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode()) // NB: NB precedente
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	response, err := httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{})
	if err != nil {
		log.Fatalf("GetMagicCookie: ", err)
	}
	defer response.Body.Close()

	var rbzidCookie *http.Cookie
	for _, cookie := range response.Cookies() {
		if cookie.Name == "rbzid" {
			rbzidCookie = cookie
			break
		}
	}

	return rbzidCookie
}

func GetMagicKey(refererHeaderParams url.Values, rbzidCookie *http.Cookie) string {
	urlMoovit := "https://moovitapp.com/api/user?customerId=4908&langId=77&metroId=223" // hardcoded

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode())
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("Content-Type", "application/json;charset=utf-8")
	header.Add("Content-Length", "2")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	requestJsonPayload, err := json.Marshal(struct{}{}) // empty
	if err != nil {
		log.Fatalf("GetMagicKey: jsonMarshal: ", err)
	}

	response, err := httpwrap.Post(urlMoovit, header, bytes.NewBuffer(requestJsonPayload), []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("GetMagicKey: ", err)
	}
	defer response.Body.Close()

	var key SomeKey
	if err := json.NewDecoder(response.Body).Decode(&key); err != nil {
		log.Fatalf("GetMagicKey: jsonUnmarshal", err)
	}

	return key.UserKey
}

func GetLocationInfo(locationName string, refererHeaderParams url.Values, rbzidCookie *http.Cookie) LocationResult {
	urlMoovit := "https://moovitapp.com/api/location?"

	params := url.Values{}
	params.Add("latitude", "45464720") // hard-coded
	params.Add("longitude", "9186787") // hard-coded
	params.Add("query", locationName)

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode())
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	response, err := httpwrap.Get(urlMoovit, header, params, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("GetLocationInfo: ", err)
	}
	defer response.Body.Close() // response Body is gzipped!

	reader, err := gzip.NewReader(response.Body)
	if err != nil {
		log.Fatalf("GetLocationInfo: unzip: ", err)
	}

	var location LocationResult
	err = json.NewDecoder(reader).Decode(&location)
	if err != nil {
		log.Fatalf("GetLocationInfo: jsonUnmarshal", err)
	}

	return location
}

func GetMagicToken(startLocation, endLocation LocationResult, referHeaderParams url.Values, rbzidCookie *http.Cookie) Token {
	urlMoovit := "https://moovitapp.com/api/route/search?"

	timeNow := strconv.FormatInt(time.Now().UnixNano(), 10)
	timeNow = timeNow[0:len(timeNow)-6]

	params := url.Values{}
	params.Add("fromLocation_caption", startLocation.Results[0].Title)
	params.Add("fromLocation_id", string(startLocation.Results[0].ID))
	params.Add("fromLocation_latitude", string(startLocation.Results[0].LatLon.Latitude))
	params.Add("fromLocation_longitude", string(startLocation.Results[0].LatLon.Longitude))
	params.Add("fromLocation_type", string(startLocation.Results[0].Type))
	params.Add("isCurrentTime", "true")
	params.Add("multiModal", "false")
	params.Add("routeTypes", "3,2,1,0,7,6,4")
	params.Add("time", timeNow)
	params.Add("timeType", "2")
	params.Add("toLocation_caption", endLocation.Results[0].Title)
	params.Add("toLocation_id", string(endLocation.Results[0].ID))
	params.Add("toLocation_latitude", string(endLocation.Results[0].LatLon.Latitude))
	params.Add("toLocation_longitude", string(endLocation.Results[0].LatLon.Longitude))
	params.Add("toLocation_type", string(endLocation.Results[0].Type))
	params.Add("tripPlanPref", "2")

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + referHeaderParams.Encode())
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	response, err := httpwrap.Get(urlMoovit, header, params, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("GetMagicToken: ", err)
	}
	defer response.Body.Close()

	var token Token
	if err := json.NewDecoder(response.Body).Decode(&token); err != nil {
		log.Fatalf("GetMagicToken: jsonUnmarshal: ", err)
	}

	return token
}

func PrintTripPlans(startLocation, endLocation LocationResult, token Token, rbzidCookie *http.Cookie) {
	urlMoovit := "https://moovitapp.com/api/route/result?offset=0&token=" + token.Value

	// TODO
	startLatitude := strconv.Itoa(startLocation.Results[0].LatLon.Latitude)
	startLongitude := strconv.Itoa(startLocation.Results[0].LatLon.Longitude)
	startLatitude = startLatitude[0:2] + "." + startLatitude[2:6]
	startLongitude = startLongitude[0:1] + "." + startLongitude[1:5]

	endLatitude := strconv.Itoa(endLocation.Results[0].LatLon.Latitude)
	endLongitude := strconv.Itoa(endLocation.Results[0].LatLon.Longitude)
	endLatitude = endLatitude[0:2] + "." + endLatitude[2:6]
	endLongitude = endLongitude[0:1] + "." + endLongitude[1:5]
	fmt.Println(startLatitude, startLongitude, endLatitude, endLongitude)

	headerParams := url.Values{}
	headerParams.Add("from", startLocation.Results[0].Title)
	headerParams.Add("to", endLocation.Results[0].Title)
	headerParams.Add("fll", startLatitude + "_" + startLongitude)
	headerParams.Add("tll", endLatitude + "_" + endLongitude)
	headerParams.Add("customerId", "4908")
	headerParams.Add("ref", "5")
	headerParams.Add("poiType", "Index")
	headerParams.Add("metroId", "223")
	headerParams.Add("lang", "it")

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + headerParams.Encode())
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	time.Sleep(2) // let moovit compute routes
	response, err := httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("PrintTripPlans1: ", err)
	}

	magicHeader := response.Header.Get("If-None-Match")
	httpwrap.PrintBody(response)
	response.Body.Close()

	urlMoovit = "https://moovitapp.com/api/route/result?offset=0&token=" + token.Value

	header = http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?" + headerParams.Encode())
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

	time.Sleep(2) // let moovit compute routes
	response, err = httpwrap.Get(urlMoovit, header, url.Values{}, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("PrintTripPlans2: ", err)
	}
	defer response.Body.Close()

	httpwrap.PrintBody(response)
}