# Makefile

all:
	make moovit
	make waze

moovit:
	go build -o bin/moovit.out src/scrapers/moovit.go

waze:
	go build -o bin/waze.out src/scrapers/waze.go

clean:
	rm bin/*.out
