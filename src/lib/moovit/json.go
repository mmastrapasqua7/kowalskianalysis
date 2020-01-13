package moovit

type InlineSuggestion struct {
	UserKey string `json:"userKey"`
	Query   string `json:"query"`
	MetroID int    `json:"metroId"`
	Lat     int    `json:"lat"`
	Lng     int    `json:"lng"`
}

type InlineSuggestionResult []struct {
	Type  int `json:"type"`
	ID    int `json:"id"`
	Image struct {
		ImageID    int         `json:"imageId"`
	} `json:"image"`
	Title    string `json:"title"`
	SubTitle []struct {
		Text  string      `json:"text"`
	} `json:"subTitle"`
	LatLon struct {
		Latitude  int `json:"latitude"`
		Longitude int `json:"longitude"`
	} `json:"latLon"`
	UID              string      `json:"uid"`
	GeocoderID       int         `json:"geocoderId"`
	AirDistance      int         `json:"airDistance"`
	Source           int         `json:"source"`
}

type SomeKey struct {
	UserKey           string      `json:"userKey"`
	TilesURL          string      `json:"tilesUrl"`
	MetroID           string      `json:"metroId"`
	IsUnresolvedMetro bool        `json:"isUnresolvedMetro"`
}

type Location struct {
	EndIndex int `json:"endIndex"`
	Results  []LocationResult `json:"results"`
}

type LocationResult struct {
	Type  int `json:"type"`
	ID    int `json:"id"`
	Image struct {
		ImageID    int         `json:"imageId"`
	} `json:"image"`
	Title    string `json:"title"`
	SubTitle []struct {
		Text  string      `json:"text"`
	} `json:"subTitle"`
	LatLon struct {
		Latitude  int `json:"latitude"`
		Longitude int `json:"longitude"`
	} `json:"latLon"`
	InaccurateLatLon bool        `json:"inaccurateLatLon"`
	AirDistance      int         `json:"airDistance"`
	Source           int         `json:"source"`
}

type Token struct {
	Value string `json:"token"`
}

type TripResult struct {
	Results []struct {
		Result struct {
			Itinerary struct {
				GUID      string `json:"guid"`
				SectionID int    `json:"sectionId"`
				GroupType int    `json:"groupType"`
				GroupKey  string `json:"groupKey"`
				Legs      []struct {
					WalkLeg struct {
						Time struct {
							StartTime       int64 `json:"startTime"`
							EndTime         int64 `json:"endTime"`
							IsRealTime      bool  `json:"isRealTime"`
							StaticStartTime int64 `json:"staticStartTime"`
							StaticEndTime   int64 `json:"staticEndTime"`
						} `json:"time"`
						Journey struct {
							Origin struct {
								Caption string `json:"caption"`
								ID      int    `json:"id"`
								Latlon  struct {
									Latitude  int `json:"latitude"`
									Longitude int `json:"longitude"`
								} `json:"latlon"`
								Type             int         `json:"type"`
							} `json:"origin"`
							Dest struct {
								ID      int         `json:"id"`
								Latlon  struct {
									Latitude  int `json:"latitude"`
									Longitude int `json:"longitude"`
								} `json:"latlon"`
								Type             int         `json:"type"`
							} `json:"dest"`
						} `json:"journey"`
						Shape struct {
							DistanceInMeters float64 `json:"distanceInMeters"`
							Polyline         string  `json:"polyline"`
						} `json:"shape"`
						WalkingInstructoins []struct {
							Direction struct {
								Relative int         `json:"relative"`
							} `json:"direction"`
							StreetName string `json:"streetName"`
						} `json:"walkingInstructoins"`
					} `json:"walkLeg"`
				} `json:"legs"`
				HasPrev             bool        `json:"hasPrev"`
				HasNext             bool        `json:"hasNext"`
				RelevantForRealtime bool        `json:"relevantForRealtime"`
				IsAccessible        bool        `json:"isAccessible"`
			} `json:"itinerary"`
			TripPlanSections struct {
				TripPlanSections []struct {
					Name              string      `json:"name"`
					SectionID         int         `json:"sectionId"`
					SectionType       int         `json:"sectionType"`
				} `json:"tripPlanSections"`
				IsOtpRt bool `json:"isOtpRt"`
			} `json:"tripPlanSections"`
		} `json:"result"`
		SupplementalData struct {
			LineGroupSummaryList []struct {
				GroupID     int    `json:"groupId"`
				LineNumber  string `json:"lineNumber"`
				AgencyID    int    `json:"agencyId"`
				Color       int    `json:"color"`
				ImageRefSet struct {
					Images []struct {
						Index    int `json:"index"`
						ImageRef int `json:"imageRef"`
					} `json:"images"`
				} `json:"imageRefSet"`
				LineSummaries []struct {
					LineID        int         `json:"lineId"`
					Destination   string      `json:"destination"`
					RouteLongName string      `json:"routeLongName"`
				} `json:"lineSummaries"`
				InnerImageIds struct {
					Images []struct {
						Index int `json:"index"`
						Image int `json:"image"`
					} `json:"images"`
				} `json:"innerImageIds"`
				Caption1   string      `json:"caption1"`
				Caption2   string      `json:"caption2"`
				Type       int         `json:"type"`
			} `json:"lineGroupSummaryList"`
			MVStopSyncedMetaDataList []struct {
				StopID       int    `json:"stopId"`
				StopName     string `json:"stopName"`
				StopLocation struct {
					Latitude  int `json:"latitude"`
					Longitude int `json:"longitude"`
				} `json:"stopLocation"`
				StopCode      string `json:"stopCode"`
				Image         int    `json:"image"`
				PlatformLines []struct {
					LineIds []int       `json:"lineIds"`
				} `json:"platformLines"`
				ImageRefSet struct {
					Images []struct {
						Index    int `json:"index"`
						ImageRef struct {
							ImageID    int         `json:"imageId"`
						} `json:"imageRef"`
					} `json:"images"`
				} `json:"imageRefSet"`
				RouteType            int         `json:"routeType"`
				WheelchairAccessible bool        `json:"wheelchairAccessible"`
			} `json:"mVStopSyncedMetaDataList"`
		} `json:"supplementalData"`
	} `json:"results"`
	Completed bool        `json:"completed"`
}
