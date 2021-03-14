// Wrapper metodi "net/http" per facilitare lo scraping
package httpwrap

import (
	"bytes"
	"compress/gzip"
	"log"
	"net/http"
	"net/url"
	"time"
)

func Get(url string, header http.Header, params url.Values, cookies []*http.Cookie) (*http.Response, error) {
	time.Sleep(150 * time.Millisecond)
	request, err := http.NewRequest("GET", url + params.Encode(), nil)
	if err != nil {
		log.Fatal(err)
	}

	for key, value := range header {
		request.Header.Add(key, value[0])
	}

	for _, cookie := range cookies {
		request.AddCookie(cookie)
	}

	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		return nil, err
	}

	if response.Header.Get("Content-Encoding") == "gzip" {
		gzipReader, err := gzip.NewReader(response.Body)
		if err != nil {
			log.Fatalf("Unzipping body: ", err)
		}
		response.Body = gzipReader
	}

	return response, nil
}

func Post(url string, header http.Header, params *bytes.Buffer, cookies []*http.Cookie) (*http.Response, error) {
	time.Sleep(150 * time.Millisecond)
	request, err := http.NewRequest("POST", url, params)
	request.Header = header

	for _, cookie := range cookies {
		request.AddCookie(cookie)
	}

	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		return nil, err
	}

	if response.Header.Get("Content-Encoding") == "gzip" {
		gzipReader, err := gzip.NewReader(response.Body)
		if err != nil {
			log.Fatalf("Unzipping body: ", err)
		}
		response.Body = gzipReader
	}

	return response, nil
}
