package main

import (
	"../src/httpwrap"

	"log"
)

func main() {
	urlGoogle := "https://www.google.it/maps/preview/directions?authuser=0&hl=it&gl=it&pb=!1m5!1sVia+Cadore%2C+20135+Milano+MI!2s0x4786c69db515b137%3A0x2edff5f4bc22537a!3m2!3d45.458389!4d9.212963499999999!1m5!1sWagner%2C+Milano%2C+MI!2s0x4786c165d6871e59%3A0x60f0fac3c661d95e!3m2!3d45.468491!4d9.1552276!3m12!1m3!1d8891.274770785907!2d9.195453698584688!3d45.458417764961816!2m3!1f0!2f0!3f0!3m2!1i1302!2i305!4f13.1!6m17!2m3!5m1!6e2!20e3!6m10!4b1!23b1!26i1!27i1!41i2!45b1!49b1!67b1!74i150000!87b1!10b1!16b1!8m0!15m4!1s1Ge1Xa_GLeb1qwGr7qDwCg!4m1!2i10147!7e81!20m28!1m6!1m2!1i0!2i0!2m2!1i458!2i305!1m6!1m2!1i1252!2i0!2m2!1i1302!2i305!1m6!1m2!1i0!2i0!2m2!1i1302!2i20!1m6!1m2!1i0!2i285!2m2!1i1302!2i305!27b1!28m0"

	response, err := httpwrap.Get(urlGoogle, nil, nil, nil)
	if err != nil {
		log.Fatal(err)
	}
	httpwrap.PrintBody(response)
	response.Body.Close()
}
