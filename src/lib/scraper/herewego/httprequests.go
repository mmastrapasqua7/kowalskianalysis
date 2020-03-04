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

func GetBearerTokenSBS() error {
	time := fmt.Sprintf("%v", time.Now().Unix())

	urlApi := url.QueryEscape("https://account.api.here.com/oauth2/token")
	parametersList := "grant_type=client_credentials" +
		url.QueryEscape("&oauth_consumer_key=Vt91yht0GtgVQrSMWrYI4A" +
			"&oauth_nonce=DIOeAN" +
			"&oauth_signature_method=HMAC-SHA256" +
			"&oauth_timestamp=" + time +
			"&oauth_version=1.0")

	baseString := "POST" + "&" + urlApi + "&" + parametersList

	secret := url.QueryEscape("hCSd0VqC13yEEjUkGIjDSI1kJgPF58DgR0O9gIGlD_dvU205Ne74XYYmDOU2YXJZ0YWoZuaJ00_K5ZzR3_8RKA") + "&"

	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(baseString))
	hmacResult := mac.Sum(nil)
	signature := base64.StdEncoding.EncodeToString(hmacResult)

	request, err := http.NewRequest("POST", "https://account.api.here.com/oauth2/token", nil)

	header := http.Header{}
	header.Add("Host", "account.api.here.com")
	header.Add("Authorization", "OAuth " +
		"oauth_consumer_key=" + "\"Vt91yht0GtgVQrSMWrYI4A\"," +
		"oauth_nonce=" + "DIOeAN," +
		"oauth_signature=" + "\"" + signature + "\"," +
		"oauth_signature_method=" + "\"HMAC-SHA256\"," +
		"oauth_timestamp=" + "\"" + time + "\"," +
		"oauth_version=" + "\"1.0\"")
	header.Add("Cache-Control", "no-cache")
	header.Add("Content-Type", "application/x-www-form-urlencoded")
	request.Header = header

	body := ioutil.NopCloser(bytes.NewReader([]byte("grant_type=client_credentials")))
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
