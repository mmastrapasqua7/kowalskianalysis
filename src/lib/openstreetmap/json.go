package openstreetmap

type TripResult struct {
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
