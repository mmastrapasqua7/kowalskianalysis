package openstreetmap

import (
	"../httpwrap"
	"../geoloc"
	"../trip"

	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

func init() {
	getWebPage()
}

func GetTrips(from, to geoloc.Location) []trip.Trip {
	trips := make([]trip.Trip, 0)

	bikeTrip := getTripPlans(from, to, "bike")
	var trip1 trip.Trip
	trip1.StartTime = time.Now()
	trip1.EndTime = time.Now().Add(time.Duration(bikeTrip.Routes[0].Duration) * time.Second)
	trip1.Duration = trip1.EndTime.Sub(trip1.StartTime)
	trip1.Distance = bikeTrip.Routes[0].Distance
	trip1.VehicleType = "BIKE"
	trip1.ScrapedApp = "OPENSTREETMAP"
	trips = append(trips, trip1)

	footTrip := getTripPlans(from, to, "foot")
	var trip2 trip.Trip
	trip2.StartTime = time.Now()
	trip2.EndTime = time.Now().Add(time.Duration(footTrip.Routes[0].Duration) * time.Second)
	trip2.Duration = trip2.EndTime.Sub(trip2.StartTime)
	trip2.Distance = footTrip.Routes[0].Distance
	trip2.VehicleType = "FOOT"
	trip2.ScrapedApp = "OPENSTREETMAP"
	trips = append(trips, trip2)

	return trips
}

func getWebPage() {
	urlWaze := "https://www.openstreetmap.org/"

	header := http.Header{}
	header.Add("Host", "www.openstreetmap.org")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0")
	header.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Upgrade-Insecure-Requests", "1")

	response, err := httpwrap.Get(urlWaze, header, nil, nil)
	if err != nil {
		log.Fatalf("getWebPage: ", err)
	}
	response.Body.Close()
}

func getTripPlans(from, to geoloc.Location, routeType string) TripResult {
	fromString := from.Longitude + "," + from.Latitude
	toString := to.Longitude + "," + to.Latitude
	urlWaze := "https://routing.openstreetmap.de/routed-" + routeType + "/route/v1/driving/" + fromString + ";" + toString +"?overview=false&geometries=polyline&steps=false"

	header := http.Header{}
	header.Add("Host", "routing.openstreetmap.de")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0")
	header.Add("Accept", "application/json, text/javascript, */*; q=0.01")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://www.openstreetmap.org/")
	header.Add("Origin", "https://www.openstreetmap.org")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")

	// NB: Queste due entry causano errore di protocollo,
	// da togliere in tutte le richieste

	response, err := httpwrap.Get(urlWaze, header, nil, nil)
	if err != nil {
		log.Fatalf("getTripPlans: ", err)
	}
	defer response.Body.Close()

	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	var tripPlans TripResult
	json.Unmarshal(bodyBytes, &tripPlans)

	// emp, _ := json.MarshalIndent(tripPlans, "", "  ")
	// fmt.Println(string(emp))
	return tripPlans
}
