package httpwrap

import (
	"compress/gzip"
	"fmt"
	"io"
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

	var reader io.ReadCloser
	switch response.Header.Get("Content-Encoding") {
	case "gzip":
	    reader, _ = gzip.NewReader(response.Body)
	    defer reader.Close()
	default:
	    reader = response.Body
	}

	bodyBytes, err := ioutil.ReadAll(reader)
	if err != nil {
			log.Fatal(err)
	}
	fmt.Printf("%s\n\n", bodyBytes)
}
