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
