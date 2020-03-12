package enjoy

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
	CarName             string  `json:"car_name"`
	FuelLevel           int     `json:"fuel_level"`
	Lat                 float64 `json:"lat"`
	Lon                 float64 `json:"lon"`
	Address             string  `json:"address"`
	VirtualRentalTypeID int     `json:"virtual_rental_type_id"`
	VirtualRentalID     int     `json:"virtual_rental_id"`
	CarCategoryTypeID   int     `json:"car_category_type_id"`
	CarCategoryID       int     `json:"car_category_id"`
	OnClickDisabled     bool    `json:"onClick_disabled"`
	CarModelData        []int   `json:"carModelData"`
}

type JsonFile []JsonEntry

func (r *Result) CarPosition() string {
	return fmt.Sprintf("%.06f, %.06f", r.ChosenCar.Lat, r.ChosenCar.Lon)
}

func (r *Result) CarManufacturer() string {
	return fmt.Sprint("FIAT")
}

func (r *Result) CarModel() string {
	return fmt.Sprint(r.ChosenCar.CarName)
}

func (r *Result) EngineType() string {
	return fmt.Sprint("Benzina")
}

func (r *Result) CostPerMinute() string {
	return fmt.Sprint("to be defined")
}

func (r *Result) String() string {
	return fmt.Sprint("Provider: ", "ENJOY",
		"\nPosition: ", r.CarPosition(),
		"\nManufacturer: ", r.CarManufacturer(),
		"\nModel: ", r.CarModel(),
		"\nEngine: ", r.EngineType(),
		"\nCost/minute: ", r.CostPerMinute(), "\n")
}
