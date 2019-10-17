// HTTP GET request to scrap moovit
package main

import (
	"../../src/httpwrap"
	// "encoding/json"
	"io/ioutil"
	"fmt"
	"log"
	"net/http"
	"net/url"
	// "time"
)

type Token struct {
	Token string
}

type JsonResponse struct {
	Results []struct {
		Result struct {
			Itinerary struct {
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
							} `json:"origin"`
							Dest struct {
								ID      int         `json:"id"`
								Latlon  struct {
									Latitude  int `json:"latitude"`
									Longitude int `json:"longitude"`
								} `json:"latlon"`
								Type             int         `json:"type"`
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
				} `json:"legs"`
				HasPrev             bool        `json:"hasPrev"`
				HasNext             bool        `json:"hasNext"`
				RelevantForRealtime bool        `json:"relevantForRealtime"`
				IsAccessible        bool        `json:"isAccessible"`
				ItineraryFare       interface{} `json:"itineraryFare"`
			} `json:"itinerary"`
		} `json:"result"`
	} `json:"results"`
	Errors    interface{} `json:"errors"`
	Completed bool        `json:"completed"`
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

	printParams(response)
	response.Body.Close()

	// Second: emulate script: get a magic cookie (rzbid)
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

	printParams(response)
	printBody(response)
	response.Body.Close()
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
