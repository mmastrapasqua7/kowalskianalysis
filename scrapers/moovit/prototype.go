// HTTP GET request to scrap moovit
package main

import (
	"fmt"
	"net/url"
	"net/http"
	"../../src/httpwrap"
)

func main() {
	urlAPI := "https://moovitapp.com/api/route/search?"

	params := url.Values{}
	params.Add("fromLocation_caption", "Via Tagliamento")
	params.Add("fromLocation_id", "7818045")
	params.Add("fromLocation_latitude", "45443730")
	params.Add("fromLocation_longitude", "9214030")
	params.Add("fromLocation_type", "3")
	params.Add("isCurrentTime", "true")
	params.Add("multiModal", "false")
	params.Add("routeTypes", "3,2,1,0,7,6,4")
	params.Add("time", "1570806596714")
	params.Add("timeType", "2")
	params.Add("toLocation_caption", "Garibaldi FS")
	params.Add("toLocation_id", "10825992")
	params.Add("toLocation_latitude", "45483811")
	params.Add("toLocation_longitude", "9187194")
	params.Add("toLocation_type", "5")
	params.Add("tripPlanPref", "2")

	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("Accept", "application/json, text/plain, */*")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	header.Add("Referer", "https://moovitapp.com/?to=Garibaldi%20FS&tll=45.483811_9.187194&metroId=223&lang=en") // da modificare
	header.Add("MOOVIT_USER_KEY", "F36562")
	header.Add("MOOVIT_METRO_ID", "223")
	header.Add("MOOVIT_CLIENT_VERSION", "5.5.0.1/V567")
	header.Add("MOOVIT_APP_TYPE", "WEB_TRIP_PLANNER")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Cookie", "rbzid=y9fwVNoAQIfpUjn4V4EOVHDJf1j/wMFIcpFnlA3jMK5ltUkP6yXSKC/bNJzsqo8Gru9QI6+IPzmryyos6H/6NOJi5TqIbBN+/OVVnDrYillIiH+Vb/lHkoKx1dlTKNPkyyoUvqgfCJ/JPX+cmXbgMSRQAFIH8IEREkLAUnlQe1Q=")
	header.Add("TE", "Trailers")

	responseText := httpwrap.Get(urlAPI, header, params)
	fmt.Println(responseText)
}
