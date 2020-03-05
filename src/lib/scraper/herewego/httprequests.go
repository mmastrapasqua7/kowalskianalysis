package herewego

import (
	"../../httpwrap"

	"bytes"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"time"
)

func GetBearerTokenSBS(secret string) error {
	// 1. base string
	time := fmt.Sprintf("%v", time.Now().Unix())
	nonce := "DIOMERDA"

	method := "POST"
	urlApi := "https://account.api.here.com/oauth2/token"
	parametersList := "grant_type=client_credentials" +
		"&oauth_consumer_key=Vt91yht0GtgVQrSMWrYI4A" +
		"&oauth_nonce=" + nonce +
		"&oauth_signature_method=HMAC-SHA256" +
		"&oauth_timestamp=" + time +
		"&oauth_version=1.0"

	baseString := method + "&" + url.QueryEscape(urlApi) + "&" + url.QueryEscape(parametersList)

	// 2. secret
	secret = url.QueryEscape(secret) + "&"

	// 3. signature
	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(baseString))
	hmacResult := mac.Sum(nil)
	signature := base64.StdEncoding.EncodeToString(hmacResult)

	// 4. get token
	request, err := http.NewRequest("POST", "https://account.api.here.com/oauth2/token", nil)

	header := http.Header{}
	header.Add("Content-Type", "application/x-www-form-urlencoded")
	header.Add("Authorization", "OAuth " +
		"oauth_consumer_key=" + "\"Vt91yht0GtgVQrSMWrYI4A\"," +
		"oauth_nonce=" + "\"" + nonce + "\"," +
		"oauth_signature=" + "\"" + url.QueryEscape(signature) + "\"," +
		"oauth_signature_method=" + "\"HMAC-SHA256\"," +
		"oauth_timestamp=" + "\"" + time + "\"," +
		"oauth_version=" + "\"1.0\"")
	request.Header = header

	bodyString := "grant_type=client_credentials"
	body := ioutil.NopCloser(bytes.NewReader([]byte(bodyString)))
	request.Body = body

	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		return fmt.Errorf("getbearertoken: can't get http body: ", err)
	}
	responseBody, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return fmt.Errorf("getbearertoken: can't read body (token): ", err)
	}
	fmt.Println(string(responseBody))

	return nil
}

func GetRoutes(fromLat, fromLon, toLat, toLon, apiKey string) error {
	urlHerewego := "https://transit.router.hereapi.com/v1/routes?"

	header := http.Header{}
	header.Add("Authorization", "Bearer " + apiKey)

	params := url.Values{}
	params.Add("origin", fromLat[:len(fromLat)-1] + "," + fromLon[:len(fromLon)-1])
	params.Add("destination", toLat[:len(toLat)-1] + "," + toLon[:len(toLon)-1])

	response, err := httpwrap.Get(urlHerewego, header, params, nil)
	if err != nil {
		return fmt.Errorf("getroutes: can't get http body: ", err)
	}

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return fmt.Errorf("getroutes: can't read body: ", err)
	}
	fmt.Println(string(body))

	return nil
}
