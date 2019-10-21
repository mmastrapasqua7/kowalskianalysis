package main

import (
	"../src/moovit"
	"fmt"
	"os"
)

type Coordinate struct {
	Latitude, Longitude string
}

type Location struct {
	Coordinate
	Name string
}

func main() {
	if len(os.Args) < 5 {
		fmt.Println("usage:\n\t moovit <startLatitude> <startLongitude> <endLatitude> <endLongitude>")
		return
	}

	startPoint := Location{}
	startPoint.Latitude = os.Args[1]
	startPoint.Longitude = os.Args[2]

	endPoint := Location{}
	endPoint.Latitude = os.Args[3]
	endPoint.Longitude = os.Args[4]

	// 1
	moovit.GetWebPage()
	fmt.Println("1 done")

	// 2
	startPoint.Name = moovit.GetLocationName(startPoint.Latitude, startPoint.Longitude)
	endPoint.Name = moovit.GetLocationName(endPoint.Latitude, endPoint.Longitude)
	fmt.Println("2 done")

	// 3
	headerParams := moovit.GetParamsNeededForHeader(startPoint.Name, endPoint.Name)
	fmt.Println("3 done")

	// 4
	cookie := moovit.GetMagicCookie(headerParams)
	fmt.Println("4 done")

	// 5
	_ = moovit.GetMagicKey(headerParams, cookie) // not needed
	fmt.Println("5 done")

	// 6
	startPointMetadata := moovit.GetLocationInfo(startPoint.Name, headerParams, cookie)
	endPointMetadata := moovit.GetLocationInfo(endPoint.Name, headerParams, cookie)
	fmt.Println("6 done")

	// 7
	token := moovit.GetMagicToken(startPointMetadata, endPointMetadata, headerParams, cookie)
	fmt.Println("7 done")

	fmt.Println(startPointMetadata, endPointMetadata)

	// 8
	moovit.PrintTripPlans(startPointMetadata, endPointMetadata, token, cookie)
	fmt.Println("8 done")
}
