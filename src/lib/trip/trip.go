package trip

import (
	"fmt"
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

func (t Trip) TimeTable() string {
	return fmt.Sprintf("Service: %13s, Vehicle: %7s, Departure: %10v, Arrival: %10v, Duration: %6v",
		t.ScrapedApp,
		t.VehicleType,
		t.StartTime.Format("02/01/2006, 15:04:05"),
		t.EndTime.Format("02/01/2006, 15:04:05"),
		t.Duration)
}
