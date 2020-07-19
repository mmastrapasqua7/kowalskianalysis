# Scraper dei servizi di navigazione

### Compilazione

```sh
$ go build scrapemaster.go
$ go build CSVilizer.go
```

### Uso

Per lanciare lo scraper

```sh
$ ./scrapemaster <requests.json> <carsharing_dir> <save_dir> [random]
```

Per tradurre i risultati JSON in CSV (current dir.)

```shell
$ ./CSVilizer > file.csv
```
