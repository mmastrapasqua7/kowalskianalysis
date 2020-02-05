# Makefile

default:
	make scrapemaster
	make checkresults

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapemaster.go

checkresults:
	go build -o bin/results/checkresults.out src/checkresults.go

clean:
	rm bin/*.out
	rm bin/results/*.out

clean-log:
	rm bin/*.log
	rm bin/results/*.log

test-scraper:
	make scrapemaster
	bin/scrapemaster.out bin/richieste.json bin/scraped_data bin/results
	make clean
