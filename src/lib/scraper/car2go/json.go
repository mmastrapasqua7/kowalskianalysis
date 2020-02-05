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

func (r *Result) Print() {
	car := r.ChosenCar
	fmt.Println("Provider: CAR2GO")
	fmt.Printf("Car position: %.06f, %.06f\n", car.Loc[1], car.Loc[0])
	fmt.Println("Car manufacturer:", car.Obj.Manufacturer)
	fmt.Println("Car model:", car.Obj.Model, "\n")
	// fmt.Println("Car engine type:", car.Obj.EngineType)
	// fmt.Println("Car cost per minute:", car.Obj.PriceInfo.Driving.Formatted)
	// fmt.Println("Car seats:", car.Obj.Seats, "\n")

	fmt.Println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
	r.WalkResult.Print()
	fmt.Println()
	r.CarResult.Print()
	fmt.Println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
}
