// HTTP GET request to scrap moovit
package main

import (
	"../../src/httpwrap"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"time"
)

type Token struct {
	Token string
}

type JsonResponse struct {
	Results []struct {
		Result struct {
			Itinerary struct {
				// GUID      string `json:"guid"`
				// SectionID int    `json:"sectionId"`
				// GroupType int    `json:"groupType"`
				// GroupKey  string `json:"groupKey"`
				Legs      []struct {
					WalkLeg struct {
						Time struct {
							StartTime       int64 `json:"startTime"`
							EndTime         int64 `json:"endTime"`
							IsRealTime      bool  `json:"isRealTime"`
							StaticStartTime int64 `json:"staticStartTime"`
							StaticEndTime   int64 `json:"staticEndTime"`
						} `json:"time"`
						Journey struct {
							Origin struct {
								// Caption string `json:"caption"`
								ID      int    `json:"id"`
								Latlon  struct {
									Latitude  int `json:"latitude"`
									Longitude int `json:"longitude"`
								} `json:"latlon"`
								Type             int         `json:"type"`
								// UID              interface{} `json:"uid"`
								// InaccurateLatLon interface{} `json:"inaccurateLatLon"`
								// Source           interface{} `json:"source"`
							} `json:"origin"`
							Dest struct {
								// Caption interface{} `json:"caption"`
								ID      int         `json:"id"`
								Latlon  struct {
									Latitude  int `json:"latitude"`
									Longitude int `json:"longitude"`
								} `json:"latlon"`
								Type             int         `json:"type"`
								// UID              interface{} `json:"uid"`
								// InaccurateLatLon interface{} `json:"inaccurateLatLon"`
								// Source           interface{} `json:"source"`
							} `json:"dest"`
						} `json:"journey"`
						Shape struct {
							DistanceInMeters float64 `json:"distanceInMeters"`
							// Polyline         string  `json:"polyline"`
						} `json:"shape"`
						WalkingInstructoins []struct {
							Direction struct {
								Relative int         `json:"relative"`
								Absolute interface{} `json:"absolute"`
							} `json:"direction"`
							StreetName string `json:"streetName"`
						} `json:"walkingInstructoins"`
					} `json:"walkLeg"`
					// WaitToLineLeg           interface{} `json:"waitToLineLeg"`
					// LineLeg                 interface{} `json:"lineLeg"`
					// WaitToTaxiLeg           interface{} `json:"waitToTaxiLeg"`
					// TaxiLeg                 interface{} `json:"taxiLeg"`
					// MultiLineLeg            interface{} `json:"multiLineLeg"`
					// CarpoolRideLeg          interface{} `json:"carpoolRideLeg"`
					// PathwayWalkLeg          interface{} `json:"pathwayWalkLeg"`
					// WaitToMultiLineLeg      interface{} `json:"waitToMultiLineLeg"`
					// LineWithAlternarivesLeg interface{} `json:"lineWithAlternarivesLeg"`
					// BicycleLeg              interface{} `json:"bicycleLeg"`
					// BicycleRentalLeg        interface{} `json:"bicycleRentalLeg"`
					// EventLeg                interface{} `json:"eventLeg"`
					// ParkingLeg              interface{} `json:"parkingLeg"`
				} `json:"legs"`
				HasPrev             bool        `json:"hasPrev"`
				HasNext             bool        `json:"hasNext"`
				RelevantForRealtime bool        `json:"relevantForRealtime"`
				IsAccessible        bool        `json:"isAccessible"`
				ItineraryFare       interface{} `json:"itineraryFare"`
			} `json:"itinerary"`
			// TripPlanSections  interface{} `json:"tripPlanSections"`
			// Advertisment      interface{} `json:"advertisment"`
			// SectionMatchCount interface{} `json:"sectionMatchCount"`
		} `json:"result"`
		// SupplementalData struct {
		// 	LineGroupSummaryList []struct {
		// 		GroupID     int    `json:"groupId"`
		// 		LineNumber  string `json:"lineNumber"`
		// 		AgencyID    int    `json:"agencyId"`
		// 		Color       int    `json:"color"`
		// 		ImageRefSet struct {
		// 			Images []struct {
		// 				Index    int `json:"index"`
		// 				ImageRef int `json:"imageRef"`
		// 			} `json:"images"`
		// 		} `json:"imageRefSet"`
		// 		LineSummaries []struct {
		// 			LineID        int         `json:"lineId"`
		// 			Origin        interface{} `json:"origin"`
		// 			Destination   string      `json:"destination"`
		// 			RouteLongName string      `json:"routeLongName"`
		// 			SubGroupID    int         `json:"subGroupId"`
		// 		} `json:"lineSummaries"`
		// 		InnerImageIds struct {
		// 			Images []struct {
		// 				Index int `json:"index"`
		// 				Image int `json:"image"`
		// 			} `json:"images"`
		// 		} `json:"innerImageIds"`
		// 		Caption1  string `json:"caption1"`
		// 		Caption2  string `json:"caption2"`
		// 		Type      int    `json:"type"`
		// 		SubGroups []struct {
		// 			SubGroupID int    `json:"subGroupId"`
		// 			Name       string `json:"name"`
		// 		} `json:"subGroups"`
		// 		PdfFileURL interface{} `json:"pdfFileUrl"`
		// 	} `json:"lineGroupSummaryList"`
		// 	MVStopSyncedMetaDataList []struct {
		// 		StopID       int    `json:"stopId"`
		// 		StopName     string `json:"stopName"`
		// 		StopLocation struct {
		// 			Latitude  int `json:"latitude"`
		// 			Longitude int `json:"longitude"`
		// 		} `json:"stopLocation"`
		// 		StopCode      string `json:"stopCode"`
		// 		Image         int    `json:"image"`
		// 		PlatformLines []struct {
		// 			Name    interface{} `json:"name"`
		// 			LineIds []int       `json:"lineIds"`
		// 		} `json:"platformLines"`
		// 		KeyLineIds  []interface{} `json:"keyLineIds"`
		// 		SitesList   []interface{} `json:"sitesList"`
		// 		ImageRefSet struct {
		// 			Images []struct {
		// 				Index    int `json:"index"`
		// 				ImageRef struct {
		// 					ImageID    int         `json:"imageId"`
		// 					Parameters interface{} `json:"parameters"`
		// 				} `json:"imageRef"`
		// 			} `json:"images"`
		// 		} `json:"imageRefSet"`
		// 		MvPathways           interface{} `json:"mvPathways"`
		// 		RouteType            int         `json:"routeType"`
		// 		WheelchairAccessible bool        `json:"wheelchairAccessible"`
		// 	} `json:"mVStopSyncedMetaDataList"`
		// } `json:"supplementalData"`
	} `json:"results"`
	Errors    interface{} `json:"errors"`
	Completed bool        `json:"completed"`
}

