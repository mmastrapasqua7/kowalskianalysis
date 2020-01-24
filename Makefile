# Makefile

scrapemaster:
	go build -o bin/scrapemaster.out src/scrapemaster.go

clean:
	rm bin/*.out

test-scraper:
	make scrapemaster
	bin/scrapemaster.out 45.450640 9.226650 45.465848 9.167429
	make clean

test-trentini:
	make scrapemaster
	bin/scrapemaster.out 45.543211 9.168196 45.476927 9.231680
	make clean

test-buggato:
	make scrapemaster
	bin/scrapemaster.out 45.470560 9.230140 45.476927 9.231680
	make clean
