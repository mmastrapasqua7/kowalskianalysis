package waze

import (
	"fmt"
	"time"
)

type Result struct {
	Alternatives []struct {
		Response struct {
			Results []struct {
				Path struct {
					SegmentID int     `json:"segmentId"`
					NodeID    int     `json:"nodeId"`
					X         float64 `json:"x"`
					Y         float64 `json:"y"`
					Direction bool    `json:"direction"`
				} `json:"path"`
				Street                   int           `json:"street"`
				Distance                 int           `json:"distance"`
				Length                   int           `json:"length"`
				CrossTime                int           `json:"crossTime"`
				CrossTimeWithoutRealTime int           `json:"crossTimeWithoutRealTime"`
				KnownDirection           bool          `json:"knownDirection"`
				Penalty                  int           `json:"penalty"`
				RoadType                 int           `json:"roadType"`
				IsToll                   bool          `json:"isToll"`
				DetourSavings            int           `json:"detourSavings"`
				DetourSavingsNoRT        int           `json:"detourSavingsNoRT"`
				UseHovLane               bool          `json:"useHovLane"`
				Attributes               int           `json:"attributes"`
				Lane                     string        `json:"lane"`
				MergeOffset              int           `json:"mergeOffset"`
				AvoidStatus              string        `json:"avoidStatus"`
				Instruction              struct {
					Opcode          string      `json:"opcode"`
					Arg             int         `json:"arg"`
				} `json:"instruction"`
			} `json:"results"`
			FromFraction            float64       `json:"fromFraction"`
			ToFraction              float64       `json:"toFraction"`
			SameFromSegment         bool          `json:"sameFromSegment"`
			SameToSegment           bool          `json:"sameToSegment"`
			TollMeters              int           `json:"tollMeters"`
			PreferedRouteID         int           `json:"preferedRouteId"`
			IsInvalid               bool          `json:"isInvalid"`
			IsBlocked               bool          `json:"isBlocked"`
			ServerUniqueID          string        `json:"serverUniqueId"`
			DisplayRoute            bool          `json:"displayRoute"`
			AstarVisited            int           `json:"astarVisited"`
			AstarResult             string        `json:"astarResult"`
			IsRestricted            bool          `json:"isRestricted"`
			AvoidStatus             string        `json:"avoidStatus"`
			PassesThroughDangerArea bool          `json:"passesThroughDangerArea"`
			DistanceFromSource      int           `json:"distanceFromSource"`
			DistanceFromTarget      int           `json:"distanceFromTarget"`
			MinPassengers           int           `json:"minPassengers"`
			HovIndex                int           `json:"hovIndex"`
			RouteType               []string      `json:"routeType"`
			AstarCost               int           `json:"astarCost"`
			ReorderChoice           []bool        `json:"reorderChoice"`
			TotalRouteTime          int           `json:"totalRouteTime"`
			ShortRouteName          string        `json:"shortRouteName"`
			TollPrice               float64       `json:"tollPrice"`
			RouteName               string        `json:"routeName"`
			RouteNameStreetIds      []int         `json:"routeNameStreetIds"`
			Open                    bool          `json:"open"`
		} `json:"response"`
		Coords []struct {
			X float64 `json:"x"`
			Y float64 `json:"y"`
			Z string  `json:"z"`
		} `json:"coords"`
	} `json:"alternatives"`
}

func (r *Result) Duration(i int) time.Duration {
	return time.Duration(r.Alternatives[i].Response.TotalRouteTime) * time.Second
}

func (r *Result) Departure() time.Time {
	return time.Now()
}

func (r *Result) Arrival(i int) time.Time {
	return time.Now().Add(r.Duration(i))
}

func (r *Result) String() string {
	toString := ""

	// for i, _ := range r.Alternatives {
	// 	toString += fmt.Sprintln("Provider:", "WAZE",
	// 		"\nDuration:", r.Duration(i),
	// 		"\nDeparture:", r.Departure(),
	// 		"\nArrival:", r.Arrival(i), "\n")
	// }
	if len(r.Alternatives) == 0 {
		toString += "0"
	} else {
		toString += fmt.Sprintf("%.0f", r.Duration(0).Minutes())
	}

	return toString
}

// func (r *Result) Print() {
// 	fmt.Println("Provider: WAZE")
//
// 	for _, alternative := range r.Alternatives {
// 		startTime := time.Now()
// 		endTime := time.Now().Add(time.Duration(alternative.Response.TotalRouteTime) * time.Second)
// 		duration := endTime.Sub(startTime)
//
// 		fmt.Println("Start time:", startTime.Format("02/01/06 15:04"))
// 		fmt.Println("End time:  ", endTime.Format("02/01/06 15:04"))
// 		fmt.Println("Duration:  ", util.HumanizeDuration(duration))
// 	}
// }
