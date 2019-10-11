##### TODO
- finire lo scraper di Moovit
- tentare lo scraping dei dati del traffico su Google

##### Diary
- **11/10/'19**

il sito web di Moovit (moovitapp.com) e' un endpoint per le API, possibile scrapare. L'acquisizione dati avviene in 4 step:
- HTTP GET -> per inviare i parametri del percorso richiesto (luogo di partenza, luogo di destinazione)
- <- RESPONSE (json) si riceve un token da moovit da usare nella prossima richiesta
- HTTP GET + token -> si richiedono i risultati della query iniziale
- <- RESPONSE (huge json) tutti i risultati

Problemi da risolvere:
- A ogni via/luogo e' associato un ID da inviare nelle richieste, si puo' scrapare anche senza? Altrimenti, esiste API per ricavare l'ID di un luogo dal suo nome informale? (tipo: getLocID("Via Comelico") -> 64564)
- Una volta acquisito il token, tutta la sequenza prosegue flawless?
