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

type Token struct {
	Value string `json:"token"`
}
