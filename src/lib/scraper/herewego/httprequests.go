package herewego

import (
	"../../httpwrap"

	"bytes"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"net/url"
	"time"
)

type TokenResponse struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"`
	ExpiresIn   int    `json:"expires_in"`
}

type Result struct {
	Routes []struct {
		ID       string `json:"id"`
		Sections []struct {
			ID      string `json:"id"`
			Type    string `json:"type"`
			Actions []struct {
				Action      string `json:"action"`
				Duration    int    `json:"duration"`
				Instruction string `json:"instruction"`
				Offset      int    `json:"offset"`
				Direction   string `json:"direction,omitempty"`
				Severity    string `json:"severity,omitempty"`
			} `json:"actions,omitempty"`
			TravelSummary struct {
				Duration int `json:"duration"`
				Length   int `json:"length"`
			} `json:"travelSummary"`
			Polyline  string `json:"polyline"`
			Departure struct {
				Time  time.Time `json:"time"`
				Place struct {
					Type     string `json:"type"`
					Location struct {
						Lat float64 `json:"lat"`
						Lng float64 `json:"lng"`
					} `json:"location"`
				} `json:"place"`
			} `json:"departure"`
			Arrival struct {
				Time  time.Time `json:"time"`
				Place struct {
					Name     string `json:"name"`
					Type     string `json:"type"`
					Location struct {
						Lat float64 `json:"lat"`
						Lng float64 `json:"lng"`
					} `json:"location"`
					ID string `json:"id"`
				} `json:"place"`
			} `json:"arrival"`
			Transport struct {
				Mode      string `json:"mode"`
				Name      string `json:"name"`
				Category  string `json:"category"`
				Color     string `json:"color"`
				TextColor string `json:"textColor"`
				Headsign  string `json:"headsign"`
			} `json:"transport,omitempty"`
			IntermediateStops []interface{} `json:"intermediateStops,omitempty"`
			Agency            struct {
				ID      string `json:"id"`
				Name    string `json:"name"`
				Website string `json:"website"`
			} `json:"agency,omitempty"`
			Attributions []struct {
				ID   string `json:"id"`
				Href string `json:"href"`
				Text string `json:"text"`
				Type string `json:"type"`
			} `json:"attributions,omitempty"`
		} `json:"sections"`
	} `json:"routes"`
}

const (
	secretKey = "hCSd0VqC13yEEjUkGIjDSI1kJgPF58DgR0O9gIGlD_dvU205Ne74XYYmDOU2YXJZ0YWoZuaJ00_K5ZzR3_8RKA"
)

var (
	bearerToken = ""
)

func init() {
	err := GetWebPage()
	if err != nil {
		log.Println("herewego: failed to get access token to API ", err)
		log.Println("ERROR: look at the logfile for more details. Sleeping.")

		for {
			time.Sleep(24 * time.Hour)
		}
	}
}

func GetWebPage() error {
	response, err := GetBearerToken()
	if err != nil {
		return err
	}
	bearerToken = response.AccessToken
	return nil
}

func GetBearerToken() (TokenResponse, error) {
	var token TokenResponse

	// 1. base string
	time := fmt.Sprintf("%v", time.Now().Unix())
	nonce := randomString(6)

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
	secret := url.QueryEscape(secretKey) + "&"

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
		return token, fmt.Errorf("getbearertoken: can't get http body: ", err)
	}

	responseBody, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return token, fmt.Errorf("getbearertoken: can't read body (token): ", err)
	}

	if err := json.Unmarshal(responseBody, &token); err != nil {
		return token, fmt.Errorf("getbearertoken: can't unmarshal response: ", err)
	}

	return token, nil
}

func GetRoutes(fromLat, fromLon, toLat, toLon string) Result {
	var result Result

	urlHerewego := "https://transit.router.hereapi.com/v8/routes?"

	header := http.Header{}
	header.Add("Authorization", "Bearer " + bearerToken)

	params := url.Values{}
	params.Add("origin", fromLat[:len(fromLat)-1] + "," + fromLon[:len(fromLon)-1])
	params.Add("destination", toLat[:len(toLat)-1] + "," + toLon[:len(toLon)-1])

	response, err := httpwrap.Get(urlHerewego, header, params, nil)
	if err != nil {
		log.Println("herewego: can't get http body: ", err)
		return result
	}

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Println("herewego: can't read body: ", err)
		return result
	}

	if err := json.Unmarshal(body, &result); err != nil {
		log.Println("herewego: can't unmarshal response: ", err)
		return result
	}

	return result
}

func randomString(length int) string {
	charset := "abcdefghijklmnopqrstuvwxyz0123456789"
	b := make([]byte, length)
	rand.Seed(time.Now().UnixNano())

	for i := range b {
		b[i] = charset[rand.Intn(len(charset))]
	}

	return string(b)
}

func (r *Result) String() string {
	if len(r.Routes) < 1 {
		return "0,0"
	} else if len(r.Routes) < 2 {
		sections := r.Routes[0].Sections
		first := sections[0].Departure.Time
		last := sections[len(sections)-1].Arrival.Time
		return fmt.Sprintf("%.0f,0", last.Sub(first).Minutes())
	} else {
		sections := r.Routes[0].Sections
		first := sections[0].Departure.Time
		last := sections[len(sections)-1].Arrival.Time

		sections1 := r.Routes[1].Sections
		first1 := sections1[1].Departure.Time
		last1 := sections1[len(sections1)-1].Arrival.Time
		return fmt.Sprintf("%.0f,%.0f", last.Sub(first).Minutes(), last1.Sub(first1).Minutes())
	}
}
