package moovit

import (
	"../../httpwrap"
	"../../geoloc"
	"../../trip"

	"bytes"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"strconv"
	"time"
)

func init() {
	getWebPage()
}

func GetTrips(from, to geoloc.Location) []trip.Trip {
	// fetch
	from.Name = getLocationName(from.Latitude, from.Longitude)
	to.Name = getLocationName(to.Latitude, to.Longitude)
	headerParams := getParamsNeededForHeader(from.Name, to.Name)
	cookie := getMagicCookie(headerParams)
	_ = getMagicKey(headerParams, cookie) // not needed (?)
	fromMetadata := getLocationInfo(from.Name, headerParams, cookie)
	toMetadata := getLocationInfo(to.Name, headerParams, cookie)
	token := getMagicToken(fromMetadata, toMetadata, headerParams, cookie)
	moovitRoutes := getSuggestedRoutes(fromMetadata, toMetadata, token, cookie)

	// execute
	trips := make([]trip.Trip, 0)
	for _, moovitResult := range moovitRoutes.Results[1:] { // Results[0] is metadata
		var trip trip.Trip
		travels := make([]travel, 0)
		for _, routeStep := range moovitResult.Result.Itinerary.Legs[:] {
			if timestamp := routeStep.WalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
				var travel travel
				travel.start = time.Unix(0, timestamp.StartTime * int64(time.Millisecond))
				travel.end = time.Unix(0, timestamp.EndTime * int64(time.Millisecond))
				travels = append(travels, travel)
			}
		}
		trip.StartTime = timeIn(travels[0].start, "Europe/London")
		trip.EndTime = timeIn(travels[len(travels)-1].end, "Europe/London")
		trip.Duration = trip.EndTime.Sub(trip.StartTime)
		trip.VehicleType = "ATM"
		trip.ScrapedApp = "MOOVIT"
		trips = append(trips, trip)
	}

	return trips
}

func getWebPage() {
	urlMoovit := "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223"

	header := newCommonHeader()
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Referer", "https://www.google.it/")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlMoovit, header, nil, nil)
	if err != nil {
		log.Fatalf("GetWebPage: ", err)
	}
	defer response.Body.Close()
}

func getLocationName(latitude, longitude string) string {
	urlMoovit := "https://moovitapp.com/index/api/location/search"

	header := newCommonHeader()
	header.Add("Accept", "*/*")
	header.Add("Content-Type", "application/json")
	header.Add("Content-Length", "93")
	header.Add("Referer", "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223")
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	requestPayload := InlineSuggestion{"F36562", latitude + ", " + longitude, 223, 45464720, 9186787}
	requestJsonPayload, err := json.Marshal(requestPayload)
	if err != nil {
		log.Fatalf("getLocationName: jsonMarshal: ", err)
	}

	response, err := httpwrap.Post(urlMoovit, header, bytes.NewBuffer(requestJsonPayload), nil)
	if err != nil {
		log.Fatalf("getLocationName: ", err)
	}
	defer response.Body.Close()

	var result InlineSuggestionResult
	if err := json.NewDecoder(response.Body).Decode(&result); err != nil {
		log.Fatalf("getLocationName: jsonUnmarshal", err)
	}
	locationName := result[0].Title

	return locationName
}

func getParamsNeededForHeader(fromName, toName string) url.Values {
	urlMoovit := "https://moovitapp.com/?"

	header := newCommonHeader()
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
	params.Add("from", fromName)
	params.Add("to", toName)
	params.Add("fll", "")
	params.Add("tll", "")

	response, err := httpwrap.Get(urlMoovit, header, params, nil)
	if err != nil {
		log.Fatalf("getParamsNeededForHeader: ", err)
	}
	defer response.Body.Close()

	return params
}

func getMagicCookie(refererHeaderParams url.Values) *http.Cookie {
	urlMoovit := "https://moovitapp.com/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499ec9bd71e4b42-8570-44e3-89b6-845326fa43b6"

	header := newCommonHeader()
	header.Add("Accept", "*/*")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode()) // NB: NB precedente
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	response, err := httpwrap.Get(urlMoovit, header, nil, nil)
	if err != nil {
		log.Fatalf("getMagicCookie: ", err)
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

func getMagicKey(refererHeaderParams url.Values, rbzidCookie *http.Cookie) string {
	urlMoovit := "https://moovitapp.com/api/user?customerId=4908&langId=77&metroId=223" // hardcoded

	header := newCommonHeader()
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
		log.Fatalf("getMagicKey: jsonMarshal: ", err)
	}

	response, err := httpwrap.Post(urlMoovit, header, bytes.NewBuffer(requestJsonPayload), []*http.Cookie{rbzidCookie})
	if err != nil {
		log.Fatalf("getMagicKey: ", err)
	}
	defer response.Body.Close()

	var key SomeKey
	if err := json.NewDecoder(response.Body).Decode(&key); err != nil {
		log.Fatalf("getMagicKey: jsonUnmarshal", err)
	}

	return key.UserKey
}

