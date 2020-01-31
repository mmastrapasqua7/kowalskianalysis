package util

import (
	"fmt"
	"math"
	"strings"
	"time"
)

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

func Distance(lat1, lon1, lat2, lon2 float64) float64 {
	var la1, lo1, la2, lo2, earthRadius float64

	la1 = lat1 * math.Pi / 180
	lo1 = lon1 * math.Pi / 180
	la2 = lat2 * math.Pi / 180
	lo2 = lon2 * math.Pi / 180
	earthRadius = 6378100

	h := hsin(la2-la1) + math.Cos(la1) * math.Cos(la2) * hsin(lo2-lo1)
	return 2 * earthRadius * math.Asin(math.Sqrt(h))
}

func hsin(theta float64) float64 {
	return math.Pow(math.Sin(theta/2), 2)
}
