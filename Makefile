# Makefile

default:
	make scrapemaster
	make checkresults
	make main

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapemaster.go

checkresults:
	go build -o bin/checkresults.out src/checkresults.go

main:
	go build -o bin/main.out src/main.go

clean:
	rm bin/*.out