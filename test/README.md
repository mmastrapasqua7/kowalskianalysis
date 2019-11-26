# Test

**from:** Via Monte Cimone (45.450640, 9.226650)

**to:** Corso Magenta (45.465848, 9.167429)

## Moovit

### Attributi json spiegati
```
0 = "Walk",
1 = "Bicycle",
2 = "Car",
3 = "Tram",
4 = "Subway",
5 = "Rail",
6 = "Bus",
7 = "Ferry",
8 = "CableCar",
9 = "Gondola",
10 = "Funicular",
11 = "Transit",
12 = "Trainish",
13 = "Busish",
14 = "LegSwith",
15 = "CustomMotorVehicle",
16 = "CarPoolRide",
17 = "WaitFor",
18 = "StartFrom",
19 = "WalkToPath",
20 = "Taxi"
```

### app.bundle.js[12860:12948]

```js
! function (a) {
	a[a.Walk = 0] = "Walk", a[a.Bicycle = 1] = "Bicycle", a[a.Car = 2] = "Car", a[a.Tram = 3] = "Tram", a[a.Subway = 4] = "Subway", a[a.Rail = 5] = "Rail", a[a.Bus = 6] = "Bus", a[a.Ferry = 7] = "Ferry", a[a.CableCar = 8] = "CableCar", a[a.Gondola = 9] = "Gondola", a[a.Funicular = 10] = "Funicular", a[a.Transit = 11] = "Transit", a[a.Trainish = 12] = "Trainish", a[a.Busish = 13] = "Busish", a[a.LegSwith = 14] = "LegSwith", a[a.CustomMotorVehicle = 15] = "CustomMotorVehicle", a[a.CarPoolRide = 16] = "CarPoolRide", a[a.WaitFor = 17] = "WaitFor", a[a.StartFrom = 18] = "StartFrom", a[a.WalkToPath = 19] = "WalkToPath", a[a.Taxi = 20] = "Taxi"
}(b.LegType || (b.LegType = {}));
! function (a) {
	a[a.UNDEFINED = 1] = "UNDEFINED", a[a.WALK_AND_RIDE = 2] = "WALK_AND_RIDE", a[a.ROUTES_WITH_BIKE = 3] = "ROUTES_WITH_BIKE", a[a.WALK_ONLY = 4] = "WALK_ONLY", a[a.CARPOOL = 5] = "CARPOOL", a[a.WHEEL_CHAIR_ACCESSIBLE = 6] = "WHEEL_CHAIR_ACCESSIBLE", a[a.ROUTES_WITH_RENTAL_BIKE = 7] = "ROUTES_WITH_RENTAL_BIKE"
}(b.SectionType || (b.SectionType = {}));
var j;
! function (a) {
	a[a.LeaveNow = 1] = "LeaveNow", a[a.Depart = 2] = "Depart", a[a.Arrive = 3] = "Arrive", a[a.Last = 4] = "Last"
}(j = b.RefPoint || (b.RefPoint = {}));
! function (a) {
	a[a.StartFrom = 0] = "StartFrom", a[a.WaitFor = 1] = "WaitFor", a[a.WalkTo = 2] = "WalkTo", a[a.RideTo = 3] = "RideTo", a[a.WalkToPath = 4] = "WalkToPath", a[a.DriveTo = 5] = "DriveTo"
}(b.SuggestedRouteStepType || (b.SuggestedRouteStepType = {}));
! function (a) {
	a[a.Prev = 0] = "Prev", a[a.Next = 1] = "Next"
}(b.SimilarItineraryMode || (b.SimilarItineraryMode = {}));
var k = function () {
	function a() {}
	return a.BestRoute = "bestRoute", a.LeastWalking = "LeastWalking", a.LeastTransfers = "LeastTransfers", a
}();
b.RoutePriority = k;
var l = function () {
	function a(a, b, c, d) {
		this.name = a, this.translationKey = b, this.routeTypeId = c, this.imageId = d
	}
	return a.getRouteTypeById = function (b) {
		if (!a.mvRoteTypeToRoueType) {
			a.mvRoteTypeToRoueType = {};
			for (var c = 0; c < a.All.length; c++) a.mvRoteTypeToRoueType[a.All[c].routeTypeId] = a.All[c]
		}
		return a.mvRoteTypeToRoueType[b]
	}, a.parseRouteTypesFromString = function (b, c) {
		for (var d = b.split(","), e = [], f = 0; f < d.length; f++) {
			if (c) {
				a.getRouteTypeByNameFromList(d[f], c)
			}
			var g = a.getRouteTypeByName(d[f]);
			g && e.push(g)
		}
		return e
	}, a.getRouteTypeByName = function (b) {
		for (var c = 0; c < a.All.length; c++)
			if (a.All[c].name == b) return a.All[c];
		return null
	}, a.getRouteTypeByNameFromList = function (a, b) {
		for (var c = 0; c < b.length; c++)
			if (b[c].name == a) return b[c];
		return null
	}, a.equals = function (a, b) {
		if (a == b) return !0;
		if (!a || !b) return !1;
		if (a.length != b.length) return !1;
		for (var c = function (a) {
				if (-1 == b.findIndex(function (b) {
						return b.name == a.name
					})) return {
					value: !1
				}
			}, d = 0, e = a; d < e.length; d++) {
			var f = e[d],
				g = c(f);
			if ("object" == typeof g) return g.value
		}
		for (var h = function (b) {
				if (-1 == a.findIndex(function (a) {
						return a.name == b.name
					})) return {
					value: !1
				}
			}, i = 0, j = b; i < j.length; i++) {
			var f = j[i],
				k = h(f);
			if ("object" == typeof k) return k.value
		}
		return !0
	}, a.Bus = new a("bus", "transit_type_default_bus", MVRouteType.Bus), a.CableCar = new a("cableCar", "transit_type_default_cable", MVRouteType.Cable), a.Ferry = new a("ferry", "transit_type_default_ferry", MVRouteType.Ferry), a.Funicular = new a("funicular", "transit_type_default_funicular", MVRouteType.Funicular), a.Gondola = new a("gondola", "transit_type_default_gondola", MVRouteType.Gondola), a.Rail = new a("rail", "transit_type_default_rail", MVRouteType.Rail), a.Subway = new a("subway", "transit_type_default_subway", MVRouteType.Subway), a.Tram = new a("tram", "transit_type_default_tram", MVRouteType.Tram), a.All = [a.Bus, a.CableCar, a.Ferry, a.Funicular, a.Gondola, a.Rail, a.Subway, a.Tram], a
}();
b.RouteType = l;
return function (a) {
	a[a.TripPlanOutOfMetroArea = 2] = "TripPlanOutOfMetroArea", a[a.NoGeocoderResults = 3] = "NoGeocoderResults", a[a.GeocoderResultsOutOfMetroArea = 4] = "GeocoderResultsOutOfMetroArea", a[a.UnexpectedErrorInTripPlan = 5] = "UnexpectedErrorInTripPlan", a[a.FutureItineraryNotAllowed = 6] = "FutureItineraryNotAllowed", a[a.RemoveTripsWithTooMuchWaitingTime = 7] = "RemoveTripsWithTooMuchWaitingTime", a[a.LocationNotAccessible = 8] = "LocationNotAccessible", a[a.NoTransitTimes = 9] = "NoTransitTimes", a[a.TooClose = 10] = "TooClose", a[a.NoTripPlanFound = 11] = "NoTripPlanFound", a[a.NaCheckin = 12] = "NaCheckin"
}(b.ErrorCodes || (b.ErrorCodes = {})), b.suggestedLocationEqual = d, b.searchDetailsEqual = e, b.searchDetailsCloneForLogging = f, b.locationCloneForLogging = g, c.exports
}), System.registerDynamic("app/models/lines.js", [], !0, function (a, b, c) {
"use strict";
Object.defineProperty(b, "__esModule", {
	value: !0
});
return function (a) {
	a[a.SUBGROUP = 1] = "SUBGROUP", a[a.LINE = 2] = "LINE"
}(b.LineType || (b.LineType = {})), c.exports
```
