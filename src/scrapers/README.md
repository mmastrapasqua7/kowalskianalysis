## Scrapers del traffico
### 1. Moovit
```bash
$ go build moovit.go
$ ./moovit startLat startLon endLat endLon
```
#### Esempio
```bash
$ ./moovit 45.123456 9.355904 45.034955 9.340340
```

### 2. Waze
```bash
$ go build waze.go
$ ./waze startLat startLon endLat endLon
```
#### Esempio
```bash
$ ./waze 45.123456 9.355904 45.034955 9.340340
```

#### Todo
- Decodificare json in struttura dati semplice e comune
- Creare daemon per mandare piu' richieste all'interno di una singola sessione, senza rilanciare il programma a ogni trip
- Correggere o limitare manipolazione coordinate (attualmente funzionano solo se nella forma 45.\* 9.\*, ovvero area di Milano)
