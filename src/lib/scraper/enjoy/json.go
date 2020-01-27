package enjoy

type Result []struct {
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
