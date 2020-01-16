package moovit

import (
	"net/http"
	"time"
)

type travel struct {
	start, end time.Time
}

func newCommonHeader() http.Header {
	header := http.Header{}
	header.Add("Host", "moovitapp.com")
	header.Add("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0")
	header.Add("DNT", "1")
	header.Add("Connection", "keep-alive")
	header.Add("Accept-Language", "en-US,en;q=0.5")
	header.Add("Accept-Encoding", "gzip, deflate, br")
	return header
}

func timeIn(t time.Time, name string) time.Time {
	loc, err := time.LoadLocation(name)
	if err == nil {
		t = t.In(loc)
	}
	return t
}
