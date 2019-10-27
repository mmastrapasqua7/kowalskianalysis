package httpwrap

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func PrintParams(response *http.Response) {
	fmt.Println("***** HEADERS *****")
	for headerName, headerValue := range response.Header {
		fmt.Printf("%v: %v\n", headerName, headerValue)
	}
	fmt.Println()

	fmt.Println("***** PARAMS *****")
	for _, cookie := range response.Cookies() {
		fmt.Printf("%v: %v\n", cookie.Name, cookie.Value)
	}
	fmt.Println()
}

func PrintBody(response *http.Response) {
	fmt.Println("***** BODY *****")

	bodyBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
			log.Fatal(err)
	}
	fmt.Printf("%s\n\n", bodyBytes)
}
