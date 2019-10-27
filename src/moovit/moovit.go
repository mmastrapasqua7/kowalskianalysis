package moovit

import (
	"../../src/httpwrap"

	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"strconv"
	"time"
)

func GetWebPage() {
	urlMoovit := "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223"

	header := newCommonHeaders()
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Referer", "https://www.google.it/")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlMoovit, header, nil, nil)
	if err != nil {
		log.Fatalf("GetWebPage: ", err)
	}
	defer response.Body.Close()
}

func GetLocationName(latitude, longitude string) string {
	urlMoovit := "https://moovitapp.com/index/api/location/search"

	header := newCommonHeaders()
	header.Add("Accept", "*/*")
	header.Add("Content-Type", "application/json")
	header.Add("Content-Length", "93")
	header.Add("Referer", "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223")
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	requestPayload := InlineSuggestion{"F36562", latitude + ", " + longitude, 223, 45464720, 9186787}
	requestJsonPayload, err := json.Marshal(requestPayload)
	if err != nil {
		log.Fatalf("GetLocationName: jsonMarshal: ", err)
	}

	response, err := httpwrap.Post(urlMoovit, header, bytes.NewBuffer(requestJsonPayload), nil)
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

	header := newCommonHeaders()
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Referer", "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223")
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

	response, err := httpwrap.Get(urlMoovit, header, params, nil)
	if err != nil {
		log.Fatalf("GetParamsNeededForHeader: ", err)
	}
	defer response.Body.Close()

	return params
}

func GetMagicCookie(refererHeaderParams url.Values) *http.Cookie {
	urlMoovit := "https://moovitapp.com/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499ec9bd71e4b42-8570-44e3-89b6-845326fa43b6"

	header := newCommonHeaders()
	header.Add("Accept", "*/*")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode()) // NB: NB precedente
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	response, err := httpwrap.Get(urlMoovit, header, nil, nil)
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

	header := newCommonHeaders()
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode())
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("Content-Type", "application/json;charset=utf-8")
	header.Add("Content-Length", "2")
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

	header := newCommonHeaders()
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode())
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	response, err := httpwrap.Get(urlMoovit, header, params, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("GetLocationInfo: ", err)
	}
	defer response.Body.Close() // response Body is gzipped!

	var location Location
	err = json.NewDecoder(response.Body).Decode(&location)
	if err != nil {
		log.Fatalf("GetLocationInfo: jsonUnmarshal", err)
	}

	return location.Results[0]
}

func GetMagicToken(startLocation, endLocation LocationResult, referHeaderParams url.Values, rbzidCookie *http.Cookie) Token {
	urlMoovit := "https://moovitapp.com/api/route/search?"

	timeNow := strconv.FormatInt(time.Now().UnixNano(), 10)
	timeNow = timeNow[0:len(timeNow)-6]

	params := url.Values{}
	params.Add("fromLocation_caption", startLocation.Title)
	params.Add("fromLocation_id", strconv.Itoa(startLocation.ID))
	params.Add("fromLocation_latitude", strconv.Itoa(startLocation.LatLon.Latitude))
	params.Add("fromLocation_longitude", strconv.Itoa(startLocation.LatLon.Longitude))
	params.Add("fromLocation_type", strconv.Itoa(startLocation.Type))
	params.Add("isCurrentTime", "true")
	params.Add("multiModal", "false")
	params.Add("routeTypes", "3,2,1,0,7,6,4")
	params.Add("time", timeNow)
	params.Add("timeType", "2")
	params.Add("toLocation_caption", endLocation.Title)
	params.Add("toLocation_id", strconv.Itoa(endLocation.ID))
	params.Add("toLocation_latitude", strconv.Itoa(endLocation.LatLon.Latitude))
	params.Add("toLocation_longitude", strconv.Itoa(endLocation.LatLon.Longitude))
	params.Add("toLocation_type", strconv.Itoa(endLocation.Type))
	params.Add("tripPlanPref", "2")

	header := newCommonHeaders()
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Referer", "https://moovitapp.com/?" + referHeaderParams.Encode())
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
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
	urlMoovit := "https://moovitapp.com/api/route/result?"

	startLatitude := strconv.Itoa(startLocation.LatLon.Latitude)
	startLongitude := strconv.Itoa(startLocation.LatLon.Longitude)
	startLatitude = startLatitude[0:2] + "." + startLatitude[2:7]
	startLongitude = startLongitude[0:1] + "." + startLongitude[1:6]

	endLatitude := strconv.Itoa(endLocation.LatLon.Latitude)
	endLongitude := strconv.Itoa(endLocation.LatLon.Longitude)
	endLatitude = endLatitude[0:2] + "." + endLatitude[2:7]
	endLongitude = endLongitude[0:1] + "." + endLongitude[1:6]

	headerParams := url.Values{}
	headerParams.Add("from", startLocation.Title)
	headerParams.Add("to", endLocation.Title)
	headerParams.Add("fll", startLatitude + "_" + startLongitude)
	headerParams.Add("tll", endLatitude + "_" + endLongitude)
	headerParams.Add("customerId", "4908")
	headerParams.Add("ref", "5")
	headerParams.Add("poiType", "Index")
	headerParams.Add("metroId", "223")
	headerParams.Add("lang", "it")

	header := newCommonHeaders()
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Referer", "https://moovitapp.com/?" + headerParams.Encode())
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", rbzidCookie.Value)
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=" + rbzidCookie.Value)
	header.Add("TE", "Trailers")

	params := url.Values{}
	params.Add("offset", "0")
	params.Add("token", token.Value)

	response, err := httpwrap.Get(urlMoovit, header, params, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("PrintTripPlans1: ", err)
	}
	defer response.Body.Close()

	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	var tripPlans TripResult
	json.Unmarshal(bodyBytes, &tripPlans)

	magicHeader := response.Header.Get("If-None-Match")
	header.Add("If-None-Match", magicHeader)
	params.Set("offset", strconv.Itoa(len(tripPlans.Results)))

	response, err = httpwrap.Get(urlMoovit, header, params, []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("PrintTripPlans1: morePlans: ", err)
	}
	defer response.Body.Close()

	bodyBytes, err = ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	var moreTripPlans TripResult
	json.Unmarshal(bodyBytes, &moreTripPlans)

	for _, result := range moreTripPlans.Results {
		tripPlans.Results = append(tripPlans.Results, result)
	}

	emp, _ := json.MarshalIndent(tripPlans, "", "  ")
	fmt.Println(string(emp))
}
