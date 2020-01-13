// Date 2 coordinate (latitudine, longitudine) di partenza e arrivo,
// lo scraper chiede a Waze di calcolare in tempo reale il miglior percorso
// in automobile per percorrere la tratta
package main

import (
	"../lib/waze"
	"../lib/geoloc"

	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 5 {
		fmt.Println("usage:\n\t waze <fromLat> <fromLon> <toLat> <toLon>")
		return
	}

	from := geoloc.Location{os.Args[1], os.Args[2], ""}
	to := geoloc.Location{os.Args[3], os.Args[4], ""}

	waze.GetRealTimeRoutes(from, to)
}
