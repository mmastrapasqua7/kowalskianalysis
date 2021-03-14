package openstreetmap

import (
	"fmt"
	"time"
)

type Result struct {
	Code      string `json:"code"`
	Waypoints []struct {
		Hint     string    `json:"hint"`
		Location []float64 `json:"location"`
		Name     string    `json:"name"`
	} `json:"waypoints"`
	Routes []struct {
		Legs []struct {
			Steps []struct {
				Intersections []struct {
					Out      int       `json:"out"`
					Entry    []bool    `json:"entry"`
					Location []float64 `json:"location"`
					Bearings []int     `json:"bearings"`
					In       int       `json:"in,omitempty"`
				} `json:"intersections"`
				DrivingSide string  `json:"driving_side"`
				Geometry    string  `json:"geometry"`
				Duration    float64 `json:"duration"`
				Distance    float64 `json:"distance"`
				Name        string  `json:"name"`
				Weight      float64 `json:"weight"`
				Mode        string  `json:"mode"`
				Maneuver    struct {
					BearingAfter  int       `json:"bearing_after"`
					Location      []float64 `json:"location"`
					Type          string    `json:"type"`
					BearingBefore int       `json:"bearing_before"`
					Modifier      string    `json:"modifier"`
				} `json:"maneuver,omitempty"`
			} `json:"steps"`
			Weight   float64 `json:"weight"`
			Distance float64 `json:"distance"`
			Summary  string  `json:"summary"`
			Duration float64 `json:"duration"`
		} `json:"legs"`
		WeightName string  `json:"weight_name"`
		Weight     float64 `json:"weight"`
		Distance   float64 `json:"distance"`
		Duration   float64 `json:"duration"`
	} `json:"routes"`
}

func (r *Result) Duration() time.Duration {
	if len(r.Routes) == 0 {
		t, _ := time.ParseDuration("0m")
		return t
	} else {
		return time.Duration(r.Routes[0].Duration) * time.Second
	}
}

func (r *Result) Departure() time.Time {
	return time.Now()
}

func (r *Result) Arrival() time.Time {
	return time.Now().Add(r.Duration())
}

func (r *Result) String() string {
	// return fmt.Sprintln("Provider:", "OPENSTREETMAP",
	// 	"\nDuration:", r.Duration(),
	// 	"\nDeparture:", r.Departure(),
	// 	"\nArrival:", r.Arrival())
	return fmt.Sprintf("%.0f", r.Duration().Minutes())
}

func (r *Result) Distance() string {
	if len(r.Routes) == 0 {
		return "0"
	} else {
		return fmt.Sprintf("%f", r.Routes[0].Distance / 1000.)
	}
}


// func (r *Result) Print() {
// 	fmt.Println("Provider: OPENSTREETMAP")
//
// 	for _, route := range r.Routes {
// 		startTime := time.Now()
// 		endTime := startTime.Add(time.Duration(route.Duration) * time.Second)
// 		duration := endTime.Sub(startTime)
//
// 		fmt.Println("Start time:", startTime.Format("02/01/06 15:04"))
// 		fmt.Println("End time:  ", endTime.Format("02/01/06 15:04"))
// 		fmt.Println("Duration:  ", util.HumanizeDuration(duration))
// 		fmt.Println("Distance:", route.Distance)
// 	}
// }
