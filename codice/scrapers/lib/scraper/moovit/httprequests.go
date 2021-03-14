package moovit

import (
	"../../httpwrap"

	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
	"time"
)

func GetWebPage() error {
	urlMoovit := "https://moovitapp.com/index/it/mezzi_pubblici-Milano_e_Lombardia-223"

	header := newCommonHeader()
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	header.Add("Referer", "https://www.google.it/")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlMoovit, header, nil, nil)
	if err != nil {
		return err
	}
	defer response.Body.Close()
	return nil
}

func getLocationName(latitude, longitude string) (string, error) {
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
		return "", err
	}

	response, err := httpwrap.Post(urlMoovit, header, bytes.NewBuffer(requestJsonPayload), nil)
	if err != nil {
		return "", err
	}
	defer response.Body.Close()

	var result InlineSuggestionResult
	if err := json.NewDecoder(response.Body).Decode(&result); err != nil {
		return "", err
	}
	locationName := result[0].Title

	return locationName, nil
}

func getParamsNeededForHeader(fromName, toName string) (url.Values, error) {
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
		return nil, err
	}
	defer response.Body.Close()

	return params, nil
}

func getMagicCookie(refererHeaderParams url.Values) (*http.Cookie, error) {
	urlMoovit := "https://moovitapp.com/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499ec9bd71e4b42-8570-44e3-89b6-845326fa43b6"

	header := newCommonHeader()
	header.Add("Accept", "*/*")
	header.Add("Referer", "https://moovitapp.com/?" + refererHeaderParams.Encode()) // NB: NB precedente
	header.Add("Cookie", "cookieconsent_status=dismiss")
	header.Add("TE", "Trailers")

	response, err := httpwrap.Get(urlMoovit, header, nil, nil)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()

	var rbzidCookie *http.Cookie
	for _, cookie := range response.Cookies() {
		if cookie.Name == "rbzid" {
			rbzidCookie = cookie
			break
		}
	}

	return rbzidCookie, nil
}

func getMagicKey(refererHeaderParams url.Values, rbzidCookie *http.Cookie) (string, error) {
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
		return "", err
	}

	response, err := httpwrap.Post(urlMoovit, header, bytes.NewBuffer(requestJsonPayload), []*http.Cookie{rbzidCookie})
	if err != nil {
		return "", err
	}
	defer response.Body.Close()

	var key SomeKey
	if err := json.NewDecoder(response.Body).Decode(&key); err != nil {
		return "", err
	}

	return key.UserKey, nil
}

func getLocationInfo(locationName string, refererHeaderParams url.Values, rbzidCookie *http.Cookie) (LocationResult, error) {
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
		return LocationResult{}, fmt.Errorf("getlocationinfo: failed to get http response", err)
	}
	defer response.Body.Close() // response Body is gzipped!

	var location Location
	err = json.NewDecoder(response.Body).Decode(&location)
	if err != nil {
		return LocationResult{}, fmt.Errorf("getlocationinfo: failed to decode body", err)
	}

	return location.Results[0], nil
}

func getMagicToken(fromLocation, endLocation LocationResult, referHeaderParams url.Values, rbzidCookie *http.Cookie) (Token, error) {
	var token Token

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
		return Token{}, fmt.Errorf("getmagictoken: failed to get http resopnse", err)
	}
	defer response.Body.Close()

	if err := json.NewDecoder(response.Body).Decode(&token); err != nil {
		return Token{}, fmt.Errorf("getmagictoken: failed to decode body", err)
	}

	return token, nil
}

func getSuggestedRoutes(fromLocation, toLocation LocationResult, token Token, rbzidCookie *http.Cookie) (Result, error) {
	var tripPlans Result

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
	header.Add("MOOVIT_USER_KEY", "F27213")
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
		return tripPlans, err
	}
	defer response.Body.Close()

	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return tripPlans, err
	}
	json.Unmarshal(bodyBytes, &tripPlans)

	var moreTripPlans Result
	for offset := len(tripPlans.Results); moreTripPlans.Completed != true; offset += len(moreTripPlans.Results) {
		magicHeader := response.Header.Get("If-None-Match")
		header.Set("If-None-Match", magicHeader)
		params.Set("offset", strconv.Itoa(offset))

		response1, err := httpwrap.Get(urlMoovit, header, params, []*http.Cookie{rbzidCookie})
		if err != nil {
			return tripPlans, err
		}
		defer response1.Body.Close()

		bodyBytes, err = ioutil.ReadAll(response1.Body)
		if err != nil {
			return tripPlans, err
		}

		json.Unmarshal(bodyBytes, &moreTripPlans)

		for _, plan := range moreTripPlans.Results {
			tripPlans.Results = append(tripPlans.Results, plan)
		}
	}

	return tripPlans, nil
	// emp, _ := json.MarshalIndent(tripPlans, "", "  ")
	// fmt.Println(string(emp))
}
