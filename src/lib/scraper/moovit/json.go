package moovit

import (
	"fmt"
	"time"
)

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

type Result struct {
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
								Type int `json:"type"`
							} `json:"origin"`
							Dest struct {
								ID     int `json:"id"`
								Latlon struct {
									Latitude  int `json:"latitude"`
									Longitude int `json:"longitude"`
								} `json:"latlon"`
								Type int `json:"type"`
							} `json:"dest"`
						} `json:"journey"`
						Shape struct {
							DistanceInMeters float64 `json:"distanceInMeters"`
							Polyline         string  `json:"polyline"`
						} `json:"shape"`
						WalkingInstructoins []struct {
							Direction struct {
								Relative int `json:"relative"`
							} `json:"direction"`
							StreetName string `json:"streetName"`
						} `json:"walkingInstructoins"`
					} `json:"walkLeg,omitempty"`
					PathwayWalkLeg struct {
						Time struct {
							StartTime       int64 `json:"startTime"`
							EndTime         int64 `json:"endTime"`
							IsRealTime      bool  `json:"isRealTime"`
							StaticStartTime int64 `json:"staticStartTime"`
							StaticEndTime   int64 `json:"staticEndTime"`
						} `json:"time"`
						StopID               int `json:"stopId"`
						OriginPathwayID      int `json:"originPathwayId"`
						DestinationPathwayID int `json:"destinationPathwayId"`
					} `json:"pathwayWalkLeg,omitempty"`
					WaitToMultiLineLeg struct {
						Time struct {
							StartTime       int64 `json:"startTime"`
							EndTime         int64 `json:"endTime"`
							IsRealTime      bool  `json:"isRealTime"`
							StaticStartTime int64 `json:"staticStartTime"`
							StaticEndTime   int64 `json:"staticEndTime"`
						} `json:"time"`
						WaitAtStopID   int `json:"waitAtStopId"`
						DepartOnStopID int `json:"departOnStopId"`
						Alternatives   []struct {
							Time struct {
								StartTime       int64 `json:"startTime"`
								EndTime         int64 `json:"endTime"`
								IsRealTime      bool  `json:"isRealTime"`
								StaticStartTime int64 `json:"staticStartTime"`
								StaticEndTime   int64 `json:"staticEndTime"`
							} `json:"time"`
							WaitToLineID         int     `json:"waitToLineId"`
							FutureDepartureTimes []int64 `json:"futureDepartureTimes"`
							WaitOnVehicle        bool    `json:"waitOnVehicle"`
						} `json:"alternatives"`
						PrimaryAlternativeIndex int `json:"primaryAlternativeIndex"`
					} `json:"waitToMultiLineLeg,omitempty"`
					LineWithAlternarivesLeg struct {
						AlternativeLines []struct {
							Time struct {
								StartTime       int64 `json:"startTime"`
								EndTime         int64 `json:"endTime"`
								IsRealTime      bool  `json:"isRealTime"`
								StaticStartTime int64 `json:"staticStartTime"`
								StaticEndTime   int64 `json:"staticEndTime"`
							} `json:"time"`
							LineID          int   `json:"lineId"`
							StopSequenceIds []int `json:"stopSequenceIds"`
							Shape           struct {
								DistanceInMeters float64 `json:"distanceInMeters"`
								Polyline         string  `json:"polyline"`
							} `json:"shape"`
							TripID int `json:"tripId"`
						} `json:"alternativeLines"`
						PrimaryAlternativeIndex int `json:"primaryAlternativeIndex"`
					} `json:"lineWithAlternarivesLeg,omitempty"`
				} `json:"legs"`
				HasPrev             bool `json:"hasPrev"`
				HasNext             bool `json:"hasNext"`
				RelevantForRealtime bool `json:"relevantForRealtime"`
				IsAccessible        bool `json:"isAccessible"`
			} `json:"itinerary"`
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
					LineID        int    `json:"lineId"`
					Destination   string `json:"destination"`
					RouteLongName string `json:"routeLongName"`
					SubGroupID    int    `json:"subGroupId"`
				} `json:"lineSummaries"`
				InnerImageIds struct {
					Images []struct {
						Index int `json:"index"`
						Image int `json:"image"`
					} `json:"images"`
				} `json:"innerImageIds"`
				Caption1  string `json:"caption1"`
				Caption2  string `json:"caption2"`
				Type      int    `json:"type"`
				SubGroups []struct {
					SubGroupID int    `json:"subGroupId"`
					Name       string `json:"name"`
				} `json:"subGroups"`
			} `json:"lineGroupSummaryList"`
			MVStopSyncedMetaDataList []struct {
				StopID       int    `json:"stopId"`
				StopName     string `json:"stopName"`
				StopLocation struct {
					Latitude  int `json:"latitude"`
					Longitude int `json:"longitude"`
				} `json:"stopLocation"`
				Image         int `json:"image"`
				PlatformLines []struct {
					Name    string `json:"name"`
					LineIds []int  `json:"lineIds"`
				} `json:"platformLines"`
				KeyLineIds  []int         `json:"keyLineIds"`
				SitesList   []interface{} `json:"sitesList"`
				ImageRefSet struct {
					Images []struct {
						Index    int `json:"index"`
						ImageRef struct {
							ImageID int `json:"imageId"`
						} `json:"imageRef"`
					} `json:"images"`
				} `json:"imageRefSet"`
				MvPathways []struct {
					PathwayID int    `json:"pathwayId"`
					Name      string `json:"name"`
					Location  struct {
						Latitude  int `json:"latitude"`
						Longitude int `json:"longitude"`
					} `json:"location"`
					Type int `json:"type"`
				} `json:"mvPathways"`
				RouteType            int  `json:"routeType"`
				WheelchairAccessible bool `json:"wheelchairAccessible"`
			} `json:"mVStopSyncedMetaDataList"`
		} `json:"supplementalData"`
	} `json:"results"`
	Completed bool `json:"completed"`
}

