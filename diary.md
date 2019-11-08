### TODO
- ~~finire lo scraper di Moovit~~ **Finito il 27/10/'19**
- ~~tentare lo scraping dei dati del traffico su Google~~ **Abbandonato perche' overcomplicated**
- tentare lo scraping di Waze

### Diary

#### 08/11/'19

scraping di Google abbandonato perche' eccessivamente complicato. Waze.com vanta pari affidabilita' nel calcolo delle rotte e restituisce i risultati con un unico JSON di risposta contenente il tempo di percorrenza per ogni tratta suggerita. Come Moovit non ha endpoint statici ma la richiesta va costruita per step successivi con scambi di cookie e tokens.

Problemi da risolvere:
- Waze restituisce un JSON di risultati molto pesante (~0.5MB). Fare attenzione a non venire bloccati o trovare un modo per limitare la risposta
- Studiare il protocollo dello scambio dei dati

#### 27/10/'19

lo scraper di Moovit e' completato. I json parziali vengono riuniti sotto un'unica struttura dati.

Turno di Google: tutte le comunicazioni avvengono tramite blob illeggibili, tranne che per 2 richieste:
1. settaggio del luogo di partenza/arrivo (tramite coordinate o senza)
	- simile a Moovit, per ogni luogo serve sapere il suo ID associatogli dal sito per poterlo usare nelle richieste
2. informazioni del tragitto (km, tempi di percorrenza, traffico e altri dati)
	- queste informazioni vengono spedite tramite un simil-JSON monnezza
		- formato solo da parentesi quadre (array innestati)
		- l'unmarshaling fallisce sempre perche' viene inviato appositamente con errori di sintassi (unexpected '[' at ...)

Problemi da risolvere:
- trovare endpoint API per associare coordinate a un ID
- analizzare il simil-JSON e vedere se e' correggibile

#### 22/10/'19

lo scraper di Moovit funziona dinamicamente con query a runtime. Manca l'estrazione e l'elaborazione dei dati dei json di risposta e il controllo di coerenza/consistenza delle informazioni.

#### 21/10/'19

lo scraper di Moovit funziona coi parametri hard-coded dopo aver simulato completamente una sequenza di query del browser. Manca la possibilita' di fare query a runtime (non hard-coded) e manca gestione dati (tempo, linea ecc...)

Problemi da risolvere:
- ~~Trovare un modo di capire a runtime quante query sono necessarie per avere un json completo con tutte le tratte.~~ **Risolto il 27/10/'19: attributo "completed" nel json**
- ~~capire perche' 2 volte su 10 le query falliscono~~ **Risolto il 22/10/'19: Le query non falliscono piu', c'e' solo da gestire la componente random dei json spezzati**

#### 15/10/'19

lo scraper di Moovit non funziona coi parametri hard-coded di header, params e cookies. Da ritentare dinamicamente, simulando alla perfezione tutto lo scambio dati che avviene nel browser.

#### 11/10/'19

il sito web di Moovit (moovitapp.com) e' un endpoint per le API, possibile scrapare. L'acquisizione dati avviene in 4 step:
- HTTP GET -> per inviare i parametri del percorso richiesto (luogo di partenza, luogo di destinazione)
- <- RESPONSE (json) si riceve un token da Moovit da usare nella prossima richiesta
- HTTP GET + token -> si richiedono i risultati della query iniziale
- <- RESPONSE (huge json) tutti i risultati

Problemi da risolvere:
- ~~A ogni via/luogo e' associato un ID da inviare nelle richieste, si puo' scrapare anche senza? Altrimenti, esiste API per ricavare l'ID di un luogo dal suo nome informale? (tipo: getLocID("Via Comelico") -> 64564)~~ **Risolto il 21/10/'19: Il problema non si pone perche' Moovit da la possibilita' di cercare posti con le coordinate (lat,lon) e in risposta da tutti i dati associati di quelle coordinate (compreso di nome della via, civico e un id)**

- ~~Una volta acquisito il token, tutta la sequenza prosegue flawless?~~ **Parzialmente risolto il 21/10/'19: L'unico problema e' che Moovit restituisce json spezzati a random: puoi ricevere tutto l'array con la prima query, altrimenti devi fare piu' query e riunire gli elementi restituiti (ecco spiegato il parametro ?offset= nelle query). Da trovare modo per riunificarlo nel codice** | **Risolto il 27/10/'19**
