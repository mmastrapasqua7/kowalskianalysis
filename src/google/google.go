package google

import (
	"../../src/httpwrap"

	"log"
	"net/http"
	"net/url"
)

func GetLocationInfo(latitude, longitude string) []byte {
	urlGoogle := "https://www.google.it/maps/preview/directions?"

	params := url.Values{}
	params.Add("authuser", "0")
	params.Add("hl", "it")
	params.Add("gl", "it")
	params.Add("pb", "!1m1!1s " + latitude + ", " + longitude + " !1m0!3m12!1m3!1d23718.891152240445!2d" + longitude + "!3d" + latitude + "!2m3!1f0!2f0!3f0!3m2!1i1366!2i407!4f13.1!6m6!2m3!5m1!6e2!20e3!10b1!16b1!8m0!15m4!1sBKO6Xa7kIMn4wALroZjoDQ!4m1!2i10317!7e81!20m28!1m6!1m2!1i0!2i0!2m2!1i458!2i407!1m6!1m2!1i1316!2i0!2m2!1i1366!2i407!1m6!1m2!1i0!2i0!2m2!1i1366!2i20!1m6!1m2!1i0!2i387!2m2!1i1366!2i407!27b1!28m0")

	response, err := http.Get(urlGoogle + params.Encode())
	if err != nil {
		log.Fatalf("GetLocationInfo: ", err)
	}
	defer response.Body.Close()

	return httpwrap.GetBodyBytes(response)
}
