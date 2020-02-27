package util

import (
	"fmt"
	"math"
	"strconv"
	"strings"
	"time"
)

func FormattedData(t time.Time) string {
	timeString := t.Format("2006-01-02 15:04:05")

	timeString = strings.Replace(timeString, "-", "_", -1)
	timeString = strings.Replace(timeString, ":", "_", -1)
	timeString = strings.Replace(timeString, " ", "_ore_", -1)

	return fmt.Sprint("data_" + timeString)
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

func DistanceInKilometers(lat1, lng1, lat2, lng2 float64) float64 {
	const PI float64 = 3.141592653589793

	radlat1 := float64(PI * lat1 / 180)
	radlat2 := float64(PI * lat2 / 180)

	theta := float64(lng1 - lng2)
	radtheta := float64(PI * theta / 180)

	dist := math.Sin(radlat1) * math.Sin(radlat2) + math.Cos(radlat1) * math.Cos(radlat2) * math.Cos(radtheta)

	if dist > 1 {
		dist = 1
	}

	dist = math.Acos(dist)
	dist = dist * 180 / PI
	dist = dist * 60 * 1.1515

	dist = dist * 1.609344

	return dist
}

func DistanceInKilometersFromStrings(lat1, lng1, lat2, lng2 string) float64 {
	px, _ := strconv.ParseFloat(lat1, 64)
	py, _ := strconv.ParseFloat(lng1, 64)
	qx, _ := strconv.ParseFloat(lat2, 64)
	qy, _ := strconv.ParseFloat(lng2, 64)

	return DistanceInKilometers(px, py, qx, qy)
}
