package dumbgenerator

import (
	"../util"

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

type PointGenerator func() Point

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

func init() {
	rand.Seed(time.Now().UnixNano())
}

func GetRandomRoutes(n int) scraper.JsonRequestsFile {
	randomNumber := rand.Int() % 4
	var start, end PointGenerator

	if randomNumber == 0 {
		start = NewCentroStoricoPoint
		end = NewCentroStoricoPoint
	} else if randomNumber == 1 {
		start = NewCentroStoricoPoint
		end = NewAreaOperativaPoint
	} else if randomNumber == 2 {
		start = NewAreaOperativaPoint
		end = NewAreaOperativaPoint
	} else {
		start = NewAreaOperativaPoint
		end = NewCentroStoricoPoint
	}

	routes := scraper.JsonRequestsFile{}
	for i := 0; i < n; i++ {
		p, q := start(), end()
		for util.DistanceInKilometers(p.x, p.y, q.x, q.y) < 2.0 {
			p, q = start(), end()
		}
		route := scraper.Request{}
		route.From = []string{fmt.Sprintf("%.06f", p.x), fmt.Sprintf("%.06f", p.y)}
		route.To = []string{fmt.Sprintf("%.06f", q.x), fmt.Sprintf("%.06f", q.y)}

		routes = append(routes, route)
	}

	return routes
}

func (p Point) IsInsideRectangle(r Rectangle) bool {
	if p.x >= r.bottomLeft.x && p.x <= r.topRight.x && p.y >= r.bottomLeft.y && p.y <= r.topRight.y {
		return true
	} else {
		return false
	}
}

func NewCentroStoricoPoint() Point {
	startPoint := centroStorico.bottomLeft
	x := rand.Float64() - 0.6
	y := rand.Float64() - 0.9

	p := Point{startPoint.x + x, startPoint.y + y}
	for !p.IsInsideRectangle(centroStorico) {
		x = rand.Float64() - 0.6
		y = rand.Float64() - 0.9
		p.x = startPoint.x + x
		p.y = startPoint.y + y
	}

	return Point{startPoint.x + x, startPoint.y + y}
}

func NewAreaOperativaPoint() Point {
	startPoint := areaOperativa.bottomLeft
	x := rand.Float64() - 0.2
	y := rand.Float64() - 0.9

	p := Point{startPoint.x + x, startPoint.y + y}
	for !p.IsInsideRectangle(areaOperativa) {
		x = rand.Float64() - 0.6
		y = rand.Float64() - 0.9
		p.x = startPoint.x + x
		p.y = startPoint.y + y
	}

	return Point{startPoint.x + x, startPoint.y + y}
}
