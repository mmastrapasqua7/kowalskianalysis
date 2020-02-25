# Scraper del traffico

### Compilazione
```sh
$ go build -o scrapemaster.out scrapemaster.go
$ go build -o checkresults.out checkresults.go
```

### Uso
Per lanciare lo scraper
```sh
$ ./scrapemaster.out [requests.json] [scraped_data_dir] [output_dir]
```
Per testare i risultati prodotti
```sh
$ ./checkresults.out [output_dir]
```

### Esempio
```bash
$ ./scrapemaster.out requests.json bin/scraped_data bin/results
$ ./checkresults.out bin/results
```
