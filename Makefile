# Makefile

# cmd

all:
	make moovit
	make waze
	make scrapemaster

clean:
	rm bin/*.out

# scrapers

moovit:
	go build -o bin/moovit.out src/scrapers/moovit.go

waze:
	go build -o bin/waze.out src/scrapers/waze.go

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapers/scrapemaster.go

# tests

test-moovit:
	make moovit
	bin/moovit.out 45.450640 9.226650 45.465848 9.167429

test-waze:
	make waze
	bin/waze.out 45.450640 9.226650 45.465848 9.167429

test-scrapemaster:
	make scrapemaster
	bin/scrapemaster.out 45.450640 9.226650 45.465848 9.167429