func getLocationInfo(locationName string, refererHeaderParams url.Values, rbzidCookie *http.Cookie) LocationResult {
	urlMoovit := "https://moovitapp.com/api/location?"

	params := url.Values{}
	params.Add("latitude", "45464720") // hard-coded
	params.Add("longitude", "9186787") // hard-coded
	params.Add("query", locationName)

	header := newCommonHeader()
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
		log.Fatalf("getLocationInfo: ", err)
	}
	defer response.Body.Close() // response Body is gzipped!

	var location Location
	err = json.NewDecoder(response.Body).Decode(&location)
	if err != nil {
		log.Fatalf("getLocationInfo: jsonUnmarshal", err)
	}

	return location.Results[0]
}

func getMagicToken(fromLocation, endLocation LocationResult, referHeaderParams url.Values, rbzidCookie *http.Cookie) Token {
	urlMoovit := "https://moovitapp.com/api/route/search?"

	timeNow := strconv.FormatInt(time.Now().UnixNano(), 10)
	timeNow = timeNow[0:len(timeNow)-6]

	params := url.Values{}
	params.Add("fromLocation_caption", fromLocation.Title)
	params.Add("fromLocation_id", strconv.Itoa(fromLocation.ID))
	params.Add("fromLocation_latitude", strconv.Itoa(fromLocation.LatLon.Latitude))
	params.Add("fromLocation_longitude", strconv.Itoa(fromLocation.LatLon.Longitude))
	params.Add("fromLocation_type", strconv.Itoa(fromLocation.Type))
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

	header := newCommonHeader()
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
		log.Fatalf("getMagicToken: ", err)
	}
	defer response.Body.Close()

	var token Token
	if err := json.NewDecoder(response.Body).Decode(&token); err != nil {
		log.Fatalf("getMagicToken: jsonUnmarshal: ", err)
	}

	return token
}

func getSuggestedRoutes(fromLocation, toLocation LocationResult, token Token, rbzidCookie *http.Cookie) Result {
	urlMoovit := "https://moovitapp.com/api/route/result?"

	fromLatitude := strconv.Itoa(fromLocation.LatLon.Latitude)
	fromLongitude := strconv.Itoa(fromLocation.LatLon.Longitude)
	fromLatitude = fromLatitude[0:2] + "." + fromLatitude[2:7]
	fromLongitude = fromLongitude[0:1] + "." + fromLongitude[1:6]

	toLatitude := strconv.Itoa(toLocation.LatLon.Latitude)
	toLongitude := strconv.Itoa(toLocation.LatLon.Longitude)
	toLatitude = toLatitude[0:2] + "." + toLatitude[2:7]
	toLongitude = toLongitude[0:1] + "." + toLongitude[1:6]

	headerParams := url.Values{}
	headerParams.Add("from", fromLocation.Title)
	headerParams.Add("to", toLocation.Title)
	headerParams.Add("fll", fromLatitude + "_" + fromLongitude)
	headerParams.Add("tll", toLatitude + "_" + toLongitude)
	headerParams.Add("customerId", "4908")
	headerParams.Add("ref", "5")
	headerParams.Add("poiType", "Index")
	headerParams.Add("metroId", "223")
	headerParams.Add("lang", "it")

	header := newCommonHeader()
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
		log.Fatalf("printTripPlans1: ", err)
	}
	defer response.Body.Close()

	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	var tripPlans Result
	json.Unmarshal(bodyBytes, &tripPlans)

	var moreTripPlans Result
	for offset := len(tripPlans.Results); moreTripPlans.Completed != true; offset += len(moreTripPlans.Results) {
		magicHeader := response.Header.Get("If-None-Match")
		header.Set("If-None-Match", magicHeader)
		params.Set("offset", strconv.Itoa(offset))

		response1, err := httpwrap.Get(urlMoovit, header, params, []*http.Cookie{rbzidCookie})
		if err != nil {
			log.Fatalf("printTripPlans1: morePlans: ", err)
		}
		defer response1.Body.Close()

		bodyBytes, err = ioutil.ReadAll(response1.Body)
		if err != nil {
			log.Fatal(err)
		}

		json.Unmarshal(bodyBytes, &moreTripPlans)

		for _, plan := range moreTripPlans.Results {
			tripPlans.Results = append(tripPlans.Results, plan)
		}
	}

	return tripPlans
	// emp, _ := json.MarshalIndent(tripPlans, "", "  ")
	// fmt.Println(string(emp))
}
