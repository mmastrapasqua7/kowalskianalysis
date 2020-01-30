package trip

import (
	"../scraper/moovit"
	"../scraper/openstreetmap"
	"../scraper/waze"

	"fmt"
	"math"
	"strings"
	"time"
)

type BigJson struct {
	MoovitRoutes            moovit.Result
	OpenStreetMapBikeRoutes openstreetmap.Result
	OpenStreetMapFootRoutes openstreetmap.Result
	WazeRoutes              waze.Result
}

func HumanizeDuration(duration time.Duration) string {
	hours := int64(math.Mod(duration.Hours(), 24))
	minutes := int64(math.Mod(duration.Minutes(), 60))

	chunks := []struct {
		singularName string
		amount       int64
	}{
		{"h", hours},
		{"m", minutes},
	}

	parts := []string{}

	for _, chunk := range chunks {
		switch chunk.amount {
		case 0:
			parts = append(parts, fmt.Sprintf("    "))
		default:
			parts = append(parts, fmt.Sprintf("%2d %s", chunk.amount, chunk.singularName))
		}
	}

	return strings.Join(parts, " ")
}
