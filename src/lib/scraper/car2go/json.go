package car2go

import (
	"../openstreetmap"
	"../waze"

	"fmt"
)

type Result struct {
	ChosenCar  JsonEntry
	WalkResult openstreetmap.Result
	CarResult  waze.Result
	FreeCars   int
}

type JsonEntry struct {
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

type JsonFile []JsonEntry

func (r *Result) CarPosition() string {
	return fmt.Sprintf("%.06f, %.06f", r.ChosenCar.Loc[1], r.ChosenCar.Loc[0])
}

func (r *Result) CarManufacturer() string {
	return fmt.Sprint(r.ChosenCar.Obj.Manufacturer)
}

func (r *Result) CarModel() string {
	return fmt.Sprint(r.ChosenCar.Obj.Model)
}

func (r *Result) EngineType() string {
	return fmt.Sprint(r.ChosenCar.Obj.EngineType)
}

func (r *Result) CostPerMinute() string {
	return fmt.Sprint(r.ChosenCar.Obj.PriceInfo.Driving.Formatted)
}

func (r *Result) String() string {
	return fmt.Sprint("Provider: ", "CAR2GO",
		"\nPosition: ", r.CarPosition(),
		"\nManufacturer: ", r.CarManufacturer(),
		"\nModel: ", r.CarModel(),
		"\nEngine: ", r.EngineType(),
		"\nCost/minute: ", r.CostPerMinute(), "\n")
}
