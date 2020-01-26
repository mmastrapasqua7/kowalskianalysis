package trip

import (
	"fmt"
	"math"
	"strings"
	"time"
)

type Location struct {
	Latitude, Longitude string
	Name                string
}

type Trip struct {
	From        Location
	To          Location
	MidSteps    []Location
	StartTime   time.Time
	EndTime     time.Time
	Duration    time.Duration
	Distance    float64
	VehicleType string
	FuelType    string
	ServiceName string
	CostInCents int
	ScrapedApp  string
}

func PrintTimeTable(trips []Trip) {
	fmt.Printf(
		"-------------------------------------------------------------------------------------------------------------\n" +
		"| %-13s | %-20s | %-20s | %-14s | %-14s | %-9s |\n" +
		"-------------------------------------------------------------------------------------------------------------\n",
		"Service", "Scraped App", "Vehicle", "Departure", "Arrival", "Duration")

	for _, trip := range trips {
		fmt.Printf("| %-13s | %-20s | %-20s | %-14v | %-14v | %-9s |\n",
		trip.ServiceName,
		trip.ScrapedApp,
		trip.VehicleType,
		trip.StartTime.Format("02/01/06 15:04"),
		trip.EndTime.Format("02/01/06 15:04"),
		humanizeDuration(trip.Duration))
	}

	fmt.Println("-------------------------------------------------------------------------------------------------------------")
}

func humanizeDuration(duration time.Duration) string {
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
