package waze

type TripResult struct {
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
				AltStreets               interface{}   `json:"altStreets"`
				Distance                 int           `json:"distance"`
				Length                   int           `json:"length"`
				CrossTime                int           `json:"crossTime"`
				CrossTimeWithoutRealTime int           `json:"crossTimeWithoutRealTime"`
				Tiles                    interface{}   `json:"tiles"`
				ClientIds                interface{}   `json:"clientIds"`
				KnownDirection           bool          `json:"knownDirection"`
				Penalty                  int           `json:"penalty"`
				RoadType                 int           `json:"roadType"`
				IsToll                   bool          `json:"isToll"`
				NaiveRoute               interface{}   `json:"naiveRoute"`
				DetourSavings            int           `json:"detourSavings"`
				DetourSavingsNoRT        int           `json:"detourSavingsNoRT"`
				UseHovLane               bool          `json:"useHovLane"`
				Attributes               int           `json:"attributes"`
				Lane                     string        `json:"lane"`
				LaneType                 interface{}   `json:"laneType"`
				Areas                    []interface{} `json:"areas"`
				RequiredPermits          []interface{} `json:"requiredPermits"`
				DetourRoute              interface{}   `json:"detourRoute"`
				NaiveRouteFullResult     interface{}   `json:"naiveRouteFullResult"`
				DetourRouteFullResult    interface{}   `json:"detourRouteFullResult"`
				MergeOffset              int           `json:"mergeOffset"`
				AvoidStatus              string        `json:"avoidStatus"`
				ClientLaneSet            interface{}   `json:"clientLaneSet"`
				AdditionalInstruction    interface{}   `json:"additionalInstruction"`
				Instruction              struct {
					Opcode          string      `json:"opcode"`
					Arg             int         `json:"arg"`
					InstructionText interface{} `json:"instructionText"`
					LaneGuidance    interface{} `json:"laneGuidance"`
					Name            interface{} `json:"name"`
					Tts             interface{} `json:"tts"`
				} `json:"instruction"`
			} `json:"results"`
			StreetNames             []interface{} `json:"streetNames"`
			TileIds                 []interface{} `json:"tileIds"`
			TileUpdateTimes         []interface{} `json:"tileUpdateTimes"`
			Geom                    interface{}   `json:"geom"`
			FromFraction            float64       `json:"fromFraction"`
			ToFraction              float64       `json:"toFraction"`
			SameFromSegment         bool          `json:"sameFromSegment"`
			SameToSegment           bool          `json:"sameToSegment"`
			AstarPoints             interface{}   `json:"astarPoints"`
			WayPointIndexes         interface{}   `json:"wayPointIndexes"`
			WayPointFractions       interface{}   `json:"wayPointFractions"`
			TollMeters              int           `json:"tollMeters"`
			PreferedRouteID         int           `json:"preferedRouteId"`
			IsInvalid               bool          `json:"isInvalid"`
			IsBlocked               bool          `json:"isBlocked"`
			ServerUniqueID          string        `json:"serverUniqueId"`
			DisplayRoute            bool          `json:"displayRoute"`
			AstarVisited            int           `json:"astarVisited"`
			AstarResult             string        `json:"astarResult"`
			AstarData               interface{}   `json:"astarData"`
			IsRestricted            bool          `json:"isRestricted"`
			AvoidStatus             string        `json:"avoidStatus"`
			DueToOverride           interface{}   `json:"dueToOverride"`
			PassesThroughDangerArea bool          `json:"passesThroughDangerArea"`
			DistanceFromSource      int           `json:"distanceFromSource"`
			DistanceFromTarget      int           `json:"distanceFromTarget"`
			MinPassengers           int           `json:"minPassengers"`
			HovIndex                int           `json:"hovIndex"`
			TimeZone                interface{}   `json:"timeZone"`
			RouteType               []string      `json:"routeType"`
			RouteAttr               []interface{} `json:"routeAttr"`
			AstarCost               int           `json:"astarCost"`
			ReorderChoice           []bool        `json:"reorderChoice"`
			TotalRouteTime          int           `json:"totalRouteTime"`
			LaneTypes               []interface{} `json:"laneTypes"`
			PreferredStoppingPoints interface{}   `json:"preferredStoppingPoints"`
			Areas                   []interface{} `json:"areas"`
			RequiredPermits         []interface{} `json:"requiredPermits"`
			EtaHistograms           []interface{} `json:"etaHistograms"`
			EntryPoint              interface{}   `json:"entryPoint"`
			ShortRouteName          string        `json:"shortRouteName"`
			TollPrice               float64       `json:"tollPrice"`
			SegGeoms                interface{}   `json:"segGeoms"`
			RouteName               string        `json:"routeName"`
			RouteNameStreetIds      []int         `json:"routeNameStreetIds"`
			Open                    bool          `json:"open"`
		} `json:"response"`
		Coords []struct {
			X float64 `json:"x"`
			Y float64 `json:"y"`
			Z string  `json:"z"`
		} `json:"coords"`
		SegCoords interface{} `json:"segCoords"`
	} `json:"alternatives"`
}
