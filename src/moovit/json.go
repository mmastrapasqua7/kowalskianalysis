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
		Parameters interface{} `json:"parameters"`
	} `json:"image"`
	Title    string `json:"title"`
	SubTitle []struct {
		Text  string      `json:"text"`
		Image interface{} `json:"image"`
	} `json:"subTitle"`
	LatLon struct {
		Latitude  int `json:"latitude"`
		Longitude int `json:"longitude"`
	} `json:"latLon"`
	SortingInfo      interface{} `json:"sortingInfo"`
	UID              string      `json:"uid"`
	InaccurateLatLon interface{} `json:"inaccurateLatLon"`
	GeocoderID       int         `json:"geocoderId"`
	AirDistance      int         `json:"airDistance"`
	Source           int         `json:"source"`
	SourceID         interface{} `json:"sourceId"`
	SourceDesc       interface{} `json:"sourceDesc"`
}

type SomeKey struct {
	UserKey           string      `json:"userKey"`
	TilesURL          string      `json:"tilesUrl"`
	MetroID           string      `json:"metroId"`
	IsUnresolvedMetro bool        `json:"isUnresolvedMetro"`
	GtfsLanguage      interface{} `json:"gtfsLanguage"`
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
		Parameters interface{} `json:"parameters"`
	} `json:"image"`
	Title    string `json:"title"`
	SubTitle []struct {
		Text  string      `json:"text"`
		Image interface{} `json:"image"`
	} `json:"subTitle"`
	LatLon struct {
		Latitude  int `json:"latitude"`
		Longitude int `json:"longitude"`
	} `json:"latLon"`
	SortingInfo      interface{} `json:"sortingInfo"`
	UID              interface{} `json:"uid"`
	InaccurateLatLon bool        `json:"inaccurateLatLon"`
	GeocoderID       interface{} `json:"geocoderId"`
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
								UID              interface{} `json:"uid"`
								InaccurateLatLon interface{} `json:"inaccurateLatLon"`
								Source           interface{} `json:"source"`
							} `json:"origin"`
							Dest struct {
								Caption interface{} `json:"caption"`
								ID      int         `json:"id"`
								Latlon  struct {
									Latitude  int `json:"latitude"`
									Longitude int `json:"longitude"`
								} `json:"latlon"`
								Type             int         `json:"type"`
								UID              interface{} `json:"uid"`
								InaccurateLatLon interface{} `json:"inaccurateLatLon"`
								Source           interface{} `json:"source"`
							} `json:"dest"`
						} `json:"journey"`
						Shape struct {
							DistanceInMeters float64 `json:"distanceInMeters"`
							Polyline         string  `json:"polyline"`
						} `json:"shape"`
						WalkingInstructoins []struct {
							Direction struct {
								Relative int         `json:"relative"`
								Absolute interface{} `json:"absolute"`
							} `json:"direction"`
							StreetName string `json:"streetName"`
						} `json:"walkingInstructoins"`
					} `json:"walkLeg"`
					WaitToLineLeg           interface{} `json:"waitToLineLeg"`
					LineLeg                 interface{} `json:"lineLeg"`
					WaitToTaxiLeg           interface{} `json:"waitToTaxiLeg"`
					TaxiLeg                 interface{} `json:"taxiLeg"`
					MultiLineLeg            interface{} `json:"multiLineLeg"`
					CarpoolRideLeg          interface{} `json:"carpoolRideLeg"`
					PathwayWalkLeg          interface{} `json:"pathwayWalkLeg"`
					WaitToMultiLineLeg      interface{} `json:"waitToMultiLineLeg"`
					LineWithAlternarivesLeg interface{} `json:"lineWithAlternarivesLeg"`
					BicycleLeg              interface{} `json:"bicycleLeg"`
					BicycleRentalLeg        interface{} `json:"bicycleRentalLeg"`
					EventLeg                interface{} `json:"eventLeg"`
					ParkingLeg              interface{} `json:"parkingLeg"`
				} `json:"legs"`
				HasPrev             bool        `json:"hasPrev"`
				HasNext             bool        `json:"hasNext"`
				RelevantForRealtime bool        `json:"relevantForRealtime"`
				IsAccessible        bool        `json:"isAccessible"`
				ItineraryFare       interface{} `json:"itineraryFare"`
			} `json:"itinerary"`
			TripPlanSections struct {
				TripPlanSections []struct {
					Name              string      `json:"name"`
					SectionID         int         `json:"sectionId"`
					MaxItemsToDisplay interface{} `json:"maxItemsToDisplay"`
					SectionType       int         `json:"sectionType"`
				} `json:"tripPlanSections"`
				IsOtpRt bool `json:"isOtpRt"`
			} `json:"tripPlanSections"`
			Advertisment      interface{} `json:"advertisment"`
			SectionMatchCount interface{} `json:"sectionMatchCount"`
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
					Origin        interface{} `json:"origin"`
					Destination   string      `json:"destination"`
					RouteLongName string      `json:"routeLongName"`
					SubGroupID    interface{} `json:"subGroupId"`
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
				SubGroups  interface{} `json:"subGroups"`
				PdfFileURL interface{} `json:"pdfFileUrl"`
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
					Name    interface{} `json:"name"`
					LineIds []int       `json:"lineIds"`
				} `json:"platformLines"`
				KeyLineIds  []interface{} `json:"keyLineIds"`
				SitesList   []interface{} `json:"sitesList"`
				ImageRefSet struct {
					Images []struct {
						Index    int `json:"index"`
						ImageRef struct {
							ImageID    int         `json:"imageId"`
							Parameters interface{} `json:"parameters"`
						} `json:"imageRef"`
					} `json:"images"`
				} `json:"imageRefSet"`
				MvPathways           interface{} `json:"mvPathways"`
				RouteType            int         `json:"routeType"`
				WheelchairAccessible bool        `json:"wheelchairAccessible"`
			} `json:"mVStopSyncedMetaDataList"`
		} `json:"supplementalData"`
	} `json:"results"`
	Errors    interface{} `json:"errors"`
	Completed bool        `json:"completed"`
}
