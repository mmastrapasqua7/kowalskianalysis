package trip

import (
	"../scraper/moovit"
	"../scraper/openstreetmap"
	"../scraper/waze"
	"../scraper/car2go"
	"../scraper/sharengo"
)

type BigJson struct {
	MoovitRoutes            moovit.Result
	OpenStreetMapBikeRoutes openstreetmap.Result
	OpenStreetMapFootRoutes openstreetmap.Result
	WazeRoutes              waze.Result
	Car2GoRoutes            car2go.Result
	SharengoRoutes          sharengo.Result
}
