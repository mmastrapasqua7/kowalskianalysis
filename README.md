# Kowalski, analysis!

## Confronto tra mezzi pubblici e privati nell'area di Milano basato su dati estratti da varie App
#### (Università degli Studi di Milano. Tesi di Mauro Mastrapasqua)

### 1. Dati a disposizione (da Losacco Federico)

#### Elenco dati raccolti

|Nome|Inizio|Fine|Pause|Veicoli|
|-|-|-|-|-|
|Enjoy|luglio 2015|-|Si|Auto,Scooter|
|SharenGo|luglio 2015|-|Si|Auto|
|Car2Go|luglio 2015|-|Si|Auto|
|Twistcar|?|dismesso|?|Auto|

#### Struttura finale (MongoDB)

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
