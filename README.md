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
#### Struttura directory
Per testare lo scraper tramite il Makefile, serve una cartella `bin` strutturata nel seguente modo:
```
bin/
├─ richieste.json
├─ results/
├─ scraped_data/
   ├─ car2go/
   ├─ enjoy/
   ├─ sharengo/
```
dove `scraped_data` contiene i dump degli scraper del car sharing di Losacco F.

#### Uso (Makefile)
Per testare lo scraper
```sh
$ make test-scraper
```
Per testare i risultati visivamente
```sh
$ make check-scraper
```

#### Uso (Stand-alone)
Per usare lo scraper
```sh
$ go build -o scrapemaster.out src/scrapemaster.go
$ ./scrapemaster.out [richieste.json] [scraped_data_dir] [output_dir]
```
Per testare i risultati visivamente
```sh
$ go build -o checkresults.out src/checkresults.go
$ ./checkresults.out [output_dir]
```
