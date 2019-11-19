package main

import (
	"../src/waze"

	"fmt"
)

func main() {
	// 1
	waze.GetWebPage()

	// 2
	cookies := waze.GetCookies()

	fmt.Println(cookies)
}
