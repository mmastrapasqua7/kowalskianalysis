# Kowalski, analysis!

## Confronto tra mezzi pubblici e privati nell'area di Milano basato su dati estratti da servizi
### Università degli Studi di Milano. Tesi di Mauro Mastrapasqua

#### Domande a cui voglio rispondere
- Qual è il mezzo più economico per spostarsi nella città di Milano?
	- nei giorni feriali
	- nel weekend
- Qual è il mezzo più veloce per spostarsi nella città di Milano?
	- nei giorni feriali
	- nel weekend
- Esistono orari con eccezioni?
- Esistono giorni con eccezioni?
- Esistono aree con eccezioni?
- Qual è il mezzo migliore in rapporto soldi/velocità?
- Qual è il mezzo migliore in rapporto (soldi/velocità)/inquinamento?

#### Dati a disposizione (da Losacco Federico)

##### Elenco dati raccolti
|Nome|Inizio|Fine|Pause|Veicoli|
|-|-|-|-|-|
|Enjoy|luglio 2015|-|Si|Auto,Scooter|
|SharenGo|luglio 2015|-|Si|Auto|
|Car2Go|luglio 2015|-|Si|Auto|
|Twistcar|?|dismesso|?|Auto|

##### Normalizzazione (MongoDB)
|Attributi|Descrizione|
|-|-|
|car_plate|identificativo veicolo(targa)|
|latitude|latitudine|
|longitude|longitudine|
|loc|indice geospaziale|
|service_name|nome servizio|
|date|timestamp rilevazione (ogni 1 o 5 min)
|fuel|carburante attuale (liquido o elettrico)|
|engine|tipo di motore (combustione o elettrico)|
|type_v|tipo di vettura (auto o motorino)|
|id|numero sequenziale inserimento|

### Scraper
Per testare lo scraper, serve una cartella `bin` contenente un file di nome `richieste.json` con le richieste, una cartella `scraped_data` con i .json raccolti dai servizi di car sharing e una cartella `results` dove verranno salvati i risultati (compressi in formato .tar.xz)

```sh
$ make
$ make test-scraper
```

TODO: togliere l'hard coded
