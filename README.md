# Kowalski, analysis!

## Confronto tra mezzi pubblici e privati nell'area di Milano basato su dati estratti da servizi
#### (Università degli Studi di Milano. Tesi di Mauro Mastrapasqua)

### 0. Domande a cui voglio rispondere

- Qual e' il mezzo piu' economico per spostarsi nella citta' di Milano?
	- nei giorni feriali
	- nel weekend
- Qual e' il mezzo piu' veloce per spostarsi nella citta' di Milano?
	- nei giorni feriali
	- nel weekend
- Esistono orari con eccezioni?
- Esistono giorni con eccezioni?
- Esistono aree con eccezioni?
- Qual e' il mezzo migliore in rapporto soldi/velocita'?
- Qual e' il mezzo migliore in rapporto (soldi/velocita')/inquinamento?

### 1. Piano di elaborazione dati

1. Cercare nel database le tratte piu' frequentemente percorse nel passato, salvarle in un database e profilarle (per passato intendo i dati raccolti dal 2014 a oggi del car sharing, per le tratte intendo tragitti percorsi con le stesse/simili coordinate di partenza e di arrivo)
1. Lanciare lo scraper multiservizio che, per ogni tratta salvata precedentemente, chiede contemporaneamente a tutti i servizi di trasporto (Waze, Moovit, car sharing vari...) di simulare la percorrenza della tratta, ripetutamente a intervalli di campionamento regolari (10-15 min) lungo l'arco della giornata, per diversi mesi (evitare richieste nelle ore notturne perche' i servizi di sharing ridistribuiscono equamente i mezzi)
1. Estrarre le informazioni dai dati raccolti

### 1. Dati a disposizione (da Losacco Federico)

#### Elenco dati raccolti

|Nome|Inizio|Fine|Pause|Veicoli|
|-|-|-|-|-|
|Enjoy|luglio 2015|-|Si|Auto,Scooter|
|SharenGo|luglio 2015|-|Si|Auto|
|Car2Go|luglio 2015|-|Si|Auto|
|Twistcar|?|dismesso|?|Auto|

#### Normalizzazione (MongoDB)

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

### 2 TODO

1. Decifrare i parametri inviati nelle richieste dai servizi con piu' opzioni (tipo: Moovit ti fa scegliere una combinazione tra tram, metro, bici, piedi, passante ecc...)
1. Dividere Milano in aree come Area C, centro, semicentro e periferia per ulteriori analisi a posteriori
1. Decodificare i JSON derivanti dai vari servizi in una struttura dati comune che comprenda:
	- coordinate di partenza
	- coordinate di arrivo
	- tempo tragitto
	- costo tragitto
	- coordinate di ogni step del percorso (se possibile)
	- aree attraversate
1. Creare un programma che date delle coordinate di partenza e di arrivo, lanci in parallelo le richieste di quel tragitto su ogni scraper a disposizione a intervalli regolari di tot minuti (nb: usare vpn per evitare blacklist ip)
