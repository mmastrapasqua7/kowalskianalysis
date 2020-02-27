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
		jrf   JsonRequestsFile
		want  bool
	}{
		{GetRandomRoutes(1), true},
		{GetRandomRoutes(2), true},
		{GetRandomRoutes(3), true},
		{GetRandomRoutes(4), true},
		{GetRandomRoutes(5), true},
		{GetRandomRoutes(6), true},
		{GetRandomRoutes(7), true},
		{GetRandomRoutes(8), true},
		{GetRandomRoutes(9), true},
		{GetRandomRoutes(10), true},
	}

	for _, test := range tests {
		for _, request := range test.jrf {
			got := util.DistanceInKilometersFromStrings(
				request.From[0], request.From[1], request.To[0], request.To[1])

			if (got >= 2.0) != test.want {
				t.Errorf("La tratta non e' di almeno 2km: %v", request)
			}
		}
	}
}
