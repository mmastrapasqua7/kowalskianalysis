// Wrapper metodi "net/http" per facilitare lo scraping
package httpwrap

import (
	"net/http"
	"net/url"
	"log"
	"fmt"
	"io/ioutil"
)

func Get(url string, header http.Header, params url.Values) string {
	request, _ := http.NewRequest("GET", url + params.Encode(), nil)
	request.Header = header

	client := &http.Client{}

	response, err := client.Do(request)
	if err != nil {
		log.Fatal(err)
	}

	responseText, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	response.Body.Close()

	return fmt.Sprint(responseText)
}
