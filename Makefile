# Makefile

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapers/scrapemaster.go

clean:
	rm bin/*.out

test:
	make scrapemaster
	bin/scrapemaster.out 45.450640 9.226650 45.465848 9.167429
