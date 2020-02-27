# Makefile

default:
	make scrapemaster
	make checkresults
	make tmp

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapemaster.go

checkresults:
	go build -o bin/checkresults.out src/checkresults.go

tmp:
	go build -o bin/tmp.out tmp.go

clean:
	rm bin/*.out

test-scraper:
	cd src/lib/scraper ; go test -v

run-scraper:
	make scrapemaster
	bin/scrapemaster.out bin/richieste.json bin/scraped_data bin/results

run-check:
	make checkresults
	bin/checkresults.out bin/results
