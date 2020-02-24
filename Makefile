# Makefile

default:
	make scrapemaster
	make main

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapemaster.go

main:
	go build -o bin/main.out src/main.go

clean:
	rm bin/*.out