func (r Result) Duration(i int) time.Duration {
	return r.Arrival(i).Sub(r.Departure(i))
}

func (r Result) Departure(i int) time.Time {
	times := make([]int64, 0)

	for _, leg := range r.Results[i].Result.Itinerary.Legs {
		if timestamp := leg.WalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
			times = append(times, timestamp.StartTime)
			times = append(times, timestamp.EndTime)
		} else if timestamp := leg.PathwayWalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
			times = append(times, timestamp.StartTime)
			times = append(times, timestamp.EndTime)
		} else if timestamp := leg.WaitToMultiLineLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
			times = append(times, timestamp.StartTime)
			times = append(times, timestamp.EndTime)
		}
	}

	startTime := time.Unix(0, times[0] * int64(time.Millisecond))
	return timeIn(startTime, "Europe/London")
}

func (r Result) Arrival(i int) time.Time {
	times := make([]int64, 0)

	for _, leg := range r.Results[i].Result.Itinerary.Legs {
		if timestamp := leg.WalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
			times = append(times, timestamp.StartTime)
			times = append(times, timestamp.EndTime)
		} else if timestamp := leg.PathwayWalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
			times = append(times, timestamp.StartTime)
			times = append(times, timestamp.EndTime)
		} else if timestamp := leg.WaitToMultiLineLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
			times = append(times, timestamp.StartTime)
			times = append(times, timestamp.EndTime)
		}
	}

	endTime := time.Unix(0, times[len(times)-1] * int64(time.Millisecond))
	return timeIn(endTime, "Europe/London")
}

func (r *Result) String() string {
	toString := ""

	// for i, _ := range r.Results[1:] {
	// 	toString += fmt.Sprintln("Provider:", "MOOVIT",
	// 		"\nDuration:", r.Duration(i+1),
	// 		"\nDeparture:", r.Departure(i+1),
	// 		"\nArrival:", r.Arrival(i+1), "\n")
	// }
	if len(r.Results) < 3 {
		toString += "0,0"
	} else {
		toString += fmt.Sprintf("%.0f,%.0f", r.Duration(1).Minutes(), r.Duration(2).Minutes())
	}

	return toString
}

// func (r *Result) Print() {
// 	fmt.Println("Provider: MOOVIT")
//
// 	for i, result := range r.Results[1:] {
// 		fmt.Println("Result", i)
//
// 		times := make([]int64, 0)
// 		for _, leg := range result.Result.Itinerary.Legs {
// 			if timestamp := leg.WalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
// 				times = append(times, timestamp.StartTime)
// 				times = append(times, timestamp.EndTime)
// 			} else if timestamp := leg.PathwayWalkLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
// 				times = append(times, timestamp.StartTime)
// 				times = append(times, timestamp.EndTime)
// 			} else if timestamp := leg.WaitToMultiLineLeg.Time; timestamp.StartTime != 0 && timestamp.EndTime != 0 {
// 				times = append(times, timestamp.StartTime)
// 				times = append(times, timestamp.EndTime)
// 			}
// 		}
//
// 		startTime := time.Unix(0, times[0] * int64(time.Millisecond))
// 		startTime = timeIn(startTime, "Europe/London")
// 		endTime := time.Unix(0, times[len(times)-1] * int64(time.Millisecond))
// 		endTime = timeIn(endTime, "Europe/London")
// 		duration := endTime.Sub(startTime)
//
// 		fmt.Println("Start time:", startTime.Format("02/01/06 15:04"))
// 		fmt.Println("End time:  ", endTime.Format("02/01/06 15:04"))
// 		fmt.Println("Duration:  ", util.HumanizeDuration(duration), "\n")
// 	}
// }
