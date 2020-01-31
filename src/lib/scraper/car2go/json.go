package car2go

import (
	"../openstreetmap"
	"../waze"
)

type Result struct {
	WalkResult openstreetmap.Result
	CarResult  waze.Result
}

type JsonFile []struct {
	Provider string    `json:"provider"`
	Loc      []float64 `json:"loc"`
	Obj      struct {
		Manufacturer string `json:"manufacturer"`
		Model        string `json:"model"`
		Sign         string `json:"sign"`
		Vin          string `json:"vin"`
		FuelState    int    `json:"fuelState"`
		EngineType   string `json:"engineType"`
		Automatic    int    `json:"automatic"`
		Color        string `json:"color"`
		PriceInfo    struct {
			Driving struct {
				Formatted string `json:"formatted"`
			} `json:"driving"`
		} `json:"priceInfo"`
		DeepLink string `json:"deepLink"`
		Seats    int    `json:"seats"`
	} `json:"obj"`
}
