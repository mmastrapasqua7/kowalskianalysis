## Scrapers del traffico
### 1. Moovit
```bash
$ go build -a moovit.go
$ ./moovit startLatitude startLongitude endLatitude
```
#### Esempio
```bash
$ ./moovit 45.123456 9.355904 45.034955 9.340340
```

#### Todo
- Decodificare json in struttura dati semplice
- Formattare output programma (verbose e human-readable)
- Creare daemon per mandare piu' richieste all'interno di una singola sessione, senza rilanciare il programma a ogni trip
- Correggere o limitare manipolazione coordinate (attualmente funzionano solo se nella forma 45.\* 9.\*, ovvero area di Milano)