func main() {
	requestUrlAPI := "https://moovitapp.com/api/route/search?"
	header := generateRequestHeader()
	params := generateRequestParams()

	response := httpwrap.Get(requestUrlAPI, header, params)

	var token Token
	if err := json.NewDecoder(response.Body).Decode(&token); err != nil {
		log.Fatal(err)
	}
	response.Body.Close()

	// con offset=0 ottengo solo i metadati (come la prima riga di un file csv)
	responseUrlAPI := "https://moovitapp.com/api/route/result?offset=1&"
	header = generateResponseHeader()
	params = generateResponseParams(url.Values{"token": []string{token.Token}})

	response = httpwrap.Get(responseUrlAPI, header, params)

	var result JsonResponse
	if err := json.NewDecoder(response.Body).Decode(&result); err != nil {
		log.Fatal(err)
	}
	response.Body.Close()

	json, err := json.MarshalIndent(result, "", "  ")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(string(json))
}

func generateResponseHeader() http.Header {
	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("rbzid", "y9fwVNoAQIfpUjn4V4EOVHDJf1j/wMFIcpFnlA3jMK5ltUkP6yXSKC/bNJzsqo8Gru9QI6+IPzmryyos6H/6NOJi5TqIbBN+/OVVnDrYillIiH+Vb/lHkoKx1dlTKNPkyyoUvqgfCJ/JPX+cmXbgMSRQAFIH8IEREkLAUnlQe1Q=")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Referer", "https//moovitapp.com/?from=Viale%20Umbria&to=Corso%20Como&fll=45.45391_9.21526&tll=45.48238_9.18735&customerId=4908&ref=5&poiType=Index&metroId=223&lang=it")
	header.Add("Cookie", "cookieconsent_status=dismiss; rbzid=y9fwVNoAQIfpUjn4V4EOVHDJf1j/wMFIcpFnlA3jMK5ltUkP6yXSKC/bNJzsqo8Gru9QI6+IPzmryyos6H/6NOJi5TqIbBN+/OVVnDrYillIiH+Vb/lHkoKx1dlTKNPkyyoUvqgfCJ/JPX+cmXbgMSRQAFIH8IEREkLAUnlQe1Q=")
	header.Add("TE", "Trailers")

	return header
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

func generateRequestHeader() http.Header {
	header := http.Header{}
	header.Add("Referer", "https://moovitapp.com/?tll=45.483811_9.187194&metroId=223&lang=en") // da modificare
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("Cookie", "rbzid=y9fwVNoAQIfpUjn4V4EOVHDJf1j/wMFIcpFnlA3jMK5ltUkP6yXSKC/bNJzsqo8Gru9QI6+IPzmryyos6H/6NOJi5TqIbBN+/OVVnDrYillIiH+Vb/lHkoKx1dlTKNPkyyoUvqgfCJ/JPX+cmXbgMSRQAFIH8IEREkLAUnlQe1Q=")
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("TE", "Trailers")

	return header
}

func generateRequestParams() url.Values {
	params := url.Values{}
	// params.Add("fromLocation_caption", "Via Tagliamento")
	// params.Add("fromLocation_id", "7818045")
	params.Add("fromLocation_latitude", "45443730")
	params.Add("fromLocation_longitude", "9214030")
	params.Add("fromLocation_type", "3")
	params.Add("isCurrentTime", "true")
	params.Add("multiModal", "false")
	params.Add("routeTypes", "3,2,1,0,7,6,4")
	params.Add("time", string(time.Now().UnixNano()))
	params.Add("timeType", "2")
	// params.Add("toLocation_caption", "Garibaldi FS")
	// params.Add("toLocation_id", "10825992")
	params.Add("toLocation_latitude", "45483811")
	params.Add("toLocation_longitude", "9187194")
	params.Add("toLocation_type", "5")
	params.Add("tripPlanPref", "2")

	return params
}

func printParams(response http.Response) {
	for key, value := range response.Header {
		fmt.Printf("%v: %v\n", key, value)
	}

	for _, cookie := range response.Cookies() {
		fmt.Printf("%v: %v\n", cookie.Name, cookie.Value)
	}
}
