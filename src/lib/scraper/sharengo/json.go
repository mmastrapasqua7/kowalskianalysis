package sharengo

import (
	"../openstreetmap"
	"../waze"
)

type Result struct {
	ChosenCar  JsonEntry
	WalkResult openstreetmap.Result
	CarResult  waze.Result
}

type JsonEntry struct {
		Plate           string      `json:"plate"`
		Manufactures    string      `json:"manufactures"`
		Model           string      `json:"model"`
		Label           string      `json:"label"`
		Active          bool        `json:"active"`
		IntCleanliness  string      `json:"intCleanliness"`
		ExtCleanliness  string      `json:"extCleanliness"`
		Notes           string      `json:"notes"`
		Longitude       string      `json:"longitude"`
		Latitude        string      `json:"latitude"`
		Damages         string      `json:"damages"`
		Battery         int         `json:"battery"`
		Location        string      `json:"location"`
		FirmwareVersion string      `json:"firmwareVersion"`
		SoftwareVersion string      `json:"softwareVersion"`
		Imei            string      `json:"imei"`
		LastContact     struct {
			Date         string `json:"date"`
			TimezoneType int    `json:"timezone_type"`
			Timezone     string `json:"timezone"`
		} `json:"lastContact"`
		LastLocationTime struct {
			Date         string `json:"date"`
			TimezoneType int    `json:"timezone_type"`
			Timezone     string `json:"timezone"`
		} `json:"lastLocationTime"`
		Busy            bool   `json:"busy"`
		Hidden          bool   `json:"hidden"`
		Rpm             int    `json:"rpm"`
		Speed           int    `json:"speed"`
		ObcInUse        int    `json:"obcInUse"`
		ObcWlSize       int    `json:"obcWlSize"`
		Km              int    `json:"km"`
		Running         bool   `json:"running"`
		Parking         bool   `json:"parking"`
		Status          string `json:"status"`
		Soc             int    `json:"soc"`
		Vin             string `json:"vin"`
		BatterySafety   bool   `json:"batterySafety"`
		BatterySafetyTs struct {
			Date         string `json:"date"`
			TimezoneType int    `json:"timezone_type"`
			Timezone     string `json:"timezone"`
		} `json:"batterySafetyTs"`
		Charging bool `json:"charging"`
		Nogps    bool `json:"nogps"`
		Fleet    struct {
			ID            int    `json:"id"`
			Code          string `json:"code"`
			Name          string `json:"name"`
			Longitude     string `json:"longitude"`
			Latitude      string `json:"latitude"`
			ZoomLevel     int    `json:"zoomLevel"`
			IsDefault     bool   `json:"isDefault"`
			IntCode       string `json:"intCode"`
			InvoiceHeader string `json:"invoiceHeader"`
			ZoneAlarms    struct {
			} `json:"zoneAlarms"`
		} `json:"fleet"`
		CarsInfo struct {
		} `json:"carsInfo"`
		IsReservedByCurrentUser bool `json:"isReservedByCurrentUser"`
}

type JsonFile struct {
	Time string `json:"time"`
	Data struct {
		Status int         `json:"status"`
		Reason string      `json:"reason"`
		Data   []JsonEntry `json:"data"`
	} `json:"data"`
}

// func (r *Result) Print() {
// 	car := r.ChosenCar
// 	fmt.Println("Provider: SHARENGO")
// 	fmt.Printf("Car position: %s, %s\n", car.Latitude, car.Longitude)
// 	fmt.Println("Manufacturer:", car.Manufactures)
// 	fmt.Println("Car model:", car.Model, "\n")
//
// 	fmt.Println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
// 	r.WalkResult.Print()
// 	fmt.Println()
// 	r.CarResult.Print()
// 	fmt.Println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
// }
