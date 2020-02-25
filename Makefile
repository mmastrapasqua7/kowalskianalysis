# Makefile

default:
	make scrapemaster
	make checkresults

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapemaster.go

checkresults:
	go build -o bin/checkresults.out src/checkresults.go

clean:
	rm bin/*.out

test-scraper:
	make scrapemaster
	bin/scrapemaster.out bin/richieste.json bin/scraped_data bin/results

check-scraper:
	make checkresults
	bin/checkresults.out bin/results
