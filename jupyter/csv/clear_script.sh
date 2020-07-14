#!/bin/bash

HEADER=0

while read LINE; do
	if [ "$HEADER" -eq "0" ]; then
		echo $LINE
		HEADER=1
		continue
	fi

	DISTANCE=$(echo $LINE | cut -d',' -f6)
	PUBLIC=$(echo $LINE | cut -d',' -f13)
	BIKE=$(echo $LINE | cut -d',' -f15)
	FOOT=$(echo $LINE | cut -d',' -f16)
	CAR=$(echo $LINE | cut -d',' -f17)

	if [ "$DISTANCE" = "0" ] || \
	   [ "$PUBLIC" -eq "0" ] || \
	   [ "$BIKE" -eq "0" ] || \
		 [ "$FOOT" -eq "0" ] || \
		 [ "$CAR" -eq "0" ]; then
		# echo $DISTANCE $PUBLIC $BIKE $FOOT $CAR
		continue
	else
		echo $LINE
	fi
done < alldata.csv
