package trip

import (
	"../scraper/moovit"
	"../scraper/openstreetmap"
	"../scraper/waze"
	"../scraper/car2go"
	"../scraper/enjoy"
	"../scraper/sharengo"
)


type JsonRequestsFile []struct {
	From    []string `json:"from"`
	To      []string `json:"to"`
	Comment string   `json:"_comment"`
}

type ResultFile struct {
	Id               int
	Date             string
	ResultsSha256Sum string
	Results          []Result
}

type Result struct {
	FromLat, FromLon string
	ToLat, ToLon     string
	BigResult        BigJson
}

type BigJson struct {
	MoovitRoutes            moovit.Result
	OpenStreetMapBikeRoutes openstreetmap.Result
	OpenStreetMapFootRoutes openstreetmap.Result
	WazeRoutes              waze.Result
	Car2GoRoutes            car2go.Result
	EnjoyRoutes             enjoy.Result
	SharengoRoutes          sharengo.Result
}
