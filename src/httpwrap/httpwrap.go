// Wrapper metodi "net/http" per facilitare lo scraping
package httpwrap

import (
	"log"
	"net/http"
	"net/url"
)

func Get(url string, header http.Header, params url.Values) *http.Response {
	request, _ := http.NewRequest("GET", url+params.Encode(), nil)
	request.Header = header

	client := &http.Client{}

	response, err := client.Do(request)
	if err != nil {
		log.Fatal(err)
	}

	return response
}
