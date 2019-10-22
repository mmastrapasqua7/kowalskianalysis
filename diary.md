### TODO
- finire lo scraper di Moovit
- tentare lo scraping dei dati del traffico su Google

### Diary

#### 22/10/'19

lo scraper di moovit funziona dinamicamente con query a runtime. Manca l'estrazione e l'elaborazione dei dati dei json di risposta e il controllo di coerenza/consistenza delle informazioni.

#### 21/10/'19

lo scraper di moovit funziona coi parametri hard-coded dopo aver simulato completamente una sequenza di query del browser. Manca la possibilita' di fare query a runtime (non hard-coded) e manca gestione dati (tempo, linea ecc...)

Problemi da risolvere:
- Trovare un modo di capire a runtime quante query sono necessarie per avere un json completo con tutte le tratte.
- ~~capire perche' 2 volte su 10 le query falliscono~~ **Risolto il 22/10/'19: Le query non falliscono piu', c'e' solo da gestire la componente random dei json spezzati**

#### 15/10/'19

lo scraper di moovit non funziona coi parametri hard-coded di header, params e cookies. Da ritentare dinamicamente, simulando alla perfezione tutto lo scambio dati che avviene nel browser.

#### 11/10/'19

il sito web di Moovit (moovitapp.com) e' un endpoint per le API, possibile scrapare. L'acquisizione dati avviene in 4 step:
- HTTP GET -> per inviare i parametri del percorso richiesto (luogo di partenza, luogo di destinazione)
- <- RESPONSE (json) si riceve un token da moovit da usare nella prossima richiesta
- HTTP GET + token -> si richiedono i risultati della query iniziale
- <- RESPONSE (huge json) tutti i risultati

Problemi da risolvere:
- ~~A ogni via/luogo e' associato un ID da inviare nelle richieste, si puo' scrapare anche senza? Altrimenti, esiste API per ricavare l'ID di un luogo dal suo nome informale? (tipo: getLocID("Via Comelico") -> 64564)~~ **Risolto il 21/10/'19: Il problema non si pone perche' moovit da la possibilita' di cercare posti con le coordinate (lat,lon) e in risposta da tutti i dati associati di quelle coordinate (compreso di nome della via, civico e un id)**

- ~~Una volta acquisito il token, tutta la sequenza prosegue flawless?~~ **Parzialmente risolto il 21/10/'19: L'unico problema e' che moovit restituisce json spezzati a random: puoi ricevere tutto l'array con la prima query, altrimenti devi fare piu' query e riunire gli elementi restituiti (ecco spiegato il parametro ?offset= nelle query). Da trovare modo per riunificarlo nel codice**
