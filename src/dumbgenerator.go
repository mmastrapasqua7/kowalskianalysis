package main

import (
	"./lib/util"

	"fmt"
	"math/rand"
	"time"
)

type Point struct {
	x, y float64
}

type Rectangle struct {
	bottomLeft, topRight Point
}

var (
	centroStorico = Rectangle{
		Point{45.450562, 9.158959},
		Point{45.482032, 9.206763},
	}

	areaOperativa = Rectangle{
		Point{45.437106, 9.145674},
		Point{45.506513, 9.230533},
	}
)

func main() {
	rand.Seed(time.Now().UnixNano())

	centroStoricoPoints := make([]Point, 0)
	fmt.Println("Area centro storico", centroStorico)
	for i := 0; i < 20; i++ {
		p := newCentroStoricoPoint()
		fmt.Printf("%.06f, %.06f ", p.x, p.y)
		fmt.Print(p.isInsideRectangle(centroStorico), " ")
		fmt.Println(p.isInsideRectangle(areaOperativa))
		centroStoricoPoints = append(centroStoricoPoints, p)
	}

	areaOperativaPoints := make([]Point, 0)
	fmt.Println("\nArea operativa", areaOperativa)
	for i := 0; i < 20; i++ {
		p := newAreaOperativaPoint()
		fmt.Printf("%.06f, %.06f ", p.x, p.y)
		fmt.Print(p.isInsideRectangle(centroStorico), " ")
		fmt.Println(p.isInsideRectangle(areaOperativa))
		areaOperativaPoints = append(areaOperativaPoints, p)
	}

	fmt.Println()
	for i := 0; i < 20; i++ {
		p := centroStoricoPoints[i]
		q := areaOperativaPoints[i]
		d := util.DistanceInKilometers(p.x, p.y, q.x, q.y)

		if d >= 2.0 { // km
			fmt.Printf("%.04f km\n", d)
		}
	}
}

func (p Point) isInsideRectangle(r Rectangle) bool {
	if p.x >= r.bottomLeft.x && p.x <= r.topRight.x && p.y >= r.bottomLeft.y && p.y <= r.topRight.y {
		return true
	} else {
		return false
	}
}

func newCentroStoricoPoint() Point {
	startPoint := centroStorico.bottomLeft
	x := rand.Float64() - 0.6
	y := rand.Float64() - 0.9

	p := Point{startPoint.x + x, startPoint.y + y}
	for !p.isInsideRectangle(centroStorico) {
		x = rand.Float64() - 0.6
		y = rand.Float64() - 0.9
		p.x = startPoint.x + x
		p.y = startPoint.y + y
	}

	return Point{startPoint.x + x, startPoint.y + y}
}

func newAreaOperativaPoint() Point {
	startPoint := areaOperativa.bottomLeft
	x := rand.Float64() - 0.2
	y := rand.Float64() - 0.9

	p := Point{startPoint.x + x, startPoint.y + y}
	for !p.isInsideRectangle(areaOperativa) {
		x = rand.Float64() - 0.6
		y = rand.Float64() - 0.9
		p.x = startPoint.x + x
		p.y = startPoint.y + y
	}

	return Point{startPoint.x + x, startPoint.y + y}
}
