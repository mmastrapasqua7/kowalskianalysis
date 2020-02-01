# Makefile

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapemaster.go

clean:
	rm bin/*.out

test-scraper:
	make scrapemaster
	bin/scrapemaster.out bin/richieste.json bin bin/results
	make clean
