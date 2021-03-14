package scraper

import (
	"../util"
	"testing"
)

func TestCentroStoricoPoints(t *testing.T) {
	var tests = []struct {
		p     Point
		want  bool
	}{
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
		{NewCentroStoricoPoint(), true},
	}

	for _, test := range tests {
		if got := (test.p).IsInsideRectangle(CentroStorico); got != test.want {
			t.Errorf("Point p(%v) is not inside Rectangle r(%v)", test.p, CentroStorico)
		}
	}
}

func TestAreaOperativaPoints(t *testing.T) {
	var tests = []struct {
		p     Point
		want  bool
	}{
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
		{NewAreaOperativaPoint(), true},
	}

	for _, test := range tests {
		if got := (test.p).IsInsideRectangle(AreaOperativa); got != test.want {
			t.Errorf("Point p(%v) is not inside Rectangle r(%v)", test.p, CentroStorico)
		}
	}
}

func TestDistanceRandomRouteGenerator(t *testing.T) {
	var tests = []struct {
		distance float64
		jrf      JsonRequestsFile
		want     bool
	}{
		{1.5, GetRandomRoutes(1, 1.5), true},
		{1.6, GetRandomRoutes(2, 1.6), true},
		{1.7, GetRandomRoutes(3, 1.7), true},
		{1.8, GetRandomRoutes(4, 1.8), true},
		{1.9, GetRandomRoutes(5, 1.9), true},
		{2.0, GetRandomRoutes(6, 2.0), true},
	}

	for _, test := range tests {
		for _, request := range test.jrf {
			got := util.DistanceInKilometersFromStrings(
				request.From[0], request.From[1], request.To[0], request.To[1])

			if (got >= test.distance) != test.want {
				t.Errorf("La tratta non e' di almeno 2km: %v", request)
			}
		}
	}
}
