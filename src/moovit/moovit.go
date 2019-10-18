package moovit

type JsonStartPoints struct {
	EndIndex int `json:"endIndex"`
	Results  []struct {
		Type  int `json:"type"`
		ID    int `json:"id"`
		Image struct {
			ImageID    int         `json:"imageId"`
			Parameters interface{} `json:"parameters"`
		} `json:"image"`
		Title    string `json:"title"`
		SubTitle []struct {
			Text  interface{} `json:"text"`
			Image struct {
				ImageID    int      `json:"imageId"`
				Parameters []string `json:"parameters"`
			} `json:"image"`
		} `json:"subTitle"`
		LatLon struct {
			Latitude  int `json:"latitude"`
			Longitude int `json:"longitude"`
		} `json:"latLon"`
		SortingInfo      interface{} `json:"sortingInfo"`
		UID              interface{} `json:"uid"`
		InaccurateLatLon interface{} `json:"inaccurateLatLon"`
		GeocoderID       interface{} `json:"geocoderId"`
		AirDistance      int         `json:"airDistance"`
		Source           int         `json:"source"`
	} `json:"results"`
}
