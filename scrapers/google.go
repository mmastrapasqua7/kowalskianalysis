package main

import (
	"../src/google"

	"strings"
	"fmt"
)

func main() {
	latitude := "45.464978"
	longitude := "9.204972"
	bodyBytes := google.GetLocationInfo(latitude, longitude)
	jsonMonnezza := string(bodyBytes)

	jsonMonnezza = strings.Replace(jsonMonnezza, "null,", "", -1)
	jsonMonnezza = strings.Replace(jsonMonnezza, "\n", "", -1)
	fmt.Println(jsonMonnezza)
}
