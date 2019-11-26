"bundle";
System.registerDynamic("app/services/services.js", ["./metroService", "./searchService", "./tripPlanService", "./alertsService", "./appStoreService", "./mobileService", "./seoMetaService", "./httpService", "./qrCodeService"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("./metroService");
		PREVENT_IMPORT_REMOVE(d.MetroService);
		var e = a("./searchService");
		PREVENT_IMPORT_REMOVE(e.SearchService);
		var f = a("./tripPlanService");
		PREVENT_IMPORT_REMOVE(f.TripPlanService);
		var g = a("./alertsService");
		PREVENT_IMPORT_REMOVE(g.AlertsService);
		var h = a("./appStoreService");
		PREVENT_IMPORT_REMOVE(h.AppStoreService);
		var i = a("./mobileService");
		PREVENT_IMPORT_REMOVE(i.MobileService);
		var j = a("./seoMetaService");
		PREVENT_IMPORT_REMOVE(j.SeoMetaService);
		var k = a("./httpService");
		PREVENT_IMPORT_REMOVE(k.HttpService);
		var l = a("./qrCodeService");
		return PREVENT_IMPORT_REMOVE(l.QRCodeService), c.exports
	}), System.registerDynamic("app/directives/generateId.js", ["../common/module"], !0, function (a, b, c) {
		"use strict";
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), a("../common/module").appModule.directive("moovitGenerateId", function () {
			function a() {
				return "autoGenId" + b++
			}
			var b = 1;
			return {
				restrict: "A",
				link: function (b, c, d) {
					var e = a();
					d.$set("id", e), d.moovitGenerateId && b.ctrl && (b.ctrl[d.moovitGenerateId] = e)
				},
				priority: -1
			}
		}), c.exports
	}), System.registerDynamic("app/directives/preventPropagation.js", ["../common/module"], !0, function (a, b, c) {
		"use strict";
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), a("../common/module").appModule.directive("moovitPreventPropagation", function () {
			return {
				restrict: "A",
				link: function (a, b, c) {
					var d = c.moovitPreventPropagation;
					d && b.on(d, function (a) {
						a.stopPropagation()
					})
				}
			}
		}), c.exports
	}), System.registerDynamic("app/directives/outsideClick.js", ["../common/module", "../common/jqHelpers"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return {
				restrict: "A",
				link: function (b, c, d) {
					function e(a) {
						f.isParent(c, angular.element(a.target)) || (++h, b.$eval(g, {
							isFirstClick: 1 == h
						}), b.$apply())
					}
					var g = d.moovitOutsideClick;
					if (g) {
						var h = 0;
						a.bind("click", e), b.$on("$destroy", function () {
							a.unbind("click", e)
						})
					}
				}
			}
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var e = a("../common/module"),
			f = a("../common/jqHelpers");
		return e.appModule.directive("moovitOutsideClick", ["$rootElement", d]), c.exports
	}), System.registerDynamic("app/directives/ngMaterialSelectMenu.js", ["../common/module"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../common/module");
		return d.appModule.directive("mdSelect", ["$parse", function (a) {
			return {
				restrict: "E",
				require: "mdSelect",
				link: function (b, c, d, e) {
					var f = null;
					d.moovitSelectedItemChanged && (f = a(d.moovitSelectedItemChanged), b.$on("mdSelectMenuSelectedItemChanged", function () {
						f(b)
					}))
				}
			}
		}]), d.appModule.directive("mdSelectMenu", ["$parse", function (a) {
			return {
				restrict: "E",
				require: "mdSelectMenu",
				link: function (a, b, c, d) {
					var e = d.select;
					d.select = function () {
						e.apply(this, arguments), a.$emit("mdSelectMenuSelectedItemChanged")
					}
				}
			}
		}]), c.exports
	}), System.registerDynamic("app/directives/ngMaterialAutocomplete.js", ["../common/module", "../common/jqHelpers"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../common/module"),
			e = a("../common/jqHelpers");
		return d.appModule.directive("mdAutocomplete", ["$parse", function (a) {
			return {
				restrict: "E",
				require: "mdAutocomplete",
				link: function (b, c, d, f) {
					if (d.mdCleared) {
						var g = a(d.mdCleared),
							h = f.clear;
						f.clear = function () {
							return g(b), h.apply(this, arguments)
						}
					}
					setTimeout(function () {
						var f = e.find("input", c);
						if (f.length) {
							if (d.moovitMdAutocompleteOnFocus) {
								var g = a(d.moovitMdAutocompleteOnFocus);
								f.on("focus", function () {
									g(b)
								})
							}
							if (d.moovitMdAutocompleteOnBlur) {
								var h = a(d.moovitMdAutocompleteOnBlur);
								f.on("blur", function () {
									h(b)
								})
							}
						}
					}, 0)
				}
			}
		}]), c.exports
	}), System.registerDynamic("app/directives/autoFocus.js", ["../common/module", "../fx/Component"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../common/module"),
			e = a("../fx/Component");
		return d.appModule.directive("moovitAutoFocus", [function (a) {
			return {
				restrict: "A",
				priority: 1e3,
				link: function (a, b) {
					var c = e.ComponentBase.fromElement(b);
					c ? setTimeout(function () {
						c.focus()
					}, 0) : setTimeout(function () {
						b.focus()
					}, 500)
				}
			}
		}]), c.exports
	}), System.registerDynamic("app/directives/iframeWithContents.js", ["../common/module"], !0, function (a, b, c) {
		"use strict";
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), a("../common/module").appModule.directive("iframeWithContents", ["$timeout", function (a) {
			return {
				restrict: "E",
				scope: {
					content: "=",
					base: "=",
					direction: "="
				},
				link: function (b, c) {
					var d = document.createElement("iframe");
					c[0].appendChild(d);
					var e = d.contentDocument.body,
						f = d.contentDocument.head;
					e.setAttribute("style", "margin: 0; padding: 0");
					var g = document.createElement("style");
					g.setAttribute("type", "text/css"), g.innerHTML = "div, p, strong, span, a, h1, h2, h3, h4, h5, h6 {                                 font-family: 'Roboto', 'Helvetica', sans-serif !important;                                 font-size: 14px !important;                                 line-height: 18px !important;                                 text-align: inherit !important;                               }                               html[dir=rtl] {                                   font-family: 'open sans hebrew', 'Helvetica', sans-serif !important;                                 }                               h1, h2, h3, h4, h5, h6,                               h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {                                 font-size: 16px !important;                                 font-weight: bold; !important                               }                               font {                                 color: black !important;                               }                               a {                                 background: none;                                color: #1976D2 !important;                                 font-weight: bold !important;                                 padding-left: 0 !important;                                 padding-right: 0 !important;                               }                               p {                                 margin: 16px 0 !important;                               }                               table {                                 width: 100% !important;                               }                               img {                                 max-width: 100% !important;                                 height: auto; !important;                               }", f.appendChild(g);
					var h = document.createElement("base");
					h.setAttribute("target", "_blank"), f.appendChild(h), d.style.opacity = "0", a(function () {
						d.contentWindow && (d.height = d.contentWindow.document.body.scrollHeight + "px"), d.style.opacity = "1"
					}, 500), b.$watch("direction", function () {
						b.direction && (e.style.direction = b.direction)
					}), b.$watch("base", function () {
						if (b.base) {
							var a = document.createElement("base");
							a.setAttribute("href", b.base), f.appendChild(a)
						}
					}), b.$watch("content", function () {
						e.innerHTML = b.content, d.contentDocument.write(f.outerHTML + e.outerHTML)
					})
				}
			}
		}]), c.exports
	}), System.registerDynamic("app/directives/directives.js", ["./generateId", "./preventPropagation", "./outsideClick", "./ngMaterialSelectMenu", "./ngMaterialAutocomplete", "./autoFocus", "./iframeWithContents"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("./generateId");
		PREVENT_IMPORT_REMOVE(d);
		var e = a("./preventPropagation");
		PREVENT_IMPORT_REMOVE(e);
		var f = a("./outsideClick");
		PREVENT_IMPORT_REMOVE(f);
		var g = a("./ngMaterialSelectMenu");
		PREVENT_IMPORT_REMOVE(g);
		var h = a("./ngMaterialAutocomplete");
		PREVENT_IMPORT_REMOVE(h);
		var i = a("./autoFocus");
		PREVENT_IMPORT_REMOVE(i);
		var j = a("./iframeWithContents");
		return PREVENT_IMPORT_REMOVE(j), c.exports
	}), System.registerDynamic("app/filters/TimeFilter.js", ["../common/module", "moment"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../common/module"),
			e = a("moment");
		return d.appModule.filter("time", function () {
			function a(a) {
				return e(a).format("LT")
			}
			return a
		}), d.appModule.filter("daytime", function () {
			function a(a) {
				return e(a).format("D/M LT")
			}
			return a
		}), c.exports
	}), System.registerDynamic("app/filters/dateTimeFilter.js", ["../common/module", "moment"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../common/module"),
			e = a("moment");
		return d.appModule.filter("datetime", function () {
			function a(a) {
				return e(a).format("L LT")
			}
			return a
		}), d.appModule.filter("datenumber", function () {
			function a(a, b) {
				var c = "L LT";
				return b && (c = b), e(a).format(c)
			}
			return a
		}), c.exports
	}), System.registerDynamic("app/filters/filters.js", ["./TimeFilter", "./dateTimeFilter"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("./TimeFilter");
		PREVENT_IMPORT_REMOVE(d);
		var e = a("./dateTimeFilter");
		return PREVENT_IMPORT_REMOVE(e), c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/routeDetails.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<md-list class="routes" ng-if="ctrl.route.steps.length > 0">\n    <md-list-item ng-repeat="step in ctrl.route.steps track by $index"\n                  ng-if="ctrl.showStep(step)"\n                  ng-class="{\'selected\': step == ctrl.selectedStep, \'walkto\' : ctrl.isNextStepWalk(step), \'driveto\' : ctrl.isNextStepDrive(step)}">\n        <route-step\n                flex\n                step="step"\n                is-last="$index == ctrl.route.steps.length-1"\n                show-alert="true"\n                show-type-description="true"\n                show-details="true"\n                show-type-icon="true"\n                show-extra-info="true"\n                is-extra-shown="step.isExtraShown"\n                ng-click="ctrl.selectStep(step, $event)">\n        </route-step>\n    </md-list-item>\n</md-list>\n\n\x3c!--<div class="share">\n    <a href="#"><md-icon md-svg-src="/images/share/share_icon_new.svg"></md-icon>Share your trip itinerary</a>\n</div>--\x3e\n'
		})
	}(), System.registerDynamic("app/route/routeDetails.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/routeDetails.js", ["../fx/Component", "../models/tripPlan", "../fx/Annotations", "../fx/Logger", "../services/appStoreService", "../common/jqHelpers", "../services/appProfileService", "./routeDetails.html!text", "./routeDetails.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../models/tripPlan"),
			j = a("../fx/Annotations"),
			k = a("../fx/Logger"),
			l = a("../services/appStoreService"),
			m = a("../common/jqHelpers"),
			n = a("../services/appProfileService"),
			o = k.createLogger("RouteDetailsComponent"),
			p = function (b) {
				function c(a, c, d) {
					var e = b.call(this, o) || this;
					return e.$state = a, e.appProfileService = c, e.appStoreService = d, e
				}
				return d(c, b), c.prototype.onPushed = function () {
					b.prototype.onPushed.call(this)
				}, c.prototype.selectStep = function (a, b) {
					if (this.selectedStep = a, this.appStoreService.selectStep(a), a.isExtraShown) {
						var c = this,
							d = angular.element(b.currentTarget);
						setTimeout(function () {
							var a = d.parent()[0].offsetTop;
							c.element[0].scrollTop = a
						}, 0)
					}
					m.markEventAsHandled(b)
				}, c.prototype.showStep = function (a) {
					return a.type !== i.SuggestedRouteStepType.WalkToPath
				}, c.prototype.isNextStepWalk = function (a) {
					var b = this.route.steps.indexOf(a);
					return !!(this.route.steps.length > b + 1 && this.route.steps[b + 1]) && this.route.steps[b + 1].type == i.SuggestedRouteStepType.WalkTo
				}, c.prototype.isNextStepDrive = function (a) {
					var b = this.route.steps.indexOf(a);
					return !!(this.route.steps.length > b + 1 && this.route.steps[b + 1]) && this.route.steps[b + 1].type == i.SuggestedRouteStepType.DriveTo
				}, c = e([j.Component({
					tagName: "route-details",
					template: a("./routeDetails.html!text"),
					styles: a("./routeDetails.css!css"),
					scope: {
						route: "<"
					}
				}), g(0, j.Inject("$state")), f("design:paramtypes", [Object, n.AppProfileService, l.AppStoreService])], c)
			}(h.ComponentBase);
		return b.RouteDetailsComponent = p, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/routeStep.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="content-wrapper"\n     ng-class="{\'last-in-multi-leg\': ctrl.step.isLastInMultiLeg, \'first-in-multi-leg\': ctrl.step.isFirstInMultiLeg}"\n     flex\n     layout="row">\n    <div class="type-icon" ng-class="{\'no-background\': ctrl.isStepType(\'StartFrom\')}" ng-if="ctrl.showTypeIcon && !ctrl.isStepType(\'WaitFor\')">\n        <md-icon ng-if="!ctrl.hasStopIcon()" class="legtype-icon"\n                 md-svg-icon="{{ctrl.getLegTypeIcon()}}"></md-icon>\n        <line-svg ng-if="ctrl.hasStopIcon()"\n                  image-html="ctrl.step.extra.legImageMetaData.stopMetaData.stopImageHtml"\n        ></line-svg>\n    </div>\n\n    <div class="type-icon" ng-class="{\'no-background\': ctrl.isStepType(\'StartFrom\')}" ng-if="ctrl.showTypeIcon && ctrl.isStepType(\'WaitFor\')">\n        <md-icon class="legtype-icon" md-svg-icon="/images/clock-icon.svg"></md-icon>\n    </div>\n\n    <span flex class="content" ng-if="ctrl.step">\n        <div layout="row">\n            <span class="type" ng-if="ctrl.showTypeDescription">{{ctrl.step.typeDescription | translate}}</span>\n            <span flex></span>\n            <span ng-show="ctrl.showExtraInfo" layout-align="end" class="extra-info">\n                <span ng-if="ctrl.isStepType(\'WaitFor\') && ctrl.step.isRealTime" ng-class="{\'rt-update\' : ctrl.step.isRealTime}">\n                    <span class="realtime-icon" ng-if="ctrl.step.isRealTime"></span>\n                    {{ctrl.getStepRealTimeDescription(ctrl.step.extra.duration)}}\n                </span>\n            </span>\n        </div>\n\n        <div class="line-icon" ng-if="ctrl.hasImageIcon()">\n            <line-svg image-html="ctrl.step.extra.legImageMetaData.lineMetaData.stepImageHtml"></line-svg>\n        </div>\n\n        <span class="title" ng-if="ctrl.step.title !== \'\'" data-ng-bind-html="ctrl.getStepTitle(ctrl.step)"></span>\n        <span class="sub-title" ng-if="ctrl.step.leg.altLineIds.length == 1">\n            <span ng-repeat="address in ctrl.step.subTitle track by $index" ng-if="address.data !==\'\'">\n                <span ng-if="address.isImage" ng-bind-html="ctrl.$sce.trustAsHtml(address.data)"></span>\n                <span ng-if="!address.isImage">{{address.data}}</span>\n            </span>\n        </span>\n\n        <span class="sub-sub-title"  ng-if="ctrl.step.leg.altLineIds.length == 1 && ctrl.step.extra.platforms[ctrl.step.extra.primaryLineId]">{{ctrl.step.extra.platforms[ctrl.step.extra.primaryLineId]}}</span>\n\n        <span class="alert" ng-click="ctrl.onAlertClicked($event)" ng-if="ctrl.showAlert && ctrl.step.alerts.entities.length == 1 && ctrl.step.alerts.entities[0].title">{{ctrl.step.alerts.entities[0].title}}</span>\n        <span class="alert multi" ng-click="ctrl.onAlertClicked($event)" ng-if="ctrl.showAlert && ctrl.step.alerts.entities.length > 1">{{\'tripplan_itinerary_line_alerts_label\' | translate}}</span>\n\n        <div ng-if="ctrl.showDetails"\n             class="details-wrapper"\n             ng-class="{\'details-expanded\': ctrl.isExtraShown}">\n\n            <div ng-if="ctrl.isStepType(\'StartFrom\')">\n                <div class="details-title">\n                    {{\'tripplan_itinerary_leave_time\' | translate: ctrl.step.extra.leaveAt}}\n                </div>\n            </div>\n\n            <div ng-if="ctrl.isStepType(\'WalkTo\')">\n                <a class="details-title" ng-click="ctrl.toggleExtra($event)">\n                    <span>{{ctrl.step.extra.distance.distance_key | translate: ctrl.step.extra.distance.distance_number}}</span>\n\n                    <span>&nbsp;&bull;&nbsp;</span>\n\n                    <span>{{ctrl.step.extra.duration}} {{\'min\' | translate}}</span>\n\n                    <md-icon md-svg-icon="/images/{{ctrl.isExtraShown ? \'collapse\' : \'expand\'}}_black.svg"\n                             class="toggle-details" layout-align="end"></md-icon>\n                </a>\n                <div ng-show="ctrl.isExtraShown">\n                    <ul class="walking-instruction">\n                        <li ng-repeat="instruction in ctrl.step.extra.instructions track by $index">\n                            <span>{{instruction.instruction_key | translate}} {{instruction.instruction_param}}</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div ng-if="ctrl.isStepType(\'WaitFor\')">\n                <div ng-if="!ctrl.step.isRealTime">\n                    <span ng-if="ctrl.step.extra.arrivals[0]">{{ctrl.step.extra.arrivals[0].departure | time}}</span>\n                    <span ng-if="ctrl.step.extra.arrivals[1]">, {{ctrl.step.extra.arrivals[1].departure | time}}</span>\n                    <span ng-if="ctrl.step.extra.arrivals[2]">, {{ctrl.step.extra.arrivals[2].departure | time}}</span>\n                </div>\n                <div class="details-title" ng-click="ctrl.toggleExtra($event)">\n                    <a href>{{(ctrl.isShowMinimalData?\'popup_more_details\':\'tripplan_itinerary_view_arrivals_label\') | translate}}</a>\n                </div>\n            </div>\n\n            <div ng-if="ctrl.isStepType(\'RideTo\')">\n                <style data-ng-bind-html="ctrl.getInlineStyle()"></style>\n\n                <div class="details-title" ng-click="ctrl.toggleExtra($event)">\n                    <span ng-if="ctrl.step.extra.selectedLine.stations.length == 2">\n                        {{\'one_stop\' | translate}}\n                    </span>\n                    <span ng-if="ctrl.step.extra.selectedLine.stations.length > 2">\n                        {{\'many_stops\' | translate: ctrl.getParam(ctrl.step.extra.selectedLine.stations.length-1)}}\n                    </span>\n\n                    <span>&nbsp;&bull;&nbsp;</span>\n\n                    <span>{{ctrl.step.extra.selectedLine.duration}} {{\'min\' | translate}}</span>\n\n                    <md-icon md-svg-icon="/images/{{ctrl.isExtraShown ? \'collapse\' : \'expand\'}}_black.svg"\n                             class="toggle-details" layout-align="end"></md-icon>\n                </div>\n\n                <div ng-show="ctrl.isExtraShown" class="details-content">\n                    <div>\n                        <span>{{\'tripplan_itinerary_stops_list_label\' | translate: ctrl.getParam(ctrl.step.extra.selectedLine.lineTitle)}}</span>\n\n                        <md-menu class="lines" ng-show="ctrl.step.extra.lines.length > 1">\n                            <a href class="lines-dropdown" ng-click="$mdOpenMenu($event)">\n                                {{\'change\' | translate}}\n                            </a>\n                            <md-menu-content>\n                                <md-menu-item ng-repeat="line in ctrl.step.extra.lines track by $index">\n                                    <md-button ng-click="ctrl.changeLine(line)">\n                                        <div>\n                                            <span>{{line.lineTitle}}</span>\n                                        </div>\n                                    </md-button>\n                                </md-menu-item>\n                            </md-menu-content>\n                        </md-menu>\n                    </div>\n                    <ul class="stations-list" id="line-{{ctrl.step.extra.selectedLine.lineId}}">\n                        <li ng-repeat="station in ctrl.step.extra.selectedLine.stations track by $index">\n                            <span>{{station}}</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div ng-if="ctrl.isStepType(\'DriveTo\')">\n                <span>{{ctrl.step.extra.distance}}</span>\n                <span>&nbsp;&bull;&nbsp;</span>\n                <span>{{ctrl.step.extra.duration}} {{\'min\' | translate}}</span>\n            </div>\n\n        </div>\n    </span>\n</div>\n'
		})
	}(), System.registerDynamic("app/route/routeStep.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/routeStep.js", ["../fx/Component", "../common/iconHelpers", "../models/tripPlan", "../fx/Annotations", "../fx/Logger", "../services/appStoreService", "./routeStep.html!text", "./routeStep.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../common/iconHelpers"),
			j = a("../models/tripPlan"),
			k = a("../fx/Annotations"),
			l = a("../fx/Logger"),
			m = a("../services/appStoreService"),
			n = l.createLogger("RouteStepComponent"),
			o = function (b) {
				function c(a, c, d) {
					var e = b.call(this, n) || this;
					return e.appStoreService = a, e.$sce = c, e.$translate = d, void 0 === e.showDetails && (e.showDetails = !0), void 0 === e.isExtraShown && (e.isExtraShown = !1), void 0 === e.showTypeDescription && (e.showTypeDescription = !0), e.STEP_TYPE = j.SuggestedRouteStepType, e
				}
				return d(c, b), c.prototype.onPushed = function () {
					b.prototype.onPushed.call(this), this.appStoreService.state.user.metro && this.appStoreService.state.user.metro.metroAreaData && (this.isShowMinimalData = !this.appStoreService.state.user.metro.metroAreaData.features || !this.appStoreService.state.user.metro.metroAreaData.features.LINES_MAP_VIEW)
				}, c.prototype.getLegTypeIcon = function () {
					return this.isLast ? i.getLegTypeIconUrl(j.LegType.StartFrom) : i.getLegTypeIconUrl(this.step.legType)
				}, c.prototype.getStepTypeIconUrl = function () {
					return this.step.type == j.SuggestedRouteStepType.RideTo ? i.getLegTypeIconUrl(this.step.legType) : i.getStepTypeIconUrl(this.step.type)
				}, c.prototype.toggleExtra = function (a) {
					this.step.type == j.SuggestedRouteStepType.WalkTo || this.step.type == j.SuggestedRouteStepType.RideTo ? this.isExtraShown = !this.isExtraShown : this.step.type == j.SuggestedRouteStepType.WaitFor && this.onStopArrivalsClicked(this.step)
				}, c.prototype.isStepType = function (a) {
					return this.step && this.step.type == j.SuggestedRouteStepType[a]
				}, c.prototype.hasImageIcon = function () {
					var a = this.step.type == j.SuggestedRouteStepType.WaitFor,
						b = this.step.extra && this.step.extra.legImageMetaData && this.step.extra.legImageMetaData.lineMetaData && null != this.step.extra.legImageMetaData.lineMetaData.stepImageHtml;
					return a && b
				}, c.prototype.hasStopIcon = function () {
					return this.step.extra && this.step.extra.legImageMetaData && this.step.extra.legImageMetaData.stopMetaData && null != this.step.extra.legImageMetaData.stopMetaData.stopImageHtml && (-1 == this.step.extra.legImageMetaData.stopMetaData.stopImageHtml.indexOf("undefined") || this.isStepType("WaitFor"))
				}, c.prototype.getStepTitle = function (a) {
					var b = a.title;
					return b = b.replace("#ffffff", "#292A30"), this.$sce.trustAsHtml(b)
				}, c.prototype.getInlineStyle = function () {
					var a = this.step.extra.lines.map(function (a) {
						return "route-step ul.stations-list#line-" + a.lineId + " li:after,\n                    route-step ul.stations-list#line-" + a.lineId + " li:before{\n                        border-color: " + a.lineColor + ";\n                    }"
					});
					return this.$sce.trustAsHtml(a.join(""))
				}, c.prototype.getLineColor = function () {
					return this.step.extra && this.step.extra.legImageMetaData ? this.step.extra.legImageMetaData.lineColor : "black"
				}, c.prototype.changeLine = function (a) {
					this.step.extra.selectedLine = a, this.appStoreService.updateRoute(this.appStoreService.state.tripPlan.route)
				}, c.prototype.onAlertClicked = function (a) {
					a.stopPropagation(), this.appStoreService.selectStep(this.step, !0)
				}, c.prototype.onStopArrivalsClicked = function (a) {
					this.appStoreService.showStopArrivals(a)
				}, c.prototype.getStepRealTimeDescription = function (a) {
					return Array.isArray(a) ? this.$translate.instant("units_minutes_text", {
						param1: a.join(", ")
					}) : a > 0 ? this.$translate.instant("units_minutes_text", {
						param1: a
					}) : 0 == a || -1 == a ? this.$translate.instant("now") : null
				}, c.prototype.getParam = function (a) {
					if (a) return {
						param1: a
					}
				}, c = e([k.Component({
					tagName: "route-step",
					template: a("./routeStep.html!text"),
					styles: a("./routeStep.css!css"),
					scope: {
						step: "<",
						isLast: "<",
						showAlert: "<",
						showDetails: "<",
						showTypeDescription: "<",
						showTypeIcon: "<",
						showExtraInfo: "<",
						isExtraShown: "="
					}
				}), g(1, k.Inject("$sce")), g(2, k.Inject("$translate")), f("design:paramtypes", [m.AppStoreService, Object, Object])], c)
			}(h.ComponentBase);
		return b.RouteStepComponent = o, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/stopArrivals.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="stops-header">\n    <a class="back-link" ng-if="ctrl.appProfileService.isMobile" ng-click="ctrl.appStoreService.goBackFromState()">\n    </a>\n    <span class="title">{{ctrl.step.subTitle.length ? ctrl.step.subTitle[0].data : ""}}</span>\n    <span class="subtitle">{{\'to_lowercase\' | translate}} {{ctrl.step.nextStep.title}}</span>\n</div>\n\n<div class="schedule-wrapper">\n    <div class="section">\n        <div class="title">\n            {{\'tripplan_itinerary_schedule_header\' | translate}}\n        </div>\n        <div class="arrivals">\n            <div ng-repeat="arrival in ctrl.upcomingArrivals track by $index" class="arrival">\n                <div class="line-details">\n                    <div class="line-container">\n                        <line-svg image-html="arrival.lineImageHtml"></line-svg>\n                    </div>\n\n                    <div class="line-title">\n                        <span>{{arrival.lineTitle}}</span>\n                    </div>\n\n                    <div class="arrival-time" ng-if="!arrival.rtDepartures">\n                        {{arrival.departure | time}}\n                    </div>\n                    <div class="arrival-time realtime" ng-if="arrival.rtDepartures">\n                        <span class="realtime-icon"></span>\n                        {{ctrl.getStepRealTimeDescription(arrival.rtDepartures)}}\n                    </div>\n                </div>\n                <div class="details">\n\n                    <div ng-if="ctrl.step.extra.platforms[arrival.lineId]">{{ctrl.step.extra.platforms[arrival.lineId]}}</div>\n\n                    <span class="stops" ng-if="arrival.lineStopsAmount <= 2">\n                        {{\'one_stop\' | translate}}\n                    </span>\n                    <span class="stops" ng-if="arrival.lineStopsAmount > 2">\n                        {{\'many_stops\' | translate: ctrl.convertToParams([arrival.lineStopsAmount-1])}}\n                    </span>\n                    <span class="duration">\n                        {{arrival.lineDuration}} {{\'min\' | translate}}\n                    </span>\n                </div>\n                <span class="alert" ng-click="ctrl.onAlertClicked($event,arrival.serviceAlert)" ng-if="arrival.serviceAlert"\n                      ng-if="arrival.serviceAlert">{{arrival.serviceAlert.serviceStatus.desc}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class="section"\n         ng-if="!ctrl.isShowMinimalData && ctrl.additionalArrivals && ctrl.additionalArrivals.length > 0">\n        <div class="title">\n            {{\'tripplan_itinerary_schedule_full_header\' | translate}}\n        </div>\n        <div class="arrivals">\n            <div ng-repeat="arrival in ctrl.additionalArrivals track by $index" class="arrival">\n                <div class="line-details">\n                    <div class="line-container">\n                        <line-svg image-html="arrival.lineImageHtml"></line-svg>\n                    </div>\n                    <div class="line-title">\n                        <span>{{arrival.lineTitle}}</span>\n                    </div>\n                    <div class="arrival-time">\n                        {{arrival.departure | time}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n'
		})
	}(), System.registerDynamic("app/route/stopArrivals.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/stopArrivals.js", ["../fx/Component", "./routeStep", "../fx/Annotations", "../fx/Logger", "../services/appStoreService", "../services/appProfileService", "../common/AppEvents", "../fx/Application", "object-assign", "./stopArrivals.html!text", "./stopArrivals.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component");
		a("./routeStep");
		var i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../services/appStoreService"),
			l = a("../services/appProfileService"),
			m = a("../common/AppEvents"),
			n = a("../fx/Application"),
			o = a("object-assign"),
			p = j.createLogger("StopArrivalsComponent"),
			q = function (b) {
				function c(a, c, d, e) {
					var f = b.call(this, p) || this;
					return f.$state = a, f.$translate = c, f.appProfileService = d, f.appStoreService = e, n.events.subscribe(m.AppEvents.SIDE_BAR_POPUP_CLOSE, f, f.onClosed), f
				}
				return d(c, b), c.prototype.onPushed = function () {
					var a = this;
					if (b.prototype.onPushed.call(this), this.step = this.step || this.appStoreService.state.tripPlan.step, this.step) {
						var c = this.step.extra,
							d = {};
						this.upcomingArrivals = [], this.additionalArrivals = [], this.rtArrivals && this.rtArrivals.forEach(function (b) {
							if (d[b.lineId]) d[b.lineId].rtDepartures.push(b);
							else {
								var e = c.arrivals.filter(function (a) {
									if (a.stopId == b.stopId && a.lineId == b.lineId) return !0
								});
								if (e.length > 0) {
									var f = o({}, e[0]);
									f.rtDepartures = [b], d[b.lineId] = f, a.upcomingArrivals.push(f)
								}
							}
						}), c.arrivals && c.arrivals.forEach(function (b) {
							d[b.lineId] ? a.additionalArrivals.push(b) : (d[b.lineId] = !0, a.upcomingArrivals.push(b))
						})
					}
					this.appStoreService.state.user.metro && this.appStoreService.state.user.metro.metroAreaData && (this.isShowMinimalData = !this.appStoreService.state.user.metro.metroAreaData.features || !this.appStoreService.state.user.metro.metroAreaData.features.LINES_MAP_VIEW)
				}, c.prototype.onClosed = function (a) {
					"popupRouteStopArrivals" == a.key && (this.appStoreService.state.tripPlan.step = null)
				}, c.prototype.getStepRealTimeDescription = function (a) {
					var b = this;
					if (1 == a.length && a[0].departureInMinutes <= 0) return this.$translate.instant("now").toLowerCase();
					var c = a.map(function (a) {
						return a.departureInMinutes <= 0 ? b.$translate.instant("now").toLowerCase() : a.departureInMinutes
					});
					return c = c.filter(function (a, b, c) {
						return c.indexOf(a) === b
					}), this.$translate.instant("units_minutes_text", {
						param1: c.join(", ")
					})
				}, c.prototype.convertToParams = function (a) {
					return {
						param1: a[0]
					}
				}, c.prototype.onAlertClicked = function (a, b) {
					a.stopPropagation(), this.appStoreService.selectStep(this.step, !0)
				}, c = e([i.Component({
					tagName: "stop-arrivals",
					template: a("./stopArrivals.html!text"),
					styles: a("./stopArrivals.css!css"),
					scope: {
						route: "<",
						step: "<",
						rtArrivals: "<"
					}
				}), g(0, i.Inject("$state")), g(1, i.Inject("$translate")), f("design:paramtypes", [Object, Object, l.AppProfileService, k.AppStoreService])], c)
			}(h.ComponentBase);
		return b.StopArrivalsComponent = q, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/routeActions.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="actions-container" ng-class="{\'multiple\': ctrl.isMultipleActions}">\n    <a class="back-link" ng-if="ctrl.appProfileService.isMobile" ng-click="ctrl.appStoreService.goBackFromState()">\n        \x3c!--<span>Back</span>--\x3e\n    </a>\n\n    <a href class="buy-link" ng-click="ctrl.buyTicketClick()" ng-if="ctrl.buyTicketsUrl.length > 0">\n        <md-icon class="icon" md-svg-icon="/images/ticket_icon.svg"></md-icon>\n        <span>{{\'buy_tickets\' | translate}}</span>\n    </a>\n\n    <a href class="share-link" ng-click="ctrl.shareRoute(ctrl.route, $event)" ng-if="ctrl.showShare && !ctrl.appStoreService.state.customer.designConfiguration.hideSharing">\n        <md-icon class="icon" md-svg-icon="/images/share/share_icon_new.svg"></md-icon>\n        <span>{{\'action_share\' | translate}}</span>\n    </a>\n</div>'
		})
	}(), System.registerDynamic("app/route/routeActions.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/routeActions.js", ["../fx/Component", "../fx/Annotations", "../fx/Logger", "../services/appStoreService", "../services/tripPlanService", "../services/shareService", "../components/sharePanel", "../services/analyticsService", "../services/appProfileService", "./routeActions.html!text", "./routeActions.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../services/appStoreService"),
			l = a("../services/tripPlanService"),
			m = a("../services/shareService"),
			n = a("../components/sharePanel"),
			o = a("../services/analyticsService"),
			p = a("../services/appProfileService"),
			q = j.createLogger("RouteActionsComponent"),
			r = function (b) {
				function c(a, c, d, e, f, g, h) {
					var i = b.call(this, q) || this;
					return i.$translate = a, i.$window = c, i.tripPlanService = d, i.shareService = e, i.analyticsService = f, i.appStoreService = g, i.appProfileService = h, i
				}
				return d(c, b), c.prototype.onPushed = function () {
					this.isMultipleActions = this.showShare && this.buyTicketsUrl.length > 0
				}, c.prototype.shareRoute = function (a, b) {
					var c = this,
						d = a,
						e = function () {
							return c.tripPlanService.getItineraryShareableLink(a.itineraryGuid).then(function (a) {
								return a && a.entityLink ? a.entityLink.url : ""
							})
						};
					this.shareService.showShareDialog(b, e, n.ShareCategory.Itinerary, this.$translate.instant("share_itinerary"), {
						from_address: d.from.name,
						to_address: d.to.name
					})
				}, c.prototype.buyTicketClick = function () {
					var a = this.tripPlanService.state.customer.ticketsUrl;
					this.analyticsService.trackOutboundLink(a), this.$window.open(a, "_blank")
				}, c = e([i.Component({
					tagName: "route-actions",
					template: a("./routeActions.html!text"),
					styles: a("./routeActions.css!css"),
					scope: {
						route: "<",
						showShare: "<",
						buyTicketsUrl: "<"
					}
				}), g(0, i.Inject("$translate")), g(1, i.Inject("$window")), f("design:paramtypes", [Object, Object, l.TripPlanService, m.ShareService, o.AnalyticsService, k.AppStoreService, p.AppProfileService])], c)
			}(h.ComponentBase);
		return b.RouteActionsComponent = r, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/routeStepsNav.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="step-nav-nextprev-container">\n    <a class="step-nav-prev" href ng-click="ctrl.prevStep()" ng-show="ctrl.stepIndex > 0">\n        <md-icon md-svg-icon="md-tabs-arrow"></md-icon>\n    </a>\n    <a class="step-nav-next" href ng-click="ctrl.nextStep()" ng-show="ctrl.selectedStep !== ctrl.route.steps[ctrl.route.steps.length - 1]">\n        <md-icon md-svg-icon="md-tabs-arrow"></md-icon>\n    </a>\n</div>\n<md-tabs class="steps-navigator" ng-if="ctrl.route.steps.length > 0" md-selected="ctrl.stepIndex" md-center-tabs="true" md-stretch-tabs="never" md-no-pagination="true" md-no-ink-bar="true" md-no-ink="true" md-dynamic-height="true">\n    <md-tab md-on-select="ctrl.selectStep()" class="step-nav-step">\n        <md-tab-label>\n\n        </md-tab-label>\n        <md-tab-body>\n            <route-summary route="ctrl.route" ng-if="ctrl.route"></route-summary>\n        </md-tab-body>\n    </md-tab>\n    <md-tab ng-repeat="step in ctrl.route.steps track by $index" md-on-select="ctrl.selectStep(step)"\n        ng-if="ctrl.showStep(step)">\n        <md-tab-label>\n\n        </md-tab-label>\n        <md-tab-body>\n            <route-step\n                flex\n                step="step"\n                show-alert="true"\n                show-type-description="true"\n                show-details="true"\n                show-type-icon="true"\n                show-extra-info="true"\n                is-extra-shown="false">\n            </route-step>\n        </md-tab-body>\n    </md-tab>\n</md-tabs>\n'
		})
	}(), System.registerDynamic("app/route/routeStepsNav.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/routeStepsNav.js", ["../fx/Application", "../fx/Component", "../models/tripPlan", "../fx/Annotations", "../fx/Logger", "../services/appStoreService", "../common/AppEvents", "./routeStepsNav.html!text", "./routeStepsNav.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Application"),
			i = a("../fx/Component"),
			j = a("../models/tripPlan"),
			k = a("../fx/Annotations"),
			l = a("../fx/Logger"),
			m = a("../services/appStoreService"),
			n = a("../common/AppEvents"),
			o = l.createLogger("RouteStepsNavComponent"),
			p = function (b) {
				function c(a, c) {
					var d = b.call(this, o) || this;
					return d.$state = a, d.appStoreService = c, d.stepIndex = 0, d
				}
				return d(c, b), c.prototype.onPushed = function () {
					b.prototype.onPushed.call(this)
				}, c.prototype.selectStep = function (a, b) {
					a ? (this.selectedStep = a, this.appStoreService.selectStep(a)) : (this.selectedStep = void 0, h.events.raise(n.AppEvents.MAP_RESET_ROUTE_VIEW, this.route, o))
				}, c.prototype.prevStep = function () {
					this.stepIndex > 0 && this.stepIndex--
				}, c.prototype.nextStep = function () {
					this.stepIndex < this.route.steps.length && this.stepIndex++
				}, c.prototype.showStep = function (a) {
					return a.type !== j.SuggestedRouteStepType.WalkToPath
				}, c = e([k.Component({
					tagName: "route-steps-nav",
					template: a("./routeStepsNav.html!text"),
					styles: a("./routeStepsNav.css!css"),
					scope: {
						route: "<"
					}
				}), g(0, k.Inject("$state")), f("design:paramtypes", [Object, m.AppStoreService])], c)
			}(i.ComponentBase);
		return b.RouteStepsNavComponent = p, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/routeAlert.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<route-step\n        step="ctrl.step"\n        show-alert="true"\n        show-type-description="false"\n        show-type-icon="false"\n        show-extra-info="false"\n        is-extra-shown="false">\n</route-step>\n\n<div flex layout="row" layout-align="center center" ng-if="ctrl.loadingAlerts">\n    <md-progress-circular md-mode=\'indeterminate\' md-diameter="200"></md-progress-circular>\n</div>\n\n<div class="alert-content" ng-repeat="lineAlert in ctrl.step.alerts.lineAlerts" ng-if="!ctrl.loadingAlerts">\n    <div class="publicaton-date">\n        <div class="section-title" ng-if="lineAlert.date">{{\'service_alert_details_publication_date\' | translate: ctrl.getDateTranslateParam(lineAlert)}}</div>\n        <div class="title">{{lineAlert.title}}</div>\n    </div>\n\n    <div class="affected-dates" ng-if="lineAlert.activeFrom">\n        <div class="section-title">{{\'service_alert_time_range_header\' | translate}}</div>\n        <div class="section-content">\n            <span>{{lineAlert.activeFrom | datetime}}</span>\n            <span ng-if="lineAlert.activeTo">\n                - <span>{{lineAlert.activeTo | datetime}}</span>\n            </span>\n        </div>\n    </div>\n\n    <div class="affected-lines">\n        <div class="section-title">{{\'service_alert_affected_lines_header\' | translate}}</div>\n        <div class="section-content">\n            {{lineAlert.agencyName}} - {{lineAlert.affectedLines}}\n        </div>\n    </div>\n\n    <div class="description" ng-if="!lineAlert.isDescriptionHtml">\n        <span>{{lineAlert.description}}</span>\n    </div>\n\n    <div class="description" ng-if="lineAlert.isDescriptionHtml" ng-bind-html="lineAlert.description"></div>\n\n    <div class="link" ng-if="lineAlert.infoUrl">\n        <a target="_blank" ng-href="{{lineAlert.url}}">{{\'service_alert_more_info_link_text\' | translate}}</a>\n    </div>\n</div>'
		})
	}(), System.registerDynamic("app/route/routeAlert.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/routeAlert.js", ["../fx/Component", "../fx/Annotations", "../fx/Logger", "../services/alertsService", "../services/metroService", "moment", "./routeAlert.html!text", "./routeAlert.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../services/alertsService"),
			l = a("../services/metroService"),
			m = a("moment"),
			n = j.createLogger("RouteAlertComponent"),
			o = function (b) {
				function c(a, c, d) {
					var e = b.call(this, n) || this;
					return e.$sce = a, e.alertsService = c, e.metroService = d, e
				}
				return d(c, b), c.prototype.onPushed = function () {
					var a = this;
					b.prototype.onPushed.call(this), this.step && this.step.alerts.entities.length > 0 && (this.loadingAlerts = !0, this.alertsService.getAlerts(this.step.alerts.entities.map(function (a) {
						return a.entityIdentifier
					})).then(function (b) {
						a.step.alerts.lineAlerts = b
					}).finally(function () {
						a.loadingAlerts = !1
					}))
				}, c.prototype.getDateTranslateParam = function (a) {
					return {
						param1: a.date ? m(a.date).format("L LT") : ""
					}
				}, c = e([i.Component({
					tagName: "route-alert",
					template: a("./routeAlert.html!text"),
					styles: a("./routeAlert.css!css"),
					scope: {
						step: "<"
					}
				}), g(0, i.Inject("$sce")), f("design:paramtypes", [Object, k.AlertsService, l.MetroService])], c)
			}(h.ComponentBase);
		return b.RouteAlertComponent = o, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/map/markerPopup.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '\x3c!--\n    md-tabs does not work appropriately under leaflet popup so we create our own tab like popup\n--\x3e\n<div dir="{{ctrl.getDir()}}">\n    <div class="content-wrapper">\n        <div class="location-icon" ng-bind-html="ctrl.model.imageHtml"></div>\n        <div class="content">\n            <div class="title">{{ctrl.title}}</div>\n            <div class="description" ng-show="ctrl.model.description">\n                 <span ng-repeat="address in ctrl.model.description track by $index">\n                        <span ng-if="address.isImage" ng-bind-html="ctrl.$sce.trustAsHtml(address.data)"></span>\n                        <span ng-if="!address.isImage">{{address.data}}</span>\n                 </span>\n            </div>\n        </div>\n    </div>\n    <div class="share" ng-if="!ctrl.appStoreService.state.customer.designConfiguration.hideSharing">\n\n        <a href ng-click="ctrl.showShareDialog($event)">\n            <md-icon class="icon" md-svg-icon="/images/share/share_icon_new.svg"></md-icon>\n            {{\'action_share_location\' | translate}}\n        </a>\n    </div>\n</div>'
		})
	}(), System.registerDynamic("app/map/markerPopup.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/map/markerPopup.js", ["../fx/Component", "../models/general", "../fx/Annotations", "../fx/Logger", "../services/localeService", "../services/messageService", "../services/shareService", "../components/sharePanel", "../services/analyticsService", "../services/appStoreService", "./markerPopup.html!text", "./markerPopup.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../models/general"),
			j = a("../fx/Annotations"),
			k = a("../fx/Logger"),
			l = a("../services/localeService"),
			m = a("../services/messageService"),
			n = a("../services/shareService"),
			o = a("../components/sharePanel"),
			p = a("../services/analyticsService"),
			q = a("../services/appStoreService"),
			r = k.createLogger("MarkerPopupComponent"),
			s = function (b) {
				function c(a, c, d, e, f, g, h, j) {
					var k = b.call(this, r) || this;
					return k.$translate = a, k.$window = c, k.localeService = d, k.messageService = e, k.analyticsService = f, k.shareService = g, k.appStoreService = h, k.$sce = j, k.FromTo = i.FromTo, k
				}
				return d(c, b), c.prototype.getDir = function () {
					return this.localeService.isRTL() ? "rtl" : "ltr"
				}, c.prototype.goto = function (a) {
					this.logger.log("goto", a);
					var b = {
						where: a
					};
					this.eventsSource.raise("goto", b, r)
				}, c.prototype.showShareDialog = function (a) {
					var b = "?metroId=" + this.shareService.state.user.metroId + "&to=" + encodeURIComponent(this.model.title) + "&tll=" + encodeURIComponent(this.model.location.lat + "_" + this.model.location.lng);
					this.shareService.showShareDialog(a, b, o.ShareCategory.Location, this.$translate.instant("action_share_location"), {
						location: this.title
					})
				}, Object.defineProperty(c.prototype, "title", {
					get: function () {
						return this.model ? this.model.title ? this.model.title : this.$translate.instant("map_tapped_location") : ""
					},
					enumerable: !0,
					configurable: !0
				}), c = e([j.Component({
					tagName: "marker-popup",
					template: a("./markerPopup.html!text"),
					styles: a("./markerPopup.css!css"),
					scope: {
						model: "<?"
					}
				}), g(0, j.Inject("$translate")), g(1, j.Inject("$window")), g(7, j.Inject("$sce")), f("design:paramtypes", [Object, Object, l.LocaleService, m.MessageService, p.AnalyticsService, n.ShareService, q.AppStoreService, Object])], c)
			}(h.ComponentBase);
		return b.MarkerPopupComponent = s, c.exports
	}), System.registerDynamic("app/common/mapHelpers.js", ["../models/latlng"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			var b;
			if (a) {
				b = (new L.GeoJSON.Encoded).decode(a).map(function (a) {
					return {
						lat: a[0],
						lng: a[1]
					}
				})
			}
			return b
		}

		function e(a) {
			return a.points || (a.points = d(a.encodedPolyline)), a.points
		}

		function f(a) {
			var b = e(a);
			return b && b.length > 0 ? b[0] : null
		}

		function g(a) {
			var b = {
					lat: 90,
					lng: 180
				},
				c = {
					lat: -90,
					lng: -180
				};
			return a.forEach(function (a) {
				l.LatLngHelpers.min(b, a), l.LatLngHelpers.max(c, a)
			}), {
				southWest: b,
				northEast: c
			}
		}

		function h(a, b) {
			var c = [],
				d = 0,
				e = 0,
				f = 0,
				g = a.length,
				h = b.length;
			if (0 == g) return c;
			for (var i = Math.cos(a[0].lat * Math.PI / 180); d < g;) {
				var j = 129600,
					l = a[d],
					m = l;
				for (e = f; e < h - 1; e++) {
					var n = k(a[d], b[e], b[e + 1], i);
					n.dist < j && (m = n.point, m.stopName = l.stopName, j = n.dist, f = e)
				}
				c.push(m), d++
			}
			return c
		}

		function i(a) {
			return a * a
		}

		function j(a, b, c) {
			return i((a.lng - b.lng) * c) + i(a.lat - b.lat)
		}

		function k(a, b, c, d) {
			var e = j(b, c, d);
			if (0 == e) return {
				dist: j(a, b, d),
				point: b
			};
			var f = ((a.lng - b.lng) * d * (c.lng - b.lng) * d + (a.lat - b.lat) * (c.lat - b.lat)) / e;
			f = Math.max(0, Math.min(1, f));
			var g = {
				lat: b.lat + f * (c.lat - b.lat),
				lng: b.lng + f * (c.lng - b.lng)
			};
			return {
				dist: j(a, g, d),
				point: g
			}
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var l = a("../models/latlng");
		return b.decodeCoordinatesString = d, b.getLegPoints = e, b.getFirstLegPoint = f, b.calcBounds = g, b.movePointsToPath = h, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/map/map.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<map layout="row" dir="ltr">\n    <div class="map" flex moovit-generate-id="mapElementId"></div>\n</map>\n'
		})
	}(), System.registerDynamic("app/map/map.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/map/map.js", ["../fx/Application", "../common/AppEvents", "../common/jqHelpers", "./markerPopup", "../fx/Component", "../common/mapHelpers", "../common/iconHelpers", "../services/metroService", "../models/general", "../models/latlng", "../models/tripPlan", "../fx/Logger", "../services/userProfileService", "../services/appProfileService", "../fx/Annotations", "../services/appStoreService", "../common/promiseHelpers", "../services/messageService", "../services/localeService", "../services/analyticsService", "./map.html!text", "./map.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Application"),
			i = a("../common/AppEvents"),
			j = a("../common/jqHelpers"),
			k = a("./markerPopup");
		PREVENT_IMPORT_REMOVE(k.MarkerPopupComponent);
		var l = a("../fx/Component"),
			m = a("../common/mapHelpers"),
			n = a("../common/iconHelpers"),
			o = a("../services/metroService"),
			p = a("../models/general"),
			q = a("../models/latlng"),
			r = a("../models/tripPlan"),
			s = a("../fx/Logger"),
			t = a("../services/userProfileService"),
			u = a("../services/appProfileService"),
			v = a("../fx/Annotations"),
			w = a("../services/appStoreService"),
			x = a("../common/promiseHelpers"),
			y = a("../services/messageService"),
			z = a("../services/localeService"),
			A = a("../services/analyticsService"),
			B = s.createLogger("MapComponent"),
			C = function (b) {
				function c(a, c, d, e, f, g, h, i, j) {
					var k = b.call(this, B) || this;
					return k.$timeout = a, k.$q = c, k.metroService = d, k.userProfileService = e, k.appProfileService = f, k.appStoreService = g, k.analyticsService = h, k.messageService = i, k.localeService = j, k.icons = [], k.stops = new Map, k.markers = [], k.legFirstStationMarkers = [], k.stopMarkers = [], k.popups = [], k.locations = [], k.routeLegs = [], k
				}
				return d(c, b), c.prototype.onInit = function () {
					var a = this;
					b.prototype.onInit.call(this), this.initPromise = x.delay(0).then(function () {
						return a.initLeafletMap()
					}).then(function () {
						a.$q.all([a.appStoreService.loadTripPlan(), a.appStoreService.loadLineGroup()]).then(function (b) {
							var c = b[0],
								d = b[1],
								e = !1;
							if (c) {
								var f = c.step;
								(c.from || c.to) && (a.drawFromTo(c.from, c.to, !0, !f, !1), e = !0), c.route && (a.drawRoute(c.route, !f), e = !0), c.step && (a.centerOnRouteStep(c.step), e = !0)
							}!e && d && d.shape && d.stops && d.color && a.onLineDisplay({
								shape: d.shape,
								color: d.color,
								stops: d.stops
							})
						})
					}).catch(function (b) {
						a.messageService.showSiteError(b)
					}), h.events.subscribe(i.AppEvents.TRIPPLAN_QUERY_CHANGED, this, this.onTripPlanQueryChanged), h.events.subscribe(i.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, this, this.onTripPlanRouteSelected), h.events.subscribe(i.AppEvents.MAP_RESET_ROUTE_VIEW, this, this.onResetMapViewToRoute), h.events.subscribe(i.AppEvents.TRIPPLAN_STEP_SELECTED, this, this.onTripPlanStepSelected), h.events.subscribe(i.AppEvents.METRO_CHANGED, this, this.onMetroChanged), h.events.subscribe(i.AppEvents.SIDE_BAR_POPUP_OPEN, this, this.onSideBarOpen), h.events.subscribe(i.AppEvents.SIDE_BAR_POPUP_CLOSE, this, this.onSideBarClose), h.events.subscribe(i.AppEvents.SIDE_NAV_STATE_CHANGED, this, this.onSideNavStateChange), h.events.subscribe(i.AppEvents.LINE_ROUTE_DISPLAY, this, this.onLineDisplay), h.events.subscribe(i.AppEvents.CENTER_MAP, this, this.onCenterMap)
				}, c.prototype.onDestroy = function () {
					b.prototype.onDestroy.call(this), this.map && (this.map.remove(), this.map = null)
				}, c.prototype.waitInit = function () {
					return this.initPromise
				}, c.prototype.initLeafletMap = function () {
					var a = this;
					return SystemJS.import("leaflet-module").then(function () {
						a.icons[p.FromTo.From] = L.icon({
							iconUrl: "/images/pin_from.svg",
							iconSize: [23.33333, 28],
							iconAnchor: [11.666667, 28]
						}), a.icons[p.FromTo.To] = L.icon({
							iconUrl: "/images/pin_to.svg",
							iconSize: [23.33333, 28],
							iconAnchor: [11.666667, 28]
						});
						var b = L.latLng(-89.98155760646617, -180),
							c = L.latLng(89.99346179538875, 180),
							d = L.latLngBounds(b, c),
							e = {
								zoomControl: !1,
								attributionControl: !1,
								minZoom: "4",
								maxBounds: d,
								maxBoundsViscosity: 1
							};
						a.map = L.map(a.mapElementId, e), a.map.on("click", function (b) {
							a.handleClick(b)
						}), a.appProfileService.isMobile || L.control.zoom({
							position: "bottomright"
						}).addTo(a.map);
						var f = L.control.attribution();
						return f.setPrefix('Â© <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'), f.addTo(a.map), a.$q.all([a.initCentralPoint(), a.initTileLayer()])
					})
				}, c.prototype.initTileLayer = function () {
					var a = this;
					return this.logger.log("initTileLayer"), this.userProfileService.getMapTilesUrl().then(function (b) {
						var c = b.replace("http:", "https:") + "{z}/{x}/{y}.png",
							d = L.tileLayer(c);
						d.addTo(a.map), d.on("load", function () {
							a.analyticsService.trackMeaningfulPaintEvent("app init")
						})
					})
				}, c.prototype.initCentralPoint = function () {
					var a = this;
					return this.logger.log("initCentralPoint"), this.userProfileService.getCurrentMetroInfo().then(function (b) {
						var c = a.appStoreService.state.customer && a.appStoreService.state.customer.latLng ? a.appStoreService.state.customer.latLng : q.LatLngHelpers.fromMvLatLon(b.metroAreaData.defaultLocation),
							d = a.metroService.zoomLevel;
						a.logger.log("Initializing leaflet map with", {
							centeral: c,
							zoom: d
						}), a.map.setView(c, d)
					})
				}, c.prototype.onCenterMap = function (a) {
					this.logger.log("onCenterMap", a), a.centerPoint && this.fitBoundsByPoints([q.LatLngHelpers.fromMvLatLon(a.centerPoint)])
				}, c.prototype.onTripPlanRouteSelected = function (a) {
					var b = this;
					this.logger.log("onTripPlanRouteSelected", a), this.waitInit().then(function () {
						var c = new Date;
						b.logger.log("drawRoute BEFORE"), b.drawRoute(a.route);
						var d = new Date;
						b.logger.log("drawRoute AFTER:" + (d.valueOf() - c.valueOf()))
					})
				}, c.prototype.onLineDisplay = function (a) {
					var b = this;
					this.logger.log("onLineDisplay", a), this.removeLinePolyline(), this.cleanRouteLayers(), a && a.shape && a.shape.encodedShape && this.waitInit().then(function () {
						var c = new Date;
						b.logger.log("drawRoute BEFORE");
						var d = a.color,
							e = m.decodeCoordinatesString(a.shape.encodedShape);
						if (e && e.length > 0) {
							var f = {
								color: "#" + d,
								weight: 4,
								opacity: .8
							};
							b.linePolyline = L.polyline(e, f).addTo(b.map);
							var g = a.stops.map(function (a) {
								var b = q.LatLngHelpers.fromMvLatLon(a.location);
								return b.stopName = a.name, b
							});
							g[g.length - 1];
							b.createStopMarkers("#" + d, g, e, !1, !1), b.fitBoundsByPoints(e)
						} else b.removeLinePolyline();
						var h = new Date;
						b.logger.log("drawRoute AFTER:" + (h.valueOf() - c.valueOf()))
					})
				}, c.prototype.removeLinePolyline = function () {
					this.linePolyline && (this.map.removeLayer(this.linePolyline), this.linePolyline = null)
				}, c.prototype.onResetMapViewToRoute = function (a) {
					this.fitBounds()
				}, c.prototype.drawRoute = function (a, b) {
					void 0 === b && (b = !0), this.removeFromToLine(), a && (this.loadStopsMetaData(a.response.supplementalData.mVStopSyncedMetaDataList), this.drawRouteLegs(a.steps, b))
				}, c.prototype.loadStopsMetaData = function (a) {
					if (a)
						for (var b = 0, c = a; b < c.length; b++) {
							var d = c[b];
							this.stops[d.stopId] = d
						}
				}, c.prototype.onTripPlanStepSelected = function (a) {
					this.logger.log("onTripPlanStepSelected", a), this.centerOnRouteStep(a.step)
				}, c.prototype.centerOnRouteStep = function (a) {
					var b = this;
					this.logger.log("drawStep"), this.waitInit().then(function () {
						var c = [];
						if (a.type == r.SuggestedRouteStepType.StartFrom || a.type == r.SuggestedRouteStepType.WaitFor) {
							var d = m.getFirstLegPoint(a.leg);
							d && c.push(d)
						} else c = m.getLegPoints(a.leg);
						c.length > 0 && b.fitBoundsByPoints(c)
					})
				}, c.prototype.onTripPlanQueryChanged = function (a) {
					var b = this;
					this.logger.log("onTripPlanQueryChanged", a), this.waitInit().then(function () {
						var c = !a.isPinning && !a.isViewItinerary && !a.isToggling,
							d = !a.isViewItinerary,
							e = a.isPinning || a.isUseCurrentLocation;
						b.drawFromTo(a.from, a.to, d, c, e)
					})
				}, c.prototype.drawFromTo = function (a, b, c, d, e) {
					this.logger.log("drawFromTo", {
						from: a,
						to: b,
						drawLine: c,
						showMarkers: e
					});
					var f = this.ensureMarker(p.FromTo.From, a, e);
					(f |= this.ensureMarker(p.FromTo.To, b, e)) && (this.cleanRouteLayers(), c && this.drawFromToLine(), d && this.fitBounds())
				}, c.prototype.onMarkerPopupGoto = function (a) {
					this.logger.log("onMarkerPopupGoto", a);
					var b = this.markers[a.where];
					b && b.openPopup()
				}, c.prototype.createMarker = function (a, b, c) {
					this.logger.log("createMarker", {
						fromTo: a,
						location: b,
						visible: c
					});
					var d = [b.latlng.lat, b.latlng.lng],
						e = L.marker(d, {
							icon: this.icons[a],
							zIndexOffset: 1e3
						}).addTo(this.map),
						f = this.popups[a] = this.createComponent("marker-popup"),
						g = f;
					g.events.subscribe("goto", this, this.onMarkerPopupGoto), g.model = {
						title: b.name,
						description: b.address,
						imageHtml: b.imageHtml,
						fromTo: a,
						location: b.latlng
					};
					e.bindPopup(j.getSingleNode(g.getElement()), {
						closeButton: !1,
						offset: L.point(0, -25)
					});
					this.markers[a] = e, c && e.openPopup()
				}, c.prototype.removeMarker = function (a) {
					this.logger.log("removeMarker", a);
					var b = this.markers[a];
					b && (this.map.removeLayer(b), this.markers[a] = null);
					var c = this.popups[a];
					c && (c.destroy(), this.popups[a] = null)
				}, c.prototype.ensureMarker = function (a, b, c) {
					return this.logger.log("ensureMarker", {
						fromTo: a,
						location: b,
						visible: c
					}), b == this.locations[a] ? (this.logger.log("Request marker was already created"), !1) : (this.removeMarker(a), this.removeFromToLine(), this.locations[a] = b, b && this.createMarker(a, b, c), !0)
				}, c.prototype.createEnteranceMarker = function (a) {
					if (!a) return void this.logger.error("createEnteranceMarker - got null as point");
					this.logger.log("createEnteranceMarker", a);
					var b = this.appProfileService.isRetina ? 30 : 33,
						c = this.appProfileService.isRetina ? 21 : 24,
						d = L.icon({
							iconUrl: "/images/pathwayEntrance.svg",
							iconSize: [c, b],
							iconAnchor: [c / 2, b]
						}),
						e = [a.lat, a.lng],
						f = L.marker(e, {
							icon: d
						}).addTo(this.map);
					this.legFirstStationMarkers.push(f)
				}, c.prototype.createFirstAndLastStationMarker = function (a, b, c, d) {
					this.logger.log("createFirstAndLastStationMarker", a, b, c);
					var e, f = this.appProfileService.isRetina ? 30 : 33,
						g = this.appProfileService.isRetina ? 21 : 24;
					if (e = d.stopMetaData && d.stopMetaData.stopImageOnMapHtml && -1 != d.stopMetaData.stopImageOnMapHtml.indexOf("<") ? L.divIcon({
							html: d.stopMetaData.stopImageOnMapHtml,
							iconSize: [g, f],
							iconAnchor: [g / 2, f],
							className: "stop-icon"
						}) : L.icon({
							iconUrl: n.getLegTypeStationUrl(a, this.appProfileService.isRetina),
							iconSize: [g, f],
							iconAnchor: [g / 2, f]
						}), a != r.LegType.StartFrom) {
						if (b) {
							var h = [b.lat, b.lng],
								i = L.marker(h, {
									icon: e
								}).addTo(this.map);
							this.legFirstStationMarkers.push(i)
						}
						if (c) {
							var h = [c.lat, c.lng],
								i = L.marker(h, {
									icon: e
								}).addTo(this.map);
							this.legFirstStationMarkers.push(i)
						}
					}
				}, c.prototype.createStopMarkers = function (a, b, c, d, e) {
					void 0 === d && (d = !0), void 0 === e && (e = !0), this.logger.log("createStopMarkers");
					for (var f = e ? m.movePointsToPath(d ? b.slice(1, -1) : b, c) : b, g = 0, h = f; g < h.length; g++) {
						var i = h[g],
							j = [i.lat, i.lng],
							k = L.divIcon({
								className: "stop-div-icon",
								html: '<div style="border-color:' + a + '"></div>',
								iconSize: [10, 10]
							}),
							l = L.marker(j, {
								icon: k,
								title: i.stopName
							}).addTo(this.map);
						this.stopMarkers.push(l)
					}
				}, c.prototype.fitBounds = function () {
					this.logger.log("fitBounds");
					var a = this.markers[p.FromTo.From],
						b = this.markers[p.FromTo.To];
					if (a && b) {
						var c = L.latLngBounds(a.getLatLng(), b.getLatLng());
						this.internalMapFitBounds(c)
					} else(a || b) && this.map.setView((a || b).getLatLng())
				}, c.prototype.fitBoundsByPoints = function (a) {
					this.logger.log("fitBoundsByPoints");
					var b = m.calcBounds(a),
						c = L.latLngBounds(b.southWest, b.northEast);
					this.internalMapFitBounds(c)
				}, c.prototype.internalMapFitBounds = function (a) {
					var b = this.getFooterElement(),
						c = 100,
						d = 10,
						e = this.appStoreService.state.sideNavigation.state == w.SideNavState.Expanded ? 270 : this.appStoreService.state.sideNavigation.state == w.SideNavState.Hidden ? 10 : c,
						f = [this.localeService.isRTL() ? c : e, b.length > 0 ? b[0].clientHeight + 20 : d],
						g = [this.localeService.isRTL() ? e : c, d];
					this.map.fitBounds(a, {
						paddingTopLeft: g,
						paddingBottomRight: f
					})
				}, c.prototype.getFooterElement = function () {
					return j.find("footer")
				}, c.prototype.drawRouteLegs = function (a, b) {
					var c = this;
					void 0 === b && (b = !0), this.logger.log("drawRouteSteps", a), this.cleanRouteLayers();
					var d = [];
					a.forEach(function (b, e) {
						var f = b.leg,
							g = b.legType,
							h = b.extra.legImageMetaData;
						if (g != r.LegType.WaitFor && g != r.LegType.StartFrom) {
							var i = m.getLegPoints(f);
							d = d.concat(i);
							var j = c.getStepColor(b),
								k = {
									color: j,
									weight: 4,
									opacity: .8
								};
							if (g != r.LegType.WalkToPath) {
								var l = L.polyline(i, k).addTo(c.map);
								c.routeLegs.push(l)
							}
							if (g != r.LegType.Walk && g != r.LegType.Car && g != r.LegType.WalkToPath && g != r.LegType.WaitFor) {
								var n = void 0;
								if (b.type == r.SuggestedRouteStepType.RideTo) {
									var o = b.extra.selectedLine;
									n = f.altLineIds.find(function (a) {
										return a.lineId == o.lineId
									}).stopSequenceIds
								} else n = f.stopIds;
								var p = n.map(function (a) {
										var b = c.stops[a] ? q.LatLngHelpers.fromMvLatLon(c.stops[a].stopLocation) : null;
										return b && c.stops[a] && (b.stopName = c.stops[a].stopName), b
									}),
									s = p[p.length - 1];
								e < a.length - 1 && b.nextStep.legType == g && (s = null), c.createFirstAndLastStationMarker(g, p[0], s, h), c.createStopMarkers(j, p, i)
							}
							g === r.LegType.WalkToPath && f.points && c.createEnteranceMarker(f.points.originPathwayLocation || f.points.destinationPathwayLocation)
						}
					}), b && this.fitBoundsByPoints(d)
				}, c.prototype.getStepColor = function (a) {
					return a.type != r.SuggestedRouteStepType.WalkTo && a.type != r.SuggestedRouteStepType.WalkToPath && a.extra.legImageMetaData.lineColor ? a.type == r.SuggestedRouteStepType.RideTo ? a.extra.selectedLine.lineColor : a.extra.legImageMetaData.lineColor : "#000000"
				}, c.prototype.removeLayers = function (a) {
					if (a && a.length > 0)
						for (var b = 0, c = a; b < c.length; b++) {
							var d = c[b];
							this.map.removeLayer(d)
						}
				}, c.prototype.cleanRouteLayers = function () {
					this.logger.log("removeRouteLegs"), this.removeLayers(this.routeLegs), this.removeLayers(this.legFirstStationMarkers), this.removeLayers(this.stopMarkers), this.routeLegs = [], this.legFirstStationMarkers = [], this.stopMarkers = []
				}, c.prototype.drawFromToLine = function () {
					this.logger.log("drawFromToLine");
					var a = this.markers[p.FromTo.From],
						b = this.markers[p.FromTo.To];
					if (a && b) {
						var c = [a.getLatLng(), b.getLatLng()],
							d = {
								color: "#000",
								weight: 3,
								dashArray: "3,8"
							};
						this.fromToLine = L.polyline(c, d).addTo(this.map)
					}
				}, c.prototype.removeFromToLine = function () {
					this.logger.log("removeFromToLine"), this.fromToLine && (this.map.removeLayer(this.fromToLine), this.fromToLine = null)
				}, c.prototype.handleClick = function (a) {
					if (this.logger.log("handleClick", a), this.markers.length > 0 && this.markers[0]) {
						if (this.markers[0].getLatLng().distanceTo(a.latlng) < 50) return
					}
					var b = {
						latlng: {
							lat: a.latlng.lat,
							lng: a.latlng.lng
						}
					};
					h.events.raise(i.AppEvents.MAP_CLICKED, b, B)
				}, c.prototype.onMetroChanged = function (a) {
					return this.initCentralPoint()
				}, c.prototype.onSideBarOpen = function () {}, c.prototype.onSideBarClose = function () {
					this.fitBounds()
				}, c.prototype.onSideNavStateChange = function () {
					var a = this;
					setTimeout(function () {
						a.map.invalidateSize({
							animate: !0
						}), a.fitBounds()
					}, 500)
				}, c = e([v.Component({
					tagName: "map",
					template: a("./map.html!text"),
					styles: a("./map.css!css"),
					scope: {}
				}), g(0, v.Inject("$timeout")), g(1, v.Inject("$q")), f("design:paramtypes", [Object, Object, o.MetroService, t.UserProfileService, u.AppProfileService, w.AppStoreService, A.AnalyticsService, y.MessageService, z.LocaleService])], c)
			}(l.ComponentBase);
		return b.MapComponent = C, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/sideBar/sideBarPopup.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<side-bar-popup layout="row">\n    <div class="side-bar-popup-wrapper ng-enter" ng-show="ctrl.visible" flex layout="row">\n        <close-button ng-click="ctrl.close($event)" ng-if="ctrl.activated"></close-button>\n\n        <ng-transclude layout="column" flex></ng-transclude>\n    </div>\n</side-bar-popup>'
		})
	}(), System.registerDynamic("app/sideBar/sideBarPopup.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/sideBar/sideBarPopup.js", ["../fx/Application", "../fx/Component", "../fx/Annotations", "../fx/Logger", "../common/jqHelpers", "../common/AppEvents", "./sideBarPopup.html!text", "./sideBarPopup.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../fx/Application"),
			h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../common/jqHelpers"),
			l = a("../common/AppEvents"),
			m = j.createLogger("SideBarPopupComponent"),
			n = function (b) {
				function c() {
					var a = b.call(this, m) || this;
					return a.visible = !1, a
				}
				return d(c, b), c.prototype.onInit = function () {
					b.prototype.onInit.call(this), this.parent = this.getParent(), this.parent.onPopupCreated(this)
				}, c.prototype.close = function (a) {
					this.activated && (a && k.markEventAsHandled(a), this.parent.pop())
				}, c.prototype.onClosed = function () {
					this.visible = !1, g.events.raise(l.AppEvents.SIDE_BAR_POPUP_CLOSE, {
						key: this.key
					}, m)
				}, c.prototype.onOpened = function (a) {
					this.visible = !0, this.key = a, g.events.raise(l.AppEvents.SIDE_BAR_POPUP_OPEN, {
						key: a
					}, m)
				}, c.prototype.onActivated = function () {
					this.activated = !0
				}, c.prototype.onDeactivated = function () {
					this.activated = !1
				}, c = e([i.Component({
					tagName: "side-bar-popup",
					template: a("./sideBarPopup.html!text"),
					styles: a("./sideBarPopup.css!css"),
					transclude: !0
				}), f("design:paramtypes", [])], c)
			}(h.ComponentBase);
		return b.SideBarPopupComponent = n, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/sideBar/multiSideBar.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<multi-side-bar layout="row">\n    <ng-transclude layout="row" flex>\n\n    </ng-transclude>\n</multi-side-bar>\n\n'
		})
	}(), System.registerDynamic("app/sideBar/multiSideBar.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/sideBar/multiSideBar.js", ["../fx/Component", "./sideBarPopup", "../fx/Annotations", "../fx/Logger", "./multiSideBar.html!text", "./multiSideBar.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../fx/Component"),
			h = a("./sideBarPopup"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger");
		PREVENT_IMPORT_REMOVE(h.SideBarPopupComponent);
		var k = j.createLogger("MultiSideBarComponent"),
			l = function (b) {
				function c() {
					var a = b.call(this, k) || this;
					return a.popups = [], a.stack = [], a.numOpenPanels = 0, a
				}
				return d(c, b), c.prototype.onInit = function () {
					b.prototype.onInit.call(this)
				}, c.prototype.onDestroy = function () {
					b.prototype.onDestroy.call(this)
				}, c.prototype.onPopupCreated = function (a) {
					this.popups.push(a), this.updateNumOpenPanels()
				}, c.prototype.current = function () {
					return this.stack.length ? this.stack[this.stack.length - 1] : null
				}, c.prototype.open = function (a, b) {
					for (; this.stack.length > 0;) this.pop();
					this.push(a, b), this.updateNumOpenPanels()
				}, c.prototype.push = function (a, b) {
					if (!this.contains(a)) {
						var c = this.current();
						c && c.onDeactivated(), this.stack.push(a), a.onOpened(b), a.onActivated(), this.updateNumOpenPanels()
					}
				}, c.prototype.pop = function () {
					var a = this.current();
					if (a) {
						this.stack.pop(), a.onDeactivated(), a.onClosed();
						var a = this.current();
						return a && a.onActivated(), this.updateNumOpenPanels(), a
					}
				}, c.prototype.closeAll = function () {
					for (; this.stack.length > 0;) this.pop()
				}, c.prototype.contains = function (a) {
					return -1 != this.stack.indexOf(a)
				}, c.prototype.isOpened = function () {
					return this.numOpenPanels > 0
				}, c.prototype.updateNumOpenPanels = function () {
					this.numOpenPanels = 0;
					for (var a = 0, b = this.popups; a < b.length; a++) {
						b[a].visible && this.numOpenPanels++
					}
				}, c = e([i.Component({
					tagName: "multi-side-bar",
					template: a("./multiSideBar.html!text"),
					styles: a("./multiSideBar.css!css"),
					transclude: !0
				}), f("design:paramtypes", [])], c)
			}(g.ComponentBase);
		return b.MultiSideBarComponent = l, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/sideBar/sideBar.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '\n<div class="header {{ctrl.getCurrentViewName().toLowerCase()}}"\n     ng-class="{\'has-parent\':ctrl.back,\n                \'logoed\': ctrl.isCameFromSharedUrl(),\n                \'splash\': ctrl.showSplashScreen(),\n                \'no-tabs\': !(ctrl.displayedTabs && ctrl.displayedTabs.length > 0),\n                \'close-banner\': ctrl.isFormInUse() && ctrl.getBannerType() != \'LiveDirections\'\n                }">\n    <a ng-if="ctrl.designConfig.logoLink" ng-href="{{ctrl.designConfig.logoLink}}" target="_blank">\n        <md-icon ng-if="ctrl.designConfig.isLogoSVG" md-svg-src="{{ctrl.designConfig.logo}}" class="logo"></md-icon>\n        <img ng-if="!ctrl.designConfig.isLogoSVG" ng-src="{{ctrl.designConfig.logo}}" class="logo"/>\n    </a>\n    <div ng-if="!ctrl.designConfig.logoLink">\n        <md-icon ng-if="ctrl.designConfig.isLogoSVG" md-svg-src="{{ctrl.designConfig.logo}}" class="logo"></md-icon>\n        <img ng-if="!ctrl.designConfig.isLogoSVG" ng-src="{{ctrl.designConfig.logo}}" class="logo"/>\n    </div>\n\n    <metro-info ng-if="ctrl.isTabAllowed(ctrl.AppStates.tripPlan.name)"></metro-info>\n\n    <a class="change-language" href ng-click="ctrl.showLangSelector($event)" title="{{\'change_language\' | translate}}">\n        <md-icon class="icon" md-svg-src="/images/change_language.svg"></md-icon>\n    </a>\n\n    \x3c!--Use My Location button--\x3e\n    <md-tabs ng-if="ctrl.appStoreService.state.uiReady"\n             class="links"\n             md-autoselect="false"\n             md-selected="ctrl.selectedTabIndex"\n             ng-click="ctrl.displayedTabs[ctrl.selectedTabIndex].onClick()">\n        <md-tab ng-repeat="tab in ctrl.displayedTabs | orderBy:\'sortOrder\'" ng-if="!tab.dynamicFlag || tab.dynamicFlag()" ng-class="tab_{{tab.id}}">\n            <md-tab-label>\n                <div class="tab_{{tab.tabName}}">\n                    {{tab.labelKey | translate}}\n                </div>\n            </md-tab-label>\n        </md-tab>\n    </md-tabs>\n\n    <md-icon ng-if="!ctrl.isSideNavHidden()"\n             class="sideNavToggler"\n             ng-click="ctrl.openSideNavigation()"\n             md-svg-src="/images/nav-icons/mobile_menu.svg"></md-icon>\n</div>\n\n\n\n\n<div ng-if="ctrl.appStoreService.state.uiReady" ui-view flex layout="column" ng-class="{\'mobile-main-content\':ctrl.appProfileService.isMobile , \'has-back-home\': ctrl.appProfileService.isMobile && ctrl.back && ctrl.isCameFromSharedUrl()}"></div>\n\n<div class="sidebar-footer"\n      ng-class="{\'hidden\': !(ctrl.appProfileService.isMobile && ctrl.back && ctrl.isCameFromSharedUrl())}">\n    <button class="back-button" ng-click="ctrl.back()">\n    {{\'web_navigate_home_button\'|translate}}\n</button>\n</div>\n\n'
		})
	}(), System.registerDynamic("app/sideBar/sideBar.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/sideBar/sideBar.js", ["../fx/Component", "../fx/Logger", "../services/appProfileService", "../fx/Annotations", "../services/appStoreService", "../fx/Application", "../common/AppEvents", "../routes", "../services/mobileService", "../../common/customer", "./sideBar.html!text", "./sideBar.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__assign || Object.assign || function (a) {
				for (var b, c = 1, d = arguments.length; c < d; c++) {
					b = arguments[c];
					for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
				}
				return a
			},
			f = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			g = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			h = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var i = a("../fx/Component"),
			j = a("../fx/Logger"),
			k = a("../services/appProfileService"),
			l = a("../fx/Annotations"),
			m = a("../services/appStoreService"),
			n = a("../fx/Application"),
			o = a("../common/AppEvents"),
			p = a("../routes"),
			q = a("../services/mobileService"),
			r = a("../../common/customer"),
			s = j.createLogger("SideBarComponent"),
			t = function (b) {
				function c(a, c, d, e, f, g, h, i) {
					var j = b.call(this, s) || this;
					return j.$state = a, j.$stateParams = c, j.$window = d, j.$timeout = e, j.featureFlags = f, j.appProfileService = g, j.mobileService = h, j.appStoreService = i, j.allTabs = [{
						tabName: p.Routes.directions.name,
						labelKey: "tab_directions",
						featureFlag: null,
						urlParam: null,
						sortOrder: 1,
						onClick: function () {
							j.goto(p.Routes.directions.name)
						}
					}, {
						tabName: p.Routes.lines.name,
						labelKey: "tab_lines",
						dynamicFlag: function () {
							return j.appStoreService.state.user.metro
						},
						featureFlag: null,
						urlParam: null,
						sortOrder: 2,
						onClick: function () {
							j.goto(p.Routes.lines.name)
						}
					}, {
						tabName: p.Routes.alerts.name,
						labelKey: "service_alert_label",
						dynamicFlag: function () {
							return j.appStoreService.state.user.metro && j.appStoreService.state.user.metro.metroAreaData && (!j.appStoreService.state.user.metro.metroAreaData.features || j.appStoreService.state.user.metro.metroAreaData.features.ALERTS_VIEW)
						},
						featureFlag: null,
						urlParam: null,
						sortOrder: 3,
						onClick: function () {
							j.goto(p.Routes.alerts.name)
						}
					}, {
						tabName: p.Routes.itinerary.name,
						labelKey: "itinerary_activity_title",
						featureFlag: null,
						urlParam: null,
						sortOrder: 4,
						onClick: function () {
							j.gotoDetailsView()
						}
					}, {
						tabName: p.Routes.mapView.name,
						labelKey: "map_view_title",
						featureFlag: null,
						urlParam: null,
						sortOrder: 5,
						onClick: function () {
							j.gotoMapView()
						}
					}, {
						tabName: p.Routes.lineGroupStops.name,
						labelKey: "linetab_lines",
						featureFlag: null,
						urlParam: null,
						sortOrder: 10,
						onClick: function () {
							j.gotoLineGroupStops()
						}
					}, {
						tabName: p.Routes.mapLineView.name,
						labelKey: "linetab_map",
						dynamicFlag: function () {
							return j.appStoreService.state.user.metro && j.appStoreService.state.user.metro.metroAreaData && j.appStoreService.state.user.metro.metroAreaData.features && j.appStoreService.state.user.metro.metroAreaData.features.LINES_MAP_VIEW
						},
						featureFlag: null,
						urlParam: null,
						sortOrder: 11,
						onClick: function () {
							j.gotoMapLineView()
						}
					}, {
						tabName: p.Routes.settings.name,
						labelKey: "settings",
						featureFlag: null,
						urlParam: null,
						sortOrder: 6,
						onClick: function () {}
					}, {
						tabName: p.Routes.language.name,
						labelKey: "language_select",
						featureFlag: null,
						urlParam: null,
						sortOrder: 7,
						onClick: function () {}
					}, {
						tabName: p.Routes.metro.name,
						labelKey: "select_metro_title",
						featureFlag: null,
						urlParam: null,
						sortOrder: 8,
						onClick: function () {}
					}, {
						tabName: p.Routes.alert.name,
						labelKey: "service_alert_label",
						featureFlag: null,
						urlParam: null,
						sortOrder: 9,
						onClick: function () {}
					}], j.back = null, j.selectedTabIndex = -1, j.displayedTabs = [], j.AppStates = p.Routes, j.stateNameToAllowedTabs = j.buildStateNameToAllowedTabs(), j.allTabs = j.allTabs.filter(function (a) {
						return !a.featureFlag || f[a.featureFlag]
					}), j.allTabs = j.allTabs.filter(function (a) {
						return !a.urlParam || -1 != d.location.search.indexOf(a.urlParam)
					}), j.appStoreService.state.customer.designConfiguration.hideLines && (j.allTabs = j.allTabs.filter(function (a) {
						return a.tabName != p.Routes.lines.name
					})), j.appStoreService.state.customer.designConfiguration.hideAlerts && (j.allTabs = j.allTabs.filter(function (a) {
						return a.tabName != p.Routes.alerts.name
					})), j.designConfig = j.appStoreService.state.customer.designConfiguration, j
				}
				return d(c, b), c.prototype.isDirectionsBannerAvailable = function () {
					if (this.$stateParams && this.$stateParams.customerId) {
						var a = r.Customer.getCustomerById(this.$stateParams.customerId);
						if (a) return !a.designConfiguration.hideDirectionsBanner
					}
					return !0
				}, c.prototype.getCurrentViewName = function () {
					return this.$state.current.name
				}, c.prototype.getBannerType = function () {
					return this.appStoreService.isOnItineraryView() || this.appStoreService.isOnMapView() ? "LiveDirections" : "InstallApp"
				}, c.prototype.onLiveDirectionsClicked = function (a) {
					this.appStoreService.trackStoreClick(a, "LiveDirections", null)
				}, c.prototype.isTabAllowed = function (a) {
					p.Routes.isTripPlanView(a) && (a = p.Routes.directions.name);
					var b = this.stateNameToAllowedTabs[this.getCurrentViewName()];
					if (!b) return !1;
					for (var c = 0; c < b.tabs.length; c++)
						if (b.tabs[c] == a) return !0;
					return !1
				}, c.prototype.onInit = function () {
					b.prototype.onInit.call(this), this.loadStateFromUrl(), this.refreshTabsStrip(), this.getStoreUrl(), n.events.subscribe(o.AppEvents.URL_CHANGED, this, this.onUrlChanged)
				}, c.prototype.onUrlChanged = function () {
					this.logger.log("onUrlChanged"), this.loadStateFromUrl(), this.refreshTabsStrip()
				}, c.prototype.refreshTabsStrip = function () {
					var a = this;
					this.$timeout(function () {
						var b = a.stateNameToAllowedTabs[a.getCurrentViewName()];
						b ? (a.displayedTabs = a.allTabs.filter(function (a) {
							for (var c = 0; c < b.tabs.length; c++)
								if (b.tabs[c] == a.tabName) return !0
						}), a.$timeout(function () {
							a.selectedTabIndex = b.defaultTab
						})) : a.displayedTabs = []
					})
				}, c.prototype.loadStateFromUrl = function () {
					this.logger.log("loadStateFromUrl");
					var a = this.$state.current && this.$state.current.name;
					if (!a) return void this.logger.log("NO state name");
					var b = this.stateNameToAllowedTabs[a];
					b ? (this.selectedTabIndex = b.defaultTab, this.back = b.back) : (this.selectedTabIndex = -1, this.back = null), this.appStoreService.state.view.back = this.back, this.logger.log("Changing selected tab index according to current state name"), this.logger.log("  stateName: " + a), this.logger.log("  selectedTabIndex: " + this.selectedTabIndex), this.logger.log("  hasBackButton: ", this.back)
				}, c.prototype.gotoTripPlan = function () {
					this.appStoreService.gotoTripPlan()
				}, c.prototype.gotoItinerary = function () {
					this.appStoreService.gotoItinerary()
				}, c.prototype.gotoMapView = function () {
					this.appStoreService.gotoMapView()
				}, c.prototype.gotoLineGroupStops = function () {
					this.appStoreService.gotoLineGroupStops()
				}, c.prototype.gotoMapLineView = function () {
					this.appStoreService.gotoMapLineView()
				}, c.prototype.gotoDetailsView = function () {
					this.appStoreService.gotoDetailsView()
				}, c.prototype.gotoLines = function () {
					this.appStoreService.gotoLines()
				}, c.prototype.gotoAlerts = function () {
					this.appStoreService.gotoAlerts()
				}, c.prototype.goto = function (a) {
					this.$state.go(a, e({}, this.$stateParams, {
						metroSeoName: this.appStoreService.state.user.metroSeoName,
						metroId: this.appStoreService.state.user.metroId
					}))
				}, c.prototype.cleanStateParams = function (a) {
					var b = this;
					a.forEach(function (a) {
						b.$stateParams[a] = null
					})
				}, c.prototype.openSideNavigation = function () {
					this.appStoreService.changeSideNavigationState(m.SideNavState.Expanded)
				}, c.prototype.isDirectionsVisible = function () {
					return this.$state.current.name == this.AppStates.tripPlan.name
				}, c.prototype.isDetailsVisible = function () {
					return this.appProfileService.isMobile && (this.$state.current.name == this.AppStates.itinerary.name || this.$state.current.name == this.AppStates.mapView.name)
				}, c.prototype.isCameFromSharedUrl = function () {
					return this.appStoreService.state.isFromSharing
				}, c.prototype.isFormInUse = function () {
					return this.$state.isFormInUse
				}, c.prototype.showLangSelector = function (a) {
					this.appStoreService.gotoLangSelectorView(a)
				}, c.prototype.getStoreUrl = function () {
					var a = this;
					this.appStoreService.getLocalizesAppUrls().then(function (b) {
						a.storeUrl = a.appProfileService.isAndroid ? b.googleAppURL : b.iosAppURL
					})
				}, c.prototype.isSideNavHidden = function () {
					return this.appStoreService.state.sideNavigation.state == m.SideNavState.Hidden
				}, Object.defineProperty(c.prototype, "liveDirectionsUrl", {
					get: function () {
						return this.appStoreService.getStoreOrDeepLink("LiveDirections", "LiveDirections")
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.buildStateNameToAllowedTabs = function () {
					var a = this,
						b = {};
					return b[this.AppStates.directions.name] = {
						tabs: [p.Routes.directions.name, p.Routes.lines.name, p.Routes.alerts.name],
						defaultTab: 0,
						back: null
					}, b[this.AppStates.lines.name] = {
						tabs: [p.Routes.directions.name, p.Routes.lines.name, p.Routes.alerts.name],
						defaultTab: 1,
						back: null
					}, b[this.AppStates.toPoi.name] = b[this.AppStates.fromPoi.name] = b[this.AppStates.poiToPoi.name] = b[this.AppStates.tripPlan.name] = b[this.AppStates.directions.name], b[this.AppStates.lineLang.name] = b[this.AppStates.line.name] = b[this.AppStates.lineGroup.name] = b[this.AppStates.linesLang.name] = b[this.AppStates.lines.name], b[this.AppStates.alerts.name] = {
						tabs: [p.Routes.directions.name, p.Routes.lines.name, p.Routes.alerts.name],
						defaultTab: 2,
						back: null
					}, b[this.AppStates.itinerary.name] = {
						tabs: [p.Routes.itinerary.name, this.AppStates.mapView.name],
						defaultTab: 0,
						back: function () {
							a.appStoreService.state.tripPlan.route = null, a.appStoreService.state.isFromSharing = !1, a.appStoreService.state.isSplashScreenVisible = !1, a.gotoTripPlan()
						}
					}, b[this.AppStates.stopArrivals.name] = {
						tabs: [this.AppStates.stopArrivals.name],
						defaultTab: 0,
						back: function () {
							a.gotoItinerary()
						}
					}, b[this.AppStates.mapView.name] = {
						tabs: [p.Routes.itinerary.name, this.AppStates.mapView.name],
						defaultTab: 1,
						back: function () {
							a.appStoreService.state.tripPlan.route = null, a.appStoreService.state.isFromSharing = !1, a.appStoreService.state.isSplashScreenVisible = !1, a.gotoTripPlan()
						}
					}, b[this.AppStates.lineGroupStops.name] = {
						tabs: [p.Routes.lineGroupStops.name, p.Routes.mapLineView.name],
						defaultTab: 0,
						back: function () {
							a.cleanStateParams(["lgid"]), a.gotoLines()
						}
					}, b[this.AppStates.mapLineView.name] = {
						tabs: [p.Routes.lineGroupStops.name, p.Routes.mapLineView.name],
						defaultTab: 1,
						back: function () {
							a.cleanStateParams(["lgid"]), a.gotoLines()
						}
					}, b[this.AppStates.lineStopArrivals.name] = {
						tabs: [p.Routes.lineStopArrivals.name],
						defaultTab: 0,
						back: function () {
							a.cleanStateParams(["sid"]), a.gotoLineGroupStops()
						}
					}, b[this.AppStates.alertDetails.name] = {
						tabs: [p.Routes.alertDetails.name],
						defaultTab: 0,
						back: function () {
							a.cleanStateParams(["alertIds"]), a.gotoAlerts()
						}
					}, b[this.AppStates.settings.name] = {
						tabs: [p.Routes.settings.name],
						defaultTab: 0,
						back: null
					}, b[this.AppStates.language.name] = {
						tabs: [p.Routes.language.name],
						defaultTab: 0,
						back: null
					}, b[this.AppStates.metro.name] = {
						tabs: [p.Routes.metro.name],
						defaultTab: 0,
						back: null
					}, b
				}, c = f([l.Component({
					tagName: "side-bar",
					template: a("./sideBar.html!text"),
					styles: a("./sideBar.css!css")
				}), h(0, l.Inject("$state")), h(1, l.Inject("$stateParams")), h(2, l.Inject("$window")), h(3, l.Inject("$timeout")), h(4, l.Inject("featureFlags")), g("design:paramtypes", [Object, Object, Object, Object, Object, k.AppProfileService, q.MobileService, m.AppStoreService])], c)
			}(i.ComponentBase);
		return b.SideBarComponent = t, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/sideBar/metroInfo.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<a ng-click="ctrl.openSettings($event)" ng-class="{\'hide-selection\': ctrl.appStoreService.state.customer.designConfiguration.hideMetroSelection}">\n    {{ctrl.currentMetroAreaName}}\n</a>'
		})
	}(), System.registerDynamic("app/sideBar/metroInfo.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/sideBar/metroInfo.js", ["../fx/Component", "../fx/Logger", "../fx/Annotations", "../fx/Application", "../common/AppEvents", "../services/appStoreService", "../services/appProfileService", "../services/userProfileService", "./metroInfo.html!text", "./metroInfo.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Logger"),
			j = a("../fx/Annotations"),
			k = a("../fx/Application"),
			l = a("../common/AppEvents"),
			m = a("../services/appStoreService"),
			n = a("../services/appProfileService"),
			o = a("../services/userProfileService"),
			p = i.createLogger("MetroInfoComponent"),
			q = function (b) {
				function c(a, c, d, e) {
					var f = b.call(this, p) || this;
					return f.$mdDialog = a, f.userProfileService = c, f.appProfileService = d, f.appStoreService = e, f
				}
				return d(c, b), c.prototype.onInit = function () {
					var a = this;
					b.prototype.onInit.call(this), k.events.subscribe(l.AppEvents.METRO_CHANGED, this, this.onMetroChanged), this.userProfileService.getCurrentMetroInfo().then(function (b) {
						a.currentMetroAreaName = b.metroAreaData.metroAreaName
					})
				}, c.prototype.onMetroChanged = function (a) {
					this.currentMetroAreaName = a.metroAreaName
				}, c.prototype.openSettings = function (a) {
					this.appStoreService.state.customer.designConfiguration.hideMetroSelection || this.appStoreService.gotoSettingsView(a)
				}, c = e([j.Component({
					tagName: "metro-info",
					template: a("./metroInfo.html!text"),
					styles: a("./metroInfo.css!css"),
					scope: {}
				}), g(0, j.Inject("$mdDialog")), f("design:paramtypes", [Object, o.UserProfileService, n.AppProfileService, m.AppStoreService])], c)
			}(h.ComponentBase);
		return b.MetroInfoComponent = q, c.exports
	}), System.registerDynamic("app/common/dateHelpers.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return new Date(a.getTime())
		}
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.clone = d, c.exports
	}), System.registerDynamic("app/services/daysService.js", ["./Service", "../fx/Annotations", "./userProfileService", "../fx/Logger", "moment", "../common/dateHelpers", "../../common/consts"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./Service"),
			i = a("../fx/Annotations"),
			j = a("./userProfileService"),
			k = a("../fx/Logger"),
			l = a("moment"),
			m = a("../common/dateHelpers"),
			n = a("../../common/consts"),
			o = k.createLogger("MetroService"),
			p = function (a) {
				function b(b, c) {
					var d = a.call(this, o) || this;
					return d.$translate = b, d.userProfileService = c, d.daysAmount = n.DEFAULT_MAX_FUTURE_DAYS, d.limitTo7Days = !0, d.allowOther = !1, d
				}
				return d(b, a), b.prototype.buildDays = function (a) {
					for (var b = [], c = l().startOf("day"), d = 0; d < this.daysAmount; d++) {
						var e = {
							value: d.toString(),
							text: c.format("ddd D/M"),
							date: m.clone(c.toDate())
						};
						b.push(e), c.add(1, "days")
					}
					return a && b.push({
						value: "other",
						text: this.$translate.instant("time_picker_more_options"),
						date: null
					}), this.allowOther = a, a || (this.limitTo7Days = !0), b
				}, b.prototype.rebuildDaysList = function (a) {
					var b = this;
					return this.userProfileService.getCurrentMetroInfo().then(function (a) {
						b.daysAmount = a.maxFutureDays.daysAmount;
						var c = l.utc().startOf("day"),
							d = l(c).add(b.daysAmount, "days");
						b.minDate = c.toDate(), b.maxDate = d.toDate();
						var e = b.daysAmount > 10;
						return b.buildDays(e)
					})
				}, b = e([i.Service({
					name: "daysService"
				}), g(0, i.Inject("$translate")), f("design:paramtypes", [Object, j.UserProfileService])], b)
			}(h.ServiceBase);
		return b.DaysService = p, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/tripPlan/tripPlanTime.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<md-select aria-label="select time" ng-model="ctrl.selectedTimeValue" class="time" flex="50">\n    <md-option ng-repeat="time in ctrl.times track by $index" value="{{time.value}}" ng-click="ctrl.onTimeSelected(time)">\n        {{time.text}}\n    </md-option>\n</md-select>\n\n<md-select ng-if="ctrl.limitTo7Days" aria-label="select day" ng-model="ctrl.selectedDayValue" class="day" flex="50">\n    <md-option ng-repeat="day in ctrl.days track by $index" value="{{day.value}}" ng-click="ctrl.onDaySelected(day)">\n        {{day.text}}\n    </md-option>\n</md-select>\n\n<md-datepicker ng-if="!ctrl.limitTo7Days"\n               ng-model="ctrl.selectedDayDate"\n               md-placeholder="Enter date"\n               ng-change="ctrl.onDayDateSelected()"\n               md-min-date="ctrl.minDate"\n               md-max-date="ctrl.maxDate"\n               md-open-on-focus></md-datepicker>'
		})
	}(), System.registerDynamic("app/tripPlan/tripPlanTime.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/tripPlan/tripPlanTime.js", ["../fx/Application", "../fx/Component", "../common/AppEvents", "../fx/Logger", "../fx/Annotations", "../services/userProfileService", "../services/daysService", "moment", "./tripPlanTime.html!text", "./tripPlanTime.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Application"),
			i = a("../fx/Component"),
			j = a("../common/AppEvents"),
			k = a("../fx/Logger"),
			l = a("../fx/Annotations"),
			m = a("../services/userProfileService"),
			n = a("../services/daysService"),
			o = a("moment"),
			p = k.createLogger("TripPlanTimeComponent"),
			q = function (b) {
				function c(a, c, d) {
					var e = b.call(this, p) || this;
					return e.$translate = a, e.userProfileService = c, e.daysService = d, e.limitTo7Days = !0, e.allowOther = !1, e
				}
				return d(c, b), c.prototype.onInit = function () {
					var a = this;
					b.prototype.onInit.call(this), this.times = this.buildTimes(), this.selectedTime = this.times[0], this.days = this.daysService.buildDays(!1), this.selectedDay = this.days[0], this.selectedDayDate = this.days[0].date, this.daysService.rebuildDaysList().then(function (b) {
						a.days = b, a.limitTo7Days = a.daysService.limitTo7Days, a.minDate = a.daysService.minDate, a.maxDate = a.daysService.maxDate
					}), h.events.subscribe(j.AppEvents.USER_LOCALE_CHANGED, this, this.onUserLocaleChanged), h.events.subscribe(j.AppEvents.METRO_CHANGED, this, this.onMetroChanged)
				}, c.prototype.onPushed = function () {
					if (b.prototype.onPushed.call(this), this.model == this.raisedModel) return void p.log("  Pushed model is the same as the one we raised before");
					this.selectedTime = this.findTimeSlot(this.model) || this.times[0], this.selectedTimeValue = this.selectedTime.value, p.log("  selectedTime: %O", this.selectedTime), p.log("  selectedTimeValue: " + this.selectedTimeValue), this.selectedDay = this.findDaySlot(this.model) || this.days[0], this.selectedDayValue = this.selectedDay.value, this.selectedDayDate = o(this.model).startOf("day").toDate(), p.log("  selectedDay: %O", this.selectedDay), p.log("  selectedDayValue: " + this.selectedDayValue)
				}, c.prototype.raiseOnChanged = function () {
					this.raisedModel = this.buildModel(), this.onChanged({
						model: this.raisedModel
					})
				}, c.prototype.findTimeSlot = function (a) {
					for (var b = o(a), c = 60 * (60 * b.hour() + b.minute()) * 1e3, d = 0, e = this.times; d < e.length; d++) {
						var f = e[d];
						if (f.timeOfDay == c) return f
					}
					return null
				}, c.prototype.findDaySlot = function (a) {
					for (var b = o(a).startOf("day").toDate(), c = 0, d = this.days; c < d.length; c++) {
						var e = d[c];
						if (e.date && e.date.getTime() == b.getTime()) return e
					}
					return null
				}, c.prototype.buildTimes = function () {
					for (var a = [], b = 15, c = o(), d = 864e5, e = 60 * b * 1e3, f = c.diff(c.clone().startOf("day")), g = Math.ceil(f / e) * e, h = d / e, i = 0; i < h; i++) a.push(this.buildTimeModel(i + 1, (g + i * e) % d));
					return a
				}, c.prototype.buildTimeModel = function (a, b) {
					return {
						text: this.buildTimeString(b),
						value: a,
						timeOfDay: b
					}
				}, c.prototype.buildTimeString = function (a) {
					return o().startOf("day").add(a, "milliseconds").format("LT")
				}, c.prototype.buildModel = function () {
					var a = this.selectedTime;
					return (this.limitTo7Days ? o().startOf("day").add(a.timeOfDay, "milliseconds").add(this.selectedDay.value, "days") : o(this.selectedDayDate).add(a.timeOfDay, "milliseconds")).toDate()
				}, c.prototype.onTimeSelected = function (a) {
					if (p.log("onTimeSelected: %O", a), a == this.selectedTime) return void p.log("  No change");
					this.selectedTime = a, this.raiseOnChanged()
				}, c.prototype.onDaySelected = function (a) {
					return "other" == a.value ? void(this.limitTo7Days = !1) : (p.log("onDaySelected: %O", a), a == this.selectedDay ? void p.log("  No change") : (this.selectedDay = a, this.selectedDayDate = a.date, void this.raiseOnChanged()))
				}, c.prototype.onDayDateSelected = function () {
					p.log("onDayDateSelected: %O", this.selectedDayDate);
					var a = this.buildModel(),
						b = this.findDaySlot(a);
					b && (this.limitTo7Days = !0, this.selectedDay = b, this.selectedDayValue = this.selectedDay.value), this.raiseOnChanged()
				}, c.prototype.onUserLocaleChanged = function () {
					var a = this;
					p.log("onUserLocaleChanged"), this.daysService.rebuildDaysList().then(function (b) {
						a.days = b, a.limitTo7Days = a.daysService.limitTo7Days, a.minDate = a.daysService.minDate, a.maxDate = a.daysService.maxDate
					}), this.times = this.buildTimes()
				}, c.prototype.onMetroChanged = function () {
					var a = this;
					p.log("onMetroChanged"), this.daysService.rebuildDaysList().then(function (b) {
						a.days = b, a.limitTo7Days = a.daysService.limitTo7Days, a.minDate = a.daysService.minDate, a.maxDate = a.daysService.maxDate
					})
				}, c.prototype.done = function () {}, c = e([l.Component({
					tagName: "tripplan-time",
					template: a("./tripPlanTime.html!text"),
					styles: a("./tripPlanTime.css!css"),
					scope: {
						model: "<",
						onChanged: "&"
					}
				}), g(0, l.Inject("$translate")), f("design:paramtypes", [Object, m.UserProfileService, n.DaysService])], c)
			}(i.ComponentBase);
		return b.TripPlanTimeComponent = q, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/tripPlan/tripPlanLocation.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="container" ng-class="{\'filled\': ctrl.model[ctrl.searchField].length > 0}">\n    <span class="input-label">{{ctrl.label | translate}}</span>\n    <input type="text"\n            ng-disabled="ctrl.disabled"\n            ng-model="ctrl.model[ctrl.searchField]"\n            ng-change="ctrl.search(ctrl.model[ctrl.searchField])"\n            ng-focus="ctrl.internalOnFocused()"\n            ng-blur="ctrl.internalOnBlur()"\n            placeholder="{{ctrl.placeholder | translate}}"\n            ng-attr-autofocus="{{ctrl.autoFocus ? true : undefined}}">\n    </input>\n    <button type="button" tabindex="-1" ng-if="ctrl.model.name && !ctrl.disabled" ng-click="ctrl.clear()" class="">\n        <md-icon md-svg-icon="md-close" aria-hidden="true"></md-icon>\n        <span class="md-visually-hidden">Clear</span>\n    </button>\n</div>\n'
		})
	}(), System.registerDynamic("app/tripPlan/tripPlanLocation.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/tripPlan/tripPlanLocation.js", ["../fx/Component", "../fx/Logger", "../fx/Annotations", "./tripPlanLocation.html!text", "./tripPlanLocation.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Logger"),
			j = a("../fx/Annotations"),
			k = i.createLogger("TripPlanLocationComponent"),
			l = function (b) {
				function c(a, c, d, e) {
					var f = b.call(this, k) || this;
					return f.$q = a, f.$translate = c, f.$stateParams = d, f.$rootScopee = e, f.searchField = "name", f
				}
				return d(c, b), c.prototype.onInit = function () {
					b.prototype.onInit.call(this)
				}, c.prototype.onPushed = function () {
					b.prototype.onPushed.call(this), this.model && (this.searchField = this.model.fullName ? "fullName" : "name")
				}, c.prototype.search = function (a) {
					var b = this;
					this.logger.log("search: " + a);
					var c = 0 == a.length ? void 0 : {
						searchText: a,
						result: this.$q.when([])
					};
					clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function () {
						b.onSearch({
							args: c
						})
					}, this.delay)
				}, c.prototype.clear = function () {
					this.logger.log("clear"), this.model = {}, this.model[this.searchField] = "", this.onClear({
						location: void 0
					})
				}, c.prototype.internalOnFocused = function () {
					this.logger.log("internalOnFocused"), this.onFocused()
				}, c.prototype.internalOnBlur = function () {
					this.logger.log("internalOnBlur"), this.onBlur()
				}, c = e([j.Component({
					tagName: "tripplan-location",
					template: a("./tripPlanLocation.html!text"),
					styles: a("./tripPlanLocation.css!css"),
					scope: {
						model: "<",
						disabled: "<",
						onSearch: "&",
						onClear: "&",
						onFocused: "&",
						onBlur: "&",
						placeholder: "@",
						label: "@",
						delay: "<",
						autoFocus: "<"
					}
				}), g(0, j.Inject("$q")), g(1, j.Inject("$translate")), g(2, j.Inject("$stateParams")), g(3, j.Inject("$rootScope")), f("design:paramtypes", [Function, Object, Object, Object])], c)
			}(h.ComponentBase);
		return b.TripPlanLocationComponent = l, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/lineSVG.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="" data-ng-bind-html="ctrl.getHtml()"></div>\n'
		})
	}(), System.registerDynamic("app/components/lineSVG.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/lineSVG.js", ["../fx/Component", "../fx/Annotations", "../fx/Logger", "./lineSVG.html!text", "./lineSVG.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = j.createLogger("LineSVGComponent"),
			l = function (b) {
				function c(a) {
					var c = b.call(this, k) || this;
					return c.$sce = a, c
				}
				return d(c, b), c.prototype.onPushed = function () {
					b.prototype.onPushed.call(this)
				}, c.prototype.getHtml = function () {
					return this.$sce.trustAsHtml(this.imageHtml)
				}, c = e([i.Component({
					tagName: "line-svg",
					template: a("./lineSVG.html!text"),
					styles: a("./lineSVG.css!css"),
					scope: {
						imageHtml: "<"
					}
				}), g(0, i.Inject("$sce")), f("design:paramtypes", [Object])], c)
			}(h.ComponentBase);
		return b.LineSVGComponent = l, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/routeSummary.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<route-summary>\n    <div layout="row" layout-align="center center" class="route-inner" ng-if="ctrl.route">\n        <div class="route-time">\n            <span class="duration">{{ctrl.route.durationMinutes}}</span>\n            <i class="minutes">{{\'min\' | translate}}</i>\n        </div>\n        <div flex layout="column" class="legs-container">\n            <div class="legs-types">\n                <span ng-repeat="step in ctrl.route.steps.slice(1) track by $index" class="single-leg"\n                      ng-if="ctrl.shouldShowLegInSummary(step)"\n                        ng-class="{\'alert\' : ctrl.isHaveAlert($index)}">\n                    <img class="non-mvf" ng-if="!ctrl.useMvf(step.extra.legImageMetaData)" ng-src="{{ctrl.getLegTypeIcon(step.legType)}}" />\n                    <span class="walk-time" ng-if="ctrl.isWalk(step.legType) && !ctrl.isWalkOnlyRoute()">{{step.extra.legImageMetaData.walkingTime}}</span>\n                    <span class="walk-time" ng-if="ctrl.isDrive(step.legType)">{{step.extra.duration}}</span>\n                    <line-svg ng-if="ctrl.useMvf(step.extra.legImageMetaData)"\n                              image-html="step.extra.legImageMetaData.lineMetaData.summaryImageHtml"></line-svg>\n                    <md-tooltip md-direction="top" ng-if="step.extra.legDescription.value">\n                        {{step.extra.legDescription.value}}\n                    </md-tooltip>\n                    <md-tooltip md-direction="top" ng-if="step.extra.legDescription.translateKey">\n                        {{step.extra.legDescription.translateKey | translate: step.extra.legDescription.translateParams}}\n                    </md-tooltip>\n                    <div class="single-leg-arrow"></div>\n                </span>\n            </div>\n\n            <div class="legs-description"  ng-if="ctrl.route.extra" ng-class="{\'real-time\':ctrl.route.isRelevantForRealTime && ctrl.route.extra.startFrom.param2}">\n                <span ng-bind-html="ctrl.route.extra.startFromTranslateKey | translate: ctrl.route.extra.startFrom">\n                </span>\n                <span ng-if="ctrl.route.isAccessible" class="accessible-route">\n                    &bull; <md-icon class="icon" md-svg-icon="/images/wheelchair.svg"></md-icon>\n                </span>\n            </div>\n\n            <div class="legs-time">\n\n                \x3c!--<img  src="/images/real_time.svg" ng-if="ctrl.route.isRelevantForRealTime"/>--\x3e\n                <span class="start-time">{{ctrl.route.startTime | time}}</span>\n                <span class="dash">-</span>\n                <span class="end-time">{{ctrl.route.endTime | time}}</span>\n            </div>\n            <div class="route-time-summary">\n                <div class="route-time-container">\n                    <span class="duration">{{ctrl.route.durationMinutes}}</span>\n                <i class="minutes">{{\'min\' | translate}}</i>\n                </div>\n                <div class="destination">{{ctrl.route.to.name}}</div>\n            </div>\n        </div>\n\n    </div>\n\n    <div layout="row" ng-if="ctrl.allowPrevNext">\n        <a href ng-click="ctrl.pickPrevItinerary($event)" class="earlier-time" layout-align="start" ng-if="ctrl.route.hasPrev">\n            <span href>{{"itinerary_earlier" | translate}}</span>\n        </a>\n        \x3c!-- {{\'min\' | translate}} --\x3e\n        <a href ng-click="ctrl.pickNextItinerary($event)" class="later-time" layout-align="end" ng-if="ctrl.route.hasNext">\n            <span >{{"itinerary_later" | translate}}</span>\n        </a>\n    </div>\n</route-summary>\n'
		})
	}(), System.registerDynamic("app/route/routeSummary.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/routeSummary.js", ["../fx/Component", "../common/iconHelpers", "../components/lineSVG", "../models/tripPlan", "../fx/Annotations", "../fx/Logger", "../services/appStoreService", "../common/jqHelpers", "./routeSummary.html!text", "./routeSummary.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../fx/Component"),
			h = a("../common/iconHelpers"),
			i = a("../components/lineSVG"),
			j = a("../models/tripPlan"),
			k = a("../fx/Annotations"),
			l = a("../fx/Logger"),
			m = a("../services/appStoreService"),
			n = a("../common/jqHelpers");
		PREVENT_IMPORT_REMOVE(i);
		var o = l.createLogger("RouteSummaryComponent"),
			p = function (b) {
				function c(a) {
					var c = b.call(this, o) || this;
					return c.appStoreService = a, c
				}
				return d(c, b), c.prototype.getLegTypeIcon = function (a) {
					return h.getLegTypeIconUrl(a)
				}, c.prototype.isBus = function (a) {
					return a == MVLegType.Bus
				}, c.prototype.isWalk = function (a) {
					return a == MVLegType.Walk
				}, c.prototype.isDrive = function (a) {
					return a == MVLegType.Car
				}, c.prototype.isWalkOnlyRoute = function () {
					return 1 == this.route.legs.length && null != this.route.legs[0].walkLeg
				}, c.prototype.useMvf = function (a) {
					return null != a.lineMetaData && null != a.lineMetaData.summaryImageHtml
				}, c.prototype.isHaveAlert = function (a) {
					return !!this.route.steps[a - 1] && !!this.route.steps[a - 1].alerts
				}, c.prototype.shouldShowLegInSummary = function (a) {
					var b = a.extra.legImageMetaData;
					if (b) {
						if (a.legType == j.LegType.Walk && (1 == this.route.steps.length || b.walkingTime >= 5)) return !0;
						if (a.legType != j.LegType.Walk && a.legType != j.LegType.WaitFor && a.legType != j.LegType.StartFrom && a.legType != j.LegType.WalkToPath) return !0
					}
					return !1
				}, c.prototype.pickPrevItinerary = function (a) {
					o.log("navigating to an earlier itinerary"), n.markEventAsHandled(a), this.appStoreService.selectSimilarItinerary(j.SimilarItineraryMode.Prev)
				}, c.prototype.pickNextItinerary = function (a) {
					o.log("navigating to a later itinerary"), n.markEventAsHandled(a), this.appStoreService.selectSimilarItinerary(j.SimilarItineraryMode.Next)
				}, c = e([k.Component({
					tagName: "route-summary",
					template: a("./routeSummary.html!text"),
					styles: a("./routeSummary.css!css"),
					scope: {
						route: "<",
						allowPrevNext: "@"
					}
				}), f("design:paramtypes", [m.AppStoreService])], c)
			}(g.ComponentBase);
		return b.RouteSummaryComponent = p, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/tripPlan/suggestedLocations.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div ng-if="ctrl.showCurrentLocation()" class="use-current-location" ng-click="ctrl.useCurrentLocation()">\n    <md-icon md-svg-src="/images/current_location.svg"></md-icon>\n    <span>{{\'tripplan_from_location\' | translate}}</span>\n</div>\n\n<div ng-if="ctrl.locations.length > 0 && ctrl.locationsTitle.length > 0" class="recent-locations-title">{{ctrl.locationsTitle}}</div>\n\n<ul class="recent-location">\n    <li ng-repeat="location in ctrl.locations track by $index"\n        ng-click="ctrl.selectLocation(location)">\n        <span class="location-icon" ng-bind-html="location.imageHtml"></span>\n        <div class="recent-loction-inner">\n            <div class="location-info">\n                <span class="name">{{location.name}}</span>\n                <span class="address">\n                    <span ng-repeat="address in location.address track by $index">\n                        <span ng-if="address.isImage" ng-bind-html="ctrl.$sce.trustAsHtml(address.data)"></span>\n                        <span ng-if="!address.isImage">{{address.data}}</span>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </li>\n</ul>'
		})
	}(), System.registerDynamic("app/tripPlan/suggestedLocations.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/tripPlan/suggestedLocations.js", ["../fx/Component", "../fx/Logger", "../fx/Annotations", "../services/appStoreService", "../services/userProfileService", "../services/metroService", "../models/general", "../common/AppState", "../services/appProfileService", "./suggestedLocations.html!text", "./suggestedLocations.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Logger"),
			j = a("../fx/Annotations"),
			k = a("../services/appStoreService"),
			l = a("../services/userProfileService"),
			m = a("../services/metroService"),
			n = a("../models/general"),
			o = a("../common/AppState"),
			p = a("../services/appProfileService"),
			q = i.createLogger("SuggestedLocationsComponent"),
			r = function (b) {
				function c(a, c, d, e, f) {
					var g = b.call(this, q) || this;
					return g.appStoreService = a, g.userProfileService = c, g.metroService = d, g.appProfileService = e, g.$sce = f, g.FromTo = n.FromTo, g
				}
				return d(c, b), c.prototype.selectLocation = function (a) {
					this.onLocationSelected({
						location: a
					})
				}, c.prototype.useCurrentLocation = function () {
					this.appStoreService.useCurrentLocation(this.locationsType)
				}, c.prototype.showCurrentLocation = function () {
					var a = !1;
					return o.appState.customer && o.appState.customer.designConfiguration && (a = o.appState.customer.designConfiguration.hideMyCurrentLocation), this.allowUseCurrentLocation && this.appProfileService.isMobile && !a
				}, c = e([j.Component({
					tagName: "suggested-locations",
					template: a("./suggestedLocations.html!text"),
					styles: a("./suggestedLocations.css!css"),
					scope: {
						locations: "<",
						locationsType: "<",
						locationsTitle: "<",
						allowUseCurrentLocation: "<",
						onLocationSelected: "&"
					}
				}), g(4, j.Inject("$sce")), f("design:paramtypes", [k.AppStoreService, l.UserProfileService, m.MetroService, p.AppProfileService, Object])], c)
			}(h.ComponentBase);
		return b.SuggestedLocationsComponent = r, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/tripPlan/tripPlan.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<trip-plan>\n    <div class="search-zone" ng-class="{\'with-options\': ctrl.hasRoutes || ctrl.hasError || ctrl.isDirtySearch, \'with-time\': ctrl.showTimeSelector}"\n    ng-click="ctrl.clickOutsideQrCode()">\n        \x3c!--\n            From & to input fields\n        --\x3e\n        <div class="from-to">\n            <div>\n                <tripplan-location\n                        model="ctrl.from"\n                        placeholder="trip_plan_source_hint"\n                        delay="500"\n                        label="position_start"\n                        on-search="ctrl.searchForSuggestedLocations(ctrl.FromTo.From, args)"\n                        on-clear="ctrl.locationClear(ctrl.FromTo.From, location)"\n                        on-focused="ctrl.locationFocused(ctrl.FromTo.From)"\n                        on-blur="ctrl.locationBlur(ctrl.FromTo.From)"\n                        auto-focus="!ctrl.appProfileService.isMobile && !ctrl.appProfileService.isInIframe">\n                </tripplan-location>\n\n                <tripplan-location\n                        model="ctrl.to"\n                        placeholder="trip_plan_destination_hint"\n                        delay="500"\n                        label="position_end"\n                        on-search="ctrl.searchForSuggestedLocations(ctrl.FromTo.To, args)"\n                        on-clear="ctrl.locationClear(ctrl.FromTo.To, location)"\n                        on-focused="ctrl.locationFocused(ctrl.FromTo.To)"\n                        on-blur="ctrl.locationBlur(ctrl.FromTo.To)"\n                        auto-focus="false">\n                </tripplan-location>\n            </div>\n\n            <md-button aria-label="{{\'accessibility_switch_directions\' | translate}}" class="md-icon-button" md-ink-ripple="false" ng-click="ctrl.toggleLocations()" title="{{\'accessibility_switch_directions\' | translate}}">\n                <md-icon md-svg-icon="/images/changeDirectionNew.svg"></md-icon>\n            </md-button>\n        </div>\n\n        \x3c!--\n            Time + Options\n        --\x3e\n        <div class="time_and_options" ng-if="ctrl.hasRoutes || ctrl.hasError || ctrl.isDirtySearch">\n            <div class="more" layout="row" flex>\n                <div class="time-selector">\n                    <i class="clock-icon"></i>\n                    <md-select aria-label="select ref point" ng-model="ctrl.selectedRefPoint" ng-change="ctrl.onRefPointSelected()">\n                        <md-option ng-repeat="refPoint in ctrl.refPoints track by $index" value="{{refPoint}}">\n                            {{ctrl.refPointsTranslationKeys[refPoint] | translate}}\n                        </md-option>\n                    </md-select>\n                </div>\n\n                \x3c!-- We use below element to create the float affect for the other element --\x3e\n                <span flex></span>\n\n                <div class="gray-btn options" ng-click="ctrl.optionsClicked()">\n                    <span flex="none">{{\'trip_plan_options\' | translate}}</span>\n                </div>\n            </div>\n\n            <tripplan-time model="ctrl.time" on-changed="ctrl.onTimeChanged(model)" flex layout="row" ng-if="ctrl.showTimeSelector">\n            </tripplan-time>\n\n            <div class="tripplan-options-modal" ng-if="ctrl.showRouteOptions" moovit-outside-click="ctrl.onClickOutsideOfOptionsModal(isFirstClick)">\n                <md-button class="md-icon-button close-button" ng-click="ctrl.showRouteOptions=false">\n                    <md-icon md-svg-src="/images/close.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n\n                <tripplan-options selected-route-priority="ctrl.routePriority"\n                                  selected-route-types="ctrl.routeTypes"\n                                  on-selected-route-priority-changed="ctrl.onSelectedRoutePriorityChanged(routePriority)"\n                                  on-selected-route-types-changed="ctrl.onSelectedRouteTypesChanged(routeTypes)">\n                </tripplan-options>\n\n                <div class="options-btn-container">\n                    <span class="options-title">Options</span>\n                    <a href="" ng-click="ctrl.doneShowOptions()">{{\'tripplan_rate_done\'|translate}}</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <error-panel ng-if="ctrl.hasError"></error-panel>\n\n    <div class="results-wrapper" ng-class="{\'has-partner-logo\':ctrl.getPartnerLogo() && ctrl.isFooterBannerAvailable(),\n                                            \'has-carpool-banner\': (ctrl.metroCarpoolData && !ctrl.hasRoutes) || ctrl.appStore.state.user.isUnresolvedMetro}">\n        \x3c!--\n        Suggested Routes\n    --\x3e\n        <div ng-if="ctrl.hasRoutes">\n            <div class="routes-placeholder" ng-if="!ctrl.hasRoutes"></div>\n            <div class="suggested-routes" ng-if="ctrl.sectionHasRoutes(section)" ng-repeat="section in ctrl.sections track by $index">\n                <div class="title">\n                    {{section.name | translate}}\n                    <a href ng-click="ctrl.showShareDialog($event)" class="share" ng-if="$index == 0 && !ctrl.appStore.state.customer.designConfiguration.hideSharing">\n                        <md-icon class="icon" md-svg-icon="/images/share/share_icon_new.svg"></md-icon>\n                       <span>{{\'action_share\' | translate}}</span>\n                    </a>\n                </div>\n\n                <md-list>\n                    <md-list-item ng-repeat="route in section.routes track by $index"\n                                  ng-click="ctrl.onRouteClicked(route, $event)"\n                                  ng-mouseenter="ctrl.onRouteMouseEnter(route, $event)"\n                                  ng-mouseleave="ctrl.onRouteMouseLeave(route, $event)"\n                                  ng-class="{\'active\': route === ctrl.selectedRoute}"\n                                  aria-label="suggested route">\n                        <route-summary route="route"></route-summary>\n                    </md-list-item>\n                </md-list>\n            </div>\n        </div>\n\n        <div class="spinner" ng-show="ctrl.searching">\n            <moovit-spinner></moovit-spinner>\n        </div>\n\n        <div class="empty-results" ng-if="ctrl.showEmptyResultsError">\n            <md-icon class="icon" md-svg-src="/images/error-states/img_empty_state_omni.svg"></md-icon>\n            <div ng-bind-html="ctrl.emptyResultsErrorMessage"></div>\n        </div>\n\n        <suggested-locations\n                ng-if="ctrl.suggestedLocations"\n                locations="ctrl.suggestedLocations"\n                locations-type="ctrl.suggestedLocationsType"\n                locations-title="ctrl.suggestedLocationsTitle"\n                allow-use-current-location="ctrl.suggestedLocationsAllowUseCurrent"\n                on-location-selected="ctrl.onSuggestedLocationSelected(location)">\n        </suggested-locations>\n    </div>\n\n    <div class="qrcode-section" ng-if="ctrl.hasRoutes && ctrl.displayQRBanner">\n        <qr-code-banner qr-code-params="ctrl.qrCodeParams"></qr-code-banner>\n    </div>\n\n    <div class="tripplan-footer">\n        <div ng-if="ctrl.getPartnerLogo()" class="partner-logo-wrapper">\n            <span>{{\'partners_header\' | translate}}</span>\n            <img ng-src="/images/partners/{{ctrl.getPartnerLogo()}}" class="partner-logo">\n        </div>\n\n        \x3c!-- Supported metro that is open to community --\x3e\n        <a class="carpool-footer unsupported-metro" target="_blank" ng-if="ctrl.shouldShowCommunityBar(true)"\n           ng-href="{{ctrl.getCommunityUrl(\'moovit_for_web_supported\',\'moovit_web_app\',\'Organic\')}}" ng-click="ctrl.onCommunityBannerClick(\'join\')" >\n            <div class="footer-image">\n                <img src="/images/community_globe.png" alt="community logo">\n            </div>\n            <div class="text-container">\n                <span class="carpool-text">{{\'web_page_community_supported_banner_title\'|translate}}</span>\n                <span class="carpool-text">{{\'web_page_community_banner_subtitle\'|translate}}</span>\n            </div>\n        </a>\n\n        \x3c!-- Unsupported metro --\x3e\n        <a class="carpool-footer unsupported-metro" target="_blank" ng-if="ctrl.shouldShowCommunityBar(false)" ng-href="{{ctrl.getCommunityUnsupportedUrl()}}"\n           ng-click="ctrl.onCommunityBannerClick(\'signup\')" >\n            <div class="footer-image">\n                <img src="/images/community_globe.png" alt="community logo">\n            </div>\n            <div class="text-container">\n                <span class="carpool-text">{{\'web_page_community_unsupported_banner_title\'|translate}}</span>\n                <span class="carpool-text">{{\'web_page_community_banner_subtitle\'|translate}}</span>\n            </div>\n        </a>\n\n        <a class="carpool-footer" ng-if="ctrl.metroCarpoolData && !ctrl.searching && !ctrl.hasRoutes" ng-href="{{ctrl.metroCarpoolData.url}}"\n           ng-click="ctrl.onCarpoolBannerClick()" ng-init="ctrl.reportCarPoolBannerDisplay()">\n            <div class="logo">\n                <img src="/images/carpool/carpool_logo_typo.svg" alt="carpool logo">\n            </div>\n            <div class="footer-image">\n                <md-icon class="icon" md-svg-src="/images/carpool/carpool_car.svg"></md-icon>\n            </div>\n            <span class="carpool-text">{{\'web_carpool_banner_title\'|translate}}</span>\n        </a>\n    </div>\n\n</trip-plan>'
		})
	}(), System.registerDynamic("app/tripPlan/tripPlan.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/tripPlan/tripPlan.js", ["../fx/Application", "../common/AppEvents", "./tripPlanTime", "../services/searchService", "../fx/Component", "./tripPlanLocation", "../models/general", "../models/converters", "../models/tripPlan", "../route/routeSummary", "../fx/Logger", "../fx/Annotations", "../services/appStoreService", "../services/imageService", "../services/mobileService", "../common/jqHelpers", "./suggestedLocations", "../services/tripPlanService", "../services/appProfileService", "../services/shareService", "../components/sharePanel", "../services/metroService", "../services/analyticsService", "../services/userProfileService", "../services/localeService", "moment", "../../common/customer", "./tripPlan.html!text", "./tripPlan.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Application"),
			i = a("../common/AppEvents"),
			j = a("./tripPlanTime");
		PREVENT_IMPORT_REMOVE(j.TripPlanTimeComponent);
		var k = a("../services/searchService"),
			l = a("../fx/Component"),
			m = a("./tripPlanLocation");
		PREVENT_IMPORT_REMOVE(m);
		var n = a("../models/general"),
			o = a("../models/converters"),
			p = a("../models/tripPlan"),
			q = a("../route/routeSummary");
		PREVENT_IMPORT_REMOVE(q.RouteSummaryComponent);
		var r = a("../fx/Logger"),
			s = a("../fx/Annotations"),
			t = a("../services/appStoreService"),
			u = a("../services/imageService"),
			v = a("../services/mobileService"),
			w = a("../common/jqHelpers"),
			x = a("./suggestedLocations"),
			y = a("../services/tripPlanService"),
			z = a("../services/appProfileService");
		PREVENT_IMPORT_REMOVE(x.SuggestedLocationsComponent);
		var A = a("../common/jqHelpers"),
			B = a("../services/shareService"),
			C = a("../components/sharePanel"),
			D = a("../services/metroService"),
			E = a("../services/analyticsService"),
			F = a("../services/userProfileService"),
			G = a("../services/localeService"),
			H = a("moment"),
			I = a("../../common/customer"),
			J = a("../fx/Application"),
			K = r.createLogger("TripPlanComponent"),
			L = function (b) {
				function c(a, c, d, e, f, g, j, k, l, m, o, q, r, s, u, v, w) {
					var x = b.call(this, K) || this;
					return x.$q = a, x.$location = c, x.$state = d, x.$stateParams = e, x.$translate = f, x.$timeout = g, x.userProfileService = j, x.searchService = k, x.imageService = l, x.appStore = m, x.mobileService = o, x.appProfileService = q, x.analyticsService = r, x.tripPlanService = s, x.metroService = u, x.localeService = v, x.shareService = w, x.qrCodeParams = {
						campaign: "SuggestedRoutes_QRcode",
						appArea: "QR",
						deepLinkSchemaType: t.DeepLinkSchemaType.Directions,
						promoKey: "web_scan_qr",
						displayDirection: "top"
					}, x.displayQRBanner = !0, x.refPoints = [p.RefPoint.LeaveNow, p.RefPoint.Depart, p.RefPoint.Arrive, p.RefPoint.Last], x.refPointsTranslationKeys = new Map, x.refPointsTranslationKeys[p.RefPoint.LeaveNow] = "time_picker_leave_now", x.refPointsTranslationKeys[p.RefPoint.Depart] = "time_picker_depart_at", x.refPointsTranslationKeys[p.RefPoint.Arrive] = "time_picker_arrive_by", x.refPointsTranslationKeys[p.RefPoint.Last] = "last_available_transit", x.selectedRefPoint = p.RefPoint.LeaveNow, x.searchingLocation = {}, x.searchingLocation[n.FromTo.From] = !1, x.searchingLocation[n.FromTo.To] = !1, x.FromTo = n.FromTo, x.searching = !1, x.showTimeSelector = !1, x.showRouteOptions = !1, x.suggestedLocations = null, x.suggestedLocationsType = null, x.suggestedLocationsTitle = "", x.suggestedLocationsAllowUseCurrent = !0, h.events.subscribe(i.AppEvents.MAP_CLICKED, x, x.onMapClicked), h.events.subscribe(i.AppEvents.TRIPPLAN_SEARCH_ROUTES_BEGIN, x, x.onTripPlanSearchRoutesBegin), h.events.subscribe(i.AppEvents.TRIPPLAN_SEARCH_ROUTES_END, x, x.onTripPlanSearchRoutesEnd), h.events.subscribe(i.AppEvents.TRIPPLAN_SEARCH_ROUTES_MORE, x, x.onTripPlanSearchRoutesResults), h.events.subscribe(i.AppEvents.TRIPPLAN_SEARCH_LOCATION_BEGIN, x, x.onTripPlanSearchLocationBegin), h.events.subscribe(i.AppEvents.TRIPPLAN_SEARCH_LOCATION_END, x, x.onTripPlanSearchLocationEnd), h.events.subscribe(i.AppEvents.TRIPPLAN_QUERY_CHANGED, x, x.onTripPlanQueryChanged), h.events.subscribe(i.AppEvents.METRO_CHANGED, x, x.onMetroChanged), h.events.subscribe(i.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, x, x.onSelectedRouteChanged), h.events.subscribe(i.AppEvents.TRIPPLAN_USE_CURRENT_LOCATION_FAILED, x, x.onUseCurrentLocationFailed), h.events.subscribe(i.AppEvents.USER_LOCALE_CHANGED, x, x.onLocaleChanged), J.events.subscribe(i.AppEvents.SIDE_BAR_POPUP_CLOSE, x, x.itineraryClosed), x
				}
				return d(c, b), c.prototype.onInit = function () {
					var a = this;
					b.prototype.onInit.call(this), this.userProfileService.ensureInit().then(function () {
						a.appStore.loadTripPlan().then(function (b) {
							if (a.selectedRefPoint = b.time.refPoint, a.selectedRefPoint != p.RefPoint.Arrive && a.selectedRefPoint != p.RefPoint.Depart || (a.showTimeSelector = !0), a.updateEmptyResultsError(), b.from && b.to || (a.loadRecentLocations(), a.suggestedLocationsType = b.from ? n.FromTo.To : n.FromTo.From, a.suggestedLocationsTitle = a.$translate.instant("search_recent_section_title"), a.suggestedLocationsAllowUseCurrent = !0), a.$stateParams && a.$stateParams.customerId) {
								var c = I.Customer.getCustomerById(a.$stateParams.customerId);
								a.appProfileService.isMobile && c && navigator.geolocation && c.designConfiguration.automaticInitialGeoLocation && a.appStore.useCurrentLocation(n.FromTo.From, !c.designConfiguration.hideMetroSelection)
							}
							b.route && b.route.isShared && a.appStore.selectRoute(b.route, !0)
						})
					})
				}, c.prototype.itineraryClosed = function (a) {
					"popupRouteDetails" == a.key && (this.displayQRBanner = !0)
				}, c.prototype.onLocaleChanged = function () {
					this.updateEmptyResultsError()
				}, Object.defineProperty(c.prototype, "routes", {
					get: function () {
						return this.appStore.state.tripPlan.routes
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "sections", {
					get: function () {
						return this.appStore.state.tripPlan.sections
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "from", {
					get: function () {
						return this.appStore.state.tripPlan.from
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "to", {
					get: function () {
						return this.appStore.state.tripPlan.to
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "hasError", {
					get: function () {
						return this.appStore.state.hasError
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "routePriority", {
					get: function () {
						return this.appStore.state.tripPlan.routePriority
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "routeTypes", {
					get: function () {
						return this.appStore.state.tripPlan.routeTypes
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.onTripPlanSearchRoutesBegin = function () {
					K.log("onTripPlanSearchRoutesBegin"), this.searching = !0, this.$timeout.cancel(this.carPoolBannerEventTimer), this.mobileService.closeKeyboard()
				}, c.prototype.onTripPlanSearchRoutesEnd = function () {
					K.log("onTripPlanSearchRoutesEnd"), !this.appStore.state.tripPlan.route && this.appStore.state.tripPlan.routes && this.appStore.state.tripPlan.routes.length > 0 && this.appStore.selectRoute(this.appStore.state.tripPlan.routes[0], !1), this.searching = !1
				}, c.prototype.onTripPlanSearchRoutesResults = function () {
					if (!this.appStore.state.tripPlan.route) {
						var a = this.appStore.state.tripPlan.routes;
						if (a && a.length > 0) {
							var b = a.find(function (a) {
								return a.legs.length > 1 || 1 == a.legs.length && !a.legs[0].walkLeg
							});
							b && this.appStore.selectRoute(b, !1)
						}
					}
				}, c.prototype.onMapClicked = function (a) {
					var b = this;
					K.log("onMapClicked", a), this.appStore.mapClicked(a.latlng).then(function () {
						b.focusOnEmptyLocationField()
					})
				}, c.prototype.onSelectedRouteChanged = function (a) {
					this.selectedRoute = a.route
				}, c.prototype.locationClear = function (a, b) {
					K.remote("locationClear"), this.clearSuggestedLocations(), this.appStore.changeLocation(a, b, !1, !1, !1), this.setFocusOnLocation(a)
				}, c.prototype.onSuggestedLocationSelected = function (a) {
					if (K.remote("onSuggestedLocationSelected"), null !== this.suggestedLocationsType) {
						var b = this.suggestedLocationsType;
						this.appStore.changeLocation(this.suggestedLocationsType, a, !1, !1, !1), this.tripPlanService.addRecentLocation(b, a), this.clearSuggestedLocations(), this.focusOnEmptyLocationField(b)
					}
				}, c.prototype.searchForSuggestedLocations = function (a, b) {
					var c = this;
					if (K.log("searchForSuggestedLocations", b), !b) return this.clearSuggestedLocations(), void this.locationFocused(a);
					h.events.raise(i.AppEvents.TRIPPLAN_TEXT_SEARCH_BEGIN, {
						fromTo: a,
						text: b.searchText
					}, K), this.tripPlanService.clearCurrentRoutes(), this.searching = !0, this.searchService.search(b.searchText).then(function (b) {
						c.searching = !1;
						for (var d = [], e = 0, f = b.results; e < f.length; e++)
							for (var g = f[e], h = 0, i = g.subTitle; h < i.length; h++) {
								var j = i[h];
								j.image && (j.image.imageId && d.push(j.image.imageId), j.image.parameters && j.image.parameters.length >= 3 && j.image.parameters[2] && d.push(+j.image.parameters[2]))
							}
						c.imageService.syncImagesData(d).then(function () {
							var d = b.results.map(function (a) {
								return o.convertMVSearchResponseItem2TripPlanLocation(a, c.imageService)
							});
							d && d.length > 0 ? (c.suggestedLocationsAllowUseCurrent = !1, c.suggestedLocations = d, c.suggestedLocationsType = a, c.suggestedLocationsTitle = "", c.showEmptyResultsError = !1) : (c.showEmptyResultsError = !0, c.showRecentLocations(a))
						})
					})
				}, Object.defineProperty(c.prototype, "hasRoutes", {
					get: function () {
						return this.routes && this.routes.length > 0
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.sectionHasRoutes = function (a) {
					return a.routes && a.routes.length > 0
				}, c.prototype.getLegDurationInMinutes = function (a) {
					return this.getDurationInMinutes(a.metaData.startTime, a.metaData.endTime)
				}, c.prototype.getDurationInMinutes = function (a, b) {
					return Math.ceil((b - a) / 6e4)
				}, c.prototype.expandWalkingStep = function (a, b) {
					var c = "";
					if (a.direction.absolute) switch (a.direction.absolute) {
						case MVAbsoluteDirection.North:
							c = "direction_north";
							break;
						case MVAbsoluteDirection.Northeast:
							c = "direction_northeast";
							break;
						case MVAbsoluteDirection.east:
							c = "direction_east";
							break;
						case MVAbsoluteDirection.Southeast:
							c = "direction_southeast";
							break;
						case MVAbsoluteDirection.South:
							c = "direction_south";
							break;
						case MVAbsoluteDirection.Southwest:
							c = "direction_southwest";
							break;
						case MVAbsoluteDirection.West:
							c = "direction_west";
							break;
						case MVAbsoluteDirection.Northwest:
							c = "direction_northwest"
					} else if (a.direction.relative) switch (a.direction.relative) {
						case MVRelativeDirection.Depart:
							c = "direction_depart";
							break;
						case MVRelativeDirection.HardLeft:
							c = "direction_hard_left";
							break;
						case MVRelativeDirection.Left:
							c = "direction_left";
							break;
						case MVRelativeDirection.SlightlyLeft:
							c = "direction_slightly_left";
							break;
						case MVRelativeDirection.Continue:
							c = "direction_continue";
							break;
						case MVRelativeDirection.SlightlyRight:
							c = "direction_slightly_right";
							break;
						case MVRelativeDirection.Right:
							c = "direction_right";
							break;
						case MVRelativeDirection.HardRight:
							c = "direction_hard_right";
							break;
						case MVRelativeDirection.CircleClockwise:
							c = "direction_circle_clockwise";
							break;
						case MVRelativeDirection.CircleCounterclockwise:
							c = "direction_circle_counter_clockwise";
							break;
						case MVRelativeDirection.Elevator:
							c = "direction_elevator";
							break;
						case MVRelativeDirection.UturnLeft:
							c = "direction_uturn_left";
							break;
						case MVRelativeDirection.UturnRight:
							c = "direction_uturn_right"
					}
					return {
						instruction_key: c,
						instruction_param: a.streetName
					}
				}, c.prototype.toggleLocations = function () {
					K.remote("toggleLocations"), this.appStore.toggleLocations()
				}, c.prototype.onTimeChanged = function (a) {
					K.log("onTimeChanged:", a), this.isDirtySearch = !0;
					var b = this.appStore.state.tripPlan.time;
					b.when = a, this.appStore.changeTripPlanTime(b), this.appStore.saveStateToUrl(), this.appStore.searchRoutes()
				}, Object.defineProperty(c.prototype, "time", {
					get: function () {
						return this.appStore.state.tripPlan && this.appStore.state.tripPlan.time ? this.appStore.state.tripPlan.time.when : null
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.onRouteClicked = function (a, b) {
					K.log("onRouteClicked:", a), this.displayQRBanner = !1, this.cancelRouteSelectionTimer(), this.appStore.selectRoute(a, !0), w.markEventAsHandled(b)
				}, c.prototype.onRouteMouseEnter = function (a, b) {
					var c = this,
						d = this;
					d.cancelRouteSelectionTimer(), d.hoverTimer = d.$timeout(function () {
						c.appStore.selectRoute(a, !1)
					}, 500)
				}, c.prototype.onRouteMouseLeave = function (a, b) {
					this.cancelRouteSelectionTimer()
				}, c.prototype.cancelRouteSelectionTimer = function () {
					this.$timeout.cancel(this.hoverTimer)
				}, c.prototype.getMockRouteData = function () {
					return [{
						durationMinutes: 85,
						startTime: H("3:34", "HH:mm").toDate(),
						endTime: H("4:59", "HH:mm").toDate(),
						legTypes: [MVLegType.Bus, MVLegType.Rail],
						response: {
							itinerary: {
								legs: [{
									encodedPolyline: "ansbEs{hsEkBKcEYiEa@oVeFqDw@_Dw@mCmAmCsBqCoCcHmK_C_CoCiBaD_B_EqAkDu@kC_@uGSkJSsAEE?oDMiCYwBm@mCwA{CgCuB{B}DoEyBgBmBgAyD}AwBa@yCKuCGkBQGAq@MwI}AqMiDiJcC{MoBuYiEcP}B}GgA}Cq@yCiAwDcCwA}@g@]_Am@iQiKYQeDqBgHoEeG_EmBy@{Ao@gA_@sBk@aAO{BScAIkBEkBEwGFgTZm[NeUN{TJiRLiJ@aJDuJJgH@sC@aCIyCS}C_@iDg@kE_AaF{AcPaEyC{@qDcAwCw@qF}AqFyAaDw@sMiD{KkDaIoBeHsBwAa@w@S{PeEyL}CuUeGwPwEgPsEaIqBqOgEyHqBmJeCiEoAaFoAwG{AgF}AsF{A{Cy@gCu@sBo@gBq@_E{AgCgAeEgBgReIoX}Kq_@gPyYkL_WwKo^{Oce@uRe]uNwK}DoLiD}ZkJ}MaEkZwIwOqE}SoGiQyDoUaFgBa@{A]w@O{KaCeJkBuVgFeQsD_TkEcKwB}T}EwQqDmCYcBG{DGaZe@}q@g@}RS{KGuPSaFAuIKmFKyD@}CGcDKiD_@aEk@mCW}Dc@_Fs@}AOsCYs@KsKsAmHw@eGs@wP_CwKqA{J_AqCi@oEmAkDkAkIiD_PyFqMsEeKmDyPcGcPyFuLoE{EmA}JgC{YeHySeFiPcEiVaGqUeGuNuD{JaCyCe@cD_@wCK{DEiDH}L\\oTl@qKXoJXaOb@eJPaMR_H?cPE}TUo[M{\\IkJMgIE{Re@_F_@eFw@mDk@iG{@eO_CkJ}AeImAaEw@yC}@gB{@oBcAaBmAiAoAyBeCoCoE_E}HmGyKMUaAgBkC{E_HyLmAuBeDcG}AgDyAyDeBoGiB_IwDkQaHqZoFeVcCwJeAeDgAyCaCwEwTs[kGiJwDuFcFaHwEcHuDuEsCgDaMyLmc@ka@iHwEgIgFuNeJyMuIeG_EyLoGgBs@m@UyFsAmCc@qAIqCMuDH}DR{BLiCLuEVaP|@{ZdBqQ|@oKp@iw@hIoL|AeJnAqHr@gBRmFh@_DViDZmH~@yCdAs@\\m@ViB~@_BjAwAnAuCrD}CjEaGzIkBdCiB~BaB`BsBtA}BrAsDzAeEdBiHnCeEpB{BvAcBrA{CxCaCvCsBlCyCfDwCbC_IbEiKdEkIzCiEr@aEd@uCPeE@gHYuJUqEBuBFeCLaIl@eN^cEAkGa@uDg@kIgB}SaEsEw@eEc@mFOaGN{Dn@eCd@wS|EoU~EqQ`EuQdEaR~DoPzD}NfDoKrByGv@oIDuDI}LYs`@}@gR{@}Gc@wFk@qYaCeRgBw[mDyWmCk[eDuWkCyNqAsHq@{MeAiJy@eK_AsZ_CqYkC_cBkNiTsBmRyAeSaCgQ{ByHaAeMeB_JiAcJiAiMyAgFo@sCc@mASaEm@sIkAkGw@sHeA{Dm@yJiAeNkB{Fu@}Cc@gDm@_Ey@mJyB_N_Dgu@kNwXwFqHwAaJwA{RgBcQcB}XaCg\\uCsFSwKa@qEMeI[wKM{Lk@mSo@sF_@iTkB{c@sEq@IwP_BkLgAgLiAyKkAyDSqDQoJGqZq@oKMsTc@{IS_JIcAAwCC}KMgJWqN]_NIuGCeBDgCRsAJcCd@sAXmAX{HxBwD`AmHvBgCp@wCh@oH~@mCB{FQqDGsLWqDMaBM}B_@iBg@y@]kAi@}A}@iAy@uAmAuB}BuAkBsDaFcEmF[a@aAuAyAsBkCmDiCwD_B}C}@mCe@cBc@}B]{CKcDGsDDiN@eHB{LJiGVwIGiH?cCBmBDaDDi@NaBH{@JcAb@oBnAiDLg@l@uBv@mB|@gBrAoCx@_Bx@{AtBiDbA}AjAgB`AsAnA_BdAuA|@iBbBqEdA{CjAgDrDwKnBsElAuCTg@zAkD~BmFnEkExAoAtI_I|@_AbB{@nBw@|Aa@hDk@~Eq@pDm@|C_AbAc@`DsBlBoAjBeBpAmA~AeBdCqB`FoEzEoFhAoAvAcBxBkCtCyCv@u@rCmCnBmCpDgFnA}AlDgEhEeFrDsFtBaDh@cAXaA\\}APoAP}AP}ANw@jBgIdDwLrDaN|AcGj@sCRqBRyBNeCJqDCkEA}BScCW{BGm@ES}@aEaBcFgBeEkBuDeEcFwF_F_DoBcJeFqIaF_CmA}@i@gL{Gk@c@o@q@g@i@g@o@o@eAaAcBoAuBcAkBwBwDqCaF_BwCUa@q@mAgAoBcAeB_AmAeBmByBiB{C}BeCkAqB}@uDoAaHaCuFmBgHcCyEyAaFkBuF_CqAy@mEoCkDwBuA{@wCgBmJmGoIgFkMgIkFmDwA}@{CqB}JoGyFmDcHoEwFwDcEoCuD_CgHwEyJmG{KeHkMgIwL{HwOsJ}d@iZyQsLgI}EuBiAoB{@aBo@uBs@wCi@gFi@iFe@iHk@mF_@_Lm@eEJwGz@gDl@eCv@mBr@cB~@qBhAgMxIkCtA{GvCiK|C{GnB{M`E_OxDuG~AeK~BoL|BmL~BaHtAwC^cBHuFBqGAiF@iCD}BX[B]@yRd@}Ea@uf@UkHXoGMeBMoAAyBBgBJsBTiB^_B`@mA\\uATcAZaB`@oAZg@Hm@JeD~@{XfI}AVi@Jy@LiAJaBHqABuACuAGiEi@}IuAkEm@eKyAeJqAwPaCyB_@sC_@kRoC{LeBiLcBsMiB_Fy@aEi@uFs@mAMoCO{EIoEDuUlAcTlAwLb@aE_@wDq@eMyBkLuBqKgBwDoA_Ck@cAs@iAs@s@e@aEsCcAq@eBqAsCoBeCaBqB}AkBqAuAeAmAiAcAeAoBkBcDcDuBwBs@m@mAcAw@i@wAw@i@W_Aa@}Aa@y@QeASeAKcGi@}D_@gCU}BUgCQmGq@iDc@sCWkBOwBSqAQy@MuAU"
								}]
							},
							supplementalData: {}
						}
					}, {
						durationMinutes: 64,
						startTime: H("3:34", "HH:mm").toDate(),
						endTime: H("4:59", "HH:mm").toDate(),
						legTypes: [MVLegType.Bus, MVLegType.Subway, MVLegType.Bus],
						response: {
							itinerary: {
								legs: [{
									encodedPolyline: "g`tbE}{gsERiAL_A@]B[D_@HSN[iAlOc@YACEEEQfAmGL_A@]B[D_@HSN[BIzB}GPg@b@mAHMLGNIZGT?bADL?rABtBD|B@fCLl@Gj@Kp@Op@Sf@Oh@O^Ip@Ml@KRCNE`BIp@?r@?l@Bx@Dt@Hj@Jr@LfBXb@H^DrAT|BXl@FXB`@BN@zE`@b@Fl@Nv@Vt@Z`@Nv@^l@Xv@`@j@\\n@`@jAz@~AdBt@v@n@v@h@p@`@f@Zf@Zj@Vp@Xv@^hAPb@HLHLLLTTHFXRRa@LQBEl@oAFM@CJQj@sAfAgC^y@r@qBf@}ApB_HvEkOz@cCFQlDqJfDiJnAaDt@gB\\{@hBcEnCmFh@aAr@_AjB_DtB_DpEuGx@kAJQt@_Ah@y@tDoFfD_Fx@iAPQX]`HqGb@c@NO~@aABCNQ`@i@PWd@u@Ze@pBsC~@gANUf@c@DEx@m@LKr@s@`@[p@k@x@w@f@e@xAuAhBeBfCaCfA}@fGwEvAkA|MoIjEiB^M^M^I`@E^A`AF~@L|@HT@Z?ZCXEf@KZKh@Qf@SVS^QVO`@IZE\\?b@DVDXHr@RpAn@fBfAh@b@f@b@d@b@h@h@f@f@nFvGrA|Ax@fAh@r@p@dA\\d@f@n@l@p@l@n@j@h@dAv@lA|@j@f@^^Z\\VVPVPR~@vAt@hA^n@r@lA~@zAvD~FbApAv@|@dAbA`A|@t@l@t@j@|@l@h@\\l@\\t@Zb@TnBz@fDlA~DnA`HvBzn@tRlSrGjVlHh@PVJ`H~BjDrAtAp@rHtCnTnIlBz@jMvEfBr@~@^JDhA^DBnFvBn@VxAr@~@d@n@^^Vb@Vj@`@jAdAz@x@d@h@`@d@d@v@f@x@n@hAz@tBz@nCVz@n@dChDzTHf@BHfAlHBVDNJp@V|AJr@tFr^xDjVb@|BjApGpAzH^nCz@~Fn@jDl@xBPh@t@pBj@tAx@~A~@`B|@rAjAxA~@dAdBnBfAhAlApAjBpBdGfGlPxQbJtJvElEfEfDrCrBzFnD`GdCnDrAjGbBdG`A~Dd@lBNvE^~EZlZhBf@DdAFpJf@vIb@pGb@~ZnBhF\\nF`@`[nBvIt@rDh@nCd@fG~AfDlAdHfC|LvEzGfCtShIf[~K|KfEdClA\\N|Ar@rAt@`C`Bhh@h[xChB^TlAr@xFlDxRfLbDnBfKdGxD`B~BpAtCbAlLvDlJ~C``@dM|K`DrJvBvJdAdJr@hZz@`JPd\\n@jMZ`DNzCRB@b@Db@Dt@FfB^jAZrDbAlCdAhAj@zAz@jBlAdBrAlAhAxA~A`@f@jB|Bn@x@x@nAbBnCz@rAlKdOz@~@VZh@h@f@b@b@\\LJTTRNx@j@j@^p@`@l@Rj@RXHpAb@ZJVHJDXHRDn@J~@Nt@HbADbABxA@xDAxCAdHGrNIfFOrA?f@@x@?x@BbABX@pAJx@HrBZrAXnBj@zB|@fAh@zA~@pDhClJtGjDdC`FjDtObKlD~BfKvGpRxMzCzB~BlB|@z@v@|@rAdBlAdBv@jA|DxFf@t@dCrDbAzAt@`A~@fAr@r@pElEzAzAnClC~@t@x@v@vAnAbAz@jEvDtAjARRh@h@xB~B`AhApAfBp@bAJJLPxCnElDhEd@d@pBpBDBh@f@v@t@PPLJhBvA~BvAfB~@~Ar@lAd@~@TzAXnAV~ANl@BjBL\\?zBFzA?dA?vA?`XDlA?dB?nD@zE?lACN?rABbL?`B?`C?jADv@BnAFv@FvARJ@pB`@xDt@dGlAtA\\|@V~Al@p@^j@\\dChBjKrHpDnCvApAf@d@x@dA`@v@`@z@b@nA\\tAN|@NfAHhAFpCLxJDdBD~@@xABPJjARxANdAVjAXrAf@dBt@nBz@nBb@z@b@r@`@h@^h@Z`@b@h@b@`@d@b@h@f@j@b@l@d@n@b@^P^Td@Vp@ZdGvCvXpM|DhBrDdBNHfCnAfD~ArGdDt@\\hDhBjCxAdCzAxAz@|A~@`GvCrAj@~I`ErCnAlFdCbElBzAr@|@b@`H`Dp@Zh@VvDpBr@^tA|@n@b@zAdAl@d@|ArA~ApAfBzAdAx@`At@t@h@dC~AjC`B|G`EjC`BzqA~y@zAfAvAhAdBtAzBfBp@h@dDbCt@d@vA`AtBnAjFtCzBnAbB|@NFr@\\p@Xz@XbB^lIhBlEfAbCv@`Cx@~NpGdClAnCdApDtAfBp@vAd@`APt@HtAHvA@n@@pBAnFCjBCV?pA@nHAxDDzADf@BhAHjAJvB^l@JD?bAVJBlA`@b@N~@\\x@ZdAf@hB|@`CjA~Av@xAp@dBl@t@Pz@TH@~@LR@t@D`@BdBLvAFhB?vA@d@?`@?~@?rCE^?vDCzAClDFnALhARv@Xt@Vv@^hAp@tAnAnA|AvAlBjBbCpApAt@pABPAXCNIZMV?@OXQh@Sz@O|@Eb@CTEz@?@ClAAf@A~B?`CBrBHtFDhEBbB@lA?l@?`@CjAAZATIrAEp@_BfMo@~EId@WrBM`AETQnACRi@`E]dC_@tCU`BKr@S|AI~@A^CZCt@?R?RAjA@^?nAHjDBbBB|@VrKDvCF`DB~@?LDrA@ZFbD@r@?`AIrBO`BU~AG`@WdBM|@UtAGb@q@|EUvAETCPQt@Kf@i@fB_@lAe@~AQt@[rASv@?FOJGBc@DWzFaAG"
								}]
							},
							supplementalData: {}
						}
					}, {
						durationMinutes: 104,
						startTime: H("3:34", "HH:mm").toDate(),
						endTime: H("4:59", "HH:mm").toDate(),
						legTypes: [MVLegType.Bus, MVLegType.Rail, MVLegType.Subway],
						response: {
							itinerary: {
								legs: [{
									encodedPolyline: "qu`cEwhftE?W?QBQFQLUBB@@@?@@B?B?@ABA@A@?@A@C?C@C?A?CAC?CAAAAAAAAAAA?AAA?A?A?C@A?A@A@A@?@MGMCWEYAm@?uA?}@AkBCm@Ge@K_@UW]Kc@Gs@H{@@IFKJMXUrC?pBO|A[t@WpD{BpB}Ar@k@jAeAfA}@`@[t@k@ZUpAw@rAi@z@Wr@M`AEbAAX?V@dAN^Hf@HxAj@f@VEi@?oB?gA?eBFeCPcENuB^}CZeCd@_DXqBl@cDd@aDlAyFhEaSlBgHbBkDXi@p@eA~@yA~@}AvCuFfAsBhAoA\\a@Z_@pAeAlCsBt@g@ZMH?F?L@JBJFr@lAVr@Nr@PfBEzDOvKAxAKbAQ|@Qd@ITKVCCCCCCA?CAAAC?A?C?C?C?A@A?E@CBA@ABA@ABA@ABAD?@?D?D?D?B??@D@@@D@B@@B@BBB@@@B?D@B?@?DAB?@ABABCBA@C??BE@C?E@C?E?E?A?CACAEACACJWHUPe@P}@JcA@yANwKD{DC{AGm@Qy@Uk@O_@a@s@IIIIEEOMm@Wi@Om@O]Ia@IOEQESMGGCEEKEKGYGOIi@Kc@Qc@KSSY]_@Ue@O[IW?YLaAJYNa@b@uA`@eAJ]B?BA@A@A@A?C@A?A?C?A?CjBuCjFoJ|DeHJSCc@KUaDsCkCaCsKhRO\\M`@Ij@Ef@Ab@E~@APKpBGxAC?A?C?A?A@C@A@A@A@AB?@A@?B?@?B@B?@BB?@@@@@B@@@B?@?B?@A@?BC@A@A?AJBTDl@D`@BD?j@FTBJBFH?@?@?@?@@B?@@@?@@@e@rAEJi@~AOb@Sv@?@WpA?@CTXLXTTTf@l@RZP`@Lb@DXDRDd@@ZBZL@\\FPBPBD@\\FZFZFXHVHTJZNRPTQv@k@JGt@o@h@g@\\m@Ri@Li@Hi@N}BLeBP_BLo@Ni@Vq@Xe@Va@`@o@T_@X_@lAmAv@q@?M?QQu@AQ?O@QB[XkAH_@`CuJj@iC`AoFd@wD`@oFDaAPiHNaXLoOJmQEgBGsAMyAQcBUqAe@kBYcAe@kA_AyBwBiEMWS_@gCeFsCyF_@y@sAmEc@{AQm@IY[eAQk@Ou@Ky@OoA_@mGF{@BKDMTc@b@e@ZW\\k@Lg@Bi@?GAiAa@@gAHuAHg@D}@F_@D[DI@HHDJ?BADKXMFAF?@?B?D@D@@BBD@F?l@GLEBA?C?C?E?CAEACGCK@KMCGAG?I@KDI^E|@Gf@EtAIZFVJNPHTH\\ATETIPMNSLYDYEOIMMUc@Iq@G}@K}Ao@iJyBs`@}AoXOmDMoCE{CDyCV{Ef@eGd@qGj@cGh@qGd@eEh@qDvAsE|ByFxNe]bImRpA}CdAwCp@kCh@yC`@{DJqDGoEYsDa@cDs@aDcAyDiAiEeAaEw@gD_@iCIu@IwAIiB?_BTqIbQstA~AcMr@}E~@wEn^apBxAwIl@qEd@qFX}FNeGIsJgAuw@?IKqEGu@W_Ey@eGMy@sAqGsByGEKmAaDkR_d@oIaSgFsL{CwGcD}Fq@}Ao@iAMWKWCUCOBWJWdA{AaAt@KD]JYCWKSSa@m@Q]IOsA_CyAgCcB}DgAkCkEcM}FaPoD}J{@yCk@sC[iB]uCKeAEs@IsAIqBCcC@gB?eAByAp@wSPaIHcDBmEM_PK}MOaQOwNKcKA_ACwBEiC?aABYDQFKJIJGPCB@DALCDABCBABCBABCBC@EBCBE@C@C@E@E@E@E?C?E@Gz@E`@@zBj@FBtCv@~AXzCl@lA\\pEpA|A`@h@LXB^DD@n@BZATCZE|@Ud@Uv@e@f@a@`AeAv@qAz@yAtA{DZgAPcANiAJkAHeCBuBM}Cy@cFe@gBkAaDmBsFBC@A@CBC?A@E?A?E@A?CAC?A?EACAAACAAACAACCA?CACAA?AAC?E?A@C?_AkCaAiCe@}A_@cBMmAOeBAwCJuC@AB?BA@C@?@C@C?A??@C?C@A?C?CAC?CAA?AACAAAAAAAAAAA?CAA?AAC?C@C?A@A?ABC@?@C@?BABAB?BmA@YDUFOHKHQNKPIVETEZC@C@CBADAB?B?B@D@B@BB@@@B@@?D?DABCBC@ER\\Lh@NjBDz@HvAJpAPzAZ|ABN`@nA\\|@~A`EPbAFj@\\|Cb@bEHfBBp@AbAQfBI^A?AAC?A@C?A@A@A@?@A@?B?B?B?@MTKNUVEDSPOLQFgA`@_@H]@i@?YASEOCkAUOEy@S{@c@}@q@a@g@QQUi@c@aBS{@Q{AIeACaB@cABk@ByADoC?u@?]AOE[Kk@GOAC@?@?@A@A@A?A@A@A?A?A?A?C?A?AAC`@YhAeADCf@]LCPC@B@D@BB@@@B@@?D?B?BCBCBE?E@CAEACCEACCAE?A??e@Bc@BWDQNaD@Q?[GsCWaB{@cDaBqGc@cBO_@Wc@OQYYMKOUAGAICQDi@?YCk@cAqEUgAQcCIwBBsElBJt@?bBHtBBBsD?kB@}@Bc@@IHg@Tg@Xa@@@@B@?B@B?BABA?A@C@A?C?C?CACACCACAA?C?A?YmA]cAKMSUYOQKo@Ga@A]FYJ]Te@RAAAAA?AAA?A?A?A?A@A?A@ABA@AB?B?@?@SHa@J_AGYEaAa@?ECGCECCEATiAt@uD`@kBTq@\\}@xAcCl@}@p@qAd@u@\\w@Xs@Ty@Lw@BQJk@FkAxCXL@ZEjBYhAGDkBBsD?}@@IDWDOLOxAk@@@?@@@B@@?B@BA@?@ABA@A?C@A?A?C?C?A?AACAAAACAAAA?Ka@K[M[S]SQYMUI??WE]EUBwAmFu@sDe@yCmAr@m@Zc@JQAUGQQIQ@A@A@A@A@C?C@A?C?C?A?CAC?AACAAAAAAAAA?CAA?C?A?A?Ya@Uc@Qi@UcAImEAo@@iDFiCFw@L{B\\qAh@cAHODKNQZa@f@]LIb@QHCVIXEr@CNAtABfAHJ@jALLAF?t@^ZJ?F?B@B@B@?@@B@B?B?@?BA@??APRJNFLXh@FTP|@@\\Bb@?P@rA@v@@`@Fh@Ff@Jh@Nh@Pf@JVHPNXNTPPPRd@`@ZRTPLUs@]m@i@c@i@Ua@KUUg@Ma@Me@Ks@Eg@CmAAa@@mACc@Cc@Ga@K_@Ma@S]o@}@?E?EAAAC??EEC?C?C?C@A@CBAD[Ku@_@G?M@kAMKAgAIuACO@c@WKKS_@COEKe@y@gAkBOUy@gBOm@Mk@SiAKq@S{A"
								}]
							},
							supplementalData: {}
						}
					}]
				}, c.prototype.fromNow = function (a) {
					K.log("fromNow", a);
					var b = H(a).fromNow();
					return K.log("  " + b), b
				}, c.prototype.onSelectedRoutePriorityChanged = function (a) {
					K.log("onSelectedRoutePriorityChanged " + a), this.isDirtySearch = !0, this.appStore.changeRoutePriority(a)
				}, c.prototype.onSelectedRouteTypesChanged = function (a) {
					K.log("onSelectedRouteTypesChanged", a), this.isDirtySearch = !0, this.appStore.changeTripPlanRouteTypes(a)
				}, c.prototype.hideMore = function () {
					this.showRouteOptions = !1, this.showTimeSelector = !1
				}, c.prototype.optionsClicked = function () {
					this.showRouteOptions = !0, this.previousOptions = {
						routeTypes: angular.copy(this.appStore.state.tripPlan.routeTypes),
						routePriority: angular.copy(this.appStore.state.tripPlan.routePriority)
					}
				}, c.prototype.doneShowOptions = function () {
					this.showRouteOptions = !1, angular.equals(this.previousOptions.routePriority, this.appStore.state.tripPlan.routePriority) && angular.equals(this.previousOptions.routeTypes, this.appStore.state.tripPlan.routeTypes) || (this.appStore.saveStateToUrl(), this.appStore.searchRoutes()), this.previousOptions = null
				}, c.prototype.onRefPointSelected = function () {
					this.isDirtySearch = !0;
					var a = this.appStore.state.tripPlan.time;
					a.refPoint = this.selectedRefPoint, this.appStore.changeTripPlanTime(a), this.selectedRefPoint == p.RefPoint.Arrive || this.selectedRefPoint == p.RefPoint.Depart ? this.showTimeSelector = !0 : (this.showTimeSelector = !1, this.appStore.saveStateToUrl(), this.appStore.searchRoutes())
				}, c.prototype.onClickOutsideOfOptionsModal = function (a) {
					a || (this.showRouteOptions = !1)
				}, c.prototype.onTripPlanSearchLocationBegin = function (a) {
					this.logger.log("onTripPlanSearchLocationBegin"), this.searchingLocation[a.fromTo] = !0
				}, c.prototype.onTripPlanSearchLocationEnd = function (a) {
					this.logger.log("onTripPlanSearchLocationEnd"), this.searchingLocation[a.fromTo] = !1
				}, c.prototype.getPartnerLogo = function () {
					return (!this.appProfileService.isMobile || this.appProfileService.isMobile && !this.mobileService.isKeyboardOpened) && this.appStore.state.customer && !this.appStore.state.customer.designConfiguration.hidePartnership && this.appStore.state.customer.logo ? this.appStore.state.customer.logo : null
				}, c.prototype.isFooterBannerAvailable = function () {
					if (this.$stateParams && this.$stateParams.customerId) {
						var a = I.Customer.getCustomerById(this.$stateParams.customerId);
						if (a) return !a.designConfiguration.hideFooterOnMobile
					}
					return !0
				}, c.prototype.locationFocused = function (a) {
					this.logger.log("locationFocused", a), this.appStore.state.hasError = !1, this.appStore.state.error = void 0, h.events.raise(i.AppEvents.LOCATION_INPUT_FOCUS, a, K), this.suggestedLocations && this.suggestedLocationsType == a || this.showRecentLocations(a)
				}, c.prototype.shouldShowCommunityBar = function (a) {
					return a ? this.appStore.state.user.metro && this.appStore.state.user.metro.metroAreaData && this.appStore.state.user.metro.metroAreaData.features && this.appStore.state.user.metro.metroAreaData.features.COMMUNITY_SUPPORTED && !(this.metroCarpoolData && !this.searching && !this.hasRoutes) && !this.appStore.state.customer.designConfiguration.hideCommunityBar : this.appStore.state.user.isUnresolvedMetro && !this.appStore.state.customer.designConfiguration.hideCommunityBar
				}, c.prototype.showRecentLocations = function (a) {
					this.loadRecentLocations(), this.suggestedLocationsType = a, this.suggestedLocationsTitle = this.$translate.instant("search_recent_section_title"), this.suggestedLocationsAllowUseCurrent = !0
				}, c.prototype.locationBlur = function (a) {
					h.events.raise(i.AppEvents.LOCATION_INPUT_FOCUS, null, K)
				}, c.prototype.showShareDialog = function (a) {
					this.shareService.showShareDialog(a, this.$location.url(), C.ShareCategory.TripPlanResults, this.$translate.instant("share_tripplan_results"), {
						from_address: this.from.name,
						to_address: this.to.name
					})
				}, c.prototype.loadRecentLocations = function () {
					var a = this;
					if (this.logger.log("loadRecentLocations"), this.clearSuggestedLocations(), this.hasRoutes) return void this.logger.log("Ignore locationFocused since there are some suggested routes");
					this.tripPlanService.loadRecentLocations().then(function (b) {
						var c = a.appStore.state.tripPlan.from ? a.appStore.state.tripPlan.from.id : a.appStore.state.tripPlan.to ? a.appStore.state.tripPlan.to.id : null;
						b = b.filter(function (a) {
							return a.id != c
						}), a.suggestedLocations = b, a.suggestedLocationsTitle = a.$translate.instant("search_recent_section_title"), a.suggestedLocationsAllowUseCurrent = !0
					})
				}, c.prototype.focusOnEmptyLocationField = function (a) {
					if (void 0 === a) return void(this.to ? this.from || this.setFocusOnLocation(n.FromTo.From) : this.setFocusOnLocation(n.FromTo.To));
					a != n.FromTo.From || this.to ? a != n.FromTo.To || this.from || this.setFocusOnLocation(n.FromTo.From) : this.setFocusOnLocation(n.FromTo.To)
				}, c.prototype.setFocusOnLocation = function (a) {
					var b = a == n.FromTo.From ? "[model='ctrl.from'] input" : "[model='ctrl.to'] input",
						c = A.find(b, this.element);
					this.$timeout(function () {
						c[0].focus()
					})
				}, c.prototype.clearSuggestedLocations = function () {
					this.logger.log("clearSuggestedLocations"), this.suggestedLocationsAllowUseCurrent = !0, this.suggestedLocations = null, this.suggestedLocationsType = null, this.suggestedLocationsTitle = ""
				}, c.prototype.onTripPlanQueryChanged = function (a) {
					this.logger.log("onTripPlanQueryChanged"), this.displayQRBanner = !0, this.clearSuggestedLocations()
				}, c.prototype.onUseCurrentLocationFailed = function () {
					this.logger.log("onUseCurrentLocationFailed"), this.clearSuggestedLocations()
				}, c.prototype.onMetroChanged = function () {
					this.logger.log("onMetroChanged"), this.updateEmptyResultsError(), this.clearSuggestedLocations()
				}, c.prototype.updateEmptyResultsError = function () {
					var a;
					try {
						a = this.appStore.state.user.metro.metroAreaData.metroAreaName
					} catch (b) {
						a = ""
					}
					this.emptyResultsErrorMessage = this.$translate.instant("search_location_empty_results", {
						param1: a
					}).replace("\\n", "<br/>")
				}, Object.defineProperty(c.prototype, "metroCarpoolData", {
					get: function () {
						return this.appProfileService.isDesktop && !this.appStore.state.customer.designConfiguration.hideCarpool && this.metroService.getCurrentMetroCarpoolData()
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.onCarpoolBannerClick = function () {
					this.analyticsService.trackCarpoolBannerClick()
				}, c.prototype.onCommunityBannerClick = function (a) {
					this.analyticsService.trackCommunityEvent(a)
				}, c.prototype.getCommunityUnsupportedUrl = function () {
					return this.localeService.getCommunityUnsupportedUrl()
				}, c.prototype.getCommunityUrl = function () {
					return this.localeService.getCommunityUrl()
				}, c.prototype.reportCarPoolBannerDisplay = function () {
					var a = this;
					this.carPoolBannerEventTimer = this.$timeout(function () {
						a.analyticsService.trackUserEvent("Carpool banner display")
					}, 3e3)
				}, c = e([s.Component({
					tagName: "trip-plan",
					template: a("./tripPlan.html!text"),
					styles: a("./tripPlan.css!css")
				}), g(0, s.Inject("$q")), g(1, s.Inject("$location")), g(2, s.Inject("$state")), g(3, s.Inject("$stateParams")), g(4, s.Inject("$translate")), g(5, s.Inject("$timeout")), f("design:paramtypes", [Object, Object, Object, Object, Object, Function, F.UserProfileService, k.SearchService, u.ImageService, t.AppStoreService, v.MobileService, z.AppProfileService, E.AnalyticsService, y.TripPlanService, D.MetroService, G.LocaleService, B.ShareService])], c)
			}(l.ComponentBase);
		return b.TripPlanComponent = L, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/tripPlan/tripPlanOptions.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="select-route-type">\n    <span class="title">{{\'route_type\' | translate}}</span>\n\n    <div class="priority-wrapper">\n        <md-radio-group ng-model="ctrl.selectedRoutePriority">\n            <md-radio-button ng-repeat="routePriority in ctrl.routePrioritiesVM track by $index"\n                             value="{{routePriority.type}}"\n                             ng-click="ctrl.selectRoutePriority(routePriority)">\n                \x3c!--<md-icon class="trip-pref-icon" md-svg-src="{{routePriority.imageUrl}}"></md-icon>--\x3e\n                {{routePriority.translationKey | translate}}\n            </md-radio-button>\n        </md-radio-group>\n    </div>\n</div>\n\n<div class="select-transit-type">\n    <span class="title">{{\'suggest_routes_transit_type_preferred\' | translate}}</span>\n\n    <ul class="transit-types">\n        <li ng-repeat="routeType in ctrl.routeTypesVM track by $index" ng-click="ctrl.toggleRouteType(routeType)">\n            <md-button aria-label="{{routeType.translationKey | translate}}" class="md-icon-button"\n                       ng-class="{selected: routeType.selected}" md-ink-ripple="false">\n                <span ng-if="routeType == ctrl.routeTypeAll">{{\'all\' | translate}}</span>\n                <span ng-if="routeType != ctrl.routeTypeAll" ng-bind-html="routeType.imageHtml"></span>\n                <span class="transit-label">{{routeType.translationKey | translate}}</span>\n                \x3c!--<md-tooltip md-direction="top">--\x3e\n                    \x3c!--{{routeType.translationKey | translate}}--\x3e\n                \x3c!--</md-tooltip>--\x3e\n            </md-button>\n        </li>\n    </ul>\n</div>\n'
		})
	}(), System.registerDynamic("app/tripPlan/tripPlanOptions.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/tripPlan/tripPlanOptions.js", ["../fx/Component", "../fx/Logger", "../fx/Annotations", "../models/tripPlan", "../services/appStoreService", "../services/imageService", "./tripPlanOptions.html!text", "./tripPlanOptions.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../fx/Component"),
			h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("../models/tripPlan"),
			k = a("../services/appStoreService"),
			l = a("../services/imageService"),
			m = h.createLogger("TripPlanOptionsComponent"),
			n = function (b) {
				function c(a, c) {
					var d = b.call(this, m) || this;
					return d.appStoreService = a, d.imageService = c, d.routePrioritiesVM = d.buildRoutePriorities(), d.routeTypesVM = d.buildRouteTypes(), d.routeTypeAll = d.routeTypesVM[0], d
				}
				return d(c, b), c.prototype.onPushed = function () {
					if (b.prototype.onPushed.call(this), this.selectedRouteTypes == this.raisedSelectedRouteTypes) m.log("  Pushed selectedRouteTypes is the same as raised before");
					else {
						for (var a = !0, c = 1; c < this.routeTypesVM.length; c++) {
							var d = this.routeTypesVM[c];
							d.selected = -1 != this.selectedRouteTypes.indexOf(d.type), d.selected || (a = !1)
						}
						this.routeTypeAll.selected = a, a && this.clearAllRouteTypes()
					}
				}, c.prototype.buildRoutePriorities = function () {
					return [{
						type: j.RoutePriority.BestRoute,
						translationKey: "fastest",
						imageUrl: "/images/best_route.svg"
					}, {
						type: j.RoutePriority.LeastWalking,
						translationKey: "least_walking",
						imageUrl: "/images/least_walking.svg"
					}, {
						type: j.RoutePriority.LeastTransfers,
						translationKey: "least_transfers",
						imageUrl: "/images/least_transfers.svg"
					}]
				}, c.prototype.buildRouteTypes = function () {
					var a = this,
						b = this.appStoreService.state.user.metro.supportedRouteTypes.map(function (b) {
							return {
								type: b,
								imageHtml: a.imageService.getImageHTML(b.imageId),
								selected: !1,
								translationKey: b.translationKey
							}
						});
					return b.unshift({
						type: "ALL",
						imageHtml: null,
						selected: !1,
						translationKey: "suggest_routes_transit_types_all"
					}), b
				}, c.prototype.clearAllRouteTypes = function () {
					for (var a = 1; a < this.routeTypesVM.length; a++) this.routeTypesVM[a].selected = !1
				}, c.prototype.selectRoutePriority = function (a) {
					m.log("selectRoutePriority %O", a), this.onSelectedRoutePriorityChanged({
						routePriority: a.type
					})
				}, c.prototype.toggleRouteType = function (a) {
					var b = this;
					if (m.log("toggleRouteType %O", a), a == this.routeTypeAll && a.selected) return void m.log("  Cannot unselect All");
					a.selected = !a.selected;
					for (var c = !1, d = 0; d < this.routeTypesVM.length && !(c = this.routeTypesVM[d].selected); d++);
					c || (a = this.routeTypeAll, a.selected = !0);
					var e;
					a == this.routeTypeAll ? (this.clearAllRouteTypes(), e = this.appStoreService.state.user.metro.supportedRouteTypes) : (this.routeTypeAll.selected = !1, e = this.routeTypesVM.filter(function (a) {
						return a != b.routeTypeAll && a.selected
					}).map(function (a) {
						return a.type
					})), this.raisedSelectedRouteTypes = e, this.onSelectedRouteTypesChanged({
						routeTypes: this.raisedSelectedRouteTypes
					})
				}, c = e([i.Component({
					tagName: "tripplan-options",
					template: a("./tripPlanOptions.html!text"),
					styles: a("./tripPlanOptions.css!css"),
					scope: {
						selectedRoutePriority: "<",
						selectedRouteTypes: "<",
						onSelectedRoutePriorityChanged: "&",
						onSelectedRouteTypesChanged: "&"
					}
				}), f("design:paramtypes", [k.AppStoreService, l.ImageService])], c)
			}(g.ComponentBase);
		return b.TripPlanOptionsComponent = n, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/itinerary.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<itinerary layout="column">\n    <div class="spinner" ng-show="ctrl.isLoading">\n        <moovit-spinner></moovit-spinner>\n    </div>\n\n    <route-actions class="actions-bar"\n                   ng-if="ctrl.route"\n                   route="ctrl.route"\n                   show-share="ctrl.featureFlags[\'SHARE_ITINERARY\']"\n                   buy-tickets-url="ctrl.appStoreService.state.customer.ticketsUrl"></route-actions>\n\n    <route-summary route="ctrl.route" ng-if="ctrl.route" allow-prev-next="true"></route-summary>\n\n    <route-details route="ctrl.route" ng-if="ctrl.route"></route-details>\n    <error-panel ng-if="ctrl.hasError"></error-panel>\n</itinerary>\n\n'
		})
	}(), System.registerDynamic("app/route/itinerary.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/itinerary.js", ["../fx/Application", "../fx/Component", "../services/tripPlanService", "../fx/Logger", "../common/AppEvents", "../fx/Annotations", "../services/appStoreService", "../services/analyticsService", "../services/appProfileService", "../services/shareService", "./itinerary.html!text", "./itinerary.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Application"),
			i = a("../fx/Component"),
			j = a("../services/tripPlanService"),
			k = a("../fx/Logger"),
			l = a("../common/AppEvents"),
			m = a("../fx/Annotations"),
			n = a("../services/appStoreService"),
			o = a("../services/analyticsService"),
			p = a("../services/appProfileService"),
			q = a("../services/shareService"),
			r = k.createLogger("ItineraryComponent"),
			s = function (b) {
				function c(a, c, d, e, f, g, h, i) {
					var j = b.call(this, r) || this;
					return j.$stateParams = a, j.$translate = c, j.featureFlags = d, j.appStoreService = e, j.tripPlanService = f, j.shareService = g, j.appProfileService = h, j.analyticsService = i, j
				}
				return d(c, b), c.prototype.onInit = function () {
					var a = this;
					b.prototype.onInit.call(this), h.events.subscribe(l.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, this, this.onSelectedRouteChanged), h.events.subscribe(l.AppEvents.TRIPPLAN_SEARCH_ROUTES_END, this, this.onRoutesSearchEnd), this.isLoading = !0, this.appStoreService.loadRoute().then(function (b) {
						a.route = b, a.isLoading = !1
					})
				}, c.prototype.onRoutesSearchEnd = function () {
					this.route || this.appStoreService.selectRoute(this.appStoreService.state.tripPlan.routes[0], !1)
				}, c.prototype.onSelectedRouteChanged = function () {
					this.route = this.appStoreService.state.tripPlan.route
				}, Object.defineProperty(c.prototype, "hasError", {
					get: function () {
						return this.appStoreService.state.hasError
					},
					enumerable: !0,
					configurable: !0
				}), c = e([m.Component({
					tagName: "itinerary",
					template: a("./itinerary.html!text"),
					styles: a("./itinerary.css!css")
				}), g(0, m.Inject("$stateParams")), g(1, m.Inject("$translate")), g(2, m.Inject("featureFlags")), f("design:paramtypes", [Object, Object, Object, n.AppStoreService, j.TripPlanService, q.ShareService, p.AppProfileService, o.AnalyticsService])], c)
			}(i.ComponentBase);
		return b.ItineraryComponent = s, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/map/mapView.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<map-view flex layout="column">\n    <route-steps-nav ng-if="ctrl.route" route="ctrl.route"></route-steps-nav>\n    <map flex></map>\n</map-view>'
		})
	}(), System.registerDynamic("app/map/mapView.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/map/mapView.js", ["../fx/Component", "../fx/Annotations", "../common/AppEvents", "../fx/Application", "../services/appStoreService", "../fx/Logger", "../services/appProfileService", "./mapView.html!text", "./mapView.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../common/AppEvents"),
			k = a("../fx/Application"),
			l = a("../services/appStoreService"),
			m = a("../fx/Logger"),
			n = a("../services/appProfileService"),
			o = m.createLogger("MapViewComponent"),
			p = function (b) {
				function c(a, c, d) {
					var e = b.call(this, o) || this;
					return e.$stateParams = a, e.appProfileService = c, e.appStoreService = d, k.events.subscribe(j.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, e, e.onSelectedRouteChanged), e.route = e.appStoreService.state.tripPlan.route, e
				}
				return d(c, b), c.prototype.onSelectedRouteChanged = function () {
					this.route = this.appStoreService.state.tripPlan.route
				}, c = e([i.Component({
					tagName: "map-view",
					template: a("./mapView.html!text"),
					styles: a("./mapView.css!css")
				}), g(0, i.Inject("$stateParams")), f("design:paramtypes", [Object, n.AppProfileService, l.AppStoreService])], c)
			}(h.ComponentBase);
		return b.MapViewComponent = p, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/errorPanel.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="error-panel">\n    \x3c!-- default error image --\x3e\n    <img class="error-icon" ng-src="{{ctrl.errorImage}}" ng-if="ctrl.errorImage">\n    <md-icon class="error-icon" ng-if="!ctrl.errorImage" md-svg-src="/images/error-states/img_empty_no_network.svg">\n    </md-icon>\n    <div class="error-header">{{ctrl.errorTitle}}</div>\n    <div class="error-text" data-ng-bind-html="ctrl.errorMessage"></div>\n</div>\n'
		})
	}(), System.registerDynamic("app/components/errorPanel.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/errorPanel.js", ["../fx/Component", "../fx/Annotations", "../fx/Logger", "../services/appStoreService", "./errorPanel.html!text", "./errorPanel.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../services/appStoreService"),
			l = j.createLogger("ErrorPanelComponent"),
			m = function (b) {
				function c(a, c) {
					var d = b.call(this, l) || this;
					return d.appStore = a, d.$translate = c, d
				}
				return d(c, b), Object.defineProperty(c.prototype, "errorTitle", {
					get: function () {
						return this.appStore.state.error && void 0 != this.appStore.state.error.title ? this.appStore.state.error.title : this.$translate.instant("UnexpectedErrorText")
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "errorMessage", {
					get: function () {
						return this.appStore.state.error ? this.appStore.state.error.text : ""
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "errorImage", {
					get: function () {
						var a = "/images/error-states/";
						return this.appStore.state.error ? this.appStore.state.error.image ? a + this.appStore.state.error.image : void 0 : a + "img_empty_error.svg"
					},
					enumerable: !0,
					configurable: !0
				}), c = e([i.Component({
					tagName: "error-panel",
					template: a("./errorPanel.html!text"),
					styles: a("./errorPanel.css!css")
				}), g(1, i.Inject("$translate")), f("design:paramtypes", [k.AppStoreService, Object])], c)
			}(h.ComponentBase);
		return b.ErrorPanelComponent = m, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/sideNavigation.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div ng-cloak class="side-navigation-container"\n     ng-class="{\'collapsed\': ctrl.state == 0,\n                \'expanded\': ctrl.state == 1,\n                \'hidden\': ctrl.state == 2,\n                \'carpool\': ctrl.metroCarpoolData,\n                 \'show-more\': ctrl.showMoreLinks\n                }">\n    <div class="desktop-version">\n        <div class="nav-header">\n            <md-icon md-svg-src="/images/moovit_logo_full.svg" class="logo"></md-icon>\n            <a href class="close-nav" ng-click="ctrl.toggleNavigation($event)">\n                <md-icon md-svg-icon="/images/nav-icons/toggle_icon.svg"></md-icon>\n            </a>\n        </div>\n\n        <div class="scroll-container">\n            <ul class="menu-items" itemscope itemtype="http://www.schema.org/SiteNavigationElement">\n                <li class="item" ng-click="ctrl.onItemClicked(\'about\', $event)">\n\n                    <a itemprop="url" ng-href="{{ctrl.companyUrl}}" target="_blank">\n                        <div>\n                            <md-icon class="icon company"\n                                     md-svg-icon="/images/nav-icons/company_icon.svg"></md-icon>\n                            <span class="text" itemprop="name">{{\'company_label\' | translate}}</span>\n                            <span class="small-text" itemprop="name">{{\'about_title\' | translate}}</span>\n                        </div>\n                    </a>\n\n                </li>\n                <li class="item" ng-click="ctrl.onItemClicked(\'smart-city-solutions\', $event)">\n                    <a itemprop="url" ng-href="{{ctrl.smartCityUrl}}" target="_blank">\n                        <div>\n                            <md-icon class="icon smart-city-solutions"\n                                     md-svg-icon="/images/nav-icons/smart_city_icon.svg"></md-icon>\n\n                            <span class="text" itemprop="name">{{\'solutions_label\' | translate}}</span>\n                            <span class="small-text" itemprop="name">{{\'smart_transit_suite_label\' | translate}}</span>\n                        </div>\n                    </a>\n                </li>\n                <li class="item" ng-click="ctrl.onItemClicked(\'community\', $event)">\n                    <a itemprop="url" ng-href="{{ctrl.communityUrl}}" target="_blank">\n                        <div>\n                            <md-icon class="icon community"\n                                     md-svg-icon="/images/nav-icons/community_icon.svg"></md-icon>\n\n                            <span class="text" itemprop="name">{{\'community_label\' | translate}}</span>\n                            <span class="small-text" itemprop="name">{{\'mapping_transportation_label\' | translate}}</span>\n                        </div>\n                    </a>\n                </li>\n                <li class="item" ng-click="ctrl.onItemClicked(\'press\', $event)">\n                    <a itemprop="url" ng-href="{{ctrl.pressUrl}}" target="_blank">\n                        <div>\n                            <md-icon class="icon press"\n                                     md-svg-icon="/images/nav-icons/press_icon.svg"></md-icon>\n\n                            <span class="text" itemprop="name">{{\'news_label\' | translate}}</span>\n                            <span class="small-text" itemprop="name">{{\'blog_case_press_label\' | translate}}</span>\n                        </div>\n                    </a>\n                </li>\n                <li ng-if="ctrl.debugMode" class="item" ng-click="ctrl.dump()">\n                    <div>\n                        <md-icon class="icon"\n                                 md-svg-icon="/images/nav-icons/settings_icon.svg"></md-icon>\n                        <a href class="md-raised settings-button">\n                            <span class="text">Dump</span>\n                        </a>\n                    </div>\n                </li>\n            </ul>\n\n            <div class="show-more-menu" ng-if="ctrl.showMoreLinks">\n                <div class="moovit-banner">\n                    <div class="title">\n                        <div class="large-title">\n                            <span class="moovit">Moovit </span>\n                            <span>{{\'side_nav_allinone\' | translate: ctrl.sideNavHeaderParam}}</span>\n                        </div>\n                        <div class="small-title">{{\'real_time_subtitle\' | translate}}</div>\n                    </div>\n                </div>\n\n                <ul class="footer-links">\n                    <li ng-if="ctrl.showHierarchyUrls()" ng-click="ctrl.onItemClicked(\'destinations-directory\')">\n                        <a itemprop="url" ng-href="{{ctrl.destinationsUrl}}" target="_blank">\n                            <span class="text" itemprop="name">{{ctrl.destinationsIndexText}}</span>\n                        </a>\n                    </li>\n                    <li ng-if="ctrl.showHierarchyUrls()" ng-click="ctrl.onItemClicked(\'agencies-directory\')">\n                        <a itemprop="url" ng-href="{{ctrl.agenciesUrl}}" target="_blank">\n                            <span class="text" itemprop="name">{{ctrl.agenciesIndexText}}</span>\n                        </a>\n                    </li>\n                    <li ng-click="ctrl.onItemClicked(\'supported_countries\')">\n                        <a itemprop="url" ng-href="{{ctrl.countriesUrl}}" target="_blank">\n                            <span class="text" itemprop="name">{{\'about_supported_countries\' | translate}}</span>\n                        </a>\n                    </li>\n                    <li ng-click="ctrl.onItemClicked(\'blog\')">\n                        <a itemprop="url" ng-href="{{ctrl.blogUrl}}" target="_blank">\n                            <span class="text" itemprop="name">{{\'about_blog\' | translate}}</span>\n                        </a>\n                    </li>\n                    <li ng-click="ctrl.onItemClicked(\'web-app\')">\n                        <a itemprop="url" ng-href="{{ctrl.webappUrl}}" target="_blank">\n                            <span class="text" itemprop="name">{{\'web_hierarchy_footer_webapp\' | translate}}</span>\n                        </a>\n                    </li>\n                </ul>\n\n                <div class="copyright">{{\'about_moovit_inc_rights\' | translate}}</div>\n\n\n            </div>\n        </div>\n\n        <div class="show-more-toggle" ng-click="ctrl.toggleMoreLinks($event)">\n            <div>\n                <span class="show-more" ng-if="!ctrl.showMoreLinks">{{\'show_more\' | translate}}</span>\n                <span class="show-less" ng-if="ctrl.showMoreLinks">{{\'show_less\' | translate}}</span>\n                <md-icon class="icon" md-svg-icon="/images/collapse_black.svg"></md-icon>\n            </div>\n\n\n        </div>\n\n\n        <div class="moovit-banner">\n            <div class="title">\n                <div class="large-title">\n                    <span class="moovit">Moovit</span>\n                    <span>{{\'world_app_moovitless\' | translate}}</span>\n                </div>\n                <div class="small-title">{{\'real_time_subtitle\' | translate}}</div>\n            </div>\n        </div>\n\n        <ul class="footer-links">\n            <li ng-click="ctrl.onItemClicked(\'terms\')">\n                <a itemprop="url" ng-href="{{\'terms_of_use_url\' | translate}}" target="_blank">\n                    <span class="text" itemprop="name">{{\'terms_of_service_link\' | translate}}</span>\n                </a>\n            </li>\n            <li ng-click="ctrl.onItemClicked(\'privacy\')">\n                <a itemprop="url" ng-href="{{\'privacy_url\' | translate}}" target="_blank">\n                    <span class="text" itemprop="name">{{\'privacy_text\' | translate}}</span>\n                </a>\n            </li>\n        </ul>\n\n        <div class="qr-code-wrapper" ng-if="ctrl.isQRCodeAvailable()">\n            <div class="text">{{\'web_download_header\' | translate}}</div>\n            <div class="app-download-options">\n                <a ng-href="{{ctrl.appUrls.iosAppURL}}" target="_blank" ng-click="ctrl.trackAppleStoreClick($event)" class="store-action-button app-store"></a>\n                <a ng-href="{{ctrl.appUrls.googleAppURL}}" target="_blank" ng-click="ctrl.trackGooglePlayClick($event)" class="store-action-button play-store"></a>\n                <qr-code options="ctrl.qrCodeParams"></qr-code>\n            </div>\n        </div>\n        <div class="external-buttons" ng-mouseenter="ctrl.showStorePopup = true"\n             itemscope itemtype="http://schema.org/MobileApplication">\n            <meta itemprop="name" content="Moovit"/>\n            <meta itemprop="installUrl" content="{{ctrl.appStoreService.getGooglePlayLink()}}"/>\n            <meta itemprop="operatingSystem" content="Android, iOS, Mobile Web"/>\n            <meta itemprop="applicationCategory" content="MAPS_AND_NAVIGATION"/>\n\n            <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">\n                <meta itemprop="priceCurrency" content="USD"/>\n                <meta itemprop="price" content="0"/>\n                <meta itemprop="url" content="https://moovit.com"/>\n            </div>\n\n            <div class="app-store-wrapper">\n                <div class="text">{{\'web_download_label\' | translate}}</div>\n                <div ng-if="ctrl.isCollapsed">\n                    <a href ng-mouseover="ctrl.hoveredStoreOption = \'moovit\'" class="store-action-button moovit"\n                       ng-if="ctrl.appProfileService.isInIframe"></a>\n                    <a href ng-mouseover="ctrl.hoveredStoreOption = \'play\'" ng-click="ctrl.toggleNavigation($event)"\n                       class="store-action-button play-store" target="_blank"></a>\n                    <a href ng-mouseover="ctrl.hoveredStoreOption = \'apple\'"\n                       ng-click="ctrl.toggleNavigation($event) "\n                       class="store-action-button app-store" target="_blank"></a>\n                </div>\n                <div class="stores-wrapper" ng-if="!ctrl.isCollapsed">\n                    <a ng-href="{{ctrl.appUrls.googleAppURL}}" class="store-action-button play-store"\n                       ng-attr-style="background-image: url(\'{{ctrl.playStoreUrl}}\')" target="_blank"></a>\n                    <a ng-href="{{ctrl.appUrls.iosAppURL}}" class="store-action-button app-store"\n                       ng-attr-style="background-image: url(\'{{ctrl.appleStoreUrl}}\')" target="_blank"></a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="mobile-version">\n        <div class="nav-header">\n            <span class="title">{{\'about_title_web\' | translate }}</span>\n            <a href class="close-nav" ng-click="ctrl.toggleNavigation($event)">\n                <md-icon md-svg-icon="/images/nav-icons/toggle_icon.svg"></md-icon>\n            </a>\n        </div>\n        <div class="store-banner">\n            <span class="title">{{\'web_download_button\' | translate}}</span>\n            <span class="app-image-container">\n            <a ng-href="{{ctrl.appUrls.iosAppURL}}" class="app-store-image store-image"\n                 ng-click="ctrl.trackAppleStoreClick($event, \'Menu_Button\')"\n                 ng-attr-style="background-image: url(\'{{ctrl.appleStoreUrl}}\')"></a>\n            <a ng-href="{{ctrl.appUrls.googleAppURL}}" class="play-store-image store-image"\n                 ng-click="ctrl.trackGooglePlayClick($event, \'Menu_Button\')"\n                 ng-attr-style="background-image: url(\'{{ctrl.playStoreUrl}}\')"></a>\n        </span>\n        </div>\n\n        <ul class="menu-items" itemscope itemtype="http://www.schema.org/SiteNavigationElement">\n            <li class="item" ng-click="ctrl.onItemClicked(\'about\')">\n                <a itemprop="url" ng-href="{{ctrl.companyUrl}}" target="_blank">\n                    <md-icon class="icon" md-svg-icon="/images/nav-icons/company_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_title\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_title\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'features\')">\n                <a itemprop="url" ng-href="{{ctrl.featuresUrl}}" target="_blank">\n                    <md-icon class="icon features" md-svg-icon="/images/nav-icons/features_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_features\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_features\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'insights\')">\n                <a itemprop="url" ng-href="{{ctrl.insightsUrl}}" target="_blank">\n                    <md-icon class="icon features" md-svg-icon="/images/nav-icons/insights_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'web_insights_main_page_title\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'web_insights_main_page_title\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'smart-city-solutions\')">\n                <a itemprop="url" ng-href="{{ctrl.smartCityUrl}}" target="_blank">\n                    <md-icon class="icon smart-city-solutions" md-svg-icon="/images/nav-icons/smart_city_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'smart_city_solutions\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'smart_city_solutions\' | translate}}</span>\n                </a>\n            </li>\n\n            <li class="item" ng-click="ctrl.onItemClicked(\'community\')">\n                <a itemprop="url" ng-href="{{ctrl.communityUrl}}" target="_blank">\n                    <md-icon class="icon community" md-svg-icon="/images/nav-icons/community_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_community\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_community\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'supported_countries\')">\n                <a itemprop="url" ng-href="{{ctrl.countriesUrl}}" target="_blank">\n                    <md-icon class="icon countries" md-svg-icon="/images/nav-icons/countries_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_supported_countries\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_supported_countries\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'developers\')">\n                <a itemprop="url" ng-href="{{ctrl.developersUrl}}" target="_blank">\n                    <md-icon class="icon developers" md-svg-icon="/images/nav-icons/developers_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_developers\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_developers\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'website-widgets\')">\n                <a itemprop="url" ng-href="{{ctrl.widgetsUrl}}" target="_blank">\n                    <md-icon class="icon website-widgets" md-svg-icon="/images/nav-icons/widgets_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_widget\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_widget\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'press\')">\n                <a itemprop="url" ng-href="{{ctrl.pressUrl}}" target="_blank">\n                    <md-icon class="icon press" md-svg-icon="/images/nav-icons/press_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_press\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_press\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'blog\')">\n                <a itemprop="url" ng-href="{{ctrl.blogUrl}}" target="_blank">\n                    <md-icon class="icon blog" md-svg-icon="/images/nav-icons/blog_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_blog\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_blog\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'support\')">\n                <a itemprop="url" ng-href="{{\'user_guide_url\' | translate}}"\n                   target="_blank">\n                    <md-icon class="icon support" md-svg-icon="/images/nav-icons/help_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'about_support\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'about_support\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'terms\')">\n                <a itemprop="url" ng-href="{{\'terms_of_use_url\' | translate}}" target="_blank">\n                    <md-icon class="icon support" md-svg-icon="/images/nav-icons/terms_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'terms_of_service_link\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'terms_of_service_link\' | translate}}</span>\n                </a>\n            </li>\n            <li class="item" ng-click="ctrl.onItemClicked(\'privacy\')">\n                <a itemprop="url" ng-href="{{\'privacy_url\' | translate}}" target="_blank">\n                    <md-icon class="icon support" md-svg-icon="/images/nav-icons/privacy_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'privacy_text\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text" itemprop="name">{{\'privacy_text\' | translate}}</span>\n                </a>\n            </li>\n\n            <li class="item" ng-click="ctrl.onItemClicked(\'language\')">\n                <a href class="md-raised language-button" ng-click="ctrl.showChangeLanguage($event)">\n                    <md-icon class="icon language" md-svg-icon="/images/change_language.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            {{\'change_language\' | translate}}\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text">{{\'change_language\' | translate}}</span>\n                </a>\n            </li>\n\n            <li ng-if="ctrl.debugMode" class="item" ng-click="ctrl.dump()">\n                <a href class="md-raised settings-button">\n                    <md-icon class="icon" md-svg-icon="/images/nav-icons/settings_icon.svg">\n                        <md-tooltip md-direction="{{ctrl.getTooltipDirection()}}">\n                            Dump\n                        </md-tooltip>\n                    </md-icon>\n                    <span class="text">Dump</span>\n                </a>\n            </li>\n        </ul>\n\n        <div class="external-buttons" ng-mouseenter="ctrl.showStorePopup = true"\n             itemscope itemtype="http://schema.org/MobileApplication">\n            <meta itemprop="name" content="Moovit"/>\n            <meta itemprop="installUrl" content="{{ctrl.appStoreService.getGooglePlayLink()}}"/>\n            <meta itemprop="operatingSystem" content="Android, iOS, Mobile Web"/>\n            <meta itemprop="applicationCategory" content="MAPS_AND_NAVIGATION"/>\n\n            <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">\n                <meta itemprop="priceCurrency" content="USD"/>\n                <meta itemprop="price" content="0"/>\n                <meta itemprop="url" content="https://moovitapp.com"/>\n            </div>\n\n            <div class="rating">\n                <div class="text">{{\'web_download_label\' | translate}}</div>\n                <div class="stars">\n                    <img src="/images/rating.png" alt="app rating">\n                    <span>(513,477)</span>\n                </div>\n            </div>\n\n            <div ng-if="ctrl.isCollapsed">\n                <a href ng-mouseover="ctrl.hoveredStoreOption = \'moovit\'" class="store-action-button moovit"\n                   ng-if="ctrl.appProfileService.isInIframe"></a>\n                <a href ng-mouseover="ctrl.hoveredStoreOption = \'play\'" ng-click="ctrl.trackGooglePlayClick($event)"\n                   class="store-action-button play-store"></a>\n                <a href ng-mouseover="ctrl.hoveredStoreOption = \'apple\'" ng-click="ctrl.trackAppleStoreClick($event)"\n                   class="store-action-button app-store"></a>\n            </div>\n            <div ng-if="!ctrl.isCollapsed">\n                <a ng-href="{{ctrl.appUrls.googleAppURL}}" target="_blank" ng-click="ctrl.trackGooglePlayClick($event)" class="store-action-button play-store"\n                   ng-attr-style="background-image: url(\'{{ctrl.playStoreUrl}}\')"></a>\n                <a ng-href="{{ctrl.appUrls.iosAppURL}}" target="_blank" ng-click="ctrl.trackAppleStoreClick($event)" class="store-action-button app-store"\n                   ng-attr-style="background-image: url(\'{{ctrl.appleStoreUrl}}\')"></a>\n            </div>\n        </div>\n    </div>\n\n    <div ng-attr-class="store-popup {{ctrl.hoveredStoreOption}}" ng-show="ctrl.showStorePopup"\n         ng-mouseleave="ctrl.showStorePopup = false">\n        <div>{{\'web_download_label\'|translate}}</div>\n        <a ng-href="{{ctrl.appUrls.googleAppURL}}" target="_blank" ng-click="ctrl.trackGooglePlayClick($event)" class="store-action-button"><img\n                ng-src="{{ctrl.playStoreUrl}}"></a>\n        <a ng-href="{{ctrl.appUrls.iosAppURL}}" target="_blank" ng-click="ctrl.trackAppleStoreClick($event)" class="store-action-button"><img\n                ng-src="{{ctrl.appleStoreUrl}}"></a>\n    </div>\n    <div class="overlay" ng-if="ctrl.appProfileService.isMobile" ng-click="ctrl.closeNavigation()"></div>\n</div>\n'
		})
	}(), System.registerDynamic("app/components/sideNavigation.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/sideNavigation.js", ["../fx/Component", "../fx/Annotations", "../fx/Logger", "../common/AppEvents", "../fx/Application", "../services/analyticsService", "../services/appProfileService", "../services/localeService", "../services/appStoreService", "../services/metroService", "../services/userProfileService", "./sideNavigation.html!text", "./sideNavigation.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../common/AppEvents"),
			l = a("../fx/Application"),
			m = a("../services/analyticsService"),
			n = a("../services/appProfileService"),
			o = a("../services/localeService"),
			p = a("../services/appStoreService"),
			q = a("../services/metroService"),
			r = a("../services/userProfileService"),
			s = a("../fx/Application"),
			t = j.createLogger("SideNavigationComponent"),
			u = function (b) {
				function c(a, c, d, e, f, g, h, i, j, m) {
					var n = b.call(this, t) || this;
					return n.$state = a, n.$mdDialog = c, n.$timeout = d, n.$translate = e, n.appProfileService = f, n.metroService = g, n.analyticsService = h, n.appStoreService = i, n.localeService = j, n.userProfileService = m, n.hoveredStoreOption = "moovit", n.showQRCodePopup = !1, n.qrCodeParams = {
						campaign: "SideBar_QRcode",
						appArea: "QR",
						imageUrl: "/images/store-buttons/QR.png",
						promoKey: "web_download_qr",
						displayDirection: "left"
					}, l.events.subscribe(k.AppEvents.SIDE_NAV_STATE_CHANGED, n, n.onStateChanged), n
				}
				return d(c, b), Object.defineProperty(c.prototype, "appleStoreUrl", {
					get: function () {
						return this.localeService.getBadge(o.BadgeType.AppleStore)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "playStoreUrl", {
					get: function () {
						return this.localeService.getBadge(o.BadgeType.GooglePlay)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "isCollapsed", {
					get: function () {
						return this.state == p.SideNavState.Collapsed
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "featuresUrl", {
					get: function () {
						return this.localeService.getFeaturesUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "insightsUrl", {
					get: function () {
						return 0 == this.localeService.getId().indexOf("en") ? "https://moovitapp.com/insights" : this.localeService.getInsightsUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "communityUrl", {
					get: function () {
						return this.localeService.getCommunityUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "countriesUrl", {
					get: function () {
						return this.localeService.getCountriesUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "destinationsUrl", {
					get: function () {
						return this.localeService.getDestinationsUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "agenciesUrl", {
					get: function () {
						return this.localeService.getAgenciesUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "webappUrl", {
					get: function () {
						return this.localeService.getWebAppUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "partnersUrl", {
					get: function () {
						return "https://www.company.moovit.com/partners"
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "developersUrl", {
					get: function () {
						return "https://www.developers.moovit.com/"
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "widgetsUrl", {
					get: function () {
						return "https://widgets.moovit.com/"
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "smartCityUrl", {
					get: function () {
						return this.localeService.getMaaSSolutionsUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "companyUrl", {
					get: function () {
						return this.localeService.getCompanyUrl()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "blogUrl", {
					get: function () {
						return "http://moovitapp.com/blog/"
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "pressUrl", {
					get: function () {
						return "https://company.moovit.com/news-stories/"
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "destinationsIndexText", {
					get: function () {
						return this.$translate.instant("web_hierarchy_directory_header", {
							CITY: this.appStoreService.state.user.metro.metroAreaData.metroAreaName
						})
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "agenciesIndexText", {
					get: function () {
						return this.$translate.instant("web_hierarchy_city_agencies_header", {
							CITY: this.appStoreService.state.user.metro.metroAreaData.metroAreaName
						})
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.onInit = function () {
					var a = this;
					b.prototype.onInit.call(this), this.appProfileService.isInIframe ? this.appStoreService.changeSideNavigationState(p.SideNavState.Collapsed) : (void 0 == this.state || isNaN(this.state)) && this.appStoreService.changeSideNavigationState(p.SideNavState.Expanded), this.userProfileService.getCurrentMetroInfo().then(function (b) {
						a.metroName = b.metroAreaData.metroAreaName, a.getLocalizedMetroName(), a.getAppUrls()
					}), this.onStateChanged(this.state), s.events.subscribe(k.AppEvents.METRO_CHANGED, this, this.onMetroChanged), s.events.subscribe(k.AppEvents.USER_LOCALE_CHANGED, this, this.onLocaleChanged)
				}, Object.defineProperty(c.prototype, "metroCarpoolData", {
					get: function () {
						return !this.appProfileService.isDesktop && !this.appStoreService.state.customer.designConfiguration.hideCarpool && this.metroService.getCurrentMetroCarpoolData()
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.reportCarPoolBannerDisplay = function () {
					this.analyticsService.trackCarpoolBannerDisplay()
				}, c.prototype.getTooltipDirection = function () {
					return this.localeService.isRTL() ? "right" : "left"
				}, c.prototype.getAppUrls = function () {
					var a = this;
					this.appStoreService.getLocalizesAppUrls().then(function (b) {
						a.appUrls = b
					})
				}, c.prototype.getLocalizedMetroName = function () {
					var a = this;
					this.localeService.getLocalizedMetroName().then(function (b) {
						a.localizedMetroName = b
					})
				}, c.prototype.onStateChanged = function (a) {
					this.state = a, this.state == p.SideNavState.Expanded ? (this.getElement().addClass("expanded").removeClass("collapsed"), this.metroCarpoolData && this.reportCarPoolBannerDisplay()) : this.getElement().removeClass("expanded").addClass("collapsed")
				}, c.prototype.onMetroChanged = function () {
					this.getAppUrls(), this.getLocalizedMetroName()
				}, c.prototype.onLocaleChanged = function () {
					this.getLocalizedMetroName()
				}, c.prototype.reportSideNavStateChange = function (a) {
					this.analyticsService.trackSideNavStateChange(a)
				}, c.prototype.toggleNavigation = function (a) {
					t.info("SideNavigationComponent: toggling state"), this.state == p.SideNavState.Collapsed ? this.appStoreService.changeSideNavigationState(p.SideNavState.Expanded) : this.state == p.SideNavState.Expanded && this.appStoreService.changeSideNavigationState(p.SideNavState.Collapsed), this.showStorePopup = !1, this.reportSideNavStateChange(p.SideNavState[this.state]), a.stopPropagation()
				}, c.prototype.toggleMoreLinks = function (a) {
					var b = this;
					this.showMoreLinks = !this.showMoreLinks, this.showMoreLinks && this.$timeout(function () {
						var a = b.element[0].querySelector(".scroll-container");
						a.scrollTop = a.scrollHeight
					}, 0), a.stopPropagation()
				}, c.prototype.hideNavigation = function () {
					this.appStoreService.changeSideNavigationState(p.SideNavState.Hidden)
				}, c.prototype.openNavigation = function () {
					this.appStoreService.changeSideNavigationState(p.SideNavState.Expanded)
				}, c.prototype.closeNavigation = function () {
					this.appStoreService.changeSideNavigationState(p.SideNavState.Collapsed)
				}, c.prototype.showChangeLanguage = function (a) {
					this.appStoreService.gotoLangSelectorView(a)
				}, c.prototype.onItemClicked = function (a, b) {
					this.state == p.SideNavState.Collapsed && b && (this.appStoreService.changeSideNavigationState(p.SideNavState.Expanded), b.preventDefault()), this.appProfileService.isMobile && this.closeNavigation(), this.analyticsService.trackSideNavigationEvent(a)
				}, c.prototype.trackStoreClick = function (a) {
					this.appStoreService.trackStoreClick(a, "sidebar", null, "sidebar")
				}, c.prototype.trackAppleStoreClick = function (a, b) {
					b = b || "sidebar", this.appStoreService.trackAppleStoreClick(a, b, b)
				}, c.prototype.trackGooglePlayClick = function (a, b) {
					b = b || "sidebar", this.appStoreService.trackGooglePlayClick(a, b, b)
				}, c.prototype.showHierarchyUrls = function () {
					return this.metroService.isHierarchyMetro(this.userProfileService.metroId)
				}, c.prototype.dump = function () {
					remoteLogger.dump()
				}, Object.defineProperty(c.prototype, "debugMode", {
					get: function () {
						return moovitIsDebugMode
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "sideNavHeaderParam", {
					get: function () {
						return {
							CITY: this.localizedMetroName || this.metroName
						}
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.isQRCodeAvailable = function () {
					return this.localeService.isInHouseLanguage(this.userProfileService.localeId)
				}, c.prototype.toggleQRCode = function () {
					this.showQRCodePopup = !this.showQRCodePopup
				}, c = e([i.Component({
					tagName: "side-navigation",
					template: a("./sideNavigation.html!text"),
					styles: a("./sideNavigation.css!css"),
					scope: {
						state: "<",
						showMoreLinks: "<",
						appUrls: "<",
						metroName: "<"
					}
				}), g(0, i.Inject("$state")), g(1, i.Inject("$mdDialog")), g(2, i.Inject("$timeout")), g(3, i.Inject("$translate")), f("design:paramtypes", [Object, Object, Object, Object, n.AppProfileService, q.MetroService, m.AnalyticsService, p.AppStoreService, o.LocaleService, r.UserProfileService])], c)
			}(h.ComponentBase);
		return b.SideNavigationComponent = u, c.exports
	}), System.registerDynamic("app/services/qrCodeService.js", ["../fx/Logger", "../fx/Annotations", "./Service", "./analyticsService", "./appStoreService", "./httpService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../fx/Logger"),
			h = a("../fx/Annotations"),
			i = a("./Service"),
			j = a("./analyticsService");
		PREVENT_IMPORT_REMOVE(j.AnalyticsService);
		var k = a("./appStoreService"),
			l = a("./httpService"),
			m = g.createLogger("QRCodeService"),
			n = function (a) {
				function b(b, c, d) {
					var e = a.call(this, m) || this;
					return e.appStoreService = b, e.analyticsService = c, e.httpService = d, e.defaultQRCode = "/images/store-buttons/QR.png", e
				}
				return d(b, a), b.prototype.getDeepLinkQrCode = function (a, b, c) {
					var d = this,
						e = this.appStoreService.getStoreOrDeepLink(a, b, c);
					return m.e2e('generating qr code for: "' + e + '"'), this.httpService.post("/api/qrcode/deeplink", {
						deepLink: e
					}).then(function (a) {
						if (a && a.success) return a.data;
						var b = a && a.data ? "error: " + a.data : "";
						return m.error("QR Code Data URI Generation failed.", b), d.analyticsService.trackError("QR Code Data URI Generation failed. " + b), d.defaultQRCode
					})
				}, b = e([h.Service({
					name: "qrCodeService"
				}), f("design:paramtypes", [k.AppStoreService, j.AnalyticsService, l.HttpService])], b)
			}(i.ServiceBase);
		return b.QRCodeService = n, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/qrCode/qrCode.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="qr-links">\n    <div class="scan-qr-code">\n        <span ng-click="ctrl.toggleQRCode()">{{ctrl.promoKey | translate}}</span>\n        <div class="qr-popup" ng-class="ctrl.displayDirection"\n             moovit-outside-click="ctrl.toggleQRCode(isFirstClick)" ng-if="ctrl.showQRCodePopup">\n            <div class="popup-header">\n                <span>{{\'web_download_qr_popup\' | translate}}</span>\n                <a type="button" class="close" ng-click="ctrl.toggleQRCode()"></a>\n            </div>\n            <div class="qrcode-img-wrapper">\n                <img ng-src="{{ctrl.imageUrl || ctrl.qrCodeDataUri}}" alt="qrcode-img">\n                <div class="qr-loader">\n                    <moovit-spinner></moovit-spinner>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="banner-download-options">\n        <span class="store-action-button app-store"></span>\n        <span class="store-action-button play-store"></span>\n        <div class="qr-icon" ng-click="ctrl.toggleQRCode()">\n            <img src="/images/store-buttons/barcode-icon.svg" alt="">\n        </div>\n    </div>\n</div>'
		})
	}(), System.registerDynamic("app/components/qrCode/qrCode.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/qrCode/qrCode.js", ["../../fx/Logger", "../../fx/Annotations", "../../fx/Component", "../../services/qrCodeService", "../../services/appStoreService", "../../services/analyticsService", "../../services/userProfileService", "./qrCode.html!text", "./qrCode.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../../fx/Logger"),
			h = a("../../fx/Annotations"),
			i = a("../../fx/Component"),
			j = a("../../services/qrCodeService"),
			k = a("../../services/appStoreService"),
			l = a("../../services/analyticsService"),
			m = a("../../services/userProfileService"),
			n = g.createLogger("QRCodeComponent"),
			o = function (b) {
				function c(a, c, d, e) {
					var f = b.call(this, n) || this;
					return f.qrCodeService = a, f.appStoreService = c, f.userProfileService = d, f.analyticsService = e, f.showQRCodePopup = !1, f.campaign = f.options.campaign, f.appArea = f.options.appArea, f.imageUrl = f.options.imageUrl, f.deepLinkSchemaType = f.options.deepLinkSchemaType, f.promoKey = f.options.promoKey, f.displayDirection = f.options.displayDirection, f
				}
				return d(c, b), c.prototype.toggleQRCode = function (a) {
					var b = this;
					a || (this.showQRCodePopup = !this.showQRCodePopup, this.showQRCodePopup || (this.qrCodeDataUri = void 0), this.showQRCodePopup && this.analyticsService.trackDownloadApp("Desktop", this.campaign), this.showQRCodePopup && !this.imageUrl && this.qrCodeService.getDeepLinkQrCode(this.campaign, this.appArea, this.deepLinkSchemaType).then(function (a) {
						return b.qrCodeDataUri = a
					}))
				}, c = e([h.Component({
					tagName: "qr-code",
					template: a("./qrCode.html!text"),
					styles: a("./qrCode.css!css"),
					scope: {
						options: "<"
					}
				}), f("design:paramtypes", [j.QRCodeService, k.AppStoreService, m.UserProfileService, l.AnalyticsService])], c)
			}(i.ComponentBase);
		return b.QRCodeComponent = o, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/qrCodeBanner/qrCodeBanner.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="qr-banner" ng-if="!ctrl.isPartner"\n     ng-class="{\'qr-banner-minimized\': ctrl.userProfileService.minimizeQRCodeBanner}" ng-show="ctrl.isBannerVisible">\n    <div class="minimize-qr">\n        <a class="minimize-btn" ng-click="ctrl.toggleBanner()"></a>\n    </div>\n    <div class="qr-content-wrapper">\n        <div class="qr-phone-wrapper"></div>\n        <div class="qr-text-wrapper">\n            <div class="qr-title">{{\'web_download_qr_route_testb_line1\' | translate}}</div>\n            <div class="qr-subtitle">{{\'web_download_qr_route_testb_line2\' | translate}}</div>\n            <qr-code options="ctrl.qrCodeParams"></qr-code>\n        </div>\n    </div>\n</div>\n\n'
		})
	}(), System.registerDynamic("app/components/qrCodeBanner/qrCodeBanner.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/qrCodeBanner/qrCodeBanner.js", ["../../fx/Logger", "../../fx/Annotations", "../../fx/Component", "../../services/appStoreService", "../../../common/customer", "../../services/userProfileService", "./qrCodeBanner.html!text", "./qrCodeBanner.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../../fx/Logger"),
			i = a("../../fx/Annotations"),
			j = a("../../fx/Component"),
			k = a("../../services/appStoreService"),
			l = a("../../../common/customer"),
			m = a("../../services/userProfileService"),
			n = h.createLogger("qrCodeBannerComponent"),
			o = function (b) {
				function c(a, c, d, e, f) {
					var g = b.call(this, n) || this;
					return g.$translate = a, g.$stateParams = c, g.$timeout = d, g.appStoreService = e, g.userProfileService = f, g.isPartner = !1, g.isBannerVisible = g.appStoreService.isQrBannerVisible, g.$stateParams && g.$stateParams.customerId && (g.isPartner = l.Customer.isNotMoovitWebOrSeo(g.$stateParams.customerId)), g
				}
				return d(c, b), c.prototype.onInit = function () {
					var a = this;
					this.isBannerVisible ? this.isBannerVisible = !0 : this.$timeout(function () {
						a.isBannerVisible = a.appStoreService.showQrBanner()
					}, 2e3)
				}, c.prototype.toggleBanner = function () {
					this.userProfileService.minimizeQRCodeBanner = !this.userProfileService.minimizeQRCodeBanner
				}, c = e([i.Component({
					tagName: "qr-code-banner",
					template: a("./qrCodeBanner.html!text"),
					styles: a("./qrCodeBanner.css!css"),
					scope: {
						qrCodeParams: "<"
					}
				}), g(0, i.Inject("$translate")), g(1, i.Inject("$stateParams")), g(2, i.Inject("$timeout")), f("design:paramtypes", [Object, Object, Object, k.AppStoreService, m.UserProfileService])], c)
			}(j.ComponentBase);
		return b.qrCodeBannerComponent = o, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/common/spinner.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n     width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">\n    <circle fill="none" stroke="#ddd" stroke-width="40" stroke-linecap="round" stroke-miterlimit="10" cx="250" cy="250" r="208"/>\n    <circle class="spinner-path" fill="none" stroke="#F16435" stroke-width="40" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="0,0" cx="250" cy="250" r="208"/>\n</svg>'
		})
	}(), System.registerDynamic("app/components/common/spinner.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/common/spinner.js", ["../../fx/Component", "../../fx/Annotations", "../../fx/Logger", "./spinner.html!text", "./spinner.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../../fx/Component"),
			h = a("../../fx/Annotations"),
			i = a("../../fx/Logger"),
			j = i.createLogger("SpinnerComponent"),
			k = function (b) {
				function c() {
					return b.call(this, j) || this
				}
				return d(c, b), c.prototype.onPushed = function () {
					b.prototype.onPushed.call(this)
				}, c = e([h.Component({
					tagName: "moovit-spinner",
					template: a("./spinner.html!text"),
					styles: a("./spinner.css!css")
				}), f("design:paramtypes", [])], c)
			}(g.ComponentBase);
		return b.SpinnerComponent = k, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/closeButton.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '\x3c!--class="close-button" ng-click="ctrl.close()" ng-if="ctrl.activated"--\x3e\n<md-icon md-svg-icon="/images/close.svg"></md-icon>\n'
		})
	}(), System.registerDynamic("app/components/closeButton.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/closeButton.js", ["../fx/Logger", "../fx/Annotations", "../fx/Component", "./closeButton.html!text", "./closeButton.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../fx/Logger"),
			h = a("../fx/Annotations"),
			i = a("../fx/Component"),
			j = g.createLogger("CloseButtonComponent"),
			k = function (b) {
				function c() {
					return b.call(this, j) || this
				}
				return d(c, b), c.prototype.onInit = function () {
					b.prototype.onInit.call(this)
				}, c = e([h.Component({
					tagName: "close-button",
					template: a("./closeButton.html!text"),
					styles: a("./closeButton.css!css")
				}), f("design:paramtypes", [])], c)
			}(i.ComponentBase);
		return b.CloseButtonComponent = k, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/smartImage.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div ng-bind-html="ctrl.html"></div>'
		})
	}(), System.registerDynamic("app/components/smartImage.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/smartImage.js", ["../fx/Logger", "../fx/Annotations", "../fx/Component", "../services/imageService", "./smartImage.html!text", "./smartImage.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("../fx/Logger"),
			h = a("../fx/Annotations"),
			i = a("../fx/Component"),
			j = a("../services/imageService"),
			k = g.createLogger("SmartImageComponent"),
			l = function (b) {
				function c(a) {
					var c = b.call(this, k) || this;
					return c.imageService = a, c
				}
				return d(c, b), c.prototype.onPushed = function () {
					b.prototype.onPushed.call(this), this.html = this.imageService.getImageHTML(parseInt(this.imageId))
				}, c = e([h.Component({
					tagName: "smart-image",
					template: a("./smartImage.html!text"),
					styles: a("./smartImage.css!css"),
					scope: {
						imageId: "<"
					}
				}), f("design:paramtypes", [j.ImageService])], c)
			}(i.ComponentBase);
		return b.SmartImageComponent = l, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/route/alertView.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<alert-view>\n    <route-alert step="ctrl.step"></route-alert>\n</alert-view>'
		})
	}(), System.registerDynamic("app/route/alertView.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/route/alertView.js", ["../fx/Component", "../fx/Logger", "../fx/Annotations", "../routes", "../fx/Application", "../common/AppEvents", "../services/appStoreService", "./alertView.html!text", "./alertView.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Logger"),
			j = a("../fx/Annotations"),
			k = a("../routes"),
			l = a("../fx/Application"),
			m = a("../common/AppEvents"),
			n = a("../services/appStoreService"),
			o = i.createLogger("AlertViewComponent"),
			p = function (b) {
				function c(a, c, d) {
					var e = b.call(this, o) || this;
					return e.appStoreService = a, e.$state = c, e.$stateParams = d, d.etype && d.eid || o.error("Missing etype or eid URL params"), e
				}
				return d(c, b), c.prototype.onInit = function () {
					b.prototype.onInit.call(this), this.step = this.appStoreService.state.tripPlan.step, this.step || (o.error("Currently AlertViewComponent does not support restoring step from URL. Redirecting to tripplan view ..."), this.$state.go(k.Routes.tripPlan.name, this.$stateParams)), l.events.subscribe(m.AppEvents.TRIPPLAN_STEP_SELECTED, this, this.onStepSelected)
				}, c.prototype.onStepSelected = function (a) {
					o.log("onStepSelected"), this.step = a.step
				}, c = e([j.Component({
					tagName: "alert-view",
					template: a("./alertView.html!text"),
					styles: a("./alertView.css!css")
				}), g(1, j.Inject("$state")), g(2, j.Inject("$stateParams")), f("design:paramtypes", [n.AppStoreService, Object, Object])], c)
			}(h.ComponentBase);
		return b.AlertViewComponent = p, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/alertDetails.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div flex layout="row" layout-align="center center" ng-if="ctrl.loadingAlerts">\n    <moovit-spinner></moovit-spinner>\n</div>\n\n<div class="alert-content" ng-class="{\'cover\': ctrl.alertsDetails.length == 1}" ng-repeat="lineAlert in ctrl.alertsDetails" ng-if="!ctrl.loadingAlerts">\n\n    <div class="alert-details-header">\n        <a class="back-link" ng-if="ctrl.appProfileService.isMobile"\n           ng-click="ctrl.appStoreService.goBackInHistory()"></a>\n        <div class="line-group-header">\n            <div>\n                <span class="line-image">\n                    \x3c!--<line-svg ng-if="lineAlert.imageHtml" image-html="lineAlert.imageHtml"></line-svg>--\x3e\n                </span>\n                <span class="line-title">\n                    \x3c!--{{lineAlert.lineName}}--\x3e\n                </span>\n                <a href ng-click="ctrl.showShareDialog($event)" class="share" ng-if="ctrl.alertIds && ctrl.alertIds.length > 0 && !ctrl.appStoreService.state.customer.designConfiguration.hideSharing" title="{{\'web_trip_plan_share_service_alert_button\' | translate}}">\n                    <md-icon class="icon" md-svg-icon="/images/share/share_icon_new.svg"></md-icon>\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class="alert-status">\n        <md-icon md-svg-src="{{ctrl.getStatusIcon(lineAlert)}}"></md-icon>\n        <span>{{lineAlert.statusDescription}}</span>\n    </div>\n\n    <div class="publicaton-date">\n        <div class="section-title" ng-if="lineAlert.date">{{\'service_alert_details_publication_date\' | translate: ctrl.getDateTranslateParam(lineAlert)}}</div>\n        <div class="title">{{lineAlert.title}}</div>\n    </div>\n\n    <div class="affected-dates" ng-if="lineAlert.activeFrom">\n        <div class="section-title">{{\'service_alert_time_range_header\' | translate}}</div>\n        <div class="section-content">\n            <span>{{lineAlert.activeFrom | datetime}}</span>\n            <span ng-if="lineAlert.activeTo">\n                - <span>{{lineAlert.activeTo | datetime}}</span>\n            </span>\n        </div>\n    </div>\n\n    <div class="affected-lines">\n        <div class="section-title">{{\'service_alert_affected_lines_header\' | translate}}</div>\n        <div class="section-content">\n            {{lineAlert.agencyName}} - {{lineAlert.affectedLines}}\n        </div>\n    </div>\n\n    <div class="description" ng-if="!lineAlert.isDescriptionHtml">\n        <span>{{lineAlert.description}}</span>\n    </div>\n\n    <div class="description" ng-if="lineAlert.isDescriptionHtml">\n        <iframe-with-contents base="lineAlert.baseUrl" content="lineAlert.description" direction="ctrl.localeService.isRTL()?\'rtl\':\'ltr\'"></iframe-with-contents>\n    </div>\n\n\n    <div class="link" ng-if="lineAlert.url">\n        <a target="_blank" ng-href="{{lineAlert.url}}">{{\'service_alert_more_info_link_text\' | translate}}</a>\n    </div>\n</div>\n\n<div class="empty-results" ng-if="ctrl.emptyAlerts">\n    <md-icon class="icon" md-svg-icon="../../images/error-states/img_empty_state_omni.svg"></md-icon>\n    <div class="message">{{\'service_alerts_none_subtitle\' | translate}}</div>\n</div>'
		})
	}(), System.registerDynamic("app/components/alertDetails.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/alertDetails.js", ["../fx/Component", "../fx/Annotations", "../fx/Logger", "../services/alertsService", "../models/general", "../services/metroService", "../services/appProfileService", "../routes", "./sharePanel", "../services/shareService", "../services/analyticsService", "moment", "../common/AppEvents", "../fx/Application", "../services/localeService", "../services/appStoreService", "./alertDetails.html!text", "./alertDetails.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Component"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../services/alertsService"),
			l = a("../models/general"),
			m = a("../services/metroService"),
			n = a("../services/appProfileService"),
			o = a("../routes"),
			p = a("./sharePanel"),
			q = a("../services/shareService"),
			r = a("../services/analyticsService"),
			s = a("moment"),
			t = a("../common/AppEvents"),
			u = a("../fx/Application"),
			v = a("../services/localeService"),
			w = a("../services/appStoreService"),
			x = j.createLogger("AlertDetailsComponent"),
			y = function (b) {
				function c(a, c, d, e, f, g, h, i, j, k, l) {
					var m = b.call(this, x) || this;
					return m.$sce = a, m.$stateParams = c, m.$translate = d, m.featureFlags = e, m.alertsService = f, m.metroService = g, m.appProfileService = h, m.analyticsService = i, m.localeService = j, m.appStoreService = k, m.shareService = l, u.events.subscribe(t.AppEvents.SIDE_BAR_POPUP_CLOSE, m, m.onClosed), m
				}
				return d(c, b), c.prototype.onClosed = function (a) {
					"popupAlertDetails" == a.key && (this.appStoreService.state.alerts.alertIds = [], this.appStoreService.state.alerts.alertEntities = [], this.appStoreService.saveStateToUrl())
				}, c.prototype.onPushed = function () {
					var a = this;
					b.prototype.onPushed.call(this), x.info("detail component is pushed"), this.emptyAlerts = !1, this.alertsService.ensureInit().then(function () {
						a.alertsService.getMetroAlerts().then(function () {
							var b;
							if (a.appProfileService.isMobile && (a.alertIds = a.$stateParams.alertIds, a.alerts || (b = Array.isArray(a.$stateParams.eid) ? a.$stateParams.eid.map(function (b, c) {
									return {
										entityIdentifier: {
											entityType: a.$stateParams.etype[c],
											id: a.$stateParams.eid[c]
										}
									}
								}) : [{
									entityIdentifier: {
										entityType: a.$stateParams.etype,
										id: a.$stateParams.eid
									}
								}])), a.alertIds && 0 != a.alertIds.length) a.alertsDetails = null, a.loadingAlerts = !0, a.alertsService.getAlertsDetails(a.alertIds).then(function (b) {
								a.alertsDetails = b, a.loadingAlerts = !1, a.emptyAlerts = !b || 0 == b.length
							});
							else if (a.step || a.alerts || b) {
								var c = a.alerts || b || a.step.alerts;
								c = a.alerts && a.alerts.entities ? a.alerts.entities : c, c && c.length > 0 && !c.lineAlerts && (a.loadingAlerts = !0, a.alertsDetails = null, a.alertsService.getAlerts(c.map(function (a) {
									return a.entityIdentifier
								})).then(function (b) {
									a.alertsDetails = b, a.emptyAlerts = !b || 0 == b.length
								}).finally(function () {
									a.loadingAlerts = !1
								}))
							}
						})
					})
				}, c.prototype.showShareDialog = function (a) {
					this.shareService.showShareDialog(a, "/" + o.Routes.alerts.name + "?metroId=" + this.shareService.state.user.metroId + "&alertIds=" + this.alertIds, p.ShareCategory.ServiceAlert, this.$translate.instant("web_trip_plan_share_service_alert_button"), {
						line: this.alertsDetails[0].lineName
					})
				}, c.prototype.getStatusIcon = function (a) {
					switch (a.statusCategory) {
						case l.ServiceStatusCategory.Critical:
							return "/images/service-alerts/ic_service_bad_red.svg";
						case l.ServiceStatusCategory.Info:
							return "/images/service-alerts/ic_service_info_blue.svg";
						case l.ServiceStatusCategory.Modified:
							return "/images/service-alerts/ic_service_modified_yellow.svg";
						case l.ServiceStatusCategory.Regular:
							return "/images/service-alerts/ic_service_good_green.svg";
						default:
							return ""
					}
				}, c.prototype.getDateTranslateParam = function (a) {
					return {
						param1: a.date ? s(a.date).format("L LT") : ""
					}
				}, c = e([i.Component({
					tagName: "alert-details",
					template: a("./alertDetails.html!text"),
					styles: a("./alertDetails.css!css"),
					scope: {
						step: "<",
						alertIds: "<",
						alerts: "<",
						line: "<"
					}
				}), g(0, i.Inject("$sce")), g(1, i.Inject("$stateParams")), g(2, i.Inject("$translate")), g(3, i.Inject("featureFlags")), f("design:paramtypes", [Object, Object, Object, Object, k.AlertsService, m.MetroService, n.AppProfileService, r.AnalyticsService, v.LocaleService, w.AppStoreService, q.ShareService])], c)
			}(h.ComponentBase);
		return b.AlertDetailsComponent = y, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/splashScreenView.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="splash-container"\n     ng-class="{\'lines\': ctrl.type == ctrl.SplashType.Generic,\'get_around\': ctrl.type == ctrl.SplashType.TripPlan || ctrl.type == ctrl.SplashType.Lines}">\n\n    \x3c!--fade animation--\x3e\n    <div class="transportation_animation">\n        <div class="transportation_icons">\n            <div class="train_g-icon tr-icon"></div>\n            <div class="train_o-icon tr-icon"></div>\n            <div class="train_p-icon tr-icon"></div>\n            <div class="bus-icon tr-icon"></div>\n        </div>\n        <div class="transportation_map">\n            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" width="600" viewBox="0 0 362 64.812"\n                 class="green_line">\n                <path d="M-2,287l45-55,318,1" transform="translate(0 -229)"/>\n            </svg>\n\n            <svg class="green_line-get_around" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" width="1000"\n                 viewBox="0 0 526 2">\n                <path fill="#069c4d" d="M0 0h526v2H0z"/>\n            </svg>\n\n\n            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" width="600" viewBox="0 0 362 190.812"\n                 class="purple_line">\n                <path d="M-1,353L148,172H323l43,18" transform="translate(0 -169)"/>\n            </svg>\n\n            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" width="600" viewBox="0 0 362 117"\n                 class="blue_line">\n                <path d="M-2,41L72,146H362" transform="translate(0 -38)"/>\n            </svg>\n\n            <svg class="blue_line-get_around" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" width="1000"\n                 viewBox="0 0 526 2">\n                <path fill="#003E55" d="M0 0h526v2H0z"/>\n            </svg>\n\n            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" width="100" viewBox="0 0 52.031 320"\n                 class="orange_line">\n                <path d="M372,286H319l1,320" transform="translate(-309.969 -277)"/>\n            </svg>\n\n        </div>\n    </div>\n\n\n    \x3c!--generic splash--\x3e\n    <div class="splash-title-container generic-splash" ng-if="ctrl.type == ctrl.SplashType.Generic">\n        <img src="/images/moovit_logo.svg" alt="moovit logo" class="logo">\n        <div class="splash-title">{{"splash_world_app_moovitless" | translate}}</div>\n        <div class="splash-subtitle">{{"local_mobility_options_test" | translate}}</div>\n        <div class="transportation_icons"></div>\n        <div class="splash-mock">\n            <img src="/images/phone_mockup.png" class="generic-mock" alt="smartphone-mockup">\n        </div>\n    </div>\n\n    \x3c!--tripplan splash--\x3e\n    <div class="splash-title-container tripplan-splash" ng-if="ctrl.type == ctrl.SplashType.TripPlan">\n        <div class="splash-title-wrapper">\n            <div ng-if="ctrl.titleString" class="splash-title" ng-bind-html="ctrl.titleString"></div>\n            <div class="splash-subtitle">{{"web_download_intro" | translate}}</div>\n            <div class="splash-subtitle optimize">{{"local_mobility_options_test" | translate}}</div>\n            <div class="transit-icons-strip">\n                <img class="local" ng-repeat="path in ctrl.transitIcons.metroTransitImagesPaths track by $index"\n                     ng-src="{{path}}" alt="">\n                <img class="generic" ng-repeat="path in ctrl.transitIcons.genericTransitImagesPaths track by $index"\n                     ng-src="{{path}}" alt="">\n            </div>\n            <div class="mock-placeholder">\n                <div class="splash-mock optimize">\n                    <img src="/images/splash-screen/phone_splash.png" class="trip-mock" alt="smartphone-mockup">\n\n                    <span class="fields-title">{{"step" | translate}}</span>\n                    <div class="from-fields">\n                        <label>{{"position_start" | translate}}</label><span\n                            class="from">{{ctrl.currentLocationString}}</span>\n                    </div>\n                    <div class="to-fields">\n                        <label>{{"position_end" | translate}}</label><span class="to">{{ctrl.$stateParams.to}}</span>\n                    </div>\n\n                    <div class="location-bubble">\n                        <span class="location-title">{{ctrl.$stateParams.to}}</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class="transportation_icons"></div>\n        <div class="splash-mock">\n            <img src="/images/splash-screen.png" class="trip-mock" alt="smartphone-mockup">\n\n            <span class="fields-title">{{"step" | translate}}</span>\n            <div class="from-fields">\n                <label>{{"position_start" | translate}}</label><span class="from">{{ctrl.currentLocationString}}</span>\n            </div>\n            <div class="to-fields">\n                <label>{{"position_end" | translate}}</label><span class="to">{{ctrl.$stateParams.to}}</span>\n            </div>\n\n            <div class="location-bubble">\n                <span class="location-title">{{ctrl.$stateParams.to}}</span>\n            </div>\n        </div>\n    </div>\n\n    \x3c!--lines splash--\x3e\n    <div class="splash-title-container lines-splash" ng-if="ctrl.type == ctrl.SplashType.Lines">\n        <div class="splash-title-wrapper">\n            <div ng-if="ctrl.titleString" class="splash-title" ng-bind-html="ctrl.titleString"></div>\n            <div class="splash-subtitle">{{"web_download_intro" | translate}}</div>\n            <div class="splash-subtitle optimize">{{"local_mobility_options_test" | translate}}</div>\n            <div class="transit-icons-strip">\n                <img class="local" ng-repeat="path in ctrl.transitIcons.metroTransitImagesPaths track by $index"\n                     ng-src="{{path}}" alt="">\n                <img class="generic" ng-repeat="path in ctrl.transitIcons.genericTransitImagesPaths track by $index"\n                     ng-src="{{path}}" alt="">\n            </div>\n            <div class="mock-placeholder">\n                <div class="splash-mock optimize">\n                    <img src="/images/splash-screen/phone_splash_line.png" class="lines-mock" alt="smartphone-mockup">\n\n                    <div class="lines-content">\n                        <line-svg image-html="ctrl.lineImage"></line-svg>\n                        <div class="line-title">\n                            {{ctrl.lineTitle}}\n                        </div>\n                        <div class="line-subtitle">\n                            {{ctrl.lineAgency}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="transportation_icons"></div>\n\n        <div class="splash-mock">\n            <img src="/images/splash-screen-lines.png" class="lines-mock" alt="smartphone-mockup">\n\n            <div class="lines-content">\n                <line-svg image-html="ctrl.lineImage"></line-svg>\n                <div class="line-title">\n                    {{ctrl.lineTitle}}\n                </div>\n                <div class="line-subtitle">\n                    {{ctrl.lineAgency}}\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class="splash-footer">\n\n        <img class="app-icon" src="/images/app_icon.png" alt="app icon"/>\n\n        <div class="text">\n            <div class="name">Moovit</div>\n            <div class="stars">\n                <img src="/images/rating.png" alt="app rating">\n                <span>(513,477)</span>\n            </div>\n        </div>\n        <a class="use-app-button" ng-click="ctrl.trackStoreClick($event, \'splash\')" ng-href="{{ctrl.storeUrl}}">{{\'web_download_button\'\n            | translate}}</a>\n        <a class="splash-btn splash-btn-site" ng-click="ctrl.closeSplash()">{{"web_mobile_view_button" | translate}}</a>\n    </div>\n\n</div>'
		})
	}(), System.registerDynamic("app/components/splashScreenView.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/splashScreenView.js", ["../fx/Annotations", "../fx/Component", "../fx/Logger", "../services/appStoreService", "../services/metroService", "../routes", "../models/converters", "../services/imageService", "../services/analyticsService", "../services/appProfileService", "./splashScreenView.html!text", "./splashScreenView.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Annotations"),
			i = a("../fx/Component"),
			j = a("../fx/Logger"),
			k = a("../services/appStoreService"),
			l = a("../services/metroService"),
			m = a("../routes"),
			n = a("../models/converters"),
			o = a("../services/imageService"),
			p = a("../services/analyticsService"),
			q = a("../services/appProfileService"),
			r = j.createLogger("splashScreenViewComponent"),
			s = 6,
			t = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
			u = function (b) {
				function c(a, c, d, e, f, g, h, i, j, k) {
					var l = b.call(this, r) || this;
					return l.$mdDialog = a, l.$stateParams = c, l.$translate = d, l.$sce = e, l.$q = f, l.appStoreService = g, l.metroService = h, l.imageService = i, l.analyticsService = j, l.appProfileService = k, l.SplashType = v, l.transitIcons = {
						metroTransitImagesPaths: Array(s).fill(t),
						genericTransitImagesPaths: Array(s).fill(t)
					}, l.currentLocationString = d.instant("current_location"), l
				}
				return d(c, b), c.prototype.onInit = function () {
					var a = this;
					if (r.remote("onInit"), this.analyticsService.trackMeaningfulPaintEvent("splash"), b.prototype.onInit.call(this), this.appStoreService.showSplashScreen()) {
						var c = new URLSearchParams(window.location.search);
						c.get("from") && c.get("to") ? (this.type = v.TripPlan, this.appStoreService.state.originalStateParams.to && (this.titleString = this.$sce.trustAsHtml(this.$translate.instant("splash_text_test_poi_easier", {
							POI: this.appStoreService.state.originalStateParams.to
						})))) : window.location.pathname.match(/\/(lines|lineGroupStops|lineStopArrivals|mapLineView)\//) ? this.type = v.Lines : this.type = v.Generic, this.$q.all([this.appStoreService.init(), this.metroService.getMetroTransitTypeImages()]).then(function (b) {
							a.getStoreUrl();
							var c = b[1];
							a.transitIcons = c, a.transitIcons.genericTransitImagesPaths = a.transitIcons.genericTransitImagesPaths.slice(0, s);
							var d = a.transitIcons.metroTransitImagesPaths;
							if ((d ? d.length : 0) < s && a.transitIcons && a.transitIcons.genericTransitImagesPaths && (d = d.concat(a.transitIcons.genericTransitImagesPaths)), a.transitIcons.metroTransitImagesPaths = d.slice(0, s), a.appStoreService.state.originalStateParams.from && a.appStoreService.state.originalStateParams.to) a.type = v.TripPlan, a.analyticsService.trackSplashLoadTimes(), a.titleString = a.$sce.trustAsHtml(a.$translate.instant("splash_text_test_poi_easier", {
								POI: a.appStoreService.state.originalStateParams.to
							}));
							else if (m.Routes.isLinesView(a.appStoreService.state.originalState) && a.appStoreService.state.originalStateParams.lgid && a.appStoreService.state.originalStateParams.lid) {
								a.type = v.Lines;
								var e = a.appStoreService.state.originalStateParams.lgid;
								a.loadLineGroup(e).then(function (b) {
									var c = b.lines.find(function (b) {
										return b.getId() == a.appStoreService.state.originalStateParams.lid
									});
									a.lineImage = b.image, a.lineTitle = c.getTitle(), a.lineAgency = b.agencyName, a.titleString = a.$sce.trustAsHtml(a.$translate.instant("splash_text_test_lines_easier", {
										LINE: a.lineTitle
									})), a.analyticsService.trackSplashLoadTimes()
								})
							} else a.titleString = a.$sce.trustAsHtml(a.$translate.instant("web_page_city_line_splash_title", {
								CITY: a.appStoreService.state.user.metro.metroAreaData.metroAreaName
							})), a.type = v.Generic, a.analyticsService.trackSplashLoadTimes()
						})
					} else this.type = v.Generic, this.appStoreService.gotoOriginalState()
				}, c.prototype.loadLineGroup = function (a) {
					var b = this;
					return r.remote("loadLineGroup", a), this.metroService.getLineGroupTrips(a, 0).then(function (c) {
						if (c) return b.imageService.syncLineGroupSummariesImageData([c.syncedLineGroup]).then(function () {
							var d = n.convertMVLineGroupOptionsResponseToLineGroupDisplayData(b.appStoreService.state.user.locale.rtl, a, b.metroService.getTodayEpochDay(), b.metroService.state.user.metro.metroAreaData.timeZoneOffset, c.lineTrips, c.syncedLineGroup, c.syncedStops, c.syncedPatterns, c.syncedShapes);
							return d.image = n.generateLineImage(c.syncedLineGroup, b.imageService, b.metroService), d.agencyName = b.metroService.getAgency(c.syncedLineGroup.agencyId).agencyName, d
						})
					})
				}, c.prototype.closeSplash = function () {
					this.appStoreService.dismissSplashScreen(), this.appStoreService.gotoOriginalState()
				}, c.prototype.trackStoreClick = function (a) {
					this.appStoreService.trackStoreClick(a, "splash", null, "splash", null)
				}, c.prototype.getStoreUrl = function () {
					this.storeUrl = this.appStoreService.getStoreOrDeepLink("splash", "splash", this.appStoreService.getDeepLinkType())
				}, c.prototype.getCarouselImage = function (a) {
					var b = ["bg", "cs", "da", "de", "el", "en", "en-gb", "es", "es-419", "et", "fi", "fr", "he", "hi", "hu", "in", "it", "ja", "ka", "ko", "lt", "ms", "nb", "nl", "pl", "pt", "pt-br", "ro", "ru", "sr", "sv", "th", "tr", "vi", "zh-cn", "zh-tw"],
						c = this.appStoreService.state.user.locale.id;
					return b.indexOf(c) < 0 && (c = "en"), "/images/splash-screen/store-screenshots/" + c + "/" + a + ".webp"
				}, c = e([h.Component({
					tagName: "splash-screen-view",
					template: a("./splashScreenView.html!text"),
					styles: a("./splashScreenView.css!css")
				}), g(0, h.Inject("$mdDialog")), g(1, h.Inject("$stateParams")), g(2, h.Inject("$translate")), g(3, h.Inject("$sce")), g(4, h.Inject("$q")), f("design:paramtypes", [Object, Object, Object, Object, Object, k.AppStoreService, l.MetroService, o.ImageService, p.AnalyticsService, q.AppProfileService])], c)
			}(i.ComponentBase);
		b.SplashScreenViewComponent = u;
		var v;
		return function (a) {
			a[a.Generic = 0] = "Generic", a[a.TripPlan = 1] = "TripPlan", a[a.Lines = 2] = "Lines"
		}(v || (v = {})), c.exports
	}), System.registerDynamic("app/components/backwardCompatibility.js", ["../fx/Annotations", "../fx/Component", "../fx/Logger", "../services/appStoreService", "../routes"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Annotations"),
			i = a("../fx/Component"),
			j = a("../fx/Logger"),
			k = a("../services/appStoreService"),
			l = a("../routes"),
			m = j.createLogger("backwardCompatibility"),
			n = function (a) {
				function b(b, c) {
					var d = a.call(this, m) || this;
					return d.$state = b, d.$stateParams = c, d
				}
				return d(b, a), b.prototype.onInit = function () {
					a.prototype.onInit.call(this), this.$stateParams = k.AppStoreService.translateBackwardCompatibilityParams(this.$stateParams), this.$state.go(l.Routes.tripPlan.name, this.$stateParams)
				}, b = e([h.Component({
					tagName: "backward-compatibility",
					template: "<div></div>",
					styles: "",
					scope: {
						metroAreaId: "<",
						customerId: "<",
						langId: "<",
						destination: "<",
						source: "<"
					}
				}), g(0, h.Inject("$state")), g(1, h.Inject("$stateParams")), f("design:paramtypes", [Object, Object])], b)
			}(i.ComponentBase);
		return b.BackwardCompatibilityComponent = n, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/sharePanel.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="share-container">\n    <div class="overlay" ng-if="ctrl.linkToShare==null">\n        <moovit-spinner></moovit-spinner>\n    </div>\n\n    <div class="overlay strong" ng-if="ctrl.linkToShare==\'\'">\n        <div class="error-container">\n            <md-icon class="error-icon" md-svg-src="/images/error-states/img_empty_no_network.svg"></md-icon>\n            <div>{{\'generic_error_text\' | translate}}</div>\n        </div>\n    </div>\n\n    <div class="share-label">{{ctrl.shareTitle}}\n        <a href ng-click="ctrl.closeClicked()">\n            <md-icon class="icon" md-svg-icon="/images/close.svg"></md-icon>\n        </a>\n    </div>\n    <div class="divider"></div>\n    <div class="section-title">{{\'share_copy_link\' | translate}}</div>\n    <div class="copy-link" ng-if="ctrl.copyLinkOption">\n        <div class="title">{{ctrl.copyLinkOption.titleKey | translate}}</div>\n        <input type="text" value="{{ctrl.linkToShare}}" ng-focus="ctrl.inputFocused()" ng-mouseup="ctrl.inputFocused()" title="{{ctrl.copyLinkOption.titleKey | translate}}"/>\n    </div>\n    <div class="section-title">{{\'share_social\' | translate}}</div>\n    <div class="share-icons">\n        <a href class="id_{{option.id}}" ng-repeat="option in ctrl.shareOptions" ng-click="ctrl.optionClicked(option)" ng-attr-ngclipboard="{{option.id == 0 && \'true\' || undefined }}" ng-attr-data-clipboard-text="{{option.id == 0 && ctrl.linkToShare || undefined }}">\n            <md-icon class="icon" md-svg-icon="{{option.icon}}" title="{{option.titleKey | translate}}"></md-icon>\n            <div class="title">{{option.titleKey | translate}}</div>\n        </a>\n    </div>\n    <div class="send-email" ng-if="ctrl.showEmailForm && ctrl.onSendEmailClick">\n        <div class="address">\n            <div class="section-title">{{\'share_email_send_to\' | translate}}</div>\n            <input type="text" required ng-pattern="ctrl.emailPattern" ng-focus="ctrl.showFullEmailForm = true" ng-model="ctrl.sendToEmailAddress" placeholder="{{\'share_email_enter_address\' | translate}}"/>\n        </div>\n        <div class="message" ng-if="ctrl.showFullEmailForm">\n            <div class="section-title">{{\'share_email_message\' | translate}}</div>\n            <textarea ng-model="ctrl.sendToEmailMessage" placeholder="{{\'share_email_write_message\' | translate}}"></textarea>\n\n            <div>\n                <div class="send-email-buttons">\n                    <button ng-click="ctrl.clearEmailFields()">{{\'cancel\' | translate}}</button>\n                    <button class="primary" ng-click="ctrl.sendEmailClicked()">{{\'share_email_send\' | translate}}</button>\n                </div>\n                <span class="error-message" ng-if="ctrl.errorMessage">\n                    {{ctrl.errorMessage}}\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n'
		})
	}(), System.registerDynamic("app/components/sharePanel.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/sharePanel.js", ["../fx/Application", "../fx/Component", "../fx/Annotations", "../fx/Logger", "../services/appProfileService", "../common/AppEvents", "./sharePanel.html!text", "./sharePanel.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Application"),
			i = a("../fx/Component"),
			j = a("../fx/Annotations"),
			k = a("../fx/Logger"),
			l = a("../services/appProfileService"),
			m = a("../common/AppEvents"),
			n = k.createLogger("SharePanelComponent"),
			o = function (b) {
				function c(a, c, d) {
					var e = b.call(this, n) || this;
					if (e.appProfileService = a, e.$translate = c, e.$timeout = d, e.emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]{2,15})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, e.allShareOptions = [{
							id: p.Link,
							titleKey: "share_copy_link",
							icon: "/images/share/copy_link_icon.svg"
						}, {
							id: p.Email,
							titleKey: "share_email",
							icon: "/images/share/email_icon.svg",
							mobileOnly: !0
						}, {
							id: p.Facebook,
							titleKey: "share_messenger",
							icon: "/images/share/messenger_icon.svg"
						}, {
							id: p.Whatsapp,
							titleKey: "action_whatsapp",
							icon: "/images/share/whatsapp_icon.svg",
							mobileOnly: !0
						}], a.isMobile || (e.allShareOptions = e.grep(e.allShareOptions, function (a) {
							if (!0 !== a.mobileOnly) return a
						})), e.shareOptions && e.shareOptions.length > 0 ? e.shareOptions = e.grep(e.allShareOptions, function (a) {
							if (e.shareOptions.indexOf(a.id)) return a
						}) : e.shareOptions = e.allShareOptions, !a.isMobile)
						for (var f = 0; f < e.shareOptions.length; f++)
							if (e.shareOptions[f].id == p.Link) {
								e.copyLinkOption = e.shareOptions.splice(f, 1)[0];
								break
							}
					return h.events.subscribe(m.AppEvents.URL_CHANGED, e, e.onUrlChanged), e
				}
				return d(c, b), c.prototype.onUrlChanged = function () {
					this.closeClicked()
				}, c.prototype.grep = function (a, b) {
					var c = [],
						d = a.length,
						e = 0;
					for (e; e < d; e++) {
						var f = a[e];
						b(f) && c.push(f)
					}
					return c
				}, c.prototype.optionClicked = function (a) {
					this.onShareOptionClick && "function" == typeof this.onShareOptionClick && this.onShareOptionClick({
						shareOption: a.id
					})
				}, c.prototype.closeClicked = function () {
					this.onCloseClick && "function" == typeof this.onCloseClick && this.onCloseClick()
				}, c.prototype.inputFocused = function () {
					var a = this;
					this.$timeout(function () {
						var b = a.element.find("input")[0];
						b.setSelectionRange(0, b.value.length)
					})
				}, c.prototype.copySuccess = function (a) {}, c.prototype.copyError = function (a) {}, c.prototype.clearEmailFields = function () {
					this.sendToEmailAddress = void 0, this.sendToEmailMessage = void 0, this.showFullEmailForm = void 0
				}, c.prototype.sendEmailClicked = function () {
					var a = this;
					this.errorMessage = null, this.sendToEmailAddress && this.emailPattern.test(this.sendToEmailAddress) ? this.onSendEmailClick && "function" == typeof this.onSendEmailClick && this.onSendEmailClick({
						recipients: [this.sendToEmailAddress],
						message: this.sendToEmailMessage
					}).then(function () {
						a.closeClicked()
					}, function (b) {
						n.error("failed to send email", b), a.errorMessage = a.$translate.instant("server_busy_error_message")
					}) : this.errorMessage = this.$translate.instant("invalid_email_error")
				}, c = e([j.Component({
					tagName: "share-panel",
					template: a("./sharePanel.html!text"),
					styles: a("./sharePanel.css!css"),
					scope: {
						shareTitle: "<",
						linkToShare: "<",
						shareOptions: "<",
						onShareOptionClick: "&",
						showEmailForm: "<",
						onSendEmailClick: "&",
						onCloseClick: "&"
					}
				}), g(1, j.Inject("$translate")), g(2, j.Inject("$timeout")), f("design:paramtypes", [l.AppProfileService, Object, Object])], c)
			}(i.ComponentBase);
		b.SharePanelComponent = o;
		var p;
		! function (a) {
			a[a.Link = 0] = "Link", a[a.Email = 1] = "Email", a[a.Facebook = 2] = "Facebook", a[a.Whatsapp = 3] = "Whatsapp"
		}(p = b.ShareOptions || (b.ShareOptions = {}));
		return function (a) {
			a[a.TripPlanResults = 1] = "TripPlanResults", a[a.Itinerary = 2] = "Itinerary", a[a.Location = 3] = "Location", a[a.Line = 4] = "Line", a[a.ServiceAlert = 5] = "ServiceAlert"
		}(b.ShareCategory || (b.ShareCategory = {})), c.exports
	}), System.registerDynamic("app/services/shareService.js", ["../fx/Annotations", "./appProfileService", "./Service", "../fx/Logger", "../common/stringHelpers", "../components/sharePanel", "./httpService", "./messageService", "./analyticsService", "../common/utmHelper"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Annotations"),
			i = a("./appProfileService"),
			j = a("./Service"),
			k = a("../fx/Logger"),
			l = a("../common/stringHelpers"),
			m = a("../components/sharePanel"),
			n = a("./httpService"),
			o = a("./messageService"),
			p = a("./analyticsService"),
			q = a("../common/utmHelper"),
			r = k.createLogger("ShareService"),
			s = function (a) {
				function b(b, c, d, e, f, g, h, i, j) {
					var k = a.call(this, r) || this;
					return k.$q = b, k.$mdDialog = c, k.$mdBottomSheet = d, k.$window = e, k.$translate = f, k.appProfileService = g, k.analyticsService = h, k.messageService = i, k.httpService = j, k.dialogTemplate = '<md-dialog ng-class="{\'share\': true}">  <md-dialog-content>    <share-panel share-title="ctrl.model.shareTitle"                  link-to-share="ctrl.model.linkToShare"                  show-email-form="ctrl.model.showEmailForm"                  on-send-email-click="ctrl.sendEmailClicked(recipients, message)"                  share-options="ctrl.model.shareOptions"                  on-share-option-click="ctrl.shareOptionClicked(shareOption)"                  on-close-click="ctrl.close()"></share-panel>  </md-dialog-content></md-dialog>', k.bottomSheetTemplate = '<md-bottom-sheet ng-class="{\'share\': true}">    <share-panel share-title="ctrl.model.shareTitle" link-to-share="ctrl.model.linkToShare" share-options="ctrl.model.shareOptions" on-share-option-click="ctrl.shareOptionClicked(shareOption)" on-close-click="ctrl.close()"></share-panel></md-bottom-sheet>', k.facebookShareUrl = "https://www.facebook.com/dialog/send?app_id=284644261627721&link={0}&redirect_uri={0}", k.messengerShareUrl = "fb-messenger://share?link={0}", k.whatsappShareUrl = "whatsapp://send?text={0}", k.emailShareUrl = "mailto:?subject={0}&body={1}", k
				}
				return d(b, a), b.prototype.showShareDialog = function (a, b, c, d, e, f) {
					var g, h = this,
						i = this,
						j = {
							shareOptions: f,
							shareTitle: d,
							linkToShare: null,
							showEmailForm: !i.appProfileService.isMobile
						},
						k = function () {
							if (0 == g.length) r.error("Share link is empty"), j.linkToShare = "";
							else {
								-1 == g.indexOf("http") && (g = h.appendHostToUrl(g)), g = h.stripSecret(g);
								var a = h.appendCampaignToUrl(g, q.UTMSourceMedium.SharedLink);
								j.linkToShare = a
							}
						};
					"function" == typeof b ? b().then(function (a) {
						g = a, k()
					}) : (g = b, k());
					var l = this.appProfileService.isMobile ? this.$mdBottomSheet : this.$mdDialog,
						n = this.appProfileService.isMobile ? this.bottomSheetTemplate : this.dialogTemplate;
					l.show({
						template: n,
						parent: angular.element(document.body),
						targetEvent: a,
						clickOutsideToClose: !0,
						fullscreen: !1,
						controller: function () {
							this.model = j, this.close = function () {
								l.cancel()
							}, this.shareOptionClicked = function (a) {
								i.shareUrl(g, c, a, e), l.cancel()
							}, this.sendEmailClicked = function (a, b) {
								return e.message = b, e.url = i.appendCampaignToUrl(g, q.UTMSourceMedium.SharedEmail), i.sendEmailFromServer(a, c, e)
							}
						},
						controllerAs: "ctrl"
					}).finally(function (a) {
						r.log("share popup closed")
					}), this.analyticsService.trackShareAction("open dialog", m.ShareCategory[c])
				}, b.prototype.shareToWhatsapp = function (a, b) {
					this.$window.open(l.formatString(this.whatsappShareUrl, (a ? a + ": " : "") + b), "_self")
				}, b.prototype.shareToFacebook = function (a) {
					this.appProfileService.isMobile ? this.$window.open(l.formatString(this.messengerShareUrl, encodeURIComponent(a)), "_self") : this.$window.open(l.formatString(this.facebookShareUrl, encodeURIComponent(a)))
				}, b.prototype.openEmail = function (a, b) {
					this.$window.open(l.formatString(this.emailShareUrl, a ? encodeURIComponent(a) : "", b), "_self")
				}, b.prototype.shareUrl = function (a, b, c, d) {
					var e;
					switch (b) {
						case m.ShareCategory.Location:
							e = this.$translate.instant("web_trip_plan_share_location_subject", {
								param1: d.location
							});
							break;
						case m.ShareCategory.TripPlanResults:
						case m.ShareCategory.Itinerary:
							e = this.$translate.instant("web_trip_plan_share_trip_plan_subject", {
								param1: d.from_address,
								param2: d.to_address
							});
							break;
						case m.ShareCategory.Line:
							e = this.$translate.instant("web_trip_plan_share_line_subject", {
								param1: d.line
							});
							break;
						case m.ShareCategory.ServiceAlert:
							e = this.$translate.instant("web_trip_plan_share_service_alert_subject", {
								param1: d.line
							})
					}
					switch (c) {
						case m.ShareOptions.Email:
							this.openEmail(e, encodeURIComponent(this.appendCampaignToUrl(a, q.UTMSourceMedium.SharedEmail))), this.analyticsService.trackShareAction("email client", m.ShareCategory[b]);
							break;
						case m.ShareOptions.Facebook:
							this.shareToFacebook(this.appendCampaignToUrl(a, q.UTMSourceMedium.SharedMessenger)), this.analyticsService.trackShareAction("messenger", m.ShareCategory[b]);
							break;
						case m.ShareOptions.Whatsapp:
							this.shareToWhatsapp(e, encodeURIComponent(this.appendCampaignToUrl(a, q.UTMSourceMedium.SharedWhatsApp))), this.analyticsService.trackShareAction("whatsapp", m.ShareCategory[b])
					}
				}, b.prototype.sendEmailFromServer = function (a, b, c) {
					return r.log("sendEmailFromServer", JSON.stringify(a), JSON.stringify(c)), this.analyticsService.trackShareAction("email server", m.ShareCategory[b]), this.httpService.get("/api/share/email", {
						params: {
							shareType: b,
							recipients: {
								addresses: a
							},
							parameters: c
						}
					})
				}, b.prototype.appendHostToUrl = function (a) {
					return "https://moovitapp.com" + a
				}, b.prototype.appendCampaignToUrl = function (a, b) {
					var c = a.indexOf("?") >= 0 ? "&" : "?";
					return a = this.updateQueryString("utm_source", null, a), (a = this.updateQueryString("utm_medium", null, a)) + c + q.UTMConvertor.getShortUtmParamString(b)
				}, b.prototype.stripSecret = function (a) {
					var b = /([&?])secret=[^&]+(&|$)/,
						c = a.match(b);
					return c && (a = "&" == c[2] ? a.replace(b, c[1]) : a.replace(b, "")), a
				}, b.prototype.updateQueryString = function (a, b, c) {
					c || (c = window.location.href);
					var d, e = new RegExp("([?&])" + a + "=.*?(&|#|$)(.*)", "gi");
					if (e.test(c)) return void 0 !== b && null !== b ? c.replace(e, "$1" + a + "=" + b + "$2$3") : (d = c.split("#"), c = d[0].replace(e, "$1$3").replace(/(&|\?)$/, ""), void 0 !== d[1] && null !== d[1] && (c += "#" + d[1]), c);
					if (void 0 !== b && null !== b) {
						var f = -1 !== c.indexOf("?") ? "&" : "?";
						return d = c.split("#"), c = d[0] + f + a + "=" + b, void 0 !== d[1] && null !== d[1] && (c += "#" + d[1]), c
					}
					return c
				}, b = e([h.Service({
					name: "shareService"
				}), g(0, h.Inject("$q")), g(1, h.Inject("$mdDialog")), g(2, h.Inject("$mdBottomSheet")), g(3, h.Inject("$window")), g(4, h.Inject("$translate")), f("design:paramtypes", [Object, Object, Object, Object, Object, i.AppProfileService, p.AnalyticsService, o.MessageService, n.HttpService])], b)
			}(j.ServiceBase);
		return b.ShareService = s, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/components/app.html!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '<div class="app-container multi-side-bar-{{ctrl.multiSideBar ? ctrl.multiSideBar.numOpenPanels : 0}}"\n     layout="row"\n     ng-if="ctrl.uiReady"\n     ng-click="ctrl.onClick($event)"\n     ng-class="{\'has-footer\': ctrl.isFooterVisible() && ctrl.getBannerType() === \'InstallApp\' && ctrl.isInstallBannerVisible() && ctrl.isFooterBannerAvailable(),\n                \'has-live-directions\': ctrl.getBannerType() === \'LiveDirections\' && ctrl.isInstallBannerVisible(),\n                \'iframe\': ctrl.isInIframe(),\n                \'splash\': ctrl.showSpalshScreen(),\n                \'AndroidOS\': ctrl.appProfileService.isAndroid,\n                \'iOS\': ctrl.appProfileService.isIOS,\n                \'footer-min\': ctrl.isFooterMinimized()\n                }\n">\n    <side-bar layout="column"></side-bar>\n\n\n    <multi-side-bar moovit-component-name="multiSideBar"\n                    ng-if="!ctrl.appProfileService.isMobile">\n        <side-bar-popup moovit-component-name="popupRouteDetails">\n            <route-summary route="ctrl.route" allow-prev-next="true" ng-click="ctrl.clickOutsideQrCode()"></route-summary>\n            <route-actions class="actions-bar" route="ctrl.route" show-share="ctrl.featureFlags[\'SHARE_ITINERARY\']"\n                           buy-tickets-url="ctrl.appStoreService.state.customer.ticketsUrl" ng-click="ctrl.clickOutsideQrCode()">\n            </route-actions>\n            <route-details route="ctrl.route" ng-click="ctrl.clickOutsideQrCode()"></route-details>\n            <div class="qrcode-section" ng-if="ctrl.route">\n                 <qr-code-banner qr-code-params="ctrl.qrCodeParams"></qr-code-banner>\n            </div>\n        </side-bar-popup>\n\n        <side-bar-popup moovit-component-name="popupRouteStopArrivals">\n            \x3c!--<step-summary route="ctrl.route"></step-summary>--\x3e\n            <stop-arrivals route="ctrl.route" step="ctrl.selectedStep"\n                           rt-arrivals="ctrl.selectedStep.realTimeArrivals"></stop-arrivals>\n        </side-bar-popup>\n\n        <side-bar-popup moovit-component-name="popupLineGroup" ng-if="ctrl.selectedLineGroupId">\n            <line-group-stops line-group-id="ctrl.selectedLineGroupId"></line-group-stops>\n        </side-bar-popup>\n\n        <side-bar-popup moovit-component-name="popupLineStopArrivals" ng-if="ctrl.selectedStop">\n            <line-stop-arrivals line-group="ctrl.selectedStop.lineGroup" stop-id="ctrl.selectedStop.id"\n                                pattern-stops="ctrl.selectedStop.patternStops" lines="ctrl.selectedStop.lines"\n                                epoch-day="ctrl.selectedStop.epochDay"></line-stop-arrivals>\n        </side-bar-popup>\n\n        <side-bar-popup moovit-component-name="popupAlertDetails">\n            <alert-details step="ctrl.selectedStep" alert-ids="ctrl.selectedAlertIds"\n                           alerts="ctrl.selectedAlerts"></alert-details>\n        </side-bar-popup>\n\n    </multi-side-bar>\n\n    <side-navigation state="ctrl.sideNavigationState"\n                     ng-if="ctrl.appStoreService.state.appReady && !ctrl.isSideNavHidden()"></side-navigation>\n\n    <map moovit-component-name="map" flex\n         ng-if="ctrl.appProfileService.isDesktop && ctrl.appStoreService.state.appReady"></map>\n\n    <div class="update-msg-container">\n        <div class="session-expired-panel" ng-if="ctrl.standaloneStoreService.isSessionExpired">\n            {{\'web_page_generic_error_reload\' | translate}}\n            <a href ng-click="ctrl.reloadPage(\'update\')">{{\'action_reload\' | translate}}</a>\n        </div>\n\n        <div class="update-panel" ng-if="ctrl.standaloneStoreService.isUpdateNeeded">\n            {{\'upgrade_available_message\' | translate}}\n            <a href ng-click="ctrl.reloadPage(\'reblaze\')">{{\'popup_update_now\' | translate}}</a>\n        </div>\n    </div>\n\n\n    <footer class="useapp-container default-variant"\n            ng-class="{\'open\': !ctrl.isFooterMinimized(), \'min\': ctrl.isFooterMinimized()}"\n            ng-show="ctrl.isFooterVisible()" ng-cloak\n            ng-if="ctrl.getBannerType() === \'InstallApp\' && ctrl.isInstallBannerVisible() && !ctrl.mobileService.isKeyboardOpened && ctrl.isFooterBannerAvailable()"\n    >\n        <div class="minimize-wrapper">\n            <button class="minimize-btn" ng-click="ctrl.minimizeFooter()"></button>\n        </div>\n        <div class="cta-wrapper">\n            <div class="app-text-container">\n                <div class="title">{{\'web_banner_text_test_a\' | translate}}</div>\n                <div class="subtitle">{{\'web_banner_text_test_b\' | translate}}</div>\n                <div class="subtitle optimize">{{\'web_app_banner_question\' | translate}}</div>\n\n                <div class="app-button-container optimize">\n                    <a class="yes-btn" ng-click="ctrl.trackStoreClick($event, \'footer\')" ng-href="{{ctrl.footerUrl}}">{{\'web_app_banner_yes_button\'\n                        | translate}}</a>\n                    <a class="no-btn" ng-click="ctrl.minimizeFooter()">{{\'web_app_banner_no_button\'\n                        | translate}}</a>\n                </div>\n            </div>\n            <div class="app-button-container">\n                <a ng-click="ctrl.trackStoreClick($event, \'footer\')" ng-href="{{ctrl.footerUrl}}">{{\'web_download_button\'\n                    | translate}}</a>\n            </div>\n\n        </div>\n    </footer>\n\n\n    <footer class="useapp-container default-variant itinerary-footer-optimize"\n            ng-class="{\'open\': !ctrl.isDirectionsFooterMinimized(), \'min\': ctrl.isDirectionsFooterMinimized()}"\n            ng-show="ctrl.isFooterVisible() || (ctrl.getBannerType() === \'LiveDirections\')"\n            ng-cloak\n            ng-if="ctrl.getBannerType() === \'LiveDirections\' && ctrl.isDirectionsBannerAvailable()"\n    >\n        <div class="minimize-wrapper">\n            <button class="minimize-btn" ng-click="ctrl.minimizeDirectionsFooter()"></button>\n        </div>\n        <div class="cta-wrapper">\n            <div class="app-text-container">\n                <div class="title">{{\'web_trip_plan_download_moovit\' | translate}}</div>\n                <div class="title optimize-text">{{\'web_banner_text_test_a\' | translate}}</div>\n                <div class="subtitle">{{\'tripplan_itinerary_live_directions_description\' | translate}}</div>\n                <div class="subtitle optimize-text">{{\'direction_banner_sentence2_test\' | translate}}</div>\n            </div>\n            <div class="app-button-container">\n                <a ng-click="ctrl.onLiveDirectionsClicked($event)" ng-href="{{ctrl.liveDirectionsUrl}}">{{\'web_download_button\'\n                    | translate}}</a>\n            </div>\n        </div>\n    </footer>\n\n\n    <footer class="itinerary-footer" ng-show="ctrl.isFooterVisible() || (ctrl.getBannerType() === \'LiveDirections\')"\n            ng-cloak\n            ng-if="ctrl.getBannerType() === \'LiveDirections\' && ctrl.isDirectionsBannerAvailable()">\n        <a class="banner-link" ng-click="ctrl.onLiveDirectionsClicked($event)" ng-href="{{ctrl.liveDirectionsUrl}}">\n            <md-icon class="real-time-icon" md-svg-icon="/images/real_time.svg"></md-icon>\n            <span class="title">{{\'web_trip_plan_download_moovit\' | translate}}</span>\n            <span class="subtitle">{{\'tripplan_itinerary_live_directions_description\' | translate}}</span>\n            <md-icon class="arrow-icon" md-svg-icon="/images/expand_black.svg"></md-icon>\n        </a>\n    </footer>\n\n</div>\n\n<div class="flip-device-overlay" ng-if="ctrl.appProfileService.isMobile">\n    <div class="flip-device-container">\n        <md-icon md-svg-icon="/images/flip_device.svg"></md-icon>\n        <div class="flip-message">{{\'web_phone_orientation_message\' | translate}}</div>\n    </div>\n</div>\n'
		})
	}(), System.registerDynamic("app/components/app.css!node_modules/systemjs-plugin-css/css.js", [], !1, function (a, b, c) {
		return System.get("@@global-helpers").prepareGlobal(c.id, null, null)()
	}), System.registerDynamic("app/components/app.js", ["../fx/Application", "../fx/Component", "../sideBar/sideBarPopup", "../route/routeDetails", "../route/stopArrivals", "../route/routeActions", "../route/routeStepsNav", "../route/routeAlert", "../map/map", "../sideBar/multiSideBar", "../sideBar/sideBar", "../sideBar/metroInfo", "../tripPlan/tripPlan", "../tripPlan/tripPlanOptions", "../route/itinerary", "../map/mapView", "./errorPanel", "./sideNavigation", "./sharePanel", "./qrCode/qrCode", "./qrCodeBanner/qrCodeBanner", "../services/localeService", "../services/appStoreService", "../../common/customer", "./common/spinner", "../common/AppEvents", "../services/appProfileService", "../fx/Logger", "../fx/Annotations", "../routes", "../services/analyticsService", "./closeButton", "./smartImage", "../common/jqHelpers", "../route/alertView", "../services/messageService", "../services/mobileService", "./alertDetails", "./splashScreenView", "./backwardCompatibility", "../services/shareService", "../services/tripPlanService", "../services/standaloneStoreService", "./app.html!text", "./app.css!css"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Application"),
			i = a("../fx/Component"),
			j = a("../sideBar/sideBarPopup");
		PREVENT_IMPORT_REMOVE(j.SideBarPopupComponent);
		var k = a("../route/routeDetails");
		PREVENT_IMPORT_REMOVE(k.RouteDetailsComponent);
		var l = a("../route/stopArrivals");
		PREVENT_IMPORT_REMOVE(l.StopArrivalsComponent);
		var m = a("../route/routeActions");
		PREVENT_IMPORT_REMOVE(m.RouteActionsComponent);
		var n = a("../route/routeStepsNav");
		PREVENT_IMPORT_REMOVE(n.RouteStepsNavComponent);
		var o = a("../route/routeAlert");
		PREVENT_IMPORT_REMOVE(o);
		var p = a("../map/map");
		PREVENT_IMPORT_REMOVE(p.MapComponent);
		var q = a("../sideBar/multiSideBar");
		PREVENT_IMPORT_REMOVE(q);
		var r = a("../sideBar/sideBar");
		PREVENT_IMPORT_REMOVE(r.SideBarComponent);
		var s = a("../sideBar/metroInfo");
		PREVENT_IMPORT_REMOVE(s.MetroInfoComponent);
		var t = a("../tripPlan/tripPlan");
		PREVENT_IMPORT_REMOVE(t.TripPlanComponent);
		var u = a("../tripPlan/tripPlanOptions");
		PREVENT_IMPORT_REMOVE(u.TripPlanOptionsComponent);
		var v = a("../route/itinerary");
		PREVENT_IMPORT_REMOVE(v.ItineraryComponent);
		var w = a("../map/mapView");
		PREVENT_IMPORT_REMOVE(w.MapViewComponent);
		var x = a("./errorPanel");
		PREVENT_IMPORT_REMOVE(x.ErrorPanelComponent);
		var y = a("./sideNavigation");
		PREVENT_IMPORT_REMOVE(y.SideNavigationComponent);
		var z = a("./sharePanel");
		PREVENT_IMPORT_REMOVE(z.SharePanelComponent);
		var A = a("./qrCode/qrCode");
		PREVENT_IMPORT_REMOVE(A.QRCodeComponent);
		var B = a("./qrCodeBanner/qrCodeBanner");
		PREVENT_IMPORT_REMOVE(B.qrCodeBannerComponent);
		var C = a("../services/localeService"),
			D = a("../services/appStoreService"),
			E = a("../../common/customer"),
			F = a("./common/spinner");
		PREVENT_IMPORT_REMOVE(F.SpinnerComponent);
		var G = a("../common/AppEvents"),
			H = a("../services/appProfileService");
		PREVENT_IMPORT_REMOVE(H.AppProfileService);
		var I = a("../fx/Logger"),
			J = a("../fx/Annotations"),
			K = a("../services/appStoreService"),
			L = a("../routes"),
			M = a("../services/analyticsService"),
			N = a("./closeButton");
		PREVENT_IMPORT_REMOVE(N.CloseButtonComponent);
		var O = a("./smartImage");
		PREVENT_IMPORT_REMOVE(O.SmartImageComponent);
		var P = a("../common/jqHelpers"),
			Q = a("../route/alertView");
		PREVENT_IMPORT_REMOVE(Q.AlertViewComponent);
		var R = a("../services/messageService"),
			S = a("../services/mobileService"),
			T = a("../common/jqHelpers"),
			U = a("./alertDetails");
		PREVENT_IMPORT_REMOVE(U.AlertDetailsComponent);
		var V = a("./splashScreenView");
		PREVENT_IMPORT_REMOVE(V.SplashScreenViewComponent);
		var W = a("./backwardCompatibility"),
			X = a("../services/shareService"),
			Y = a("../services/tripPlanService");
		PREVENT_IMPORT_REMOVE(W.BackwardCompatibilityComponent);
		var Z = a("../services/standaloneStoreService");
		PREVENT_IMPORT_REMOVE(Z.StandaloneStoreService);
		var $ = I.createLogger("AppComponent"),
			_ = function (b) {
				function c(a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
					var r = b.call(this, $) || this;
					return r.appProfileService = a, r.appStoreService = c, r.analyticsService = d, r.messageService = e, r.mobileService = f, r.tripPlanService = g, r.shareService = h, r.standaloneStoreService = i, r.localeService = j, r.$window = k, r.$rootScope = l, r.$translate = m, r.$state = n, r.$timeout = o, r.$stateParams = p, r.featureFlags = q, r.lastStatePromise = Promise.resolve(null), r.footerMinimized = !1, r.directionsFooterMinimized = !1, r.qrCodeParams = {
						campaign: "Itinerary_QRcode",
						appArea: "QR",
						deepLinkSchemaType: K.DeepLinkSchemaType.Directions,
						promoKey: "web_scan_qr",
						displayDirection: "top"
					}, r
				}
				return d(c, b), c.prototype.onInit = function () {
					b.prototype.onInit.call(this), h.events.subscribe(G.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, this, this.onRouteSelected), h.events.subscribe(G.AppEvents.SIDE_BAR_POPUP_CLOSE, this, this.onSideBarClosed), h.events.subscribe(G.AppEvents.SHOW_ROUTE_STEPS, this, this.onShowRouteSteps), h.events.subscribe(G.AppEvents.TRIPPLAN_STEP_SELECTED, this, this.onStepSelected), h.events.subscribe(G.AppEvents.TRIPPLAN_QUERY_CHANGED, this, this.onTripPlanQueryChanged), h.events.subscribe(G.AppEvents.TRIPPLAN_SEARCH_ROUTES_BEGIN, this, this.onTripPlanSearchingRoutes), h.events.subscribe(G.AppEvents.TRIPPLAN_SEARCH_ROUTES_END, this, this.onTripPlanSearchingRoutesEnd), h.events.subscribe(G.AppEvents.METRO_CHANGING, this, this.onMetroChanging), h.events.subscribe(G.AppEvents.URL_CHANGED, this, this.onUrlChanged), h.events.subscribe(G.AppEvents.LOCATION_INPUT_FOCUS, this, this.onLocationFieldFocus), h.events.subscribe(G.AppEvents.ALERT_CLICKED, this, this.onAlertClicked), h.events.subscribe(G.AppEvents.LINE_GROUP_SELECTED, this, this.onLineSelected), h.events.subscribe(G.AppEvents.LINE_STOP_VIEW, this, this.onLineStopView), this.$state.isFormInUse = !1, this.headerCollapsed = !1, this.footerDelayFlag = !1, this.timerCounter = 0, this.checkIfOptimizeLoaded(), this.initSideNavigationState(), this.appStoreService.verifyInstallAppBannerExpiration()
				}, c.prototype.checkIfOptimizeLoaded = function () {
					var a = T.find("body");
					a && a[0].hasAttribute("banner-test") || this.timerCounter >= 4e3 ? this.footerDelayFlag = !0 : (this.timerCounter += 100, this.$timeout(this.checkIfOptimizeLoaded.bind(this), 100))
				}, c.prototype.onDestroy = function () {
					h.events.unsubscribeAll(this), b.prototype.onDestroy.call(this)
				}, c.prototype.onRouteSelected = function (a) {
					this.route = a.route
				}, c.prototype.onSideBarClosed = function (a) {
					"popupRouteDetails" == a.key && (this.route = null, this.selectedStep = null)
				}, c.prototype.onShowRouteSteps = function (a) {
					if (this.appProfileService.isMobile) {
						if (this.$stateParams && this.$stateParams.customerId) {
							var b = E.Customer.getCustomerById(this.$stateParams.customerId);
							b && "ON.CC" == b.name && (this.$stateParams.action = "newTab")
						}
						this.lastStatePromise = this.$state.go(L.Routes.itinerary.name, this.$stateParams, {
							location: !0
						})
					} else this.multiSideBar.open(this.popupRouteDetails, "popupRouteDetails")
				}, c.prototype.showStopArrivals = function () {
					this.appProfileService.isMobile ? this.lastStatePromise = this.$state.go(L.Routes.stopArrivals.name, this.$stateParams, {
						location: !0
					}) : this.multiSideBar.push(this.popupRouteStopArrivals, "popupRouteStopArrivals")
				}, c.prototype.onAlertClicked = function (a) {
					this.selectedAlertIds = a.alertIds, this.selectedAlerts = [a.alert], this.showAlertNew(a.alertIds, a.alert ? [a.alert.entityIdentifier] : [])
				}, c.prototype.showAlertNew = function (a, b) {
					var c = this;
					this.analyticsService.trackAlertEvent("show", b ? JSON.stringify(b) : "ids :" + a.join(", "));
					var d = {
						etype: b && b.length > 0 ? b.map(function (a) {
							return a.entityType
						}) : null,
						eid: b && b.length > 0 ? b.map(function (a) {
							return a.id
						}) : null,
						alertIds: a,
						customerId: this.$stateParams.customerId,
						metroId: this.$stateParams.metroId,
						secret: this.$stateParams.secret,
						ref: this.$stateParams.ref
					};
					if (this.appProfileService.isMobile)
						if (a.length > 0 || b && b.length > 0) {
							var e = this.appStoreService.showSplashScreen() ? L.Routes.splash.name : L.Routes.alertDetails.name;
							this.lastStatePromise = this.$state.go(e, d)
						} else $.log("Step has no alerts. Do nothing");
					else this.$state.current.name == L.Routes.alerts.name && this.$state.go(L.Routes.alerts.name, d, {
						location: "replace"
					}), a || this.selectedAlerts ? this.selectedAlerts ? this.multiSideBar.push(this.popupAlertDetails, "popupAlertDetails") : this.$timeout(function () {
						c.multiSideBar.push(c.popupAlertDetails, "popupAlertDetails")
					}) : this.popupAlertDetails && (this.popupAlertDetails.close(), this.selectedAlerts = null, this.selectedAlertIds = null)
				}, c.prototype.onLineSelected = function (a) {
					var b = this;
					if ($.log("onLineSelected", a), a.lineGroupId) {
						this.selectedLineGroupId = a.lineGroupId;
						var c = {
							lgid: a.lineGroupId,
							lid: a.lineId,
							sid: a.stopId,
							epochDay: a.epochDay,
							customerId: this.$stateParams.customerId,
							metroId: a.metroId,
							metroSeoName: a.metroSeoName,
							metroSeoNameId: a.metroSeoName + "-" + a.metroId,
							lang: this.$stateParams.lang,
							secret: this.$stateParams.secret,
							ref: this.$stateParams.ref
						};
						if (this.appProfileService.isMobile) this.lastStatePromise = this.$state.go(L.Routes.lineGroupStops.name, c);
						else {
							var d = this.appStoreService.getLineRouteByStateParams(c);
							this.$state.go(d.name, c, {
								location: "replace"
							}), this.$timeout(function () {
								b.multiSideBar ? b.multiSideBar.open(b.popupLineGroup, "popupLineGroup") : b.popupLineGroup && b.popupLineGroup.close()
							})
						}
					}
				}, c.prototype.onLineStopView = function (a) {
					var b = this;
					if ($.log("onLineStopView", a), !a.lines || !a.stopId) return void $.log("invalid line - stop arguments");
					this.selectedStop = {
						id: a.stopId,
						patternStops: a.patternStops,
						lines: a.lines,
						lineGroup: a.lineGroup,
						stopId: a.stopId,
						epochDay: a.epochDay
					}, this.$timeout(function () {
						var c = {
							lgid: a.lineGroup.lineGroupId,
							lid: a.lines[0].getId(),
							sid: a.stopId,
							customerId: b.$stateParams.customerId,
							metroId: b.$stateParams.metroId,
							metroSeoName: b.$stateParams.metroSeoName,
							metroSeoNameId: b.$stateParams.metroSeoName + "-" + b.$stateParams.metroId,
							lang: b.$stateParams.lang,
							lineShortName: b.$stateParams.lineShortName,
							secret: b.$stateParams.secret,
							ref: b.$stateParams.ref
						};
						if (b.appStoreService.state.lines.stop = b.selectedStop, b.appProfileService.isMobile) b.lastStatePromise.then(function () {
							var a = b.appStoreService.showSplashScreen() ? L.Routes.splash.name : L.Routes.lineStopArrivals.name;
							b.lastStatePromise = b.$state.go(a, c)
						});
						else {
							var d = b.appStoreService.getLineRouteByStateParams(c);
							b.$state.go(d.name, c, {
								location: "replace"
							}), b.multiSideBar ? b.multiSideBar.push(b.popupLineStopArrivals, "popupLineStopArrivals") : b.popupLineStopArrivals && b.popupLineStopArrivals.close()
						}
					})
				}, c.prototype.onStepSelected = function (a) {
					$.log("onStepSelected", a);
					var b = a.step;
					this.selectedStep = b, b && (a.isAlert && (this.selectedAlerts = b.alerts, this.showAlertNew(b.alerts.lineAlerts ? b.alerts.lineAlerts.map(function (a) {
						return a.id
					}) : [], b.alerts.entities ? b.alerts.entities.map(function (a) {
						return a.entityIdentifier
					}) : [])), a.isStopArrival && this.showStopArrivals())
				}, c.prototype.onTripPlanQueryChanged = function () {
					this.multiSideBar && this.multiSideBar.closeAll()
				}, c.prototype.onTripPlanSearchingRoutes = function () {
					this.$state.isFormInUse = !1, this.multiSideBar && this.multiSideBar.closeAll()
				}, c.prototype.trackStoreClick = function (a, b) {
					this.appStoreService.trackStoreClick(a, b, null, "footer", b)
				}, c.prototype.trackAppleStoreClick = function (a, b) {
					this.appStoreService.trackAppleStoreClick(a, b, "footer")
				}, c.prototype.trackGooglePlayClick = function (a, b) {
					this.appStoreService.trackGooglePlayClick(a, b, "footer")
				}, c.prototype.onLiveDirectionsClicked = function (a) {
					this.appStoreService.trackStoreClick(a, "LiveDirections", null)
				}, c.prototype.isABFooterVisible = function () {
					return this.isFooterVisible() && !this.mobileService.isKeyboardOpened
				}, c.prototype.isDirectionsBannerAvailable = function () {
					if (this.$stateParams && this.$stateParams.customerId) {
						var a = E.Customer.getCustomerById(this.$stateParams.customerId);
						if (a) return !a.designConfiguration.hideDirectionsBanner
					}
					return !0
				}, c.prototype.isFooterBannerAvailable = function () {
					if (this.$stateParams && this.$stateParams.customerId) {
						var a = E.Customer.getCustomerById(this.$stateParams.customerId);
						if (a) return !a.designConfiguration.hideFooterOnMobile
					}
					return !0
				}, c.prototype.isFooterVisible = function () {
					return this.footerDelayFlag && this.appProfileService.isMobile && !this.mobileService.isKeyboardOpened
				}, c.prototype.isFooterMinimized = function () {
					return this.footerMinimized
				}, c.prototype.minimizeFooter = function () {
					this.footerMinimized = !0
				}, c.prototype.isDirectionsFooterMinimized = function () {
					return this.directionsFooterMinimized
				}, c.prototype.minimizeDirectionsFooter = function () {
					this.directionsFooterMinimized = !0
				}, c.prototype.isInstallBannerVisible = function () {
					return this.appStoreService.state.isInstallAppBannerVisible
				}, c.prototype.isFormInUse = function () {
					return this.$state.isFormInUse
				}, c.prototype.isInIframe = function () {
					return this.appProfileService.isInIframe
				}, Object.defineProperty(c.prototype, "appleStoreUrl", {
					get: function () {
						return this.localeService.getBadge(C.BadgeType.AppleStore)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "playStoreUrl", {
					get: function () {
						return this.localeService.getBadge(C.BadgeType.GooglePlay)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "liveDirectionsUrl", {
					get: function () {
						return this.appStoreService.getStoreOrDeepLink("LiveDirections", "LiveDirections", this.appStoreService.getDeepLinkType())
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "footerUrl", {
					get: function () {
						return this.appStoreService.getStoreOrDeepLink("footer", "footer", this.appStoreService.getDeepLinkType())
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.getBannerType = function () {
					return this.appStoreService.isOnItineraryView() || this.appStoreService.isOnMapView() ? "LiveDirections" : "InstallApp"
				}, c.prototype.getAppleStoreLink = function () {
					return this.appStoreService.getAppleStoreLink()
				}, c.prototype.getGooglePlayLink = function () {
					return this.appStoreService.getGooglePlayLink()
				}, c.prototype.getCurrentViewName = function () {
					return this.$state.current.name
				}, c.prototype.initSideNavigationState = function () {
					null == this.sideNavigationState || isNaN(this.sideNavigationState) ? this.appStoreService.changeSideNavigationState(this.appProfileService.isMobile ? D.SideNavState.Collapsed : D.SideNavState.Expanded) : this.sideNavigationState == D.SideNavState.Expanded && this.appProfileService.isMobile && this.appStoreService.changeSideNavigationState(D.SideNavState.Collapsed, !1)
				}, c.prototype.showSpalshScreen = function () {
					return this.appStoreService.showSplashScreen() && this.appProfileService.isMobile
				}, Object.defineProperty(c.prototype, "sideNavigationState", {
					get: function () {
						return this.appStoreService.state.sideNavigation.state
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.collapseHeader = function () {
					var a = T.find(".app-container", this.element);
					T.find("side-bar", this.element).addClass("app-container-collapsed-header"), a.addClass("app-container-opened");
					var b = a[0].clientHeight;
					a[0].scrollTop = b
				}, c.prototype.expandHeader = function () {
					var a = T.find(".app-container", this.element);
					T.find("side-bar", this.element).removeClass("app-container-collapsed-header"), a.removeClass("app-container-opened")
				}, c.prototype.onTripPlanSearchingRoutesEnd = function () {
					this.appProfileService.isMobile && this.collapseHeader()
				}, c.prototype.onUrlChanged = function () {
					this.$state.isFormInUse = !1, this.$state.current.name == L.Routes.tripPlan.name && this.appStoreService.state.tripPlan.routes.length > 0 ? this.collapseHeader() : this.expandHeader()
				}, c.prototype.onLocationFieldFocus = function (a) {
					null != a && (this.$state.isFormInUse = !0), this.appProfileService.isMobile && this.collapseHeader()
				}, c.prototype.onClick = function (a) {
					if (this.multiSideBar) {
						var b = this.multiSideBar.current();
						b && (P.wasEventHandled(a) || b.isEventOutside(a) && this.map.isEventOutside(a) && this.multiSideBar.pop())
					}
				}, c.prototype.onMetroChanging = function () {
					function a() {
						b(), h.events.unsubscribe(G.AppEvents.METRO_CHANGED, a)
					}
					var b = this.messageService.show(this.$translate.instant("changing_metro_wait_message"));
					h.events.subscribe(G.AppEvents.METRO_CHANGED, a)
				}, Object.defineProperty(c.prototype, "moovitIsProduction", {
					get: function () {
						return moovitIsProduction
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(c.prototype, "uiReady", {
					get: function () {
						return this.appStoreService.state.uiReady
					},
					enumerable: !0,
					configurable: !0
				}), c.prototype.isSideNavHidden = function () {
					return this.appStoreService.state.sideNavigation.state == D.SideNavState.Hidden
				}, c.prototype.reloadPage = function (a) {
					$.remote("reloadPage", a), "reblaze" == a && this.analyticsService.trackReblazeEvent("reload"), this.$window.location.reload()
				}, c = e([J.Component({
					tagName: "app",
					template: a("./app.html!text"),
					styles: a("./app.css!css")
				}), g(9, J.Inject("$window")), g(10, J.Inject("$rootScope")), g(11, J.Inject("$translate")), g(12, J.Inject("$state")), g(13, J.Inject("$timeout")), g(14, J.Inject("$stateParams")), g(15, J.Inject("featureFlags")), f("design:paramtypes", [H.AppProfileService, K.AppStoreService, M.AnalyticsService, R.MessageService, S.MobileService, Y.TripPlanService, X.ShareService, Z.StandaloneStoreService, C.LocaleService, Object, Object, Object, Object, Object, Object, Object])], c)
			}(i.ComponentBase);
		return b.AppComponent = _, c.exports
	}), System.registerDynamic("app/services/tripPlanService.js", ["./Service", "../models/converters", "../models/tripPlan", "../fx/Annotations", "../fx/Logger", "./imageService", "./metroService", "../common/AppStorageKeys", "./localStorage", "../models/latlng", "./userProfileService", "./httpService", "./appProfileService", "./analyticsService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			},
			h = this && this.__awaiter || function (a, b, c, d) {
				return new(c || (c = Promise))(function (e, f) {
					function g(a) {
						try {
							i(d.next(a))
						} catch (a) {
							f(a)
						}
					}

					function h(a) {
						try {
							i(d.throw(a))
						} catch (a) {
							f(a)
						}
					}

					function i(a) {
						a.done ? e(a.value) : new c(function (b) {
							b(a.value)
						}).then(g, h)
					}
					i((d = d.apply(a, b || [])).next())
				})
			},
			i = this && this.__generator || function (a, b) {
				function c(a) {
					return function (b) {
						return d([a, b])
					}
				}

				function d(c) {
					if (e) throw new TypeError("Generator is already executing.");
					for (; i;) try {
						if (e = 1, f && (g = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(g = g.call(f, c[1])).done) return g;
						switch (f = 0, g && (c = [0, g.value]), c[0]) {
							case 0:
							case 1:
								g = c;
								break;
							case 4:
								return i.label++, {
									value: c[1],
									done: !1
								};
							case 5:
								i.label++, f = c[1], c = [0];
								continue;
							case 7:
								c = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (g = i.trys, !(g = g.length > 0 && g[g.length - 1]) && (6 === c[0] || 2 === c[0])) {
									i = 0;
									continue
								}
								if (3 === c[0] && (!g || c[1] > g[0] && c[1] < g[3])) {
									i.label = c[1];
									break
								}
								if (6 === c[0] && i.label < g[1]) {
									i.label = g[1], g = c;
									break
								}
								if (g && i.label < g[2]) {
									i.label = g[2], i.ops.push(c);
									break
								}
								g[2] && i.ops.pop(), i.trys.pop();
								continue
						}
						c = b.call(a, i)
					} catch (a) {
						c = [6, a], f = 0
					} finally {
						e = g = 0
					}
					if (5 & c[0]) throw c[1];
					return {
						value: c[0] ? c[1] : void 0,
						done: !0
					}
				}
				var e, f, g, h, i = {
					label: 0,
					sent: function () {
						if (1 & g[0]) throw g[1];
						return g[1]
					},
					trys: [],
					ops: []
				};
				return h = {
					next: c(0),
					throw: c(1),
					return: c(2)
				}, "function" == typeof Symbol && (h[Symbol.iterator] = function () {
					return this
				}), h
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var j = a("./Service"),
			k = a("../models/converters"),
			l = a("../models/tripPlan"),
			m = a("../fx/Annotations"),
			n = a("../fx/Logger"),
			o = a("./imageService"),
			p = a("./metroService"),
			q = a("../common/AppStorageKeys"),
			r = a("./localStorage"),
			s = a("../models/latlng"),
			t = a("./userProfileService"),
			u = a("./httpService"),
			v = a("./appProfileService"),
			w = a("./analyticsService"),
			x = n.createLogger("TripPlanService"),
			y = 5,
			z = function (a) {
				function b(b, c, d, e, f, g, h, i, j, k, l) {
					var m = a.call(this, x) || this;
					return m.$q = b, m.$timeout = c, m.$translate = d, m.$location = e, m.imageService = f, m.metroService = g, m.userProfileService = h, m.appProfileService = i, m.analyticsService = j, m.localStorageService = k, m.httpService = l, m.tripPlanState = m.state.tripPlan, m.cachedItineraries = new Map, m.cachedStopLocations = new Map, m.currentSearchRequestNumber = 0, m.pendingSearchDetails = null, m
				}
				return d(b, a), c = b, b.prototype.init = function () {
					var a = this;
					this.userProfileService.ensureInit().then(function () {
						a.tripPlanState.routeTypes = a.state.user.metro.supportedRouteTypes
					})
				}, b.prototype.searchTypeToLocationType = function (a) {
					switch (a) {
						case MVSearchResultType.CITY:
							return MVLocationType.City;
						case MVSearchResultType.GEOCODE:
							return MVLocationType.Geocoder;
						case MVSearchResultType.SITE:
							return MVLocationType.Site;
						case MVSearchResultType.STOP:
							return MVLocationType.Stop;
						case MVSearchResultType.STREET:
							return MVLocationType.Street
					}
					return MVLocationType.LatLon
				}, b.prototype.routeTypeToTripPlanPref = function (a) {
					switch (a) {
						case l.RoutePriority.BestRoute:
							return MVTripPlanPref.Fastest;
						case l.RoutePriority.LeastTransfers:
							return MVTripPlanPref.LeastTransfers;
						case l.RoutePriority.LeastWalking:
							return MVTripPlanPref.LeastWalking
					}
					return MVTripPlanPref.Fastest
				}, b.prototype.timeSelectorToTimeType = function (a) {
					return a.refPoint == l.RefPoint.Arrive ? MVTimeType.Arrival : a.refPoint == l.RefPoint.Last ? MVTimeType.Last : MVTimeType.Departure
				}, b.prototype.routeTypesToMVRouteTypes = function (a) {
					for (var b = [], c = 0, d = a; c < d.length; c++) {
						switch (d[c]) {
							case l.RouteType.Tram:
								b.push(MVRouteType.Tram);
								break;
							case l.RouteType.Subway:
								b.push(MVRouteType.Subway);
								break;
							case l.RouteType.Rail:
								b.push(MVRouteType.Rail);
								break;
							case l.RouteType.Bus:
								b.push(MVRouteType.Bus);
								break;
							case l.RouteType.Ferry:
								b.push(MVRouteType.Ferry);
								break;
							case l.RouteType.CableCar:
								b.push(MVRouteType.Cable);
								break;
							case l.RouteType.Gondola:
								b.push(MVRouteType.Gondola);
								break;
							case l.RouteType.Funicular:
								b.push(MVRouteType.Funicular)
						}
					}
					return b
				}, b.prototype.addItinerariesToCache = function (a, b) {
					this.cachedItineraries[a] = b
				}, b.prototype.getSimilarItinerary = function (a, b, c, d) {
					return this.httpService.get("/api/tripplan/similar", {
						params: {
							guid: a,
							index: b,
							mode: c,
							isOriginState: d
						}
					})
				}, b.prototype.getTranslatedError = function (a) {
					var b = {
						code: a,
						text: void 0,
						title: void 0,
						image: void 0
					};
					switch (a) {
						case l.ErrorCodes.GeocoderResultsOutOfMetroArea:
						case l.ErrorCodes.TripPlanOutOfMetroArea:
							b.text = this.$translate.instant("TripPlanOutOfMetroAreaText"), b.image = "img_empty_state_omni.svg";
							break;
						case l.ErrorCodes.LocationNotAccessible:
							b.text = this.$translate.instant("LocationNotAccessibleText");
							break;
						case l.ErrorCodes.NoGeocoderResults:
							b.text = this.$translate.instant("NoGeocoderResultsText");
							break;
						case l.ErrorCodes.NoTransitTimes:
							b.text = this.$translate.instant("NoTransitTimesText"), b.image = "img_empty_state_line_view.svg";
							break;
						case l.ErrorCodes.RemoveTripsWithTooMuchWaitingTime:
							b.text = this.$translate.instant("RemoveTripsWithToMuchWaitingTimeText");
							break;
						case l.ErrorCodes.FutureItineraryNotAllowed:
							b.text = this.$translate.instant("FutureItineraryNotAllowedText");
							break;
						case l.ErrorCodes.TooClose:
							b.text = this.$translate.instant("TooCloseText"), b.image = "img_empty_state_omni.svg";
							break;
						case l.ErrorCodes.UnexpectedErrorInTripPlan:
							b.text = this.$translate.instant("UnexpectedErrorInTripPlanText");
							break;
						case l.ErrorCodes.NoTripPlanFound:
							b.text = this.$translate.instant("NoTripPlanFoundText"), b.image = "img_empty_state_omni.svg";
							break;
						default:
							return b.title = this.$translate.instant("UnexpectedErrorTitle"), b.text = this.$translate.instant("UnexpectedErrorText"), b
					}
					return b.title = "", b
				}, b.prototype.getSwitchMetroTranslatedError = function (a, b, c) {
					var d = {
						code: l.ErrorCodes.TripPlanOutOfMetroArea,
						text: void 0,
						title: void 0,
						image: void 0
					};
					return d.title = "", d.text = this.$translate.instant("web_trip_plan_metro_area_error", {
						param1: b,
						param2: a
					}) + '<br/><a href="' + c + '" target="_blank">' + this.$translate.instant("web_trip_plan_results_button") + "</a>", d.image = "img_empty_state_omni.svg", d
				}, b.prototype.validateMetroData = function (a) {
					var b = this.$q.defer(),
						c = [a, this.userProfileService.getCurrentMetroInfo()];
					return this.$q.all(c).then(function (a) {
						b.resolve(a[0])
					}, function (a) {
						b.reject(a)
					}), b.promise
				}, b.prototype.refreshRealTime = function (a) {
					return this.metroService.getLinesArrivalsToStops(a)
				}, b.prototype.clearCurrentRoutes = function () {
					this.state.tripPlan.routes = [], this.state.tripPlan.sections = [], this.state.tripPlan.route = null
				}, b.prototype.search = function (a, b, c, d, e, f) {
					var g = this,
						j = {
							fromLocation: a,
							toLocation: b,
							routeType: c,
							time: d,
							transitTypes: e,
							multiModal: f
						};
					if (x.remote("search BEGIN", l.searchDetailsCloneForLogging(j)), this.pendingSearchDetails && l.searchDetailsEqual(this.pendingSearchDetails, j)) return x.remote("Search request is the same as pending. Ignoring request"), this.pendingSearchPromise;
					this.clearCurrentRoutes();
					var m, n = {
							id: a.id,
							caption: a.name,
							latlon: s.LatLngHelpers.toMvLatLon(a.latlng),
							type: this.searchTypeToLocationType(parseInt(a.type))
						},
						o = {
							id: b.id,
							caption: b.name,
							latlon: s.LatLngHelpers.toMvLatLon(b.latlng),
							type: this.searchTypeToLocationType(parseInt(b.type))
						},
						p = this.$q.defer(),
						q = [],
						r = 0,
						t = 0,
						u = null;
					m = ++this.currentSearchRequestNumber;
					var v = function () {
							g.pendingSearchDetails = null, g.pendingSearchPromise = null
						},
						w = function () {
							return m < g.currentSearchRequestNumber && (x.remote("Got poll for request # " + m + ", while request # " + g.currentSearchRequestNumber + " is the latest one. Aborting"), x.log("Got poll for request # " + m + ", while request # " + g.currentSearchRequestNumber + " is the latest one. Aborting"), p.reject("stale-request"), !0)
						},
						y = function (c) {
							w() || (r++, x.log("Sending poll request #" + r + "; context = " + u.token), g.httpService.get("/api/route/result", {
								params: {
									token: u.token,
									offset: c
								}
							}).then(function (c) {
								if (!w()) {
									var d = !1,
										e = g.$q.when(0),
										f = g.$q.defer();
									if (c.results && c.results.length > 0 && (x.log("Got " + c.results.length + " new route(s)"), x.log(c.results), q = c.results, t += q.length, d = !0, e = g.imageService.syncSectionedRoutesImageData(q).then(function (a) {
											x.log("Synced " + a + " images for route(s)")
										})), c.errors && c.errors.length > 0) {
										var j = c.errors[0].errorCode;
										if (x.error("Trip plan error: " + j), g.analyticsService.trackError("trip plan search, code: " + j), g.appProfileService.state.isFromSharing && g.analyticsService.trackShareAction("error", "trip plan search: " + j), j == l.ErrorCodes.GeocoderResultsOutOfMetroArea || j == l.ErrorCodes.TripPlanOutOfMetroArea) {
											var k = g.metroService.getMetroIdByCoords(b.latlng.lat, b.latlng.lng),
												m = g.metroService.getMetroIdByCoords(a.latlng.lat, a.latlng.lng);
											g.$q.all([k, m]).then(function (a) {
												return h(g, void 0, void 0, function () {
													var b, c, d, e, g, h;
													return i(this, function (i) {
														switch (i.label) {
															case 0:
																return w() ? [2] : (b = a[0], c = a[1], d = this.state.user.metro.metroAreaData, b && c ? [4, this.metroService.getMetroSeoName(b.id)] : [3, 2]);
															case 1:
																return e = i.sent(), g = this.$location.url(), h = g.replace(d.metroAreaName.toLowerCase() + "-" + d.metroAreaId, e.toLowerCase() + "-" + b.id), c.id === b.id && c.id !== d.metroAreaId ? this.state.error = this.getSwitchMetroTranslatedError(d.metroAreaName, b.name, h) : c.id !== b.id && (this.state.error = this.getTranslatedError(l.ErrorCodes.TripPlanOutOfMetroArea)), [3, 3];
															case 2:
																this.state.error = this.getTranslatedError(l.ErrorCodes.TripPlanOutOfMetroArea), i.label = 3;
															case 3:
																return f.resolve(!0), [2]
														}
													})
												})
											}, function () {
												g.resolveWithDefaultError(f, j)
											})
										} else g.resolveWithDefaultError(f, j)
									}
									c.completed ? (x.log("Finished polling. resolving with " + q.length + " new routes"), t > 0 ? e.then(function () {
										w() || p.resolve(q)
									}) : (g.state.hasError || g.resolveWithDefaultError(f, l.ErrorCodes.NoTripPlanFound), f.promise.then(function () {
										p.reject(g.state.error ? g.state.error : g.getTranslatedError(l.ErrorCodes.NoTripPlanFound))
									}))) : r < 30 ? (d && e.then(function () {
										w() || p.notify(q)
									}), g.$timeout(function () {
										y(t)
									}, 1e3)) : t > 0 ? (x.log("Got " + t + " results"), e.then(function () {
										w() || p.resolve(q)
									})) : (x.error("Poll failed after 30 seconds"), p.reject("no results after 30 seconds"))
								}
							}, function (a) {
								w() || (x.error("Can't get trip plan results. Error = " + a), p.reject(a))
							}))
						};
					this.pendingSearchDetails = j, this.pendingSearchPromise = p.promise;
					var z = this.httpService.get("/api/route/search", {
						params: {
							tripPlanPref: this.routeTypeToTripPlanPref(c),
							time: k.serverTimeOf(d.refPoint == l.RefPoint.LeaveNow || d.refPoint == l.RefPoint.Last ? new Date : d.when),
							timeType: this.timeSelectorToTimeType(d),
							isCurrentTime: d.refPoint == l.RefPoint.LeaveNow,
							routeTypes: this.routeTypesToMVRouteTypes(e).join(","),
							fromLocation_id: n.id,
							fromLocation_type: n.type,
							fromLocation_latitude: n.latlon.latitude,
							fromLocation_longitude: n.latlon.longitude,
							fromLocation_caption: n.caption,
							toLocation_id: o.id,
							toLocation_type: o.type,
							toLocation_latitude: o.latlon.latitude,
							toLocation_longitude: o.latlon.longitude,
							toLocation_caption: o.caption,
							multiModal: f
						}
					});
					return this.validateMetroData(z).then(function (a) {
						u = a, y(0)
					}, function (a) {
						x.error("Can't get poll token. Error = " + a), p.reject(a)
					}), p.promise.finally(function () {
						v(), x.remote("search END", l.searchDetailsCloneForLogging(j))
					})
				}, b.prototype.resolveWithDefaultError = function (a, b) {
					this.state.error = this.getTranslatedError(b), this.state.hasError = !0, a.resolve(!0)
				}, b.prototype.ensureRecentLocationsAreLoaded = function () {
					var a = this;
					return x.log("ensureRecentLocationsAreLoaded"), this.$q.resolve().then(function () {
						return a.tripPlanState.recentLocations ? a.tripPlanState.recentLocations : a.localStorageService.getOrDefault(q.AppStorageKeys.RECENT_LOCATIONS, {}).then(function (b) {
							var c = b[a.state.user.metroId];
							return c ? x.log("RECENT_LOCATIONS loaded from localStorage") : (c = [], x.log("No RECENT_LOCATIONS were found for current metro")), a.tripPlanState.recentLocations = c
						})
					})
				}, b.prototype.loadRecentLocations = function () {
					var a = this;
					return x.log("loadRecentLocations"), this.ensureRecentLocationsAreLoaded().then(function () {
						return a.tripPlanState.recentLocations
					})
				}, b.prototype.saveRecentLocations = function (a) {
					return x.log("saveRecentLocations"), this.localStorageService.set(q.AppStorageKeys.RECENT_LOCATIONS, a)
				}, b.removeDuplicates = function (a, b) {
					for (var c = 0; c < a.length; c++) a[c].name == b.name && a[c].address == b.address && a.splice(c, 1)
				}, b.prototype.addRecentLocation = function (a, b) {
					var d = this;
					return x.log("addRecentLocation", a, b), this.ensureRecentLocationsAreLoaded().then(function (a) {
						var e = a;
						return c.removeDuplicates(e, b), e.unshift(b), e.length > y && e.pop(), d.localStorageService.getOrDefault(q.AppStorageKeys.RECENT_LOCATIONS, {}).then(function (b) {
							return b[d.userProfileService.metroId] = a, d.saveRecentLocations(b)
						})
					})
				}, b.prototype.getItineraryShareableLink = function (a) {
					return this.httpService.get("/api/share/itinerary/" + a, {})
				}, b.prototype.getItineraryByShareId = function (a) {
					return this.httpService.post("/api/share/itinerary/" + a, {})
				}, b.prototype.getStopById = function (a) {
					var b = this;
					return this.cachedStopLocations.has(a) ? (x.log("getStopById: getting stop location for " + a + " from cache"), this.$q.resolve(this.cachedStopLocations.get(a))) : (x.log("getStopById: getting stop location for " + a + " from server"), this.httpService.get("/api/lines/stop/" + a, {}).then(function (c) {
						return x.log("getStopById: Storing stop location for " + a + " in cache"), b.cachedStopLocations.set(a, c), c
					}))
				}, b.prototype.sameAsPendingSearchRequest = function (a) {
					if (!this.pendingSearchDetails) return !1;
					var b = this.pendingSearchDetails,
						c = a;
					return !(b.routeType != c.routeType || b.time.refPoint != l.RefPoint.LeaveNow && b.time.refPoint != l.RefPoint.Last || b.time.refPoint != c.time.refPoint || !l.RouteType.equals(b.transitTypes, c.transitTypes) || !l.suggestedLocationEqual(b.fromLocation, c.fromLocation) || !l.suggestedLocationEqual(b.toLocation, c.toLocation))
				}, b = c = e([m.Service({
					name: "tripPlanService"
				}), g(0, m.Inject("$q")), g(1, m.Inject("$timeout")), g(2, m.Inject("$translate")), g(3, m.Inject("$location")), f("design:paramtypes", [Object, Object, Object, Object, o.ImageService, p.MetroService, t.UserProfileService, v.AppProfileService, w.AnalyticsService, r.LocalStorageService, u.HttpService])], b);
				var c
			}(j.ServiceBase);
		return b.TripPlanService = z, c.exports
	}), System.registerDynamic("app/services/messageService.js", ["../fx/Annotations", "./appProfileService", "./Service", "../fx/Logger"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Annotations"),
			i = a("./appProfileService"),
			j = a("./Service"),
			k = a("../fx/Logger"),
			l = k.createLogger("MessageService"),
			m = function (a) {
				function b(b, c, d, e) {
					var f = a.call(this, l) || this;
					return f.$mdToast = b, f.$q = c, f.$mdDialog = d, f.appProfileService = e, f
				}
				return d(b, a), b.prototype.init = function () {
					var a = this;
					return this.appProfileService.ensureInit().then(function () {
						a.position = a.appProfileService.isMobile ? "top left" : "top center", a.delay = 5e3
					})
				}, b.prototype.show = function (a) {
					var b = this.$mdToast,
						c = b.show(b.simple().textContent(a).position(this.position).hideDelay(this.delay));
					return function () {
						b.hide(c)
					}
				}, b.prototype.errorToUserMessage = function (a) {
					return a.userMessage ? a.userMessage : "Internal error"
				}, b.prototype.errorToInternalMessage = function (a) {
					return a.message ? a.message : "Internal error"
				}, b.prototype.showSiteError = function (a) {
					var b;
					return "object" == typeof a ? (b = this.errorToUserMessage(a), this.errorToInternalMessage(a)) : (b = a, a), this.show(b)
				}, b = e([h.Service({
					name: "messageService"
				}), g(0, h.Inject("$mdToast")), g(1, h.Inject("$q")), g(2, h.Inject("$mdDialog")), f("design:paramtypes", [Object, Object, Object, i.AppProfileService])], b)
			}(j.ServiceBase);
		return b.MessageService = m, c.exports
	}), System.registerDynamic("app/services/alertsService.js", ["./Service", "../fx/Annotations", "../fx/Logger", "../models/converters", "./metroService", "./httpService", "./imageService", "./userProfileService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./Service"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../models/converters"),
			l = a("./metroService"),
			m = a("./httpService"),
			n = a("./imageService"),
			o = a("./userProfileService"),
			p = j.createLogger("AlertsService"),
			q = function (a) {
				function b(b, c, d, e, f, g) {
					var h = a.call(this, p) || this;
					return h.$q = b, h.$sce = c, h.userProfileService = d, h.metroService = e, h.httpService = f, h.imageService = g, h
				}
				return d(b, a), b.prototype.init = function () {
					return this.userProfileService.ensureInit()
				}, b.prototype.getRouteAlerts = function (a, b) {
					p.log("AlertsService.getRouteAlerts");
					for (var c = a.map(function (a) {
							return {
								entityType: MVEntityType.Stop,
								id: a
							}
						}).concat(b.map(function (a) {
							return {
								entityType: MVEntityType.Line,
								id: a
							}
						})), d = "", e = 0, f = c; e < f.length; e++) {
						var g = f[e];
						d.length && (d += "&"), d += "type=" + g.entityType + "&id=" + g.id
					}
					return this.httpService.get("/api/alert?" + d, {})
				}, b.prototype.getAlertsByEntity = function (a) {
					return this.httpService.post("/api/alert/entities", {
						entities: a
					}).then(function (a) {
						return a
					})
				}, b.prototype.getAlerts = function (a) {
					var b = this;
					return this.getAlertsByEntity(a).then(function (a) {
						if (a) {
							return a.map(function (a) {
								return b.convertAlertDetails(a)
							})
						}
					})
				}, b.prototype.getAlertsDetails = function (a) {
					var b = this;
					return this.httpService.get("/api/alert/details", {
						params: {
							ids: a
						}
					}).then(function (a) {
						return a.serviceAlerts.map(function (a) {
							return b.convertAlertDetails(a)
						})
					})
				}, b.prototype.getMetroAlerts = function () {
					var a = this;
					return this.lastMetroId === this.state.user.metroId && this.getMetroAlertsPromise || (this.lastMetroId = this.state.user.metroId, this.getMetroAlertsPromise = this.httpService.get("api/alert/metro/" + this.state.user.metroId + "/" + this.state.user.locale.langId + "?revision=" + this.state.user.metro.metroAreaData.revisionNumber, {}).then(function (b) {
						if (b) return a.imageService.syncLineGroupSummariesImageData(b.lineGroups).then(function () {
							var c = [];
							return a.lineGroups = b.lineGroups, b.alertsForAgency.forEach(function (d) {
								var e = a.metroService.getAgency(d.agencyId);
								c.push(a.createAgencyAlerts(d.agencyAlerts, d.lineAlerts, e, b.lineGroups))
							}), {
								agenciesAlerts: c,
								metroAlerts: b.metroAlerts
							}
						});
						p.error("Metro alerts failure")
					})), this.getMetroAlertsPromise
				}, b.prototype.createAgencyAlerts = function (a, b, c, d) {
					var e = this,
						f = [];
					return b.forEach(function (a) {
						f.push(e.createLineAlerts(a, d[a.affectedLine.lineGroupId]))
					}), {
						agency: c,
						agencyType: this.metroService.getAgencyTypeFromRouteType(c.routeType),
						agencyAlerts: a,
						lineAlerts: f
					}
				}, b.prototype.createImageHtmlAndName = function (a) {
					if (!a) return [null, null];
					var b, c, d = [],
						e = this.lineGroups[a.lineGroupId],
						f = "";
					return e && (f = 1 == this.state.user.metroId && e.caption1 && e.caption2 ? e.caption1 + " â†”  " + e.caption2 : e.lineSummaries && e.lineSummaries.length > 0 ? e.lineSummaries[0].routeLongName : e.caption1), a.icon ? (b = a.icon.imageId, d = a.icon.parameters, c = this.imageService.getImageHTML(b, [null].concat(d))) : e && (c = k.generateLineImage(e, this.imageService, this.metroService)), [f, c]
				}, b.prototype.createLineAlerts = function (a, b) {
					var c = this.createImageHtmlAndName(a.affectedLine);
					return {
						statusCategory: a.serviceStatus.category,
						statusDescription: a.serviceStatus.desc,
						alertIds: a.alertIds,
						imageHtml: c[1],
						lineName: c[0]
					}
				}, b.prototype.convertAlertDetails = function (a) {
					var b = !1,
						c = "",
						d = "";
					if (a.desc)
						if (b = a.desc.format == MVTextFormat.HTML) {
							a.desc.baseUrl && (d = this.$sce.trustAsHtml(a.desc.baseUrl));
							var e = document.createElement("html");
							a.desc.data = a.desc.data.replace(/&lt; br\/&gt;/g, ""), d && (a.desc.data = a.desc.data.replace(/(src=["'])((\/)|(\.\/)|(\.\.\/)+)/gi, "$1" + d)), e.innerHTML = a.desc.data;
							for (var f = e.getElementsByTagName("a"), g = 0; g < f.length; g++) f[g].removeAttribute("target"), f[g].getAttribute("href") && ("#" == f[g].getAttribute("href") || f[g].getAttribute("href").indexOf("javascript") > -1) && f[g].removeAttribute("href"), f[g].removeAttribute("onclick");
							for (var h = e.getElementsByTagName("img"), i = 0; i < h.length; i++)
								if ("A" != h[i].parentElement.tagName) {
									var j = h[i].getAttribute("src"),
										l = '<a href="' + j + '" target="_blank">' + h[i].outerHTML + "</a>";
									h[i].outerHTML = l
								}
							a.desc.data = e.getElementsByTagName("body")[0].innerHTML, c = this.$sce.trustAsHtml(a.desc.data)
						} else c = a.desc.data, c.indexOf("\n") >= 0 && (c = c.replace(/\n/g, "<br>"), c = this.$sce.trustAsHtml(c), b = !0);
					var m = this.metroService.getAgency(a.agencyId),
						n = m ? m.agencyName : "",
						o = this.createImageHtmlAndName(a.affectedLines[0]);
					return {
						date: a.publicationDate ? k.fromServerTime(a.publicationDate) : null,
						title: a.title,
						activeFrom: a.activeFrom ? k.fromServerTime(a.activeFrom) : null,
						activeTo: a.activeTo ? k.fromServerTime(a.activeTo) : null,
						affectedLines: a.affectedLines ? a.affectedLines.map(function (a) {
							return a.name
						}).join(", ") : "",
						agencyName: n,
						baseUrl: d,
						description: c,
						isDescriptionHtml: b,
						url: a.infoUrl,
						id: a.alertId,
						statusCategory: a.serviceStatus.category,
						statusDescription: a.serviceStatus.desc,
						imageHtml: o[1],
						lineName: o[0]
					}
				}, b.prototype.convertAlertDigest = function (a) {
					return {
						date: a.publicationDate ? k.fromServerTime(a.publicationDate) : null,
						title: a.title,
						activeFrom: a.activeFrom ? k.fromServerTime(a.activeFrom) : null,
						activeTo: a.activeTo ? k.fromServerTime(a.activeTo) : null,
						affectedLines: "",
						agencyName: "",
						baseUrl: "",
						description: "",
						isDescriptionHtml: !1,
						url: "",
						id: a.alertId,
						statusCategory: a.serviceStatus.category,
						statusDescription: a.serviceStatus.desc,
						imageHtml: "",
						lineName: ""
					}
				}, b = e([i.Service({
					name: "alertsService"
				}), g(0, i.Inject("$q")), g(1, i.Inject("$sce")), f("design:paramtypes", [Object, Object, o.UserProfileService, l.MetroService, m.HttpService, n.ImageService])], b)
			}(h.ServiceBase);
		return b.AlertsService = q, c.exports
	}), System.registerDynamic("app/services/searchService.js", ["./Service", "../models/latlng", "../fx/Annotations", "../fx/Logger", "./metroService", "./imageService", "./userProfileService", "./httpService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./Service"),
			i = a("../models/latlng"),
			j = a("../fx/Annotations"),
			k = a("../fx/Logger"),
			l = a("./metroService"),
			m = a("./imageService"),
			n = a("./userProfileService"),
			o = a("./httpService"),
			p = k.createLogger("SearchService"),
			q = function (a) {
				function b(b, c, d, e, f, g) {
					var h = a.call(this, p) || this;
					return h.$q = b, h.$http = c, h.httpService = d, h.userProfileService = e, h.metroService = f, h.imageService = g, h
				}
				return d(b, a), b.prototype.search = function (a, b) {
					var c = this;
					return p.log("SearchService.search: ", {
						query: a,
						filterByLatLng: b
					}), this.userProfileService.getCurrentMetroInfo().then(function (d) {
						var e = i.LatLngHelpers.fromMvLatLon(d.metroAreaData.defaultLocation),
							f = i.LatLngHelpers.toMvLatLon(e);
						return c.httpService.get("/api/location", {
							params: {
								query: a,
								latitude: f.latitude,
								longitude: f.longitude
							}
						}).then(function (a) {
							var d = [];
							return a && (b && a.results.length > 0 && (a.results = a.results.sort(function (a, c) {
								return i.LatLngHelpers.distanceTo(b, a.latLon) - i.LatLngHelpers.distanceTo(b, c.latLon)
							})), d.push(c.imageService.syncSearchImageData(a.results))), c.$q.all(d).then(function () {
								return a
							})
						})
					})
				}, b.prototype.refineInaccurate = function (a, b) {
					return p.log("SearchService.refineInaccurate: " + a), this.httpService.get("/api/location/forwardgeocoding/" + encodeURIComponent(a) + "/" + b.lat + "/" + b.lng)
				}, b.prototype.findAddress = function (a) {
					return p.log("SearchService.findAddress: ", a), this.httpService.get("api/location/address/" + a.lat + "/" + a.lng).then(function (a) {
						return a
					})
				}, b = e([j.Service({
					name: "searchService"
				}), g(0, j.Inject("$q")), g(1, j.Inject("$http")), f("design:paramtypes", [Object, Object, o.HttpService, n.UserProfileService, l.MetroService, m.ImageService])], b)
			}(h.ServiceBase);
		return b.SearchService = q, c.exports
	}), System.registerDynamic("app/services/seoMetaService.js", ["./Service", "../fx/Logger", "../fx/Annotations", "../fx/Application", "../common/AppEvents", "../models/converters", "../routes", "./metroService", "./imageService", "./localeService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__assign || Object.assign || function (a) {
				for (var b, c = 1, d = arguments.length; c < d; c++) {
					b = arguments[c];
					for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
				}
				return a
			},
			f = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			g = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			h = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			},
			i = this && this.__awaiter || function (a, b, c, d) {
				return new(c || (c = Promise))(function (e, f) {
					function g(a) {
						try {
							i(d.next(a))
						} catch (a) {
							f(a)
						}
					}

					function h(a) {
						try {
							i(d.throw(a))
						} catch (a) {
							f(a)
						}
					}

					function i(a) {
						a.done ? e(a.value) : new c(function (b) {
							b(a.value)
						}).then(g, h)
					}
					i((d = d.apply(a, b || [])).next())
				})
			},
			j = this && this.__generator || function (a, b) {
				function c(a) {
					return function (b) {
						return d([a, b])
					}
				}

				function d(c) {
					if (e) throw new TypeError("Generator is already executing.");
					for (; i;) try {
						if (e = 1, f && (g = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(g = g.call(f, c[1])).done) return g;
						switch (f = 0, g && (c = [0, g.value]), c[0]) {
							case 0:
							case 1:
								g = c;
								break;
							case 4:
								return i.label++, {
									value: c[1],
									done: !1
								};
							case 5:
								i.label++, f = c[1], c = [0];
								continue;
							case 7:
								c = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (g = i.trys, !(g = g.length > 0 && g[g.length - 1]) && (6 === c[0] || 2 === c[0])) {
									i = 0;
									continue
								}
								if (3 === c[0] && (!g || c[1] > g[0] && c[1] < g[3])) {
									i.label = c[1];
									break
								}
								if (6 === c[0] && i.label < g[1]) {
									i.label = g[1], g = c;
									break
								}
								if (g && i.label < g[2]) {
									i.label = g[2], i.ops.push(c);
									break
								}
								g[2] && i.ops.pop(), i.trys.pop();
								continue
						}
						c = b.call(a, i)
					} catch (a) {
						c = [6, a], f = 0
					} finally {
						e = g = 0
					}
					if (5 & c[0]) throw c[1];
					return {
						value: c[0] ? c[1] : void 0,
						done: !0
					}
				}
				var e, f, g, h, i = {
					label: 0,
					sent: function () {
						if (1 & g[0]) throw g[1];
						return g[1]
					},
					trys: [],
					ops: []
				};
				return h = {
					next: c(0),
					throw: c(1),
					return: c(2)
				}, "function" == typeof Symbol && (h[Symbol.iterator] = function () {
					return this
				}), h
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var k = a("./Service"),
			l = a("../fx/Logger"),
			m = a("../fx/Annotations"),
			n = a("../fx/Application"),
			o = a("../common/AppEvents"),
			p = a("../models/converters"),
			q = a("../routes"),
			r = a("./metroService"),
			s = a("./imageService"),
			t = a("./localeService"),
			u = l.createLogger("SeoMetaService");
		String.prototype.startsWith || (String.prototype.startsWith = function (a, b) {
			return b = b || 0, this.indexOf(a, b) === b
		});
		var v = function (a) {
			function b(b, c, d, e, f, g, h) {
				var i = a.call(this, u) || this;
				return i.$rootScope = b, i.$translate = c, i.$location = d, i.$state = e, i.imageService = f, i.metroService = g, i.localeService = h, n.events.subscribe(o.AppEvents.URL_CHANGED, i, i.onUrlChange), n.events.subscribe(o.AppEvents.USER_LOCALE_CHANGED, i, i.onLocaleChange), n.events.subscribe(o.AppEvents.TRIPPLAN_APP_READY, i, i.onUrlChange), i
			}
			return d(b, a), b.prototype.setMetaData = function () {
				var a = this;
				this.getViewMeta(this.$state.current.name).then(function (b) {
					a.$rootScope.$title = b.title, a.$rootScope.$description = b.description, a.$rootScope.$image = b.image
				})
			}, b.prototype.setMetaValues = function (a, b, c) {
				this.$rootScope.$title = this.$translate.instant(a, c), this.$rootScope.$description = this.$translate.instant(b, c)
			}, b.prototype.setCanonicalUrl = function (a) {
				this.$rootScope.$canonical = a
			}, b.prototype.onLocaleChange = function (a) {
				this.setMetaData()
			}, b.prototype.onUrlChange = function (a) {
				return i(this, void 0, void 0, function () {
					var a, b, c, d, e;
					return j(this, function (f) {
						switch (f.label) {
							case 0:
								return this.state.appReady ? (a = this.$state.current.name, [4, this.getViewMeta(a)]) : [3, 2];
							case 1:
								return b = f.sent(), this.$rootScope.$title = b.title, this.$rootScope.$description = b.description, this.$rootScope.$image = b.image, c = this.$location.absUrl(), c && !c.startsWith("/?customerId&metroId&") && (q.Routes.isTripPlanView(a) && (d = new Date, d.setHours(12, 0, 0, 0), e = p.serverTimeOf(d), -1 != c.indexOf("time=") ? c = c.replace(/(time=)[^\&]+/, "$1" + e) : c += "&time=" + e, -1 != c.indexOf("timeType=") ? c = c.replace(/(timeType=)[^\&]+/, "$1depart") : c += "&timeType=depart"), this.$rootScope.$canonical = c), [3, 3];
							case 2:
								this.$rootScope.$title = "Moovit: Your Public Transit Guide", f.label = 3;
							case 3:
								return [2]
						}
					})
				})
			}, b.prototype.getMetaParams = function () {
				var a = this;
				return this.localeService.getLocalizedMetroName().then(function (b) {
					if (a.state.lines.lineGroupId) return a.metroService.getLineGroupTrips(a.state.lines.lineGroupId).then(function (c) {
						if (c) return a.imageService.syncLineGroupSummariesImageData([c.syncedLineGroup]).then(function () {
							var d = a.metroService.getAgency(c.syncedLineGroup.agencyId),
								e = a.state.user.metro.metroAreaData.agencies.find(function (a) {
									return a.agencyId == d.agencyId
								}),
								f = a.metroService.getAgencyTypeFromRouteType(d.routeType);
							return {
								CITY: b,
								LINE_NUMBER: a.state.lines ? a.state.lines.lineShortName : "",
								AGENCY: e.agencyName,
								TRANSIT_TYPE: f
							}
						})
					});
					if (a.state.tripPlan) {
						var c = void 0,
							d = a.state.user.metro.supportedRouteTypes.map(function (b) {
								return a.$translate.instant(b.translationKey)
							});
						c = 1 == d.length ? d[0] : d.slice(0, d.length - 1).join(", ") + " \n                            " + a.$translate.instant("tripplan_itinerary_alt_route_divide_label") + " \n                            " + d[d.length - 1];
						var f = {
							CITY: b,
							TRANSIT_TYPES: c
						};
						return (a.state.tripPlan.from || a.state.tripPlan.to) && (f = e({}, f, {
							ORIGIN: a.state.tripPlan.from && a.state.tripPlan.from.name ? a.state.tripPlan.from.name : "",
							DESTINATION: a.state.tripPlan.to && a.state.tripPlan.to.name ? a.state.tripPlan.to.name : ""
						})), f
					}
				})
			}, b.prototype.getViewMeta = function (a) {
				return i(this, void 0, void 0, function () {
					var b, c, d, e;
					return j(this, function (f) {
						switch (f.label) {
							case 0:
								if (b = "web_hierarchy_meta_title", c = "web_hierarchy_meta_description", d = "https://moovitapp.com/images/moovit-for-web.jpg", q.Routes.isLinesView(a)) {
									if (b = "web_page_tripplanner_meta_title", c = "web_page_tripplanner_meta_description", d = "https://moovitapp.com/images/meta_image_moovit_lines.jpg", !this.state.lines.lineGroupId) return [2, {
										title: this.$translate.instant("web_page_tripplanner_meta_title"),
										description: this.$translate.instant("web_page_tripplanner_meta_description"),
										image: d
									}];
									b = "web_page_line_specific_meta_title", c = "web_page_agency_lines_meta_description"
								} else {
									if (q.Routes.isAlertsView(a)) return [2, {
										title: this.$translate.instant("web_page_tripplanner_alerts_meta_title"),
										description: this.$translate.instant("web_page_tripplanner_alerts_meta_description"),
										image: "https://moovitapp.com/images/meta_image_moovit_alerts.jpg"
									}];
									q.Routes.isDirectionsIndexingView(a) && (b = "web_hierarchy_city_meta_title_webapp", c = "web_hierarchy_city_meta_description_webapp", this.state.tripPlan.from && this.state.tripPlan.to ? (b = "web_directions_destination_meta_title_webapp", c = "web_directions_destination_meta_description_webapp") : this.state.tripPlan.to && (b = "web_page_specific_destination_meta_title_webapp", c = "web_page_specific_destination_meta_description_webapp"))
								}
								return [4, this.getMetaParams()];
							case 1:
								return e = f.sent(), [2, {
									title: this.$translate.instant(b, e),
									description: this.$translate.instant(c, e),
									image: d
								}]
						}
					})
				})
			}, b = f([m.Service({
				name: "seoMetaService"
			}), h(0, m.Inject("$rootScope")), h(1, m.Inject("$translate")), h(2, m.Inject("$location")), h(3, m.Inject("$state")), g("design:paramtypes", [Object, Object, Object, Object, s.ImageService, r.MetroService, t.LocaleService])], b)
		}(k.ServiceBase);
		return b.SeoMetaService = v, c.exports
	}), System.registerDynamic("app/services/mobileService.js", ["../fx/Logger", "../fx/Annotations", "./Service", "./appProfileService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("./Service"),
			k = a("./appProfileService"),
			l = h.createLogger("MobileService"),
			m = function (a) {
				function b(b, c, d) {
					var e = a.call(this, l) || this;
					return e.appProfileService = b, e.$rootScope = c, e.$document = d, e.isKeyboardOpened = !1, e.originalSize = window.outerWidth + window.outerHeight, e
				}
				return d(b, a), b.prototype.init = function () {
					var a = this;
					return this.appProfileService.ensureInit().then(function () {
						a.appProfileService.isMobile && !a.appProfileService.isIOS && window.addEventListener("resize", function () {
							a.onWindowResize()
						})
					})
				}, b.prototype.closeKeyboard = function () {
					if (this.appProfileService.isMobile) {
						var a = this.$document[0].activeElement;
						if (!a) return void l.log("Cannot close keyboard when document.activeElement is empty");
						angular.element(a).blur()
					}
				}, b.prototype.onWindowResize = function () {
					var a = window.outerWidth,
						b = window.outerHeight,
						c = a + b,
						d = this.isKeyboardOpened;
					c < this.originalSize - 50 ? this.isKeyboardOpened = !0 : this.isKeyboardOpened = !1, d != this.isKeyboardOpened && this.$rootScope.$apply()
				}, b = e([i.Service({
					name: "mobileService"
				}), g(1, i.Inject("$rootScope")), g(2, i.Inject("$document")), f("design:paramtypes", [k.AppProfileService, Object, Object])], b)
			}(j.ServiceBase);
		return b.MobileService = m, c.exports
	}), System.registerDynamic("app/services/dialogService.js", ["../fx/Annotations", "./appProfileService", "./Service", "../fx/Logger", "../fx/ModuleLoader", "../fx/Promise"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Annotations"),
			i = a("./appProfileService"),
			j = a("./Service"),
			k = a("../fx/Logger"),
			l = a("../fx/ModuleLoader"),
			m = a("../fx/Promise"),
			n = k.createLogger("DialogService"),
			o = function (a) {
				function b(b, c) {
					var d = a.call(this, n) || this;
					return d.$mdDialog = b, d.appProfileService = c, d
				}
				return d(b, a), b.prototype.init = function () {
					return this.appProfileService.ensureInit()
				}, b.prototype.popup = function (a, b, c) {
					var d = this;
					return m.Promise.resolve().then(function () {
						if (c) return l.loadModules(c)
					}).then(function () {
						return d.$mdDialog.show({
							template: "<" + a + "></" + a + ">",
							parent: angular.element(document.body),
							targetEvent: b,
							clickOutsideToClose: !0,
							fullscreen: !1
						}).finally(function (a) {
							n.log("popup closed")
						})
					})
				}, b = e([h.Service({
					name: "dialogService"
				}), g(0, h.Inject("$mdDialog")), f("design:paramtypes", [Object, i.AppProfileService])], b)
			}(j.ServiceBase);
		return b.DialogService = o, c.exports
	}), System.registerDynamic("app/services/sessionStorage.js", ["../fx/Logger", "../fx/Annotations", "./Service"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("./Service"),
			k = h.createLogger("SessionStorageService"),
			l = function (a) {
				function b(b) {
					var c = a.call(this, k) || this;
					return c.$q = b, c
				}
				return d(b, a), b.prototype.get = function (a) {
					return k.log("get", a), this.$q.when(!0).then(function () {
						try {
							var b = sessionStorage.getItem(a);
							if (null === b) throw new Error("sessionStorage key: " + a + " was not found");
							return JSON.parse(b)
						} catch (a) {}
					})
				}, b.prototype.getOrDefault = function (a, b) {
					return k.log("getOrDefault", a, b), this.$q.when(!0).then(function () {
						try {
							var c, d = sessionStorage.getItem(a);
							return null === d ? (k.log("key: " + a + " was not found. Using default value: ", b), c = b) : c = JSON.parse(d), c
						} catch (a) {
							return b
						}
					})
				}, b.prototype.set = function (a, b) {
					return k.log("set", a, b), this.$q.when(!0).then(function () {
						try {
							var c = JSON.stringify(b);
							window.sessionStorage.setItem(a, c)
						} catch (a) {
							throw new Error("sessionStorage is disabled")
						}
					})
				}, b = e([i.Service({
					name: "sessionStorageService"
				}), g(0, i.Inject("$q")), f("design:paramtypes", [Object])], b)
			}(j.ServiceBase);
		return b.SessionStorageService = l, c.exports
	}), System.registerDynamic("app/services/cookieBarService.js", ["../fx/Logger", "../fx/Annotations", "./Service"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("./Service"),
			k = h.createLogger("CookieBarService"),
			l = function (a) {
				function b(b, c) {
					var d = a.call(this, k) || this;
					return d.$translate = b, d.$window = c, d
				}
				return d(b, a), b.prototype.initCookieBar = function () {
					this.$window.cookieconsent && this.$window.cookieconsent.initialise({
						palette: {
							popup: {
								background: "#2196f3",
								text: "#ffffff"
							}
						},
						position: "bottom",
						theme: "classic",
						content: {
							message: this.$translate.instant("web_cookies_policy_text"),
							link: this.$translate.instant("web_cookies_policy_text_hyperlink"),
							dismiss: "",
							href: this.$translate.instant("web_cookies_policy_text_url")
						}
					})
				}, b = e([i.Service({
					name: "CookieBarService"
				}), g(0, i.Inject("$translate")), g(1, i.Inject("$window")), f("design:paramtypes", [Object, Object])], b)
			}(j.ServiceBase);
		return b.CookieBarService = l, c.exports
	}), System.registerDynamic("app/services/appStoreService.js", ["../fx/Application", "../fx/Logger", "../fx/Annotations", "../common/AppEvents", "../models/converters", "../models/tripPlan", "./tripPlanService", "../models/latlng", "./messageService", "../routes", "../services/userProfileService", "../services/analyticsService", "./alertsService", "./imageService", "./metroService", "../common/stringHelpers", "../models/general", "./searchService", "./appProfileService", "./localeService", "./Service", "../common/AppStorageKeys", "../../common/customer", "../common/AppState", "./seoMetaService", "../../common/locales", "./localStorage", "../fx/ModuleLoader", "./mobileService", "./dialogService", "moment", "../common/utmHelper", "./sessionStorage", "./cookieBarService", "./httpService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__assign || Object.assign || function (a) {
				for (var b, c = 1, d = arguments.length; c < d; c++) {
					b = arguments[c];
					for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
				}
				return a
			},
			f = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			g = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			h = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			},
			i = this && this.__awaiter || function (a, b, c, d) {
				return new(c || (c = Promise))(function (e, f) {
					function g(a) {
						try {
							i(d.next(a))
						} catch (a) {
							f(a)
						}
					}

					function h(a) {
						try {
							i(d.throw(a))
						} catch (a) {
							f(a)
						}
					}

					function i(a) {
						a.done ? e(a.value) : new c(function (b) {
							b(a.value)
						}).then(g, h)
					}
					i((d = d.apply(a, b || [])).next())
				})
			},
			j = this && this.__generator || function (a, b) {
				function c(a) {
					return function (b) {
						return d([a, b])
					}
				}

				function d(c) {
					if (e) throw new TypeError("Generator is already executing.");
					for (; i;) try {
						if (e = 1, f && (g = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(g = g.call(f, c[1])).done) return g;
						switch (f = 0, g && (c = [0, g.value]), c[0]) {
							case 0:
							case 1:
								g = c;
								break;
							case 4:
								return i.label++, {
									value: c[1],
									done: !1
								};
							case 5:
								i.label++, f = c[1], c = [0];
								continue;
							case 7:
								c = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (g = i.trys, !(g = g.length > 0 && g[g.length - 1]) && (6 === c[0] || 2 === c[0])) {
									i = 0;
									continue
								}
								if (3 === c[0] && (!g || c[1] > g[0] && c[1] < g[3])) {
									i.label = c[1];
									break
								}
								if (6 === c[0] && i.label < g[1]) {
									i.label = g[1], g = c;
									break
								}
								if (g && i.label < g[2]) {
									i.label = g[2], i.ops.push(c);
									break
								}
								g[2] && i.ops.pop(), i.trys.pop();
								continue
						}
						c = b.call(a, i)
					} catch (a) {
						c = [6, a], f = 0
					} finally {
						e = g = 0
					}
					if (5 & c[0]) throw c[1];
					return {
						value: c[0] ? c[1] : void 0,
						done: !0
					}
				}
				var e, f, g, h, i = {
					label: 0,
					sent: function () {
						if (1 & g[0]) throw g[1];
						return g[1]
					},
					trys: [],
					ops: []
				};
				return h = {
					next: c(0),
					throw: c(1),
					return: c(2)
				}, "function" == typeof Symbol && (h[Symbol.iterator] = function () {
					return this
				}), h
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var k = a("../fx/Application"),
			l = a("../fx/Logger"),
			m = a("../fx/Annotations"),
			n = a("../fx/Application"),
			o = a("../common/AppEvents"),
			p = a("../models/converters"),
			q = a("../models/tripPlan"),
			r = a("./tripPlanService"),
			s = a("../models/latlng"),
			t = a("./messageService"),
			u = a("../routes"),
			v = a("../services/userProfileService"),
			w = a("../services/analyticsService"),
			x = a("./alertsService"),
			y = a("./imageService"),
			z = a("./metroService"),
			A = a("../common/stringHelpers"),
			B = a("../models/general"),
			C = a("./searchService"),
			D = a("./appProfileService"),
			E = a("./localeService"),
			F = a("./Service"),
			G = a("../common/AppStorageKeys"),
			H = a("../../common/customer"),
			I = a("../common/AppState"),
			J = a("./seoMetaService"),
			K = a("../../common/locales"),
			L = a("./localStorage"),
			M = a("../fx/ModuleLoader"),
			N = a("./mobileService"),
			O = a("./dialogService"),
			P = a("../../common/locales"),
			Q = a("moment"),
			R = a("../common/utmHelper"),
			S = a("./sessionStorage"),
			T = a("./cookieBarService"),
			U = a("./httpService"),
			V = l.createLogger("AppStoreService"),
			W = function (a) {
				function b(b, c, d, e, f, g, h, i, j, l, m, n, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E) {
					var F = a.call(this, V) || this;
					return F.tripPlanService = b, F.messageService = c, F.dialogService = d, F.userProfileService = e, F.analyticsService = f, F.alertsService = g, F.imageService = h, F.metroService = i, F.searchService = j, F.appProfileService = l, F.localeService = m, F.seoMetaService = n, F.localStorageService = p, F.sessionStorageService = q, F.mobileService = r, F.cookieBarService = s, F.httpService = t, F.$location = u, F.$rootScope = v, F.$q = w, F.$state = x, F.$stateParams = y, F.$interval = z, F.$translate = A, F.$window = B, F.$mdDialog = C, F.$cookies = D, F.featureFlags = E, F.APP_BANNER_EXPIRATION_DAYS = 1, F.REAL_TIME_REFRESH_DELAY_MS = 1e4, k.events.subscribe(o.AppEvents.URL_CHANGED, F, F.onUrlChanged), k.events.subscribe(o.AppEvents.METRO_CHANGED, F, F.onMetroChanged), k.events.subscribe(o.AppEvents.USER_LOCALE_CHANGED, F, F.onLocaleChanged), F
				}
				return d(b, a), c = b, b.prototype.init = function () {
					var a = this;
					if (this.initPromise) return this.initPromise;
					this.initPromise = this.$q.when(), this.initState();
					var b = [this.localeService.ensureInit(), this.appProfileService.ensureInit()],
						c = [this.analyticsService.ensureInit(), this.metroService.ensureInit(), this.messageService.ensureInit(), this.seoMetaService.ensureInit(), this.mobileService.ensureInit()];
					return this.initPromise = this.$q.all(b).then(function () {
						return V.log("onUIReady"), a.showSplashScreenPopup(), a.userProfileService.ensureInit().then(function () {
							return a.$q.all(c).then(function () {
								a.analyticsService.trackUserData(), a.state.appReady = !0, k.events.raise(o.AppEvents.TRIPPLAN_APP_READY, {}, V), V.log("onAppReady")
							})
						})
					}), this.initPromise
				}, b.prototype.initState = function () {
					return i(this, void 0, void 0, function () {
						var a, b, d, f, g, h, k, l, m, n, o, p = this;
						return j(this, function (q) {
							if (a = this.$location.search(), b = this.$location.path(), a.returnUrl && (a = A.extractSearchFromUrl(a.returnUrl)), "/ma/" == b && (a = c.translateBackwardCompatibilityParams(a)), this.state.customer || (a.customerId && parseInt(a.customerId) ? this.state.customer = H.Customer.getCustomerById(a.customerId) : this.state.customer = H.Customer.MoovitWeb), a.ipAddress && (this.state.user.ipAddress = a.ipAddress, V.log("Setting user.ipAddress to: " + this.state.user.ipAddress)), d = b.split("/"), f = {}, d.length > 2 && (g = d[1].split("-"), f = {
									metroId: g[1] ? parseInt(g[1]) : null
								}, "lines" === d[2] ? (h = d.length < 5, f = e({}, f, {
									lineShortName: h ? null : d[3],
									lineGroupID: d[4] || null,
									lineID: d[5] || null,
									lang: h ? d[3] : d[6] || null
								})) : d.length > 2 && (d.length > 3 && "poi" === d[3] && d.length > 5 && ("f" === d[5] ? f.from = d[4] : "t" === d[5] ? f.to = d[4] : (f.from = d[5], f.to = d[4])), f = e({}, f, {
									lang: d[2]
								}))), k = f.lang || a.lang, l = null, (!this.state.user.localeId || !this.state.user.locale) && (k ? (l = k, V.log("Reading locale id from URL", l)) : this.$cookies.get(G.AppStorageKeys.LOCALE_ID) ? (l = this.$cookies.get(G.AppStorageKeys.LOCALE_ID), V.log("Reading locale id from localStorage", l)) : (m = window.navigator, n = m.languages, (l = n && n[0] || m.userLanguage || m.language) || (l = this.state.customer.defaultLocaleId, V.log("Setting locale id by customer id. " + this.state.customer.id + " --\x3e " + l))), l)) try {
								this.state.user.locale = K.getById(l), this.state.user.localeId = this.state.user.locale.id
							} catch (a) {
								this.state.user.locale = K.getById("en"), this.state.user.localeId = "en"
							}
							return a.metroId && parseInt(a.metroId) ? o = parseInt(a.metroId) : f.metroId && parseInt(f.metroId) && (o = parseInt(f.metroId)), o ? this.state.user.metroId = o : this.localStorageService.get(G.AppStorageKeys.METRO_ID).then(function (a) {
								return i(p, void 0, void 0, function () {
									var b;
									return j(this, function (c) {
										return b = parseInt(a), b && (this.state.user.metroId = b), [2]
									})
								})
							}), this.state.customer && this.state.customer.designConfiguration && this.state.customer.designConfiguration.hideSideNav ? this.state.sideNavigation.state = $.Hidden : this.localStorageService.get(G.AppStorageKeys.SIDE_NAVIGATION_STATE).then(function (a) {
								a && (p.state.sideNavigation.state = parseInt(a))
							}), [2]
						})
					})
				}, b.prototype.loadRoute = function () {
					return V.remote("loadRoute"), this.$q.when(this.state.tripPlan.route)
				}, b.prototype.loadTripPlan = function () {
					var a = this;
					return V.remote("loadTripPlan"), this.ensureStateLoadedFromUrl(!1).then(function () {
						return a.state.tripPlan
					})
				}, b.prototype.loadLineGroup = function () {
					var a = this;
					return V.remote("loadLineGroup"), this.ensureStateLoadedFromUrl(!1).then(function () {
						return a.state.lines
					})
				}, b.prototype.loadAlerts = function () {
					var a = this;
					return V.remote("loadAlerts"), this.ensureStateLoadedFromUrl(!1).then(function () {
						return a.state.alerts
					})
				}, b.prototype.getLineUrl = function (a, b, c, d, e, f, g, h) {
					var i = h ? "" : "https://moovitapp.com",
						j = i + "/" + a + "-" + b + "/" + u.Routes.lines.name;
					return c && d && (j += "/" + encodeURIComponent(c) + "/" + d), e && (j += "/" + e), f && (j += "/" + f), j + (g ? "?epochDay=" + g : "")
				}, b.prototype.setCanonicalUrl = function (a) {
					var b = this.getLineUrl(a.metroSeoName, a.metroId, a.lineShortName, a.lgid, a.lid, a.lang);
					this.seoMetaService.setCanonicalUrl(b)
				}, b.prototype.changeLocation = function (a, b, c, d, e) {
					var f = this;
					V.remote("changeLocation", a, q.locationCloneForLogging(b)), b = b ? JSON.parse(JSON.stringify(b)) : b;
					var g = {};
					if (g[B.FromTo.From] = this.state.tripPlan.from, g[B.FromTo.To] = this.state.tripPlan.to, g[a] == b) return void V.remote("no change in location");
					d ? b.name = this.$translate.instant("current_location") : b && !b.name && (b.name = this.$translate.instant("map_tapped_location"));
					var h = this.$q.when(b);
					b && (b.inaccurateSearchTerm && (h = this.refineLocationAccuracy(b)), this.analyticsService.trackLocationAccuracy((!b.inaccurateSearchTerm).toString())), h.then(function (b) {
						a == B.FromTo.From ? f.state.tripPlan.from = b : f.state.tripPlan.to = b, f.raiseQueryChangedEvent(!1, c, d, !e), f.searchRoutes()
					})
				}, b.prototype.refineLocationAccuracy = function (a) {
					var b = this;
					return this.$q(function (c, d) {
						a.inaccurateSearchTerm && b.searchService.refineInaccurate(a.inaccurateSearchTerm, a.latlng).then(function (d) {
							d || (d = a.latlng, b.analyticsService.trackLocationAccuracy("Refining error: " + a.inaccurateSearchTerm + " - " + a.latlng.lat + "," + a.latlng.lng)), !d.lat && d.latitude && (d = s.LatLngHelpers.fromMvLatLon(d), b.analyticsService.trackLocationAccuracy("Refined")), a.latlng = d, c(a)
						})
					})
				}, b.prototype.changeItinerary = function (a, b) {
					var c = this;
					V.remote("changeItinerary", a);
					var d = function () {
						c.state.hasError = !0, c.state.error = {
							title: c.$translate.instant("UnexpectedErrorTitle"),
							text: c.$translate.instant("tripplan_itinerary_share_timeout_message"),
							code: -1,
							image: void 0
						}
					};
					return this.tripPlanService.getItineraryByShareId(a).then(function (e) {
						if (!e) return V.error("Itinerary id couldn't be found: " + a), d(), c.$q.when(0);
						try {
							var f = e.originalRequest.fromLocation.location.caption,
								g = s.LatLngHelpers.fromMvLatLon(e.originalRequest.fromLocation.location.latlon),
								h = e.originalRequest.toLocation.location.caption,
								i = s.LatLngHelpers.fromMvLatLon(e.originalRequest.toLocation.location.latlon);
							if (e.supplementalData) return c.$q.all([c.imageService.syncLineGroupSummariesImageData(e.supplementalData.lineGroupSummaryList), c.imageService.syncStopsImageData(e.supplementalData.mVStopSyncedMetaDataList), c.changeLocations(f, g, h, i, b)]).then(function () {
								e.supplementalData.mVStopSyncedMetaDataList && (c.state.tripPlan.route = p.convertMVTripPlannerItineraryToSuggestedRoute(c.state.tripPlan.from, c.state.tripPlan.to, e.itinerary, e.supplementalData, c.alertsService, c.imageService, c.metroService, c.$translate), c.state.tripPlan.route.isShared = !0)
							}).catch(function (a) {
								V.error(a), d()
							});
							d()
						} catch (a) {
							return d(), c.$q.when(0)
						}
					}, function (a) {
						return d(), c.$q.when(0)
					})
				}, b.prototype.getStopLocation = function (a) {
					return this.tripPlanService.getStopById(a)
				}, b.prototype.changeLocations = function (a, b, c, d, e) {
					var f = this;
					V.remote("changeLocations", a, b, c, d), this.state.tripPlan.from && s.LatLngHelpers.equals(this.state.tripPlan.from.latlng, b) && this.state.tripPlan.to && s.LatLngHelpers.equals(this.state.tripPlan.to.latlng, d) || this.cancelRTTimer();
					var g = !0;
					a != this.$translate.instant("map_tapped_location") && a != this.$translate.instant("current_location") || (g = !1);
					var h = !0;
					c != this.$translate.instant("map_tapped_location") && c != this.$translate.instant("current_location") || (h = !1);
					var i = this.state.tripPlan.from && this.state.tripPlan.from.name,
						j = this.state.tripPlan.from && this.state.tripPlan.from.latlng,
						k = this.state.tripPlan.to && this.state.tripPlan.to.name,
						l = this.state.tripPlan.to && this.state.tripPlan.to.latlng;
					if (a == i && s.LatLngHelpers.equals(b, j) && c == k && s.LatLngHelpers.equals(d, l)) return V.remote("Requested locations are the same as current ones. Nothing to do"), this.$q.when(!1);
					var m = this.$q.when(null),
						n = this.$q.when(null);
					return a && g && b ? m = this.searchService.findAddress(b).then(function (c) {
						return 0 == c.id && (c.latLon = s.LatLngHelpers.toMvLatLon(b), c.title = a), f.findAddressCallback(c)
					}) : a && g ? m && (m = this.searchService.search(a).then(function (a) {
						return a.results.length ? p.convertMVSearchResponseItem2TripPlanLocation(a.results[0], f.imageService) : null
					})) : b && (m = this.searchService.findAddress(b).then(function (c) {
						return 0 == c.id && (c.latLon = s.LatLngHelpers.toMvLatLon(b), c.title = a), f.findAddressCallback(c)
					})), c && h && d ? n = this.searchService.findAddress(d).then(function (a) {
						return 0 == a.id && (a.latLon = s.LatLngHelpers.toMvLatLon(d), a.title = c), f.findAddressCallback(a)
					}) : c && h ? n = this.searchService.search(c).then(function (a) {
						return a.results.length ? p.convertMVSearchResponseItem2TripPlanLocation(a.results[0], f.imageService) : null
					}) : d && (n = this.searchService.findAddress(d).then(function (a) {
						return 0 == a.id && (a.latLon = s.LatLngHelpers.toMvLatLon(d), a.title = c), f.findAddressCallback(a)
					})), this.$q.all([m, n]).then(function (a) {
						var b = f.$q.when(a[0]),
							c = f.$q.when(a[1]);
						a[0] && a[0].inaccurateSearchTerm && (b = f.refineLocationAccuracy(a[0])), a[1] && a[1].inaccurateSearchTerm && (c = f.refineLocationAccuracy(a[1])), f.$q.all([b, c]).then(function (a) {
							f.state.tripPlan.from = a[0], f.state.tripPlan.to = a[1], f.state.tripPlan.from && !f.state.tripPlan.from.name && (f.state.tripPlan.from.name = f.$translate.instant("map_tapped_location")), f.state.tripPlan.to && !f.state.tripPlan.to.name && (f.state.tripPlan.to.name = f.$translate.instant("map_tapped_location")), V.log("  changeLocations: finished loading locations from server"), V.log("    from", f.state.tripPlan.from), V.log("    to", f.state.tripPlan.to), f.raiseQueryChangedEvent(!1, !1, !1, !e), f.searchRoutes()
						})
					})
				}, b.prototype.findAddressCallback = function (a) {
					return a ? p.convertMVSearchResponseItem2TripPlanLocation(a, this.imageService) : null
				}, b.prototype.changeRoutePriority = function (a) {
					this.state.tripPlan.routePriority = a
				}, b.prototype.searchRoutes = function () {
					var a = this;
					if (V.remote("searchRoutes"), this.alertsService.getMetroAlerts(), this.state.hasError = !1, this.state.tripPlan.routes.length > 0 && (this.state.tripPlan.routes = []), this.state.tripPlan.route && (this.state.tripPlan.route = null, k.events.raise(o.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, {}, V)), !this.state.tripPlan.from || !this.state.tripPlan.to) return void V.log("From or to are empty. Cancelling search operation");
					if (!this.state.tripPlan.time) return V.log("  Time is empty. Cancelling search operation"), void(this.state.hasError = !0);
					if (!this.state.tripPlan.routePriority) return V.log("  routePriority is empty. Cancelling search operation"), void(this.state.hasError = !0);
					if (!this.state.tripPlan.routeTypes || 0 == this.state.tripPlan.routeTypes.length) return V.log("  routeTypes is empty. Cancelling search operation"), void(this.state.hasError = !0);
					V.log("  From", this.state.tripPlan.from && this.state.tripPlan.from.name), V.log("  To", this.state.tripPlan.to && this.state.tripPlan.to.name), V.log("  Route priority", this.state.tripPlan.routePriority), V.log("  Route type", this.state.tripPlan.routeTypes), V.log("  when:", this.state.tripPlan.time.when), V.log("  refPoint", this.state.tripPlan.time.refPoint), n.events.raise(o.AppEvents.TRIPPLAN_SEARCH_ROUTES_BEGIN, {}, V);
					var b = function (b) {
							0 != b.length && (b.map(function (b) {
								b.result && b.result.tripPlanSections && b.result.tripPlanSections.tripPlanSections.map(function (b) {
									a.state.tripPlan.sections.find(function (a) {
										if (a.sectionId == b.sectionId) return !0
									}) || a.state.tripPlan.sections.push({
										name: b.name,
										sectionId: b.sectionId,
										sectionType: b.sectionType,
										maxItemsToDisplay: b.maxItemsToDisplay,
										routes: []
									})
								})
							}), a.arrangeTripPlanSections(b), k.events.raise(o.AppEvents.TRIPPLAN_SEARCH_ROUTES_MORE, {}, V))
						},
						c = this;
					return this.tripPlanService.search(this.state.tripPlan.from, this.state.tripPlan.to, this.state.tripPlan.routePriority, this.state.tripPlan.time, this.state.tripPlan.routeTypes, this.state.tripPlan.multiModal).then(function (d) {
						V.log("Got more " + d.length + " routes"), c.cancelRTTimer(), b(d);
						var e = [];
						c.state.tripPlan.routes.forEach(function (a) {
							a.legs.forEach(function (a) {
								a.waitToMultiLineLeg && a.waitToMultiLineLeg.alternatives.forEach(function (b) {
									e.find(function (c) {
										return c.lineId == b.waitToLineId && c.stopId == a.waitToMultiLineLeg.waitAtStopId
									}) || e.push({
										lineId: b.waitToLineId,
										stopId: a.waitToMultiLineLeg.waitAtStopId
									})
								})
							})
						});
						var f = function () {
							if (a.cancelRTTimer(), void 0 !== requestAnimationFrame) var b = requestAnimationFrame(function () {
								var d = (new Date).valueOf();
								(!a.lastRTFetch || d > a.lastRTFetch + a.REAL_TIME_REFRESH_DELAY_MS) && (cancelAnimationFrame(b), a.lastRTFetch = (new Date).valueOf(), a.tripPlanService.refreshRealTime(e).then(function (b) {
									if (b) {
										p.updateRealTimeInRoutes(c.state.tripPlan.routes, b, a.$translate, a.metroService);
										var e = d - 36e5;
										if (!c.state.tripPlan.routes.find(function (a) {
												return e < a.endTime.valueOf()
											})) return void V.info("All routes are over, disabling realtime")
									}
									a.reloadRTInterval = a.$interval(function () {
										f()
									}, a.REAL_TIME_REFRESH_DELAY_MS)
								}))
							})
						};
						return e.length > 0 && (a.reloadRTInterval = a.$interval(function () {
							f()
						}, 0)), a.state.tripPlan.routes
					}, function (b) {
						return "stale-request" != b && (a.state.hasError = !0, a.state.error = b), []
					}, function (a) {
						b(a)
					}).finally(function () {
						V.log("Got total " + a.state.tripPlan.routes.length + " routes !!"), k.events.raise(o.AppEvents.TRIPPLAN_SEARCH_ROUTES_END, {}, V)
					})
				}, b.prototype.arrangeTripPlanSections = function (a) {
					var b = this,
						c = {};
					this.state.tripPlan.sections.forEach(function (a) {
						c[a.sectionId] = a
					}), a.forEach(function (a) {
						if (a.result && a.result.itinerary) {
							var d = c[a.result.itinerary.sectionId];
							if (d && (d.maxItemsToDisplay > d.routes.length || !d.maxItemsToDisplay)) {
								var e = p.convertMVTripPlannerItineraryToSuggestedRoute(b.state.tripPlan.from, b.state.tripPlan.to, a.result.itinerary, a.supplementalData, b.alertsService, b.imageService, b.metroService, b.$translate);
								d.routes.push(e), b.state.tripPlan.routes.push(e)
							}
						}
					});
					var d = [],
						e = !1;
					this.state.tripPlan.sections.forEach(function (a) {
						for (var b = !1, c = 0; c < a.routes.length; c++) {
							var f = a.routes[c];
							if (2 == f.steps.length && f.steps[1].type == q.SuggestedRouteStepType.WalkTo && f.steps[1].extra.distanceInMeters < 1300) {
								d.splice(0, 0, a), b = !0, e = !0;
								break
							}
						}
						b || d.push(a)
					}), e && (this.state.tripPlan.sections = d)
				}, b.prototype.cancelRTTimer = function () {
					this.reloadRTInterval && (this.$interval.cancel(this.reloadRTInterval), this.reloadRTInterval = null)
				}, b.prototype.updateGeoLocation = function (a) {
					var b = this;
					try {
						this.localStorageService.set(G.AppStorageKeys.USE_MY_LOCATION, "true")
					} catch (a) {
						V.info("failed to set local storage for " + G.AppStorageKeys.USE_MY_LOCATION)
					}
					return this.userProfileService.userState.useMyLocation = !0, this.metroService.getGeolocationPosition().then(function (c) {
						var d = {
							lat: c.coords.latitude,
							lng: c.coords.longitude
						};
						b.searchForLocation(a, d, !1, !0)
					})
				}, b.prototype.selectRoute = function (a, b, c) {
					V.log("selectRoute", a, b), void 0 !== c && !1 !== c || (this.state.tripPlan.similarRouteIndex = 0, this.state.tripPlan.originalRoute = a), this.state.tripPlan.route = a, n.events.raise(o.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, {
						route: a
					}, V), b && this.gotoRouteSteps()
				}, b.prototype.updateRoute = function (a) {
					V.log("updateRoute", a), n.events.raise(o.AppEvents.TRIPPLAN_SELECTED_ROUTE_CHANGED, {
						route: a
					}, V)
				}, b.prototype.toggleLocations = function () {
					if (V.remote("toggleLocations"), !this.state.tripPlan.from && !this.state.tripPlan.to) return void V.log("    Nothing to toggle");
					var a = this.state.tripPlan.from;
					this.state.tripPlan.from = this.state.tripPlan.to, this.state.tripPlan.to = a, this.raiseQueryChangedEvent(!0, !1, !1, !0), this.searchRoutes()
				}, b.prototype.gotoOriginalState = function () {
					V.log("gotoOriginalState"), this.appProfileService.isMobile && this.$state.go(this.state.originalState, this.state.originalStateParams)
				}, b.prototype.gotoRouteSteps = function () {
					V.log("gotoRouteSteps"), n.events.raise(o.AppEvents.SHOW_ROUTE_STEPS, {
						route: this.state.tripPlan.route
					}, V)
				}, b.prototype.gotoTripPlan = function () {
					V.log("gotoTripPlan"), this.appProfileService.isMobile && this.$state.go(u.Routes.tripPlan.name, this.$stateParams, e({}, this.$stateParams, {
						metroSeoName: this.state.user.metroSeoName,
						metroId: this.state.user.metroId
					}))
				}, b.prototype.gotoItinerary = function () {
					V.log("gotoItinerary"), this.appProfileService.isMobile && this.$state.go(u.Routes.itinerary.name, this.$stateParams)
				}, b.prototype.gotoLines = function () {
					V.log("gotoLines"), this.appProfileService.isMobile && this.$state.go(u.Routes.lines.name, e({}, this.$stateParams, {
						metroSeoName: this.state.user.metroSeoName,
						metroId: this.state.user.metroId
					}))
				}, b.prototype.gotoAlerts = function () {
					V.log("gotoAlerts"), this.appProfileService.isMobile && this.$state.go(u.Routes.alerts.name, this.$stateParams)
				}, b.prototype.gotoLineGroupStops = function () {
					V.log("gotoLineGroupStops"), this.appProfileService.isMobile && this.$state.go(u.Routes.lineGroupStops.name, this.$stateParams, {
						location: !1
					})
				}, b.prototype.gotoMapLineView = function () {
					V.log("gotoMapLineView"), this.appProfileService.isMobile && this.$state.go(u.Routes.mapLineView.name, this.$stateParams, {
						location: !1
					})
				}, b.prototype.gotoMapView = function () {
					V.log("gotoMapView"), this.appProfileService.isMobile && this.$state.go(u.Routes.mapView.name, this.$stateParams, {
						location: !1
					})
				}, b.prototype.gotoDetailsView = function () {
					V.log("gotoDetailsView"), this.appProfileService.isMobile && this.$state.go(u.Routes.itinerary.name, this.$stateParams)
				}, b.prototype.gotoSplashView = function () {
					var a = this;
					V.log("gotoSpalshView"), this.appProfileService.isMobile && (this.state.originalStateParams.sid || this.state.originalStateParams.tsid || this.state.originalStateParams.fsid ? this.userProfileService.ensureInit().then(function () {
						a.ensureStateLoadedFromUrl(!1).then(function () {
							a.$state.go(u.Routes.splash.name, a.$stateParams), a.state.uiReady = !0
						}, function () {
							a.$state.go(u.Routes.splash.name, a.$stateParams), a.state.uiReady = !0
						})
					}, function () {
						a.$state.go(u.Routes.splash.name, a.$stateParams), a.state.uiReady = !0
					}) : (this.$state.go(u.Routes.splash.name, this.$stateParams), this.state.uiReady = !0))
				}, b.prototype.isOnItineraryView = function () {
					return !(!this.appProfileService.isMobile || this.$state.current.name !== u.Routes.itinerary.name)
				}, b.prototype.isOnMapView = function () {
					return !(!this.appProfileService.isMobile || this.$state.current.name !== u.Routes.mapView.name)
				}, b.prototype.gotoSettingsView = function (a) {
					var b = this;
					return V.log("gotoSettingsView"), M.loadModule("app/settings").then(function () {
						b.appProfileService.isMobile ? b.$state.go(u.Routes.settings.name, b.$stateParams) : b.dialogService.popup("settings-popup", a)
					})
				}, b.prototype.gotoLangSelectorView = function (a) {
					this.appProfileService.isMobile ? this.$state.go(u.Routes.language.name, this.$stateParams) : this.dialogService.popup("change-lang-popup", a, ["app/settings"])
				}, b.prototype.gotoMetroSelectorView = function () {
					this.$state.go(u.Routes.metro.name, this.$stateParams)
				}, b.prototype.changeTripPlanTime = function (a) {
					this.logger.remote("changeTripPlanTime"), this.state.tripPlan.time = a
				}, b.prototype.changeTripPlanRouteTypes = function (a) {
					V.log("changeTripPlanRouteTypes"), this.state.tripPlan.routeTypes = a
				}, b.prototype.changeLineGroup = function (a, b, c, d, e, f, g, h, i) {
					this.logger.remote("changeLineGroup"), this.state.lines.lineGroupId = a, this.state.lines.lineId = b, this.state.lines.stopId = c, this.state.lines.epochDay = d, this.state.lines.lineSearch = e, this.state.lines.metroId = g, this.state.lines.metroSeoName = h, this.state.lines.lang = i, this.state.lines.lineShortName = f
				}, b.prototype.changeAlerts = function (a) {
					this.logger.remote("changeAlerts"), this.state.alerts.alertIds = a
				}, b.prototype.changeMultiModal = function (a) {
					this.logger.remote("changeMultiModal"), this.state.tripPlan.multiModal = a
				}, b.prototype.mapClicked = function (a) {
					V.log("mapClicked");
					var b;
					if (this.state.tripPlan.from) {
						if (this.state.tripPlan.to) return this.$q.when();
						b = B.FromTo.To
					} else b = B.FromTo.From;
					return this.searchForLocation(b, a, !0, !1)
				}, b.prototype.useCurrentLocation = function (a, b) {
					var c = this;
					return void 0 === b && (b = !0), this.logger.log("useCurrentLocation:", a), this.analyticsService.trackUseCurrentLocation(), b ? this.metroService.getMetroIdByGeolocation().then(function (b) {
						var d = b.id;
						return c.analyticsService.trackUseCurrentLocationPopup(!0), c.userProfileService.changeMetro(d, !1).then(function () {
							return c.updateGeoLocation(a)
						})
					}).catch(function (a) {
						if (c.state.hasError = !0, c.state.error = {
								code: 0,
								title: "",
								text: c.$translate.instant("location_services_unavailable_message"),
								image: void 0
							}, V.error(a), 1 != a.code) throw c.analyticsService.trackUseCurrentLocationFailed(a.code), a;
						c.analyticsService.trackUseCurrentLocationPopup(!1), n.events.raise(o.AppEvents.TRIPPLAN_USE_CURRENT_LOCATION_FAILED, a.code)
					}) : this.updateGeoLocation(a)
				}, b.prototype.searchForLocation = function (a, b, c, d) {
					var e = this;
					V.remote("searchForLocation");
					var f = {
						fromTo: a,
						latlng: b
					};
					return k.events.raise(o.AppEvents.TRIPPLAN_SEARCH_LOCATION_BEGIN, f, V), this.searchService.findAddress(b).then(function (f) {
						if (f) {
							V.log("searchService.findAddress completed with", f);
							var g = p.convertMVSearchResponseItem2TripPlanLocation(f, e.imageService);
							g || (g = {
								name: e.$translate.instant("map_tapped_location"),
								address: null,
								fullName: e.$translate.instant("map_tapped_location"),
								latlng: b,
								type: MVSearchResultType.GEOCODE.toString(),
								imageHtml: null,
								inaccurateSearchTerm: null
							}), e.changeLocation(a, g, c, d, !1)
						}
					}).catch(function (a) {
						throw e.state.hasError = !0, e.state.error = a, a
					}).finally(function () {
						k.events.raise(o.AppEvents.TRIPPLAN_SEARCH_LOCATION_END, f, V)
					})
				}, b.prototype.verifyInstallAppBannerExpiration = function () {
					var a = this;
					V.log("verifyInstallAppBannerExpiration"), this.localStorageService.get(G.AppStorageKeys.HIDE_INSTALL_APP_BANNER).then(function (b) {
						if (b && b.timestamp) {
							var c = Q.duration(Q.utc().diff(Q.utc(b.timestamp))).asDays();
							b.bannerHidden && c > a.APP_BANNER_EXPIRATION_DAYS ? a.setInstallAppBannerFlag(!0) : a.state.isInstallAppBannerVisible = !1
						} else a.state.isInstallAppBannerVisible = !0
					})
				}, b.prototype.setInstallAppBannerFlag = function (a) {
					V.log("setInstallAppBannerFlag");
					var b = {
						bannerHidden: !a,
						timestamp: Q.utc().format()
					};
					this.state.isInstallAppBannerVisible = a;
					try {
						this.localStorageService.set(G.AppStorageKeys.HIDE_INSTALL_APP_BANNER, JSON.stringify(b))
					} catch (a) {
						V.info("failed to set local storage for " + G.AppStorageKeys.HIDE_INSTALL_APP_BANNER)
					}
				}, b.prototype.selectStep = function (a, b) {
					void 0 === b && (b = !1), this.state.tripPlan.step = a, b && (this.state.alerts.alertEntities = a.alerts.entities.map(function (a) {
						return a.entityIdentifier
					})), k.events.raise(o.AppEvents.TRIPPLAN_STEP_SELECTED, {
						step: a,
						isAlert: b
					}, V)
				}, b.prototype.showStopArrivals = function (a) {
					this.state.tripPlan.step = a, k.events.raise(o.AppEvents.TRIPPLAN_STEP_SELECTED, {
						step: a,
						isStopArrival: !0
					}, V)
				}, b.prototype.selectLineGroup = function (a) {
					k.events.raise(o.AppEvents.LINE_GROUP_SELECTED, {
						lineGroupId: a.lineGroupId,
						lineId: a.lineId,
						stopId: a.stopId,
						epochDay: a.epochDay,
						metroSeoName: this.state.user.metroSeoName,
						metroId: this.state.user.metroId
					}, V)
				}, b.prototype.viewLineStop = function (a, b, c, d, e) {
					k.events.raise(o.AppEvents.LINE_STOP_VIEW, {
						stopId: c.id,
						patternStops: d,
						lines: b,
						lineGroup: a,
						epochDay: e
					}, V)
				}, b.prototype.setMetaValues = function (a, b, c) {
					this.seoMetaService.setMetaValues(a, b, c)
				}, b.prototype.onUrlChanged = function (a) {
					if (V.remote("onUrlChanged"), !this.state.appReady) return void this.logger.log("App is not ready yet. Ignoring onUrlChange");
					a && a.newState && a.newState.name && a.newState.name == u.Routes.itinerary.name || (this.state.loadedFromUrl = null, this.ensureStateLoadedFromUrl(!0))
				}, b.prototype.loadRouteTypesFromUrl = function () {
					var a = this;
					V.remote("loadRouteTypesFromUrl"), this.userProfileService.ensureInit().then(function () {
						var b, c = a.$stateParams.routeTypes;
						b = c ? q.RouteType.parseRouteTypesFromString(c, a.state.user.metro.supportedRouteTypes) : a.state.user.metro.supportedRouteTypes, V.log("Route types from url");
						for (var d = 0, e = b; d < e.length; d++) {
							var f = e[d];
							V.log("    " + f.name)
						}
						a.changeTripPlanRouteTypes(b)
					})
				}, b.prototype.loadLocationsFromUrl = function (a) {
					var b = this;
					V.remote("loadLocationsFromUrl:", this.$stateParams);
					var c = this.$stateParams.from || null,
						d = this.$stateParams.to || null,
						e = s.LatLngHelpers.parse(this.$stateParams.fll || null),
						f = s.LatLngHelpers.parse(this.$stateParams.tll || null),
						g = this.featureFlags.STOP_BY_ID && this.$stateParams.fsid || null,
						h = this.featureFlags.STOP_BY_ID && this.$stateParams.tsid || null;
					this.$stateParams.fsid = null, this.$stateParams.tsid = null;
					var i = this.$stateParams.itid || null;
					if (i) return this.changeItinerary(i, a);
					var j = void 0,
						k = void 0;
					return j = c || e || !g ? "current_location" === c ? this.useCurrentLocation(B.FromTo.From) : this.$q.when(0) : this.getStopLocation(g).then(function (a) {
						a && (c = a.stopName, e = s.LatLngHelpers.fromMvLatLon(a.stopLocation))
					}), k = !f && h ? this.getStopLocation(h).then(function (a) {
						a && (d = a.stopName, f = s.LatLngHelpers.fromMvLatLon(a.stopLocation))
					}) : this.$q.when(0), this.$q.all([j, k]).then(function (g) {
						return b.changeLocations(c, e, d, f, a)
					})
				}, b.prototype.loadTimeFromUrl = function () {
					V.remote("loadTimeFromUrl");
					var a = this.$stateParams.timeType,
						b = this.$stateParams.time,
						c = {
							refPoint: q.RefPoint.LeaveNow,
							when: new Date
						},
						d = null;
					if (parseInt(b) == b) {
						d = p.fromServerTime(parseInt(b));
						var e = Q().startOf("day"),
							f = Q(d).startOf("day"),
							g = (f.diff(e), f.diff(e, "days"));
						(g < 0 || g > 7) && (d = null)
					}
					return "depart" != a && "arrive" != a || !d ? "last" == a && (c.refPoint = q.RefPoint.Last) : (c.when = d, c.refPoint = "depart" == a ? q.RefPoint.Depart : q.RefPoint.Arrive), this.changeTripPlanTime(c), this.$q.when()
				}, b.prototype.loadLinesFromUrl = function () {
					return i(this, void 0, void 0, function () {
						var a, b, c, d, e, f, g, h, i;
						return j(this, function (j) {
							switch (j.label) {
								case 0:
									return V.remote("loadLinesFromUrl:", this.$stateParams), (a = this.$stateParams.lgid || null, b = this.$stateParams.lid || null, c = this.$stateParams.sid || null, d = this.$stateParams.epochDay || null, e = this.$stateParams.query || null, f = this.$stateParams.metroId || null, g = this.$stateParams.lang || null, h = this.$stateParams.lineShortName || null, this.$stateParams.metroSeoName) ? (i = this.$stateParams.metroSeoName, [3, 3]) : [3, 1];
								case 1:
									return [4, this.metroService.getMetroSeoName(f)];
								case 2:
									i = j.sent(), j.label = 3;
								case 3:
									return this.changeLineGroup(a, b, c, d, e, h, f, i, g), [2]
							}
						})
					})
				}, b.prototype.loadAlertsFromUrl = function () {
					V.remote("loadAlertsFromUrl:", this.$stateParams);
					var a = this.$stateParams.alertIds || null;
					return a && "string" == typeof a && (a = a.split(",")), this.changeAlerts(a), this.$q.when()
				}, b.prototype.loadMultiModalFromUrl = function () {
					V.remote("loadMultiModalFromUrl:", this.$stateParams);
					var a = "true" === this.$stateParams.multiModal;
					return this.changeMultiModal(a), this.$q.when()
				}, b.prototype.getLineRouteByStateParams = function (a) {
					var b = a ? a.lgid : this.state.lines.lineGroupId,
						c = a ? a.lid : this.state.lines.lineId,
						d = a ? a.lang : this.userProfileService.localeId;
					return b && c && d ? u.Routes.lineLang : b && c ? u.Routes.line : b ? u.Routes.lineGroup : d ? u.Routes.linesLang : u.Routes.lines
				}, b.prototype.getTripPlanRouteByStateParams = function () {
					var a = this.state.tripPlan.to ? this.state.tripPlan.to.name : null,
						b = this.state.tripPlan.from ? this.state.tripPlan.from.name : null;
					return a && b ? u.Routes.poiToPoi : a ? u.Routes.toPoi : b ? u.Routes.fromPoi : u.Routes.tripPlan
				}, b.prototype.saveStateToUrl = function (a, b) {
					void 0 === a && (a = !0), void 0 === b && (b = !0), V.remote("saveStateToUrl");
					var c = {},
						d = this.$state.current;
					switch (this.$state.current.name) {
						case u.Routes.directions.name:
						case u.Routes.tripPlan.name:
						case u.Routes.toPoi.name:
						case u.Routes.fromPoi.name:
						case u.Routes.poiToPoi.name:
						case u.Routes.itinerary.name:
						case u.Routes.mapView.name:
							c = {
								from: void 0,
								fll: void 0,
								to: void 0,
								tll: void 0,
								routeTypes: void 0,
								metroId: this.userProfileService.metroId,
								metroSeoName: this.state.user.metroSeoName,
								lang: this.userProfileService.localeId,
								timeType: void 0,
								time: void 0,
								itid: void 0,
								action: void 0,
								multiModal: void 0,
								customerId: this.$stateParams.customerId
							}, this.state.tripPlan.from && (c.from = this.state.tripPlan.from.name, c.fll = s.LatLngHelpers.toString(this.state.tripPlan.from.latlng)), this.state.tripPlan.to && (c.to = this.state.tripPlan.to.name, c.tll = s.LatLngHelpers.toString(this.state.tripPlan.to.latlng)), this.state.tripPlan.time && this.state.tripPlan.time.refPoint != q.RefPoint.LeaveNow && (this.state.tripPlan.time.refPoint == q.RefPoint.Last ? c.timeType = "last" : (c.time = p.serverTimeOf(this.state.tripPlan.time.when), c.timeType = this.state.tripPlan.time.refPoint == q.RefPoint.Arrive ? "arrive" : "depart")), q.RouteType.equals(this.state.user.metro.supportedRouteTypes, this.state.tripPlan.routeTypes) || (c.routeTypes = this.state.tripPlan.routeTypes.map(function (a) {
								return a.name
							}).join()), this.state.tripPlan.multiModal && (c.multiModal = this.state.tripPlan.multiModal), d = this.getTripPlanRouteByStateParams();
							break;
						case u.Routes.lineLang.name:
						case u.Routes.line.name:
						case u.Routes.lineGroup.name:
						case u.Routes.linesLang.name:
						case u.Routes.lines.name:
						case u.Routes.lineGroupStops.name:
						case u.Routes.mapLineView.name:
						case u.Routes.lineStopArrivals.name:
							c = {
								lgid: void 0,
								lid: void 0,
								lineShortName: void 0,
								sid: void 0,
								epochDay: void 0,
								customerId: this.$stateParams.customerId,
								metroId: this.state.user.metroId,
								metroSeoName: this.state.user.metroSeoName,
								lang: this.userProfileService.localeId
							}, this.state.lines.lineGroupId && (c.lgid = this.state.lines.lineGroupId), this.state.lines.lineId && (c.lid = this.state.lines.lineId), this.state.lines.lineShortName && (c.lineShortName = this.state.lines.lineShortName), this.state.lines.stopId && (c.sid = this.state.lines.stopId), this.state.lines.epochDay && (c.epochDay = this.state.lines.epochDay), this.setCanonicalUrl(c), this.appProfileService.isMobile || this.$state.current.name === u.Routes.lineGroupStops.name || (d = this.getLineRouteByStateParams());
							break;
						case u.Routes.alerts.name:
						case u.Routes.alertDetails.name:
							c = {
								alertIds: void 0,
								customerId: this.$stateParams.customerId,
								metroId: this.userProfileService.metroId,
								lang: this.userProfileService.localeId
							}, this.state.alerts.alertIds && (c.alertIds = this.state.alerts.alertIds)
					}
					c.utm_medium = this.$stateParams.utm_medium, c.utm_source = this.$stateParams.utm_source, c.forceAbVariant = this.$stateParams.forceAbVariant;
					var e = this.showSplashScreen() ? u.Routes.splash.name : d.name,
						f = {};
					a || (f.location = "replace"), f.notify = b, this.$state.go(e, c, f), this.seoMetaService.setMetaData()
				}, b.prototype.ensureStateLoadedFromUrl = function (a) {
					return V.remote("ensureStateLoadedFromUrl"), this.state.loadedFromUrl ? V.remote("There is already a pending request for loading state from URL. Reuse it") : this.state.loadedFromUrl = this.$q.all([this.loadRouteTypesFromUrl(), this.loadLocationsFromUrl(a), this.loadTimeFromUrl(), this.loadLinesFromUrl(), this.loadAlertsFromUrl(), this.loadMultiModalFromUrl()]), this.state.loadedFromUrl
				}, b.prototype.raiseQueryChangedEvent = function (a, b, c, d) {
					var e = this;
					V.remote("raiseQueryChangedEvent");
					var f = {
						from: this.state.tripPlan.from,
						to: this.state.tripPlan.to,
						isToggling: a,
						isPinning: b,
						isUseCurrentLocation: c
					};
					n.events.raise(o.AppEvents.TRIPPLAN_QUERY_CHANGED, f, V), d && this.userProfileService.ensureInit().then(function () {
						e.saveStateToUrl(!0, !e.state.originalStateParams.itid)
					})
				}, b.prototype.getAppleStoreLink = function () {
					return Y.getStoreLink(this.analyticsService, this.state, this.$state.current, X.iOS)
				}, b.prototype.getGooglePlayLink = function () {
					return Y.getStoreLink(this.analyticsService, this.state, this.$state.current, X.Android)
				}, b.prototype.trackAppleStoreClick = function (a, b, c) {
					this.trackStoreClick(a, b, X.iOS, c)
				}, b.prototype.trackGooglePlayClick = function (a, b, c) {
					this.trackStoreClick(a, b, X.Android, c)
				}, b.prototype.trackStoreClick = function (a, b, c, d, e) {
					e = e || b, c = null !== c ? c : this.appProfileService.isIOS ? X.iOS : X.Android;
					var f = c == X.Android ? "Google" : "Apple";
					this.analyticsService.trackDownloadApp(f, e), a && a.stopPropagation()
				}, b.prototype.getNewWindowTarget = function () {
					return this.appProfileService.isInIframe ? "_blank" : "_self"
				}, b.prototype.getLocalizesAppUrls = function () {
					var a = this;
					return this.userProfileService.ensureInit().then(function () {
						return a.metroService.getMetroAreaData(a.state.user.metroId).then(function (b) {
							return a.localeService.getLocalizesAppUrls(b.metroAreaData.countryName.replace(/\s/g, "_"))
						})
					})
				}, b.prototype.onMetroChanged = function () {
					V.log("onMetroChanged"), V.log("Reseting from and to locations"), this.state.tripPlan.from = null, this.state.tripPlan.to = null, this.state.alerts.alertIds = [], this.state.alerts.alertEntities = [], this.tripPlanService.clearCurrentRoutes(), this.state.tripPlan.routeTypes = this.state.user.metro.supportedRouteTypes, this.saveStateToUrl()
				}, b.prototype.onLocaleChanged = function () {
					V.log("onLocaleChanged"), this.saveStateToUrl()
				}, b.prototype.changeSideNavigationState = function (a, b) {
					if (V.log("changeSideNavigationState: " + a), this.state.sideNavigation.state = a, void 0 == b || 1 == b) try {
						this.localStorageService.set(G.AppStorageKeys.SIDE_NAVIGATION_STATE, a.toString())
					} catch (a) {
						V.info("failed to set local storage for " + G.AppStorageKeys.SIDE_NAVIGATION_STATE)
					}
					n.events.raise(o.AppEvents.SIDE_NAV_STATE_CHANGED, a, V)
				}, b.prototype.showSplashScreenPopup = function () {
					this.showSplashScreen() ? this.gotoSplashView() : this.state.customer.id == H.Customer.MoovitSeo.id || this.state.customer.designConfiguration.hideCookieBar ? this.state.uiReady = !0 : (this.cookieBarService.initCookieBar(), this.state.uiReady = !0)
				}, b.prototype.showSplashScreen = function () {
					return !!this.appProfileService.isMobile && (!!this.state.isSplashScreenVisible && (this.state.customer.id == H.Customer.MoovitSeo.id || (this.state.origin == I.MoovitOrigin.Widget || !(this.state.customer.id != H.Customer.MoovitWeb.id || this.$stateParams.from || this.$stateParams.to || this.state.isFromSharing))))
				}, b.prototype.dismissSplashScreen = function () {
					try {
						this.sessionStorageService.set(G.AppStorageKeys.IGNORE_SPLASH, "true"), this.analyticsService.trackClickToWebApp(this.appProfileService.isIOS ? "Apple" : "Google"), this.analyticsService.trackDismissSplash()
					} catch (a) {
						V.info("failed to set session storage for " + G.AppStorageKeys.IGNORE_SPLASH)
					}
					this.state.isSplashScreenVisible = !1, this.state.customer.id == H.Customer.MoovitSeo.id || this.state.customer.designConfiguration.hideCookieBar || this.cookieBarService.initCookieBar()
				}, b.prototype.selectSimilarItinerary = function (a) {
					var b = this;
					if (a === q.SimilarItineraryMode.Next ? b.state.tripPlan.similarRouteIndex++ : b.state.tripPlan.similarRouteIndex--, k.events.raise(o.AppEvents.TRIPPLAN_SIMILAR_ROUTE_CHANGED, a, V), 0 == b.state.tripPlan.similarRouteIndex) b.selectRoute(b.state.tripPlan.originalRoute, !1, !1);
					else {
						var c = !0;
						Math.abs(b.state.tripPlan.similarRouteIndex) > 1 && (c = !1), b.tripPlanService.getSimilarItinerary(b.state.tripPlan.route.itineraryGuid, b.state.tripPlan.similarRouteIndex, a, c).then(function (c) {
							if (-1 == c.code || "" == c) return V.log("Got error, response: " + JSON.stringify(c)), void(a == q.SimilarItineraryMode.Next ? b.state.tripPlan.route.hasNext = !1 : b.state.tripPlan.route.hasPrev = !1);
							V.log("Got " + a + " route");
							var d = p.convertMVSimilarItineraryResponseBySectionToSuggestedRoute(c, b.state.tripPlan.route, b.imageService, b.metroService, b.alertsService, b.$translate);
							b.selectRoute(d, !1, !0)
						}, function (a) {
							"stale-request" != a && (b.state.hasError = !0, b.state.error = a)
						}).finally(function () {})
					}
				}, b.translateBackwardCompatibilityParams = function (a) {
					var b = angular.copy(a),
						c = b.currLocation;
					c && (b.from = c, b.currLocation = null);
					var d = b.destination;
					d && (b.to = d, b.destination = null);
					var e = b.langId;
					try {
						var f = P.getByLangId(e);
						f && (b.lang = f.id), b.langId = null
					} catch (a) {
						V.error("No locale found for langId = " + e)
					}
					var g = b.metroAreaId;
					return g && (b.metroId = g, b.metroAreaId = null), b
				}, b.prototype.goBackFromState = function () {
					"function" == typeof this.state.view.back && this.state.view.back()
				}, b.prototype.goBackInHistory = function () {
					history.back()
				}, b.prototype.getStoreOrDeepLink = function (a, b, c) {
					var d = this.appProfileService.isIOS ? X.iOS : X.Android;
					return Y.getStoreLink(this.analyticsService, this.state, this.$state.current, d, null, a, b, c)
				}, b.prototype.getDeepLinkType = function () {
					var a, b = this.state.originalStateParams,
						c = this.state.tripPlan,
						d = c.from && (c.from.latlng || c.from.name),
						e = c.to && (c.to.latlng || c.to.name),
						f = d || e,
						g = b.fll || b.tll || b.from || b.to;
					return f || g ? a = Z.Directions : (b.lgid || this.state.lines && this.state.lines.lineGroupId) && (a = Z.Lines), a
				}, Object.defineProperty(b.prototype, "isQrBannerVisible", {
					get: function () {
						return this.state.isQrBannerVisible
					},
					enumerable: !0,
					configurable: !0
				}), b.prototype.showQrBanner = function () {
					return this.state.isQrBannerVisible || (this.state.isQrBannerVisible = !0), this.state.isQrBannerVisible
				}, b = c = f([m.Service({
					name: "appStoreService"
				}), h(17, m.Inject("$location")), h(18, m.Inject("$rootScope")), h(19, m.Inject("$q")), h(20, m.Inject("$state")), h(21, m.Inject("$stateParams")), h(22, m.Inject("$interval")), h(23, m.Inject("$translate")), h(24, m.Inject("$window")), h(25, m.Inject("$mdDialog")), h(26, m.Inject("$cookies")), h(27, m.Inject("featureFlags")), g("design:paramtypes", [r.TripPlanService, t.MessageService, O.DialogService, v.UserProfileService, w.AnalyticsService, x.AlertsService, y.ImageService, z.MetroService, C.SearchService, D.AppProfileService, E.LocaleService, J.SeoMetaService, L.LocalStorageService, S.SessionStorageService, N.MobileService, T.CookieBarService, U.HttpService, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])], b);
				var c
			}(F.ServiceBase);
		b.AppStoreService = W;
		var X, Y = function () {
			function a() {}
			return a.getStoreLink = function (a, b, c, d, e, f, g, h) {
				this.logger.log("Generating link for: currentView: " + c.name + ", overridePlatform: " + d + ", overridePid: " + e);
				var i = d == X.iOS ? this.APPLE_ITUNES_PARAM : this.GOOGLE_PLAY_PARAM,
					j = d == X.iOS ? this.APPLE_GA_LABEL : this.GOOGLE_GA_LABEL,
					k = "splash" == c.name,
					l = b.customer.id == H.Customer.MoovitSeo.id,
					m = b.customer.id == H.Customer.MoovitWeb.id,
					n = !m && !l,
					o = b.origin == I.MoovitOrigin.Widget,
					p = this.DEFAULT_PID,
					q = a.source ? a.source.replace(/\s/g, "_") : null,
					r = null,
					s = b.customer.id + "_-";
				k && (s = "-_-"), l ? b.originalUtmSource == R.UTM_SOURCE_SEO_TRIPLAN ? r = "seo_destinations" : b.originalUtmSource == R.UTM_SOURCE_SEO_LINES ? r = "seo_lines" : b.originalUtmSource == R.UTM_SOURCE_SEO_MAPS && (r = "seo_staticmaps") : o && (r = "widget");
				var t = [],
					u = "";
				h && (i = "", u = this.getSchemaParam(b, h));
				var v = b.user.metroId;
				v && t.push("imi=" + v), n && (p = "Web_WebApp_Partner"), e && (p = e), !n && f && (s = f);
				var w = g || "",
					x = a.getGaPayloadForNativeApp(j, w);
				i && t.push(i), t.push("pid=" + p, "c=" + s), r && t.push(this.APPS_FLYER_SUBSCRIBER_PARAM_5 + "=" + r), q && t.push(this.APPS_FLYER_SUBSCRIBER_PARAM_4 + "=" + q), x && t.push("GACP=" + encodeURIComponent(x)), t.push(u), t = t.filter(function (a) {
					return "" != a
				});
				var y = this.ONELINK_URL + "?" + t.join("&");
				return this.logger.log("Store link: " + y), y
			}, a.rfc3986EncodeURIComponent = function (a) {
				return encodeURIComponent(a).replace(/[!'()*]/g, function (a) {
					return "%" + a.charCodeAt(0).toString(16).toUpperCase()
				})
			}, a.getSchemaParam = function (a, b) {
				var c = "";
				switch (b) {
					case Z.Directions:
						c = this.getDirectionsSchemaParam(a);
						break;
					case Z.Lines:
						c = this.getLinesSchemaParam(a)
				}
				return c ? this.APPS_FLYER_DEEPLINK_PARAM + "=" + encodeURIComponent(c) : ""
			}, a.getLinesSchemaParam = function (a) {
				var b, c, d = [];
				return a.lines && a.lines.lineGroupId ? (b = a.lines.lineGroupId, a.lines.lineId && (c = a.lines.lineId)) : a.originalStateParams && a.originalStateParams.lgid && (b = a.originalStateParams.lgid, a.originalStateParams.lid && (c = a.originalStateParams.lid)), b && d.push("lgi=" + b), c && d.push("li=" + c), d.push("auto_run=0"), "moovit://line?" + d.join("&")
			}, a.getDirectionsSchemaParam = function (a) {
				var b = {},
					c = a.tripPlan;
				return b = c.from || c.to ? this.getDirectionsParamsFromState(a) : this.getDirectionsParamsFromOriginalState(a), b.auto_run = 0, "moovit://directions?" + Object.keys(b).map(function (a) {
					return a + "=" + b[a]
				}).join("&")
			}, a.getDirectionsParamsFromState = function (a) {
				var b = {},
					c = a.tripPlan;
				return (c.from || c.to) && (c.from && (b.orig_name = this.rfc3986EncodeURIComponent(c.from.name), c.from.latlng && (b.orig_lat = c.from.latlng.lat, b.orig_lon = c.from.latlng.lng)), c.to && (b.dest_name = this.rfc3986EncodeURIComponent(c.to.name), c.to.latlng && (b.dest_lat = c.to.latlng.lat, b.dest_lon = c.to.latlng.lng))), b
			}, a.getDirectionsParamsFromOriginalState = function (a) {
				var b = {},
					c = a.originalStateParams,
					d = c.fll ? c.fll.split("_") : [];
				d && 2 == d.length && (b.orig_lat = d[0], b.orig_lon = d[1]), c.from && (b.orig_name = this.rfc3986EncodeURIComponent(c.from));
				var e = c.tll ? c.tll.split("_") : [];
				return e && 2 === e.length && (b.dest_lat = e[0], b.dest_lon = e[1]), c.to && (b.dest_name = this.rfc3986EncodeURIComponent(c.to)), b
			}, a.DEFAULT_PID = "Web_WebApp_Direct", a.ONELINK_URL = "https://moovit.onelink.me/3986059930", a.APPLE_ITUNES_PARAM = "af_web_dp=http%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Ftransit-directions-by-moovit%2Fid498477945%3Fmt%3D8", a.GOOGLE_PLAY_PARAM = "af_web_dp=http%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tranzmate", a.APPS_FLYER_DEEPLINK_PARAM = "af_dp", a.APPS_FLYER_SUBSCRIBER_PARAM_4 = "af_sub4", a.APPS_FLYER_SUBSCRIBER_PARAM_5 = "af_sub5", a.APPLE_GA_LABEL = "ios", a.GOOGLE_GA_LABEL = "Android", a.logger = l.createLogger("StoreLinkGenerator"), a
		}();
		! function (a) {
			a[a.iOS = 0] = "iOS", a[a.Android = 1] = "Android"
		}(X || (X = {}));
		var Z;
		! function (a) {
			a[a.Directions = 1] = "Directions", a[a.Lines = 2] = "Lines"
		}(Z = b.DeepLinkSchemaType || (b.DeepLinkSchemaType = {}));
		var $;
		return function (a) {
			a[a.Collapsed = 0] = "Collapsed", a[a.Expanded = 1] = "Expanded", a[a.Hidden = 2] = "Hidden"
		}($ = b.SideNavState || (b.SideNavState = {})), c.exports
	}), System.registerDynamic("common/locales.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			for (var c = a.toLowerCase(), d = 0, e = b.locales; d < e.length; d++) {
				var f = e[d];
				if (f.id == c) return f
			}
			return null
		}

		function e(a) {
			var b = d(a);
			if (!b) {
				var c = a.split("-");
				2 == c.length && (b = d(c[0]))
			}
			return b || null
		}

		function f(a) {
			var c = b.locales.findIndex(function (b) {
				return b.langId == a
			});
			if (-1 == c) throw new Error("locale with langId: " + a + " was not found");
			return b.locales[c]
		}

		function g(a) {
			var b = e(a);
			if (!b) throw new Error("locale with id: " + a + " was not found");
			return b
		}
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.locales = [{
			id: "in",
			name: "Bahasa Indonesia",
			langId: 75,
			ogLocale: "id_ID",
			hasBadge: !0,
			momentId: "id"
		}, {
			id: "ms",
			name: "Bahasa Melayu",
			langId: 190,
			ogLocale: "ms_MY",
			hasBadge: !0
		}, {
			id: "nb",
			name: "BokmÃ¥l",
			langId: 120,
			ogLocale: "nb_NO",
			hasBadge: !0
		}, {
			id: "ca",
			name: "CatalÃ ",
			langId: 27,
			ogLocale: "ca_ES",
			hasBadge: !0
		}, {
			id: "cs",
			name: "ÄŒeÅ¡tina",
			langId: 36,
			ogLocale: "cs_CZ",
			hasBadge: !0
		}, {
			id: "da",
			name: "Dansk",
			langId: 37,
			ogLocale: "da_DK",
			hasBadge: !0
		}, {
			id: "de",
			name: "Deutsch",
			langId: 52,
			hasBadge: !0,
			featureUrl: "https://company.moovit.com/de/features-de/",
			companyUrl: "https://company.moovit.com/de/",
			hasCommunityUrl: !0,
			ogLocale: "de_DE"
		}, {
			id: "et",
			name: "Eesti",
			langId: 43,
			ogLocale: "et_EE",
			hasBadge: !0
		}, {
			id: "en",
			name: "English",
			langId: 41,
			ogLocale: "en_US",
			featureUrl: "https://company.moovit.com/features/",
			maasSolutionsUrl: "https://company.moovit.com/maas-solutions/",
			companyUrl: "https://company.moovit.com/",
			doNotCopy: !0
		}, {
			id: "en-gb",
			name: "English (United Kingdom)",
			langId: 189,
			ogLocale: "en_GB",
			featureUrl: "https://company.moovit.com/features/",
			maasSolutionsUrl: "https://company.moovit.com/maas-solutions/",
			companyUrl: "https://company.moovit.com/",
			hasBadge: !0
		}, {
			id: "es",
			name: "EspaÃ±ol",
			langId: 149,
			hasBadge: !0,
			featureUrl: "https://company.moovit.com/es/features-es/",
			maasSolutionsUrl: "https://company.moovit.com/es/maas-solutions-es/",
			companyUrl: "https://company.moovit.com/es/",
			hasCommunityUrl: !0,
			ogLocale: "es_ES"
		}, {
			id: "es-419",
			name: "EspaÃ±ol (LatinoamÃ©rica)",
			langId: 188,
			hasBadge: !0,
			featureUrl: "https://company.moovit.com/es/features-es/",
			maasSolutionsUrl: "https://company.moovit.com/es/maas-solutions-es/",
			companyUrl: "https://company.moovit.com/es/",
			hasCommunityUrl: !0,
			ogLocale: "es_LA",
			momentId: "es"
		}, {
			id: "eu",
			name: "Euskara",
			langId: 18,
			ogLocale: "eu_ES",
			hasBadge: !0
		}, {
			id: "fr",
			name: "FranÃ§ais",
			langId: 48,
			hasBadge: !0,
			featureUrl: "https://company.moovit.com/fr/features-fr/",
			maasSolutionsUrl: "https://company.moovit.com/fr/maas-solutions-fr/",
			companyUrl: "https://company.moovit.com/fr/",
			hasCommunityUrl: !0,
			ogLocale: "fr_FR"
		}, {
			id: "hr",
			name: "Hrvatski",
			langId: 66,
			ogLocale: "hr_HR",
			hasBadge: !0
		}, {
			id: "it",
			name: "Italiano",
			langId: 77,
			hasBadge: !0,
			featureUrl: "https://company.moovit.com/it/features-it/",
			maasSolutionsUrl: "https://company.moovit.com/it/maas-solutions-it/",
			companyUrl: "https://company.moovit.com/it/",
			hasCommunityUrl: !0,
			ogLocale: "it_IT"
		}, {
			id: "lt",
			name: "LietuviÅ³",
			langId: 99,
			ogLocale: "lt_LT",
			hasBadge: !0
		}, {
			id: "hu",
			name: "Magyar",
			langId: 67,
			ogLocale: "hu_HU",
			hasBadge: !0
		}, {
			id: "nl",
			name: "Nederlands",
			langId: 39,
			ogLocale: "nl_NL",
			hasBadge: !0
		}, {
			id: "pl",
			name: "Polski",
			langId: 130,
			ogLocale: "pl_PL",
			hasBadge: !0
		}, {
			id: "pt",
			name: "PortuguÃªs (Portugal)",
			langId: 191,
			ogLocale: "pt_PT",
			featureUrl: "https://company.moovit.com/pt/features-pt/",
			maasSolutionsUrl: "https://company.moovit.com/pt/maas-solutions-pt/",
			companyUrl: "https://company.moovit.com/pt",
			hasBadge: !0
		}, {
			id: "pt-br",
			name: "PortuguÃªs",
			langId: 131,
			hasBadge: !0,
			hasCommunityUrl: !0,
			featureUrl: "https://company.moovit.com/pt/features-pt/",
			maasSolutionsUrl: "https://company.moovit.com/pt/maas-solutions-pt/",
			companyUrl: "https://company.moovit.com/pt",
			ogLocale: "pt_BR"
		}, {
			id: "ru",
			name: "PÑƒÑÑÐºÐ¸Ð¹",
			langId: 137,
			hasBadge: !0,
			hasCommunityUrl: !0,
			ogLocale: "ru_RU"
		}, {
			id: "ro",
			name: "RomÃ¢nÄƒ",
			langId: 135,
			hasBadge: !0,
			hasCommunityUrl: !0,
			ogLocale: "ro_RO"
		}, {
			id: "sr",
			name: "Srpski",
			langId: 151,
			ogLocale: "sr_RS",
			hasBadge: !0
		}, {
			id: "fi",
			name: "Suomi",
			langId: 47,
			ogLocale: "fi_FI",
			hasBadge: !0
		}, {
			id: "sk",
			name: "SlovenskÃ½",
			langId: 141,
			ogLocale: "sk_SK",
			hasBadge: !0
		}, {
			id: "sv",
			name: "Svenska",
			langId: 155,
			ogLocale: "sv_SE",
			hasBadge: !0
		}, {
			id: "tl-ph",
			name: "Tagalog",
			langId: 161,
			ogLocale: "tl_PH",
			hasBadge: !0,
			momentId: "tl-ph"
		}, {
			id: "vi",
			name: "Tiáº¿ng Viá»‡t",
			langId: 176,
			ogLocale: "vi_VN",
			hasBadge: !0
		}, {
			id: "tr",
			name: "TÃ¼rkÃ§e",
			langId: 169,
			hasCommunityUrl: !0,
			ogLocale: "tr_TR",
			hasBadge: !0
		}, {
			id: "el",
			name: "Î•Î»Î»Î·Î½Î¹ÎºÎ¬",
			langId: 57,
			hasBadge: !0,
			hasCommunityUrl: !0,
			ogLocale: "el_GR"
		}, {
			id: "uk",
			name: "ÑƒÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ° Ð¼Ð¾Ð²Ð°",
			hasBadge: !0,
			langId: 172,
			ogLocale: "uk_UA"
		}, {
			id: "bg",
			name: "Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸",
			langId: 25,
			ogLocale: "bg_BG",
			hasBadge: !0
		}, {
			id: "he",
			name: "×¢×‘×¨×™×ª",
			langId: 62,
			rtl: !0,
			hasBadge: !0,
			featureUrl: "https://company.moovit.com/he/features-he/",
			companyUrl: "https://company.moovit.com/he/",
			hasCommunityUrl: !0,
			ogLocale: "he_IL"
		}, {
			id: "ar",
			name: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
			langId: 8,
			rtl: !0,
			ogLocale: "ar_AR",
			hasBadge: !0
		}, {
			id: "th",
			name: "à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
			langId: 162,
			ogLocale: "th_TH",
			hasBadge: !0
		}, {
			id: "ka",
			name: "áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜",
			langId: 51,
			ogLocale: "ka_GE",
			hasBadge: !0
		}, {
			id: "zh-cn",
			name: "ä¸­æ–‡ (ç®€ä½“)",
			langId: 30,
			ogLocale: "zh_CN",
			hasBadge: !0
		}, {
			id: "zh-tw",
			name: "ä¸­æ–‡ (ç¹é«”)",
			langId: 192,
			ogLocale: "zh_TW",
			hasBadge: !0
		}, {
			id: "ko",
			name: "í•œêµ­ì–´",
			langId: 91,
			ogLocale: "ko_KR",
			hasBadge: !0
		}, {
			id: "ja",
			name: "æ—¥æœ¬èªž",
			langId: 79,
			ogLocale: "ja_JP",
			hasBadge: !0
		}, {
			id: "hi",
			name: "à¤¹à¤¿à¤¨à¥à¤¦à¥€",
			langId: 64,
			hasBadge: !0,
			ogLocale: "hi_IN"
		}], b.findLocale = d, b.findById = e, b.getByLangId = f, b.getById = g, c.exports
	}),
	function () {
		(0, System.amdDefine)("translations/translations.dev.json!node_modules/systemjs-plugin-text/text.js", [], function () {
			return "{\n}\n"
		})
	}(), System.registerDynamic("app/services/localeService.js", ["../common/module", "../fx/Application", "../common/AppEvents", "../../lib/moment.js", "../fx/Logger", "../fx/Annotations", "../fx/DI", "../common/objectHelpers", "./Service", "../common/AppStorageKeys", "./userProfileService", "../../common/locales", "../common/jqHelpers", "moment", "../models/converters", "../../translations/translations.dev.json!text"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../common/module"),
			i = a("../fx/Application"),
			j = a("../common/AppEvents");
		a("../../lib/moment.js");
		var k = a("../fx/Logger"),
			l = a("../fx/Annotations"),
			m = a("../fx/DI"),
			n = a("../common/objectHelpers"),
			o = a("./Service"),
			p = a("../common/AppStorageKeys"),
			q = a("./userProfileService"),
			r = a("../../common/locales"),
			s = a("../common/jqHelpers"),
			t = a("moment"),
			u = a("../models/converters"),
			v = k.createLogger("LocaleService"),
			w = JSON.parse(a("../../translations/translations.dev.json!text"));
		moovitIsProduction && (n.isEmptyObject(w) || v.error("DEV translation file should be empty when running under production mode"));
		var x = r.locales,
			y = ["en", "en-gb", "zh-cn", "zh-tw", "es", "es-419", "pt", "it", "de", "ru", "el", "tr", "ms", "he", "fr"],
			z = function (a) {
				function b(b, c, d, e, f, g, h) {
					var i = a.call(this, v) || this;
					i.$translate = b, i.$http = c, i.$q = d, i.$mdDateLocale = e, i.$rootScope = f, i.$cookies = g, i.userProfileService = h, i.translations = new Map, i.$translateProvider = m.resolve("$translateProvider"), i.$translateProvider.useSanitizeValueStrategy(null), i.langIdToLocaleMap = new Map, i.localeIdToLocaleMap = new Map;
					for (var j = 0, k = x; j < k.length; j++) {
						var l = k[j];
						i.langIdToLocaleMap[l.langId] = l, i.localeIdToLocaleMap[l.id] = l
					}
					return i
				}
				return d(b, a), c = b, b.prototype.init = function () {
					var a = this;
					v.log("init");
					var b = this.state.user.localeId;
					if (!b) throw new Error("localeId is empty");
					return this.loadTranslationFromServer(b).then(function () {
						a.setMomentLocale(b), a.$translate.use(b), a.updateMdDateLocale(), a.setHtmlDirection(b), a.setBodyLang(b), a.$rootScope.$localeId = b
					})
				}, b.normalize = function (a, b, c) {
					void 0 === b && (b = !1), void 0 === c && (c = !1);
					var d = a.trim().replace(/[-.,'?&\/#:\s]/g, "_").replace(/_+$/, "");
					return c || (d = encodeURI(d)), d = b ? d.replace(/_+/g, "_") : d
				}, b.prototype.setMomentLocale = function (a) {
					var b = {};
					"zh-cn" != a && "zh-tw" != a || (b = {
						longDateFormat: {
							LT: "HH:mm",
							LTS: "HH:mm:ss"
						}
					}), t.locale(a, b)
				}, b.prototype.setHtmlDirection = function (a) {
					v.log("setHtmlDirection", a);
					var b = r.getById(a);
					s.find("html").attr("dir", b.rtl ? "rtl" : "ltr")
				}, b.prototype.setBodyLang = function (a) {
					v.log("setBodyLang", a), s.find("body").attr("lang", a)
				}, b.prototype.getId = function () {
					return this.state.user.localeId
				}, b.prototype.getLocale = function () {
					var a = this.getId();
					if (!a) throw new Error("Empty localeId");
					return r.getById(a)
				}, b.generateBadgeUrl = function (a, b) {
					return ("en" == a ? "/images/store-buttons/" : "/images/store-buttons/locales/") + (b == A.AppleStore ? "app_store_badge_" : "google_play_badge_") + a + (b == A.AppleStore ? ".svg" : ".png")
				}, b.prototype.getBadge = function (a) {
					var b = this.getLocale();
					return b && b.hasBadge ? c.generateBadgeUrl(b.id, a) : c.generateBadgeUrl("en", a)
				}, b.generateCompanyUrl = function (a) {
					var b = "https://company.moovit.com/",
						c = a;
					return a.indexOf("-") > 0 && (c = a.split("-")[0]), "en" != c && (b += c), b + "?utm_source=web_app&utm_medium=Organic"
				}, b.prototype.getCompanyUrl = function () {
					return this.getUrlForLocaleOrDefault("https://company.moovit.com/", "companyUrl")
				}, b.prototype.getMaaSSolutionsUrl = function () {
					return this.getUrlForLocaleOrDefault("https://company.moovit.com/maas-solutions/", "maasSolutionsUrl")
				}, b.prototype.getFeaturesUrl = function () {
					return this.getUrlForLocaleOrDefault("https://company.moovit.com/features/", "featureUrl")
				}, b.prototype.getUrlForLocaleOrDefault = function (a, b) {
					return this.getLocale()[b] || a
				}, b.prototype.getInsightsUrl = function () {
					var a = this.getLocale(),
						b = "https://moovitapp.com/insights/";
					return a ? "" + b + a.id + "/" + this.$translate.instant("web_page_city_meta_title") + "-countries" : b
				}, b.generateCommunityUrl = function (a) {
					var b;
					b = "https://editor.moovitapp.com/web/community";
					var c = a;
					return a.indexOf("-") > 0 && (c = a.split("-")[0]), b += "?lang=" + c
				}, b.prototype.getCommunityUrl = function () {
					var a = this.getLocale();
					return a && a.hasCommunityUrl ? c.generateCommunityUrl(a.id) : c.generateCommunityUrl("en")
				}, b.prototype.getCommunityUnsupportedUrl = function () {
					return this.getCommunityUrl()
				}, b.prototype.getCountriesUrl = function () {
					var a = this.getLocale(),
						b = "https://moovitapp.com/index/";
					return a ? "" + b + a.id + "/" + c.normalize(this.$translate.instant("web_page_public_transit")) + "-countries" : b
				}, b.prototype.getWebAppUrl = function () {
					var a = this.userProfileService.metroId,
						b = this.getLocale();
					return b ? "https://www.moovit.com/?lang=" + b.id + "&metroId=" + a : "https://www.moovit.com/"
				}, b.prototype.getAgenciesUrl = function () {
					var a = this.userProfileService.metroId,
						b = this.state.user.metro.metroAreaData.metroAreaName,
						d = this.getLocale(),
						e = "https://moovitapp.com/index/";
					return d ? "" + e + d.id + "/" + c.normalize(this.$translate.instant("web_page_public_transit")) + "-" + b + "-" + a + "-agencies" : e
				}, b.prototype.getDestinationsUrl = function () {
					var a = this.userProfileService.metroId,
						b = this.state.user.metro.metroAreaData.metroAreaName,
						d = this.getLocale(),
						e = "https://moovitapp.com/index/";
					return d ? "" + e + d.id + "/" + c.normalize(this.$translate.instant("web_page_public_transit")) + "-" + b + "-" + a + "-destinations" : e
				}, b.prototype.isRTL = function () {
					return !!this.getLocale().rtl && this.getLocale().rtl
				}, b.prototype.change = function (a, b, c, d) {
					var e = this;
					if (void 0 === b && (b = !0), void 0 === c && (c = !0), void 0 === d && (d = !1), v.log("change", a), !d && this.state.user.localeId && this.state.user.localeId.toLowerCase() == a.toLowerCase()) return v.log("Nothing to change. Requested locale was already loaded"), this.$q.when(!0);
					var f = r.getById(a);
					return this.loadTranslationFromServer(a).then(function () {
						return e.userProfileService.regenerateUserKey(null, f.langId).then(function () {
							if (e.setMomentLocale(a), e.$translate.use(a), e.setHtmlDirection(a), e.setBodyLang(a), e.$rootScope.$localeId = a, e.updateMdDateLocale(), b) try {
								e.$cookies.put(p.AppStorageKeys.LOCALE_ID, a)
							} catch (a) {
								v.info("failed to set local storage for " + p.AppStorageKeys.LOCALE_ID)
							}
							if (e.state.user.localeId = a, e.state.user.locale = f, c) {
								var d = {
									localeId: e.state.user.localeId
								};
								i.events.raise(j.AppEvents.USER_LOCALE_CHANGED, d, v)
							}
							return f
						})
					})
				}, b.prototype.updateMdDateLocale = function () {
					for (var a = t.localeData(), b = t("2012-01-01"), c = b.clone(), d = b.clone(), e = [], f = [], g = [], h = [], i = 0; i < 12; i++) e.push(a.months(c, "MMMM")), f.push(a.monthsShort(c)), c.add(1, "month");
					for (var i = 0; i < 7; i++) g.push(a.weekdays(d)), h.push(a.weekdaysMin(d)), d.add(1, "day");
					this.$mdDateLocale.months = e, this.$mdDateLocale.shortMonths = f, this.$mdDateLocale.days = g, this.$mdDateLocale.shortDays = h
				}, b.prototype.getSupportedLocales = function () {
					return x
				}, b.prototype.getLocalizesAppUrls = function (a) {
					var b = moovitIsBundle ? "" : "/server",
						c = u.fixUrl(b + "/config/appUrlsByCountry.json");
					return this.$http.get(c).then(function (b) {
						var c = b.data,
							d = {
								googleAppURL: c.USA.googleAppURL,
								iosAppURL: c.United_Kingdom.iosAppURL
							};
						return a && c[a] ? c[a] : d
					})
				}, b.prototype.getLocalizedMetroName = function () {
					var a = this,
						b = moovitIsBundle ? "" : "/server",
						c = u.fixUrl(b + "/config/metroMapId.json");
					return this.$http.get(c).then(function (b) {
						var c = b.data;
						try {
							var d = c[a.state.user.metro.metroAreaData.metroAreaId];
							return d && d.localeId === a.getId() ? d.metroLocalizedShortName : a.state.user.metro.metroAreaData.metroAreaName
						} catch (a) {
							v.error("Could not get localized metro name. Error = ", a)
						}
					})
				}, b.prototype.loadTranslationFromServer = function (a) {
					var b = this;
					if (this.translations.has(a)) return v.log("translation file was found inside cache"), this.$q.when(this.translations.get(a));
					var c = u.fixUrl("/translations/translations_" + a + ".json"),
						d = u.fixUrl("/translations/moment-locale-" + a + ".js");
					v.log("Fetching translation file from url: " + c), v.log("Loading moment file from url: " + d);
					var e = this.$http.get(c),
						f = "en" == a ? this.$q.when(!0) : SystemJS.import(d);
					return this.$q.all([e, f]).then(function (c) {
						var d = c[0].data;
						angular.extend(d, w), b.$translateProvider.translations(a, d), b.translations.set(a, c.data), v.log("translation file loaded and applied")
					}).catch(function (b) {
						v.error("Loading failed for locale: " + a + ". Error = " + b)
					})
				}, b.prototype.toLocale = function (a) {
					var b = this.langIdToLocaleMap[a];
					if (!b) throw new Error("Cannot convert langId: " + a + " to locale");
					return b
				}, b.prototype.localeIdToLangId = function (a) {
					var b = this.localeIdToLocaleMap[a];
					if (!b) throw new Error("Cannot convert locale: " + a + " to langId");
					return b.langId
				}, b.prototype.localeIdToLocale = function (a) {
					var b = this.localeIdToLocaleMap[a];
					if (!b) throw new Error("Cannot convert locale: " + a + " to langId");
					return b
				}, b.prototype.isInHouseLanguage = function (a) {
					return y.indexOf(a) >= 0
				}, b = c = e([l.Service({
					name: "localeService"
				}), g(0, l.Inject("$translate")), g(1, l.Inject("$http")), g(2, l.Inject("$q")), g(3, l.Inject("$mdDateLocale")), g(4, l.Inject("$rootScope")), g(5, l.Inject("$cookies")), f("design:paramtypes", [Object, Object, Object, Object, Object, Object, q.UserProfileService])], b);
				var c
			}(o.ServiceBase);
		b.LocaleService = z;
		var A;
		return function (a) {
			a[a.AppleStore = 0] = "AppleStore", a[a.GooglePlay = 1] = "GooglePlay"
		}(A = b.BadgeType || (b.BadgeType = {})), h.appModule.config(["$translateProvider", function (a) {
			a.useSanitizeValueStrategy("sanitizeParameters"), a.preferredLanguage("en")
		}]), c.exports
	}), System.registerDynamic("app/services/appProfileService.js", ["../fx/Logger", "../fx/Annotations", "./Service"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("./Service"),
			k = h.createLogger("AppProfileService"),
			l = function (a) {
				function b(b, c) {
					var d = a.call(this, k) || this;
					return d.$location = b, d.$q = c, d
				}
				return d(b, a), c = b, b.prototype.init = function () {
					return this.isMobile = c.isMobileDevice(), this.isIOS = c.isIOS(), this.isAndroid = c.isAndroid(), this.isDesktop = !this.isMobile, this.isRetina = c.isRetinaScreen(), this.isInIframe = c.isInsideAnIframe(), k.log("isMobile", this.isMobile), k.log("isDesktop", this.isDesktop), k.log("isRetina", this.isRetina), this.$q.when()
				}, b.isInsideAnIframe = function () {
					try {
						return window.self !== window.top
					} catch (a) {
						return !0
					}
				}, b.isMobileDevice = function () {
					for (var a = [/Android.*Mobile|Mobile.*Android/i, /webOS/i, /iPhone/i, /iPod/i, /BlackBerry/i, /Windows Phone/i], b = 0, c = a; b < c.length; b++) {
						var d = c[b];
						if (navigator.userAgent.match(d)) return !0
					}
					return !1
				}, b.isIOS = function () {
					if (!navigator.userAgent.match(/Windows Phone/i))
						for (var a = [/iPhone/i, /iPad/i], b = 0, c = a; b < c.length; b++) {
							var d = c[b];
							if (navigator.userAgent.match(d)) return !0
						}
					return !1
				}, b.isAndroid = function () {
					return !(navigator.userAgent.match(/Windows Phone/i) || !navigator.userAgent.match(/Android/i))
				}, b.isRetinaScreen = function () {
					return window.devicePixelRatio > 1 || !(!window.matchMedia || !window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),            (min--moz-device-pixel-ratio: 1.5),            (-o-min-device-pixel-ratio: 3/2),            (min-resolution: 1.5dppx)").matches)
				}, b = c = e([i.Service({
					name: "appProfileService"
				}), g(0, i.Inject("$location")), g(1, i.Inject("$q")), f("design:paramtypes", [Object, Function])], b);
				var c
			}(j.ServiceBase);
		return b.AppProfileService = l, c.exports
	}), System.registerDynamic("app/services/settingsService.js", ["./Service", "../fx/Annotations", "../fx/Logger", "./appProfileService", "./imageService", "../common/promiseHelpers", "./userProfileService", "./httpService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./Service"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("./appProfileService"),
			l = a("./imageService"),
			m = a("../common/promiseHelpers"),
			n = a("./userProfileService"),
			o = a("./httpService"),
			p = j.createLogger("SettingsService"),
			q = function (a) {
				function b(b, c, d, e, f) {
					var g = a.call(this, p) || this;
					return g.$q = b, g.appProfileService = c, g.userProfileService = d, g.imageService = e, g.httpService = f, g.allCountries = null, g
				}
				return d(b, a), b.prototype.getCountrySelection = function () {
					return m.aggregate(this.getAllCountries(), this.userProfileService.getCurrentMetroInfo()).then(function (a) {
						for (var b = {
								countries: a.val1,
								selectedCountry: null,
								selectedMetro: null
							}, c = a.val2, d = 0, e = b.countries; d < e.length; d++) {
							var f = e[d];
							if (f.name == c.metroAreaData.countryName) {
								b.selectedCountry = f, b.selectedMetro = c;
								break
							}
						}
						return b
					})
				}, b.prototype.getCountryByName = function (a) {
					return this.getAllCountries().then(function (b) {
						for (var c = 0, d = b; c < d.length; c++) {
							var e = d[c];
							if (e.name == a) return e
						}
						throw new Error("Country with name: " + a + " was not found")
					})
				}, b.prototype.getAllCountries = function () {
					var a = this;
					return this.allCountries ? this.$q.when(this.allCountries) : this.httpService.get("/api/country").then(function (b) {
						return p.log(b), b.forEach(function (a) {
							var b = a.name + " ";
							a.keywords.forEach(function (a) {
								b += a + " "
							}), a.searchTerm = b.trim(), a.metros.forEach(function (a) {
								var c = b + " " + a.name + " ";
								a.keywords.forEach(function (a) {
									c += a + " "
								}), a.searchTerm = c.trim()
							})
						}), a.allCountries = b, a.imageService.syncFlags(b).then(function () {
							return a.allCountries
						})
					})
				}, b = e([i.Service({
					name: "settingsService"
				}), g(0, i.Inject("$q")), f("design:paramtypes", [Function, k.AppProfileService, n.UserProfileService, l.ImageService, o.HttpService])], b)
			}(h.ServiceBase);
		return b.SettingsService = q, c.exports
	}), System.registerDynamic("app/models/general.js", [], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		! function (a) {
			a[a.From = 0] = "From", a[a.To = 1] = "To"
		}(b.FromTo || (b.FromTo = {}));
		return function (a) {
			a[a.None = 0] = "None", a[a.Regular = 1] = "Regular", a[a.Info = 2] = "Info", a[a.Modified = 3] = "Modified", a[a.Critical = 4] = "Critical"
		}(b.ServiceStatusCategory || (b.ServiceStatusCategory = {})), c.exports
	}), System.registerDynamic("app/services/localStorage.js", ["../fx/Logger", "../fx/Annotations", "./Service"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("./Service"),
			k = h.createLogger("LocalStorageService"),
			l = function (a) {
				function b(b) {
					var c = a.call(this, k) || this;
					return c.$q = b, c
				}
				return d(b, a), b.prototype.get = function (a) {
					return k.log("get", a), this.$q.when(!0).then(function () {
						try {
							var b = localStorage.getItem(a);
							if (null === b) throw new Error("localStorage key: " + a + " was not found");
							return JSON.parse(b)
						} catch (a) {}
					})
				}, b.prototype.getOrDefault = function (a, b) {
					return k.log("getOrDefault", a, b), this.$q.when(!0).then(function () {
						try {
							var c, d = localStorage.getItem(a);
							return null === d ? (k.log("key: " + a + " was not found. Using default value: ", b), c = b) : c = JSON.parse(d), c
						} catch (a) {
							return b
						}
					})
				}, b.prototype.set = function (a, b) {
					return k.log("set", a, b), this.$q.when(!0).then(function () {
						try {
							var c = JSON.stringify(b);
							window.localStorage.setItem(a, c)
						} catch (a) {
							throw new Error("localStorage is disabled")
						}
					})
				}, b = e([i.Service({
					name: "localStorageService"
				}), g(0, i.Inject("$q")), f("design:paramtypes", [Object])], b)
			}(j.ServiceBase);
		return b.LocalStorageService = l, c.exports
	}), System.registerDynamic("app/services/userProfileService.js", ["../fx/Logger", "../fx/Annotations", "./Service", "./metroService", "../common/AppStorageKeys", "../fx/Application", "../common/AppEvents", "./localStorage", "./httpService", "./imageService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("./Service"),
			k = a("./metroService"),
			l = a("../common/AppStorageKeys"),
			m = a("../fx/Application"),
			n = a("../common/AppEvents"),
			o = a("./localStorage"),
			p = a("./httpService"),
			q = a("./imageService"),
			r = h.createLogger("UserProfileService"),
			s = "2",
			t = function (a) {
				function b(b, c, d, e, f, g, h, i) {
					var j = a.call(this, r) || this;
					return j.$location = b, j.$injector = c, j.$q = d, j.translateFilter = e, j.metroService = f, j.localStorageService = g, j.httpService = h, j.imageService = i, j.userState = j.state.user, j.mapTilesUrl = null, j
				}
				return d(b, a), b.prototype.init = function () {
					var a = this;
					return this.regenerateUserKey().then(function () {
						return a.metroService.getMetroInfo(a.userState.metroId).then(function (b) {
							a.state.user.metro = b
						})
					})
				}, b.prototype.getCurrentMetroInfo = function () {
					var a = this;
					return r.log("getCurrentMetroInfo"), this.ensureInit().then(function () {
						var b = a.state.user.metro;
						if (!b) throw new Error("Metro is not available yet");
						return b
					})
				}, b.prototype.regenerateUserKey = function (a, b) {
					var c = this;
					r.log("regenerateUserKey: " + a + ", " + b);
					var d = this.state.customer.id,
						e = this.state.user.ipAddress;
					if (void 0 === d) throw new Error("customerId is empty");
					if (void 0 === b && !(b = this.userState.locale.langId)) throw new Error("langId is empty");
					void 0 == a && (a = this.state.user.metroId);
					var f = null;
					return this.userState.metroId && this.userState.locale.langId && d && (f = this.buildStorageKey(a.toString(), b, d, s)), (f ? this.localStorageService.getOrDefault(f, null) : this.$q.resolve(!1)).then(function (f) {
						if (f) return f;
						var g = {
							metroId: a,
							langId: b,
							customerId: d
						};
						return e && (g.ipAddress = e), c.httpService.post("/api/user", {}, {
							userKeyHeaderRequired: !1,
							metroIdHeaderRequired: !1,
							params: g
						})
					}).then(function (a) {
						if (a) {
							r.log("userKey is: " + a.userKey), r.log("tilesUrl is: " + a.tilesUrl), r.log("metroId is: " + a.metroId), r.log("isUnresolvedMetro is:" + a.isUnresolvedMetro), c.mapTilesUrl = a.tilesUrl, c.userState.userKey = a.userKey, c.state.user.isUnresolvedMetro = a.isUnresolvedMetro, c.state.user.metroId = a.metroId, c.state.user.gtfsLanguage = a.gtfsLanguage;
							var e = c.buildStorageKey(a.metroId, b, d, s);
							e && c.localStorageService.set(e, a)
						}
					})
				}, b.prototype.getUserKey = function () {
					if (!this.userState.userKey) throw new Error("User key is not available yet");
					return this.userState.userKey
				}, b.prototype.changeMetro = function (a, b) {
					var c = this;
					if (void 0 === b && (b = !0), r.log("changeMetro", a), this.userState.metroId == a) return r.log("Requested metro id is the same as current one --\x3e Do nothing"), this.$q.when(this.state.user.metro);
					var d = {
						metroId: a,
						metroAreaName: null
					};
					return m.events.raise(n.AppEvents.METRO_CHANGING, d, this.logger), this.metroService.getMetroInfo(a).then(function (e) {
						return c.regenerateUserKey(a).then(function () {
							if (r.log("Saving metroId: " + a + " to localStorage and appState"), c.state.user.metroId = a, c.state.user.metro = e, c.state.user.metroSeoName = e.metroAreaData.metroSeoName, d.metroAreaName = e.metroAreaData.metroAreaName, b) try {
								c.localStorageService.set(l.AppStorageKeys.METRO_ID, a.toString())
							} catch (a) {
								r.info("failed to set local storage for " + l.AppStorageKeys.METRO_ID)
							}
							return c.state.tripPlan && (c.state.tripPlan.recentLocations = null), m.events.raise(n.AppEvents.METRO_CHANGED, d, c.logger), c.state.user.metro
						})
					}).catch(function (a) {
						c.state.hasError = !0, c.state.error = a
					})
				}, b.prototype.getMapTilesUrl = function () {
					var a = this;
					return this.ensureInit().then(function () {
						return a.mapTilesUrl
					})
				}, Object.defineProperty(b.prototype, "metroId", {
					get: function () {
						return this.userState.metroId
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(b.prototype, "metroSeoName", {
					get: function () {
						return this.userState.metroSeoName
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(b.prototype, "metro", {
					get: function () {
						return this.userState.metro
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(b.prototype, "localeId", {
					get: function () {
						return this.userState.localeId
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(b.prototype, "useMyLocation", {
					get: function () {
						return this.userState.useMyLocation
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(b.prototype, "minimizeQRCodeBanner", {
					get: function () {
						return this.userState.minimizeQRCodeBanner
					},
					set: function (a) {
						this.userState.minimizeQRCodeBanner = a
					},
					enumerable: !0,
					configurable: !0
				}), b.prototype.buildStorageKey = function (a, b, c, d) {
					var e = {
						metro: a,
						lang: b,
						customer: c,
						version: d
					};
					return JSON.stringify(e)
				}, b = e([i.Service({
					name: "userProfileService"
				}), g(0, i.Inject("$location")), g(1, i.Inject("$injector")), g(2, i.Inject("$q")), g(3, i.Inject("translateFilter")), f("design:paramtypes", [Object, Object, Object, Object, k.MetroService, o.LocalStorageService, p.HttpService, q.ImageService])], b)
			}(j.ServiceBase);
		return b.UserProfileService = t, c.exports
	}), System.registerDynamic("common/customer.js", ["object-assign"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("object-assign"),
			e = function () {
				function a(b, c, e, f, g, h, i, j, k, l) {
					if (this.id = b, this.name = c, "n/a" == e) this.defaultMetroId = 0;
					else {
						if ("number" != typeof e) throw console.error("Incorrect partner ", this.id, "metroId: ", e), new Error("Incorrect partner metroId parameter");
						this.defaultMetroId = e
					}
					this.defaultLocaleId = f, this.androidAppDeepLink = "moovit://nearby", this.iOsAppDeepLink = "moovit2://", this.appItineraryDeepLink = "moovit://itinerary", this.logo = g, this.latLng = 0 != h && 0 != i ? {
						lat: h,
						lng: i
					} : null, this.ticketsUrl = j;
					var m = {
						logo: "/images/moovit_logo.svg",
						logoLink: null,
						isLogoSVG: !0,
						cssFile: "",
						hideMetroSelection: !1,
						hidePartnership: !1,
						hideSplashScreen: !1,
						hideCarpool: !1,
						hideSideNav: !1,
						hideLines: !1,
						hideAlerts: !1,
						hideCookieBar: !1,
						hideSharing: !1,
						automaticInitialGeoLocation: !1,
						hideCommunityBar: !1
					};
					k || (k = {}), k = d(m, k), this.designConfiguration = k, this.apiKey = l, a.customerIdToCustomer[b] = this
				}
				return a.getCustomerById = function (b) {
					return a.customerIdToCustomer[b] ? a.customerIdToCustomer[b] : a.MoovitWeb
				}, a.isNotMoovitWebOrSeo = function (a) {
					return a != this.MoovitWeb.id && a != this.MoovitSeo.id
				}, a.customerIdToCustomer = new Map, a.MoovitWeb = new a(4480, "Moovit Web", 121, "en", "", 0, 0, ""), a.MoovitSeo = new a(4908, "SEO landing pages", 121, "en", "", 0, 0, ""), a.allCustomers = [new a(230, "Israel rail", 1, "he", "", 0, 0, ""), new a(4481, "Visit Rio", 322, "pt-br", "visit_rio_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(4500, "Transantiago", 642, "es-419", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/DTPM_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(4501, "Metrocali MIO", 1462, "es-419", "Metrocali_MIO_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(4502, "Transmilenio", 762, "es-419", "transmilenio_logo.png", 0, 0, ""), new a(4503, "Szekesfehervar", 2600, "hu", "", 0, 0, ""), new a(4504, "Cuenca", 3813, "es-419", "", 0, 0, ""), new a(4505, "Movilidad Granada", 2422, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/movilidad_granada_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(4506, "TranvÃ­as de Ferrol", 3729, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TranvÃ­as_de_Ferrol_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(4507, "Aucorsa", 2944, "es", "", 0, 0, ""), new a(4508, "Tussam", 3802, "es", "", 0, 0, ""), new a(4509, "Ayutamiento de Toledo", 3731, "es", "", 0, 0, ""), new a(4510, "Cooperativa Interurbana Andorrana", 3682, "ca", "", 0, 0, ""), new a(4511, "Soler i Sauret", 362, "es", "", 0, 0, ""), new a(4512, "SAMYT", 3842, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Ayuntamiento_de_Burgos_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(4513, "Ayuntamiento de Ciudad Real", 3779, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Ayuntamiento_de_Ciudad_Real_logo_new.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(4514, "Transhierro", 3811, "es", "Transhierro_logo.png", 0, 0, ""), new a(4515, "Ibizabus", 3401, "es", "", 0, 0, ""), new a(4516, "Cabildo La Palma", 3380, "es", "cabildo_la_palma_logo.png", 0, 0, ""), new a(4517, "Auvasa", 2781, "es", "auvasa_logo_52px.png", 0, 0, ""), new a(4518, "Transports Urbanos Lleida", 3602, "es", "", 0, 0, ""), new a(4519, "Amtab", 3342, "it", "amtab_logo.png", 0, 0, ""), new a(4520, "Start", 1783, "it", "start_romagna_logo.png", 44.139826, 12.243599, "http://www.startromagna.it/titoli-e-tariffe/punti-vendita/"), new a(4521, "Arst", 1262, "it", "arst_spa_logo.png", 0, 0, "http://www.arst.sardegna.it/titoli_e_tariffe.html"), new a(4522, "Trenord", 223, "it", "trenord_logo.png", 0, 0, "http://www.trenord.it"), new a(4523, "Autoguidovie", 223, "it", "autoguidovie_logo.png", 0, 0, ""), new a(4524, "Amat", 2804, "it", "amat_spa_logo.png", 0, 0, "http://amat.pa.it/biglietti/"), new a(4525, "Cotral", 61, "it", "logo_cotral_52.png", 0, 0, "http://servizi.cotralspa.it/PuntiVendita"), new a(4526, "Roma MobilitÃ ", 61, "it", "mobilita_rome_logo.png", 0, 0, "", {
					logo: "/images/partners/mobilita_logo.png",
					logoLink: "https://muoversiaroma.it",
					isLogoSVG: !1,
					cssFile: "mobilita_rome",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideLines: !0,
					hideAlerts: !0
				}), new a(4527, "Bus Italia", 1842, "it", "", 0, 0, ""), new a(4528, "GTT", 222, "it", "gtt_logo.png", 0, 0, "http://www.gtt.to.it/cms/biglietti-abbonamenti/punti-vendita/punti-vendita-in-torino-e-altri-comuni-dell-area-metropolitana"), new a(4529, "KM", 223, "it", "km_logo.png", 45.142881, 10.0157103, "http://www.kmspa.it/viaggiare-con-km/titoli-di-viaggio/titoli-di-viaggio-urbani"), new a(4530, "Sun", 223, "it", "sun_logo.png", 45.450947, 8.6221333, "http://www.sun.novara.it/abbonati/acquisto.php"), new a(4531, "Anm", 882, "it", "anm_logo.png", 0, 0, "http://www.anm.it/index.php?option=com_content&task=view&id=1344&Itemid=320"), new a(4532, "Ctp", 882, "it", "ctp_logo.png", 0, 0, ""), new a(4533, "Eav", 882, "it", "eav_logo.png", 0, 0, "http://ots.eavsrl.it/web/public/ots/ticket/index"), new a(4534, "Sita Sud", 882, "it", "sita_sud_logo.png", 40.6751635, 14.7695161, "http://www.sitasudtrasporti.it/contenuti/Campania/bigliettiabbonamenti"), new a(4535, "Cstp", 882, "it", "cstp_logo.png", 40.6751635, 14.7695161, ""), new a(4536, "Amat", 223, "it", "amat_logo.png", 0, 0, ""), new a(4537, "Santa Monica", 302, "en", "", 0, 0, ""), new a(4538, "Portland, Maine", 144, "en", "", 0, 0, ""), new a(4539, "Athens Voice", 1822, "el", "athens_logo.png", 0, 0, ""), new a(4540, "Oasa", 1822, "el", "oasa_logo.png", 0, 0, ""), new a(4541, "Ktel", 3825, "el", "ktel_logo.png", 0, 0, ""), new a(4542, "Oasth", 2860, "el", "xrejoin_oasth_logo.png", 0, 0, ""), new a(4543, "IETT", 1563, "tr", "iettye_odul_logo.png", 0, 0, ""), new a(4544, "G1", 322, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/G1_logo_new.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(4562, "Lange Nacht der Museen", 1663, "de", "", 0, 0, ""), new a(4563, "UniRoma 3", 61, "it", "rome_tre_logo.png", 0, 0, ""), new a(4587, "Ami Ferrara", 1783, "it", "amife_logo.png", 44.842594, 11.6010163, ""), new a(4588, "TransJakarta", 2044, "in", "TransJakarta_logo.png", 0, 0, ""), new a(4589, "BPTJ", 2044, "in", "BPTJ_logo.png", 0, 0, ""), new a(4614, "Posadas", 3865, "es-419", "", 0, 0, ""), new a(4615, "Estapar", 322, "pt-br", "estapar_logo.png", 0, 0, ""), new a(4616, "Marechal", 1702, "pt-br", "marechal_logo.png", 0, 0, ""), new a(4617, "POA Digital", 964, "pt-br", "poa_digital_logo.png", 0, 0, ""), new a(4618, "Prefeitura CuiabÃ¡", 1762, "pt-br", "cuiaba_logo.png", 0, 0, ""), new a(4619, "Prefeitura Teresina", 2742, "pt-br", "teresina_logo.png", 0, 0, ""), new a(4620, "RioGaleÃ£o", 322, "pt-br", "rio_galeao_logo.png", 0, 0, ""), new a(4621, "TIM", 322, "pt-br", "tim_logo.png", 0, 0, ""), new a(4622, "EstÃ¡cio", 322, "pt-br", "estacio_logo.png", 0, 0, ""), new a(4623, "ConsÃ³rcio RMTC", 1482, "pt-br", "rmtc_logo.png", 0, 0, ""), new a(4624, "Moovit Corp site-English", 121, "en", "", 0, 0, ""), new a(4625, "Moovit Corp site-English-UK", 2122, "en-gb", "", 0, 0, ""), new a(4626, "Moovit Corp site-Spanish", 21, "es", "", 0, 0, ""), new a(4627, "Moovit Corp site-Spanish-LATAM", 1602, "es-419", "", 0, 0, ""), new a(4628, "Moovit Corp site-Portuguese-Brazil", 242, "pt-br", "", 0, 0, ""), new a(4629, "Moovit Corp site-German", 1663, "de", "", 0, 0, ""), new a(4630, "Moovit Corp site-Italian", 61, "it", "", 0, 0, ""), new a(4631, "Moovit Corp site-Hebrew", 1, "he", "", 0, 0, ""), new a(4632, "Moovit Corp site-French", 662, "fr", "", 0, 0, ""), new a(4633, "Moovit Corp site-Turkish", 1563, "tr", "", 0, 0, ""), new a(4634, "Moovit Corp site-Greek", 1822, "el", "", 0, 0, ""), new a(4640, "Dan", 1, "he", "", 0, 0, ""), new a(4641, "Kavim", 1, "he", "", 0, 0, ""), new a(4642, "Metropolin", 1, "he", "", 0, 0, ""), new a(4643, "Israel Rail", 1, "he", "", 0, 0, ""), new a(4644, "Prefeitura de Santo Andre", 242, "pt-br", "sa_trans_logo.png", -23.672194, -46.519722, ""), new a(4645, "Transcal", 242, "pt-br", "transcal_logo.png", -29.926389, -51.072944, ""), new a(4646, "Prefeitura de SÃ£o Carlos", 3464, "pt-br", "sao_carlos_logo.png", 0, 0, ""), new a(4647, "A Tarde", 1882, "pt-br", "a_tarde_logo.png", 0, 0, ""), new a(4692, "RioCard", 322, "pt-br", "riocard_logo.png", 0, 0, ""), new a(4693, "Rio Ã”nibus", 322, "pt-br", "rio_onibus_logo.png", 0, 0, ""), new a(4705, "Moovit Social Team - Twitter/Blog Account (@moovit)", 121, "en", "", 0, 0, ""), new a(4706, "Moovit Social Team - Facebook Account (@moovit)", 121, "en", "", 0, 0, ""), new a(4707, "Moovit Social Team - LinkedIn Account (@moovit)", 121, "en", "", 0, 0, ""), new a(4708, "Moovit Social Team - Instagram Account", 121, "en", "", 0, 0, ""), new a(4709, "OneSimCard", 121, "en", "", 0, 0, ""), new a(4710, "Moovit Social Team - External Partner Social Media", 121, "en", "", 0, 0, ""), new a(4720, "EatSeattle", 522, "en", "eatseattle_logo.png", 0, 0, ""), new a(4721, "Prefeitura Ubatuba", 3940, "pt-br", "prefeitura_ubatuba_logo.png", 0, 0, ""), new a(4740, "Amadeus - Berlin", 1663, "de", "", 0, 0, ""), new a(4741, "Amadeus - Boston", 141, "en", "", 0, 0, ""), new a(4742, "Amadeus - Chicago", 81, "en", "", 0, 0, ""), new a(4743, "Amadeus - NYC", 121, "en", "", 0, 0, ""), new a(4744, "Amadeus - SF", 22, "en", "", 0, 0, ""), new a(4745, "Amadeus - London", 2122, "en", "", 0, 0, ""), new a(4746, "Amadeus - Paris", 662, "fr", "", 0, 0, ""), new a(4760, "UNAM", 822, "es-419", "", 0, 0, ""), new a(4761, "Gente Media Partner", 21, "es", "gente_logo.png", 0, 0, ""), new a(4762, "Que!Radio Partner", 21, "es", "", 0, 0, ""), new a(4763, "AISA", 3779, "es", "AISA_logo.png", 0, 0, ""), new a(4800, "Que! ", 21, "es", "Que_logo.png", 0, 0, ""), new a(4801, "Carnaval e Samba", 322, "pt-br", "Carnaval_e_Samba_logo.png", 0, 0, ""), new a(4802, "Transport Local", 3360, "ro", "", 0, 0, ""), new a(4907, "Gobierno Provincial Posadas", 3865, "es-419", "", 0, 0, ""), a.MoovitSeo, new a(4909, "EIGE", 1669, "es", "EIGE_logo.png", 0, 0, ""), new a(4910, "Lahden seudun liikenne", 1084, "fi", "Lahden_logo.png", 0, 0, ""), new a(4911, "Prefeitura SÃ£o Luis", 4043, "pt-br", "Prefeitura_Sao_Luis_logo.png", 0, 0, ""), new a(4946, "Transportes Rober", 2422, "es", "Transportes_Rober_logo.png", 0, 0, ""), new a(4947, "HK Tramways", 2741, "zh-tw", "HK_Tramways_logo.png", 0, 0, ""), new a(5019, "nowrongwaysf", 22, "en", "", 0, 0, ""), new a(5106, "Gobierno del Estado", 3742, "es-419", "gobiernoSLP_logo.png", 0, 0, ""), new a(5107, "Komia Liikenne ", 4423, "fi", "komia_liikenne_logo.png", 0, 0, ""), new a(5126, "AC Transit (Web + Widget request!)", 22, "en", "ac_transit_logo.png", 0, 0, ""), new a(5167, "Olay Gazetesi", 3663, "tr", "OlayGazetesi_logo.png", 0, 0, ""), new a(5168, "SamulaÅŸ", 4040, "tr", "Samulas_logo.png", 0, 0, ""), new a(5169, "CÃ­vico", 762, "es-419", "Civico_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(5186, "MetrolÃ­nea", 4324, "es-419", "Metrolinea_logo.png", 0, 0, ""), new a(5187, "Sin TrÃ¡fico", 822, "es-419", "SinTrafico_logo.png", 0, 0, ""), new a(5188, "Urfa Objektif", 4200, "tr", "UrfaObjektif_logo.png", 0, 0, ""), new a(5189, "Gobierno IbaguÃ©", 4506, "es-419", "GobiernoIbague_logo.png", 0, 0, ""), new a(5190, "Metro de Santiago", 642, "es-419", "Metro-de-Santiago_logo.png", 0, 0, ""), new a(5226, "Trensurb", 964, "pt-br", "Trensurb_logo.png", 0, 0, ""), new a(5266, "Trenord", 223, "it", "", 0, 0, ""), new a(5306, "Rock In Rio", 322, "pt-br", "moovitLogo.png", -22.977656, -43.393915, "", {
					logo: "/images/partners/Rock_In_Rio_logo_new.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideLines: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(5169, "CÃ­vico", 822, "es-419", "Civico_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(5169, "CÃ­vico", 642, "es-419", "Civico_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(5307, "Accor", 662, "fr", "", 0, 0, ""), new a(5367, "keylocation.sg", 1678, "en", "", 0, 0, ""), new a(5446, "Prefeitura Uberlandia", 3364, "pt-br", "Prefeitura_Uberlandia_logo.png", 0, 0, ""), new a(5447, "alt2mag.eu", 1673, "en", "", 0, 0, ""), new a(5466, "portable.com.au", 442, "en-gb", "", 0, 0, ""), new a(5467, "Dan Beer Sheva", 1, "he", "", 31.252486, 34.791258, ""), new a(5468, "Avilabus", 4684, "es", "logo_avanza_52px.png", 0, 0, ""), new a(5469, "Tussa ", 4325, "es", "logo_avanza_52px.png", 36.7725774, -6.352968899999951, ""), new a(5486, "UberBus", 2900, "es-419", "", 0, 0, ""), new a(5487, "Marco (Editor user)", 2806, "it", "", 0, 0, ""), new a(5488, "Avanza Soria", 4685, "es", "logo_avanza_52px.png", 0, 0, ""), new a(5517, "Avanza Huesca", 3601, "es", "logo_avanza_52px.png", 0, 0, ""), new a(5518, "Turismo Milano", 223, "it", "Logo_Turismo_Milano.png", 0, 0, ""), new a(5520, "SETA Modena", 1783, "it", "Logo_SETA_Modena.png", 0, 0, ""), new a(5521, "Comune di Milano", 223, "it", "Logo_Comune_di_Milano.png", 0, 0, ""), new a(5522, "Comune di Urbino", 4240, "it", "Logo_Comune_di_Urbino.png", 43.72365, 12.6369, ""), new a(5523, "Comune di Pomezia", 61, "it", "Logo_Comune_di_Pomezia.png", 0, 0, ""), new a(5546, "Avanza Vigo", 3841, "es", "logo_avanza_52px.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(5746, "Urbanos de Cuenca", 4407, "es", "", 0, 0, ""), new a(5747, "Gooster", 121, "en", "", 0, 0, ""), new a(5827, "ATB Bergamo", 223, "it", "Logo_ATB_Bergamo.png", 45.693671, 9.6761, "https://www.atb.bergamo.it/it/viaggia-con-noi/biglietti/biglietti"), new a(5828, "UniversitÃ  Tor Vergata", 61, "it", "Logo_Universita_Tor_Vergata.png", 0, 0, ""), new a(5846, "Red Transporte", 21, "es", "Logo_Red_Transporte.png", 0, 0, ""), new a(5926, "CCR MetrÃ´ Bahia", 1882, "pt-br", "Logo_CCR Metro_Bahia.png", 0, 0, ""), new a(5927, "RodoviÃ¡ria Online", 242, "pt-br", "", 0, 0, ""), new a(5928, "ATM Trapani", 2804, "it", "Logo_ATM_Trapani.png", 38.017246, 12.523837, "http://www.atmtrapani.it/?page_id=1955#1476087032674-39303691-5b14"), new a(5966, "AsiaExpo", 2741, "en", "Logo_AWE.png", 0, 0, ""), new a(5966, "AsiaExpo", 2741, "zh-tw", "Logo_AWE.png", 0, 0, ""), new a(5966, "AsiaExpo", 2741, "zh", "Logo_AWE.png", 0, 0, ""), new a(5967, "pekepsy", 1822, "el", "", 0, 0, ""), new a(5968, "Shopping House", 1822, "el", "Logo_shoppinghouse.png", 0, 0, ""), new a(5986, "Avanza RubÃ­", 362, "es", "logo_avanza_52px.png", 41.4991785, 2.0288175, ""), new a(6026, "MPL AÃ©roport", 3817, "fr", "mpl_aeroport_logo.png", 43.580768, 3.962186, ""), new a(6046, "DolomitiBus", 1903, "it", "", 46.140987, 12.209898, "", {
					logo: "/images/partners/dolomitibus_logo.png",
					logoLink: "http://dolomitibus.it",
					isLogoSVG: !1,
					cssFile: "dolomitibus",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideLines: !0,
					hideAlerts: !1
				}, "dolomiti_bus_3306053178"), new a(6086, "ADEFE - AssemblÃ©ia de Deus - Fogo para Europa", 2460, "", "Adefe_Portugal_logo.png", 0, 0, ""), new a(6087, "Free Sunday", 1822, "", "free_sunday_logo.png", 0, 0, ""), new a(6107, "NextBondi", 1602, "es-419", "next_bondi_logo.png", 0, 0, ""), new a(6146, "Biletix", 1563, "tr", "biletix_logo.png", 0, 0, ""), new a(6106, "MTT", 642, "es-419", "mtt_logo.png", 0, 0, ""), new a(6207, "Citynews", 61, "it", "citynews_logo.png", 0, 0, ""), new a(6241, "TUS", 4364, "es", "/TUSSantander_logo.png", 0, 0, "", {
					logoLink: "",
					hideMetroSelection: !0,
					hideSideNav: !0,
					hideCarpool: !0,
					hideAlerts: !0
				}), new a(6246, "MatarÃ³Bus", 362, "es", "logo_avanza_52px.png", 41.5333, 2.45, ""), new a(6247, "RubiBus", 362, "es", "logo_avanza_52px.png", 41.4833, 2.0333, ""), new a(6248, "Urbanos de Soria", 4685, "es", "logo_avanza_52px.png", 0, 0, ""), new a(6249, "Urbanos de Segovia", 5054, "es", "logo_avanza_52px.png", 0, 0, ""), new a(6250, "Tmesa", 362, "es", "logo_avanza_52px.png", 41.5667, 2.0167, ""), new a(6251, "Urbanos Zaragoza", 3201, "es", "logo_avanza_52px.png", 0, 0, ""), new a(6252, "Interurbanos Madrid", 21, "es", "logo_avanza_52px.png", 40.395556, -3.678194, ""), new a(6253, "BRT Rio", 322, "pt-br", "brt-logo-positivo.png", -23.000844, -43.366077, ""), new a(6288, "Horsgle Development", 2400, "pt-br", "logo_horsgle_52px.png", 0, 0, ""), new a(6289, "Transport Urban Resita (TUR)", 5392, "ro", "logo_resita_52px.png", 0, 0, ""), new a(6290, "Jerusalem Transport ", 1, "he", "", 31.7849382, 35.2151419, ""), new a(6304, "Tractive Sdn bhd", 1082, "en", "", 0, 0, ""), new a(6315, "Euroleague 2018", 3304, "en", "logo_F4_52.png", 0, 0, ""), new a(6316, "imob", 2460, "pt", "", 0, 0, "", {
					logo: "/images/partners/imob_logo_56.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "imob",
					hideMetroSelection: !0,
					hideSideNav: !0,
					hideCarpool: !0,
					hideAlerts: !0,
					hideCommunityBar: !0
				}), new a(6317, "Michele BuscÃ¨", 61, "it", "", 0, 0, ""), new a(6330, "S.C. Internacional", 964, "pt-br", "logo_Inter_52px.png", 0, 0, "", {
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0
				}), new a(5748, "ON.CC", 2741, "zh-tw", "", 0, 0, "", {
					hideFooterOnMobile: !0,
					hideCookieBar: !0
				}), new a(6346, "ON.CC", 2741, "zh-tw", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideCookieBar: !0
				}), new a(6347, "STCP", 1904, "pt", "Logo_STCP_52px.png", 0, 0, ""), new a(6350, "http://www.mybellanapoli.it/", 882, "it", "", 0, 0, ""), new a(6351, "Cuenca", 3813, "es-419", "logo_cuenca_alcaldia_52px.png", 0, 0, ""), new a(6352, "fabryssd", 61, "it", "", 0, 0, ""), new a(6354, "COA", 4144, "es", "Logo_melilla_52px.png", 0, 0, ""), new a(6355, "Gobierno de Melilla", 4144, "es", "Logo_Gobierno-de-Melilla_52px.png", 0, 0, ""), new a(6356, "Municipalidad de Pilar", 1602, "es-419", "Logo_Pilar_52px.png", 0, 0, ""), new a(6408, "Flamengo", 322, "pt-br", "Flamengo_logo_52.png", 0, 0, ""), new a(6409, "Corinthians", 242, "pt-br", "corinthinans_logo_52.png", 0, 0, ""), new a(6410, "Cruzeiro", 843, "pt-br", "cruzeiro_logo_52.png", 0, 0, ""), new a(6406, "CSC MobilitÃ ", 61, "it", "logo_52_cscMobilita.png", 41.467227, 12.903595, ""), new a(6407, "Tubasa", 4221, "es", "logo_52_tubasa.png", 0, 0, ""), new a(6408, "Flamengo", 322, "pt-br", "Flamengo_logo_52.png", 0, 0, "", {
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0
				}), new a(6409, "Corinthians", 242, "pt-br", "corinthinans_logo_52.png", 0, 0, "", {
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0
				}), new a(6410, "Cruzeiro", 843, "pt-br", "cruzeiro_logo_52.png", 0, 0, "", {
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0
				}), new a(6446, "Asian Games", 2044, "in", "Asian_games.png", 0, 0, ""), new a(6468, "SafeWalk", 1544, "en", "", 0, 0, "", {
					hideFooterOnMobile: !0,
					hideCookieBar: !0,
					hideMetroSelection: !0,
					hideAlerts: !0,
					hideSideNav: !0
				}), new a(6469, "Minimetro", 4062, "it", "Minimetro_logo.png", 0, 0, ""), new a(6470, "Center for Mobility", 142, "en", "Center_for_Mobility_logo.png", 39.289804, -76.611443, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideCommunityBar: !0
				}), new a(6471, "Virtus Roma", 61, "it", "Virtus_Roma_logo.png", 0, 0, ""), new a(6480, "VisitGenova", 1782, "it", "VisitGenova_logo.png", 0, 0, ""), new a(6481, "Fiorentina", 2022, "it", "Fiorentina_logo.png", 0, 0, ""), new a(6482, "AS Roma", 61, "it", "AS_Roma_logo.png", 0, 0, ""), new a(6483, "SSC Napoli", 882, "it", "SSC_Napoli_logo.png", 0, 0, ""), new a(6484, "Eurolega", 362, "en", "Eurolega_logo.jpg", 0, 0, ""), new a(6490, "Talent Garden", 223, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TAG_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6491, "Partteams", 2460, "pt", "", 0, 0, "", {
					hideFooterOnMobile: !0,
					hideCookieBar: !0,
					hideMetroSelection: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(6492, "BÄ°P", 1563, "tr", "BIP_logo.png", 0, 0, "", {
					hideSideNav: !0
				}), new a(6493, "CRTM", 21, "es", "", 0, 0, "", {
					logo: "/images/partners/CRTM_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "CRTM",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideSideNav: !0,
					hideLines: !0,
					hideCommunityBar: !0
				}), new a(6526, "Octopus", 2741, "zh-tw", "Octopus_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6527, "Olympus Mobility", 1682, "en", "Olympus_Mobility_logo.png", 50.849503, 4.355523, "", {
					hideCarpool: !0,
					hideCommunityBar: !0
				}), new a(6529, "MOM", 2083, "it", "MOM_logo.png", 45.664851, 12.245065, "", {
					hideCarpool: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(6533, "Concello de Vigo", 3841, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Concello_de_Vigo_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "concello_de_vigo",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(6567, "Euroleague - Milan", 223, "en", "Euroleague_milan_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6568, "Euroleague - Bayern", 3144, "en", "Euroleague_bayern_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6569, "Euroleague - Buduknost", 5553, "en", "Euroleague_buduknost_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6570, "Euroleague - CSKA", 902, "en", "Euroleague_cska_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6571, "Euroleague - Khimki", 902, "en", "Euroleague_khimki_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6572, "Euroleague - Fener", 1563, "en", "Euroleague_fener_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6573, "Euroleague - Darussafaka", 1563, "en", "Euroleague_darussafaka_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6574, "Euroleague - Anadolu", 1563, "en", "Euroleague_anadolu_efes_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6575, "Euroleague - Madrid", 21, "en", "Euroleague_madrid_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6576, "Euroleague - FCB", 362, "en", "Euroleague_fcb_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6577, "Euroleague - Gran Canaria", 2782, "en", "Euroleague_gran_canaria_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6578, "Euroleague - Baskonia", 1542, "en", "Euroleague_baskonia_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6579, "Euroleague - Maccabi", 1, "en", "Euroleague_maccabi_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6580, "Euroleague - Panathinaikos", 1822, "en", "Euroleague_panathinaikos_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6581, "Euroleague - Olympiacos", 1822, "en", "Euroleague_olympiacos_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6582, "Euroleague - Zalgiris", 3665, "en", "Euroleague_zalgiris_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6603, "Navent", 1602, "es-419", "Navent_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6609, "Intercity Bus", 4020, "es", "Intercity_bus_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6626, "WeRun Rome", 61, "it", "WeRun_Rome_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6627, "Winter Wonderland", 2122, "en-gb", "Winter_Wonderland_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6628, "Inter FC", 223, "it", "Inter_FC_logo.png", 45.478078, 9.123962, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6629, "Hotels.com", 61, "it", "Hotels.com_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6630, "6 Nazioni", 61, "it", "6_Nazioni_logo.png", 41.933877, 12.454822, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6646, "CMOV Aguascalientes", 3778, "es-419", "CMOV_Aguascalientes_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6647, "Alto Viaje", 1602, "es-419", "Alto_Viaje_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6648, "ATM Guayaquil", 5550, "es-419", "ATM_Guayaquil_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6649, "Manta", 5551, "es-419", "Manta_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6641, "Imovelweb", 1702, "pt-br", "imovelweb_new_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6642, "adondevivir", 1102, "es-419", "adondevivir_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6643, "compreoalquile", 4674, "es-419", "compreoalquile_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6644, "inmuebles24", 822, "es-419", "inmuebles24_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6645, "Imovelweb", 242, "pt-br", "imovelweb_new_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6650, "ATAC", 61, "it", "ATAC_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6651, "Bisnow", 121, "en", "Bisnow_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6669, "CTB", 1505, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/CTB_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "CTB",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6670, "Salineira", 322, "pt-br", "Salineira_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6671, "Bikehub", 302, "en", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6672, "DPP Prague", 1684, "cs", "DPP_Prague_logo.png", 0, 0, "https://eshop.dpp.cz/", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6676, "TCAT", 5160, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TCAT_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6677, "AMT Catania", 2806, "it", "AMT_Catania_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6684, "Start Ascoli", 4240, "it", "Start_Ascoli_logo.png", 42.850718, 13.573651, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6689, "L'Unione Sarda", 1262, "it", "", 0, 0, "", {
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6690, "Ayuntamiento de CÃ¡ceres", 4308, "es", "Ayuntamiento_de_Caceres_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(6692, "David Guetta", 4688, "en", "David_Guetta_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6693, "Atletico Madrid", 21, "es", "Atletico_Madrid_logo.png", 40.436145, -3.599424, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6694, "Bus For Fun", 61, "it", "Bus_For_Fun_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6697, "Soy Aguas Calientes", 3778, "es-419", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6698, "Donkey Republic", 2965, "en", "Donkey_Republic_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6703, "Handy", 2122, "en", "Handy_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6704, "AS Roma v2", 61, "it", "AS_Roma_v2_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6705, "Aucorsa", 2944, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Aucorsa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "Aucorsa",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6706, "Barcelona", 362, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Barcelona_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "Barcelona",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6707, "ARST", 1262, "it", "ARST_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6732, "Selina", 4674, "en", "Selina_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6733, "ATMV", 1669, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ATMV_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6734, "TUS", 4364, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TUS_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(6735, "Torrelavega", 4364, "es", "Torrelavega_logo.png", 43.470033466801816, -3.7470188942190816, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(6736, "TRAM", 362, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TRAM_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "TRAM",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCommunityBar: !0
				}), new a(6737, "Go-Ahead Singapore", 1678, "en", "Go-Ahead_Singapore_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6738, "CTAGR", 2422, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/CTAGR_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6739, "TIM", 61, "it", "TIM_1_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6740, "NBA", 2122, "en", "NBA_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6741, "Expedia", 121, "en", "Expedia_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6742, "Huawei", 662, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Huawei_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6743, "GTFS France", 662, "fr", "GTFS_France_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6764, "ACB - Copa del Rey", 21, "es", "moovitLogo.png", 40.423862, -3.671788, "", {
					logo: "/images/partners/ACB_-_Copa_del_Rey_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6745, "ACB - Barcelona Lassa", 362, "en", "moovitLogo.png", 41.380943, 2.120014, "", {
					logo: "/images/partners/ACB_-_Barcelona_Lassa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6746, "ACB - BAXI Manresa", 362, "es", "moovitLogo.png", 41.725369, 1.809412, "", {
					logo: "/images/partners/ACB_-_BAXI_Manresa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6747, "ACB - Cafes Candelas Breogan", 5676, "es", "moovitLogo.png", 42.992546, -7.545332, "", {
					logo: "/images/partners/ACB_-_Cafes_Candelas_Breogan.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6748, "ACB - Delteco GBC", 1543, "es", "moovitLogo.png", 43.297414, -1.969016, "", {
					logo: "/images/partners/ACB_-_Delteco_GBC_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6749, "ACB - Divina Seguros Joventut", 362, "es", "moovitLogo.png", 41.443503, 2.232226, "", {
					logo: "/images/partners/ACB_-_Divina_Seguros_Joventut_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6751, "ACB - Herbalife Gran Canaria", 2782, "es", "moovitLogo.png", 28.103468, -15.457109, "", {
					logo: "/images/partners/ACB_-_Herbalife_Gran_Canaria_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6752, "ACB - Iberostar Tenerife", 1422, "es", "moovitLogo.png", 28.459504, -16.296844, "", {
					logo: "/images/partners/ACB_-_Iberostar_Tenerife_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6753, "ACB - Kirolbet Baskonia", 4794, "es", "moovitLogo.png", 42.865173, -2.641357, "", {
					logo: "/images/partners/ACB_-_Kirolbet_Baskonia_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6754, "ACB - Monbus Obradoiro", 4815, "es", "moovitLogo.png", 42.877092, -8.530649, "", {
					logo: "/images/partners/ACB_-_Monbus_Obradoiro_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6755, "ACB - Montakit Fuenlabrada", 21, "es", "moovitLogo.png", 40.283074, -3.800301, "", {
					logo: "/images/partners/ACB_-_Montakit_Fuenlabrada_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6756, "ACB - MoraBanc Andorra", 3682, "es", "moovitLogo.png", 42.505858, 1.516616, "", {
					logo: "/images/partners/ACB_-_MoraBanc_Andorra_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6757, "ACB - Movistar Estudiantes", 21, "es", "moovitLogo.png", 40.423862, -3.671788, "", {
					logo: "/images/partners/ACB_-_Movistar_Estudiantes_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6758, "ACB - Real Madrid", 21, "es", "moovitLogo.png", 40.423862, -3.671788, "", {
					logo: "/images/partners/ACB_-_Real_Madrid_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6759, "ACB - San Pablo Burgos", 3842, "es", "moovitLogo.png", 42.345272, -3.678333, "", {
					logo: "/images/partners/ACB_-_San_Pablo_Burgos_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6760, "ACB - Tecnyconta Zaragoza", 3201, "es", "moovitLogo.png", 41.636454, -.865928, "", {
					logo: "/images/partners/ACB_-_Tecnyconta_Zaragoza_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6761, "ACB - Unicaja", 2683, "es", "moovitLogo.png", 36.682856, -4.460526, "", {
					logo: "/images/partners/ACB_-_Unicaja_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6762, "ACB - Universidad CatÃ³lica de Murcia", 3738, "es", "moovitLogo.png", 37.994114, -1.112681, "", {
					logo: "/images/partners/ACB_-_Universidad_Catolica_de_Murcia_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					hideSideNav: !0,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6763, "ACB - Valencia Basket", 1669, "es", "moovitLogo.png", 39.452058, -.366006, "", {
					logo: "/images/partners/ACB_-_Valencia_Basket_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					hideSideNav: !0,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6766, "ACB - Liga Endesa", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACB_-_Liga_Endesa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSideNav: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6767, "EYPE", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/EYPE_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6768, "EMTU", 242, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/EMTU_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6769, "Atletico Mineiro", 843, "pt-br", "Atletico_Mineiro_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6770, "Botafogo", 322, "pt-br", "Botafogo_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6771, "Coritiba", 942, "pt-br", "Coritiba_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6772, "Fluminense", 322, "pt-br", "Fluminense_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6773, "GoiÃ¡s", 1482, "pt-br", "Goias_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6774, "GrÃªmio", 964, "pt-br", "Gremio_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6775, "Palmeiras", 242, "pt-br", "Palmeiras_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6776, "Santos", 242, "pt-br", "Santos_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6777, "SÃ£o Paulo", 242, "pt-br", "Sao_Paulo_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6778, "Sport", 1882, "pt-br", "Sport_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6779, "Vasco", 322, "pt-br", "Vasco_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6780, "Borussia Dortmund", 3749, "de", "Borussia_Dortmund_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6781, "Hertha BSC Berlin", 1663, "de", "Hertha_BSC_Berlin_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6782, "Tottenham", 2122, "en", "Tottenham_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6783, "Timeout", 121, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Timeout_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6784, "Hampton Jitney ", 121, "en", "Hampton_Jitney__logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6785, "Internazionali BNL d'Italia", 61, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Internazionali_BNL_d'Italia_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6786, "Atlanta Downtown", 542, "en", "Atlanta_Downtown_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0
				}), new a(6787, "ABC Vocento", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ABC_Vocento_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6794, "Catedral de Burgos", 3842, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Catedral_de_Burgos_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6788, "AMB - Baixbus", 362, "ca", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AMB_-_Baixbus_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6789, "AMB - Nit Bus", 362, "ca", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AMB_-_Nit_Bus_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6790, "AMB - Nou Barris", 362, "ca", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AMB_-_Nou_Barris_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "AMB_-_Nou_Barris",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6791, "AMB - Soler i Sauret", 362, "ca", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AMB_-_Soler_i_Sauret_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6792, "AMB - TCC", 362, "ca", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AMB_-_TCC_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6793, "AMB - Tusgsal", 362, "ca", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AMB_-_Tusgsal_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6806, "Autofacil", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Autofacil_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6807, "Conerobus", 4240, "it", "Conerobus_logo.png", 43.6131279, 13.5019096, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6808, "Rio Card", 322, "pt-br", "moovitLogo.png", 0, 0, "https://recargafacil.riocard.com/", {
					logo: "/images/partners/Rio_Card_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6809, "Fetranspor", 322, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Fetranspor_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6810, "VDO", 322, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/VDO_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6812, "Sagales", 362, "ca", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Sagales_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6813, "SERMAS", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/SERMAS_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6814, "Air Europa", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Air_Europa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6815, "Amadora", 2460, "pt-br", "moovitLogo.png", 38.75881961293757, -9.23612504379804, "", {
					logo: "/images/partners/Amadora_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6816, "Lisboa", 2460, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Lisboa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6817, "Porto", 1904, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Porto_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6818, "Visit Portugal", 2460, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Visit_Portugal_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6819, "Sporting de Lisboa", 2460, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Sporting_de_Lisboa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6820, "FC Porto", 1904, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/FC_Porto_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6821, "Real Betis", 3802, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Real_Betis_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6822, "Sevilla FC", 3802, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Sevilla_FC_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6823, "PSG", 662, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/PSG_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6824, "Olympique Lyonnais", 3483, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Olympique_Lyonnais_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6825, "Le Parisien", 662, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Le_Parisien_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6826, "LNR", 662, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/LNR_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6827, "Mairie de Paris", 662, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Mairie_de_Paris_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6828, "Liga Asobal", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Liga_Asobal_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6829, "STCP", 1904, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/STCP_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6830, "Rodonorte", 1904, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Rodonorte_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6831, "Comboios de Portugal", 2460, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Comboios_de_Portugal_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6832, "Horarios do Funchal", 3481, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Horarios_do_Funchal_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6833, "TST", 2460, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TST_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6834, "Municipalidade de Coimbra", 1905, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Municipalidade_de_Coimbra_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6835, "Turismo de Sevilla", 3802, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Turismo_de_Sevilla_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6836, "Madeira Islands", 3481, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Madeira_Islands_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6839, "Federazione Italiana Nuoto", 61, "it", "Federazione_Italiana_Nuoto_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideLines: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6840, "EL AL", 61, "en", "EL_AL_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideLines: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6841, "Cherokee Area Transportation System", 542, "en", "Cherokee_Area_Transportation_System_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6842, "Ayuntamiento de Sevilla", 3802, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Ayuntamiento_de_Sevilla_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6843, "Ayuntamiento de Vitoria", 1542, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Ayuntamiento_de_Vitoria_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6844, "Atletico de Madrid", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Atletico_de_Madrid_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6845, "RightHear", 1, "en", "RightHear_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6848, "Final Four Euroleague", 1542, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Final_Four_Euroleague_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6853, "Airport of Venice", 2083, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Airport_of_Venice_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6854, "Airport of Treviso", 2083, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Airport_of_Treviso_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6855, "Failte Ireland", 502, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Failte_Ireland_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6856, "Metro de Granada", 2422, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Metro_de_Granada_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6857, "AENA", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AENA_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6858, "ENAIRE", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ENAIRE_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6859, "RFEF", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/RFEF_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6860, "SEF", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/SEF_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6861, "Asicasa Calpita", 2580, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Asicasa_Calpita_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6862, "Ayuntamiento de Vigo", 3841, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Ayuntamiento_de_Vigo_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6863, "Vitrasa", 3841, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Vitrasa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6864, "Baltimore Water Taxi", 142, "en", "Baltimore_Water_Taxi_logo.png", 39.275822, -76.587808, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6865, "FIB", 2821, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/FIB_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6868, "Transfacil", 843, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Transfacil_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6869, "Neuquen", 5458, "es-419", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Neuquen_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "neuquen",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6870, "Almirante Brown", 1602, "es-419", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Almirante_Brown_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6874, "BHBUS", 843, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/BHBUS_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6875, "Sephora", 223, "en", "Sephora_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6876, "UNWTO", 21, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/UNWTO_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6886, "Nilopolis Online", 322, "pt-br", "moovitLogo.png", -22.808838, -43.414798, "", {
					logo: "/images/partners/Nilopolis_Online_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6887, "National Express", 2122, "ISO 639-1 Code", "National_Express_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6890, "ATAC V2", 61, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ATAC_V2_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6889, "Miglio di Roma", 61, "it", "Miglio_di_Roma_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					hideCommunityBar: !0
				}), new a(6892, "As Roma White Label - NEW", 61, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/As_Roma_White_Label_-_NEW_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6893, "Inter White Label - NEW", 223, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Inter_White_Label_-_NEW_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6894, "Fulham FC", 2122, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Fulham_FC_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6895, "All Blacks", 785, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/All_Blacks_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6896, "Festival Cinema", 61, "en", "Festival_Cinema_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6897, "Southampton", 2106, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Southampton_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6898, "GTT Torino", 222, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/GTT_Torino_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6899, "Adidas Playground Milano", 223, "it", "Adidas_Playground_Milano_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6900, "Eshkbon", 4409, "de", "Eshkbon_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6906, "Municipality of Tel Aviv - Yafo", 1, "en", "Municipality_of_Tel_Aviv_-_Yafo_logo.png", 32.080559, 34.780648, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6907, "KAUST", 4915, "en", "KAUST_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6908, "500 Centenario Elcano", 3802, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/500_Centenario_Elcano_sin_text_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !1,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6909, "ATMA", 4240, "it", "ATMA_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideCommunityBar: !0
				}), new a(6910, "MTA Flint", 5737, "en", "MTA_Flint_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6911, "Madrid Holiday", 21, "es", "Madrid_Holiday_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6912, "Arrive - Boston Redsox", 141, "en", "Moovit_Arrive.png", 0, 0, "", {
					logo: "/images/partners/arrive_boston_redsox_logo_n.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6913, "Arrive - Arizon Diamondbacks", 746, "en", "Arrive_-_Arizon_Diamondbacks_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6914, "Horarios do Funchal", 3481, "pt-br", "Horarios_do_Funchal_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6921, "GetYourGuide", 61, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Get_Your_Guide_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6922, "ACTU", 1102, "es-419", "ACTU_Logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6923, "Banco Comafi", 1602, "es-419", "Banco_Comafi_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6926, "Universia", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Universia_logo_n.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6927, "CoRe", 822, "es-419", "CoRe_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6928, "DelDOT", 2043, "en", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6946, "TITSA", 1422, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Titsa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6947, "WRG", 362, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/WRG_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6948, "ShowPlace ICON", 81, "en", "", 41.86966, -87.632798, "", {
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideLines: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6949, "HARTransit", 121, "en", "", 41.3971, -73.4553, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6950, "AlcaldÃ­a de Bello", 1642, "es-419", "AlcaldÃ­a_de_Bello_logo.png", 6.330154, -75.553576, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6951, "Municipalidad de JunÃ­n", 5774, "es-419", "Municipalidad_de_JunÃ­n_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6952, "Liga Iberdrola", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Liga_Iberdrola_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6953, "Metrobus", 1669, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Metrobus_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideCommunityBar: !0
				}), new a(6955, "Portland Metro", 3860, "en", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6956, "RIPTA", 141, "en", "", 41.8236, -71.4123, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6957, "PVTA", 4081, "en", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6958, "Onibus_Rio", 322, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Onibus_Rio_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6959, "La Vuelta", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/La_Vuelta_logo_n.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "la_vuelta",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6966, "NICE Bus", 121, "en", "moovitLogo.png", 40.7377, -73.6125, "", {
					logo: "/images/partners/Nice_Bus2_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6967, "ACTV", 2083, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACTV_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6968, "AVM", 2083, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AVM_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6969, "Park City", 1202, "en", "", 40.6461, 111.498, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6970, "AISA", 3779, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AISA2_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6971, "Autobuses Ifach", 4487, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Autobuses_Ifach_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6972, "Kiwi", 662, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Kiwi_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6973, "CercanÃ­as MÃ¡laga", 2683, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Cercanias_Malaga_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6974, "Olympique Marseille", 1562, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Olympique_Marseille_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6988, "RomaToday", 61, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/RomaToday_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideLines: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6989, "TAM", 142, "en", "", 39.2904, -76.6122, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6990, "KVRTC", 3900, "en", "", 0, 0, "", {
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6991, "Vodafone", 223, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Vodafone_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6992, "Middletown Transit District", 1565, "en", "", 41.5623, 72.6506, "", {
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6993, "Ubuntu partnership", 121, "en", "", 0, 0, "", {
					hidePartnership: !0,
					hideSplashScreen: !0,
					automaticInitialGeoLocation: !0
				}), new a(6994, "AFC Ajax", 101, "nl", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/AFC_Ajax_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(6995, "Rio Card +", 322, "pt-br", "moovitLogo.png", 0, 0, "https://recargafacil.riocardmais.com.br/", {
					logo: "/images/partners/Rio_card_plus_logo_v2.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7001, "Charles County VanGo", 142, "en", "", 38.5301, -76.9801, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7002, "Aeropuerto Internacional de Carrasco", 1672, "es-419", "Aeropuerto_Internacional_de_Carrasco_logo_n.png", -34.837103, -56.016138, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7026, "Soccerex", 2122, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/soccerex_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7027, "Love to Ride", 542, "en", "love_to_ride_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7029, "LeeTran", 3361, "en", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7030, "NovaTransit", 142, "en", "", 0, 0, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7031, "Lanzarote Arrecife", 4020, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Lanzarote_Arrecife_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7032, "Lanzarote Biosfera", 4020, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Lanzarote_Biosfera_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7033, "Lanzarote CAC", 4020, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Lanzarote_CAC_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7034, "Lanzarote Intercity", 4020, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Lanzarote_Intercity_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7035, "Lanzarote Cabildo", 4020, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Lanzarote_Cabildo_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7036, "Shuttlez", 1, "en", "", 0, 0, ""), new a(7037, "Lanzarote Magma", 4020, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Lanzarote_Magma_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7038, "SUBE", 1602, "es-419", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Sube_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7039, "Arlington Transit", 142, "en", "Arlington_Transit_logo.png", 38.8816, -77.091, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(7040, "Primo Maggio", 61, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Primo_Maggio_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(10992, "UDG Tenerife", 1422, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/UDG_Tenerife_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(10993, "Election Committee", 1, "he", "Election_Israel_Committee_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(10994, "Supercopa", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Supercopa_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(10995, "Scotturb", 2460, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Scotturb_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(10996, "FIGC", 1, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/FIGC_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11007, "Hawaii DOT", 1144, "en", "", 0, 0, "", {
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideAlerts: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11008, "Comodoro Rivadavia", 4067, "es-419", "Comodoro_Rivadavia_logo.png", 0, 0, "", {
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11009, "East Midlands Railway", 2103, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/East_Midlands_Railway_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11010, "TfGM", 2105, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TfGM_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11011, "TfN", 2109, "en", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/TfN_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11012, "Citymap", 2806, "", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Citymap_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11013, "Charm City Circulator", 142, "en", "", 39.2904, -76.6122, "", {
					hideMetroSelection: !0,
					hidePartnership: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11014, "SMTUC", 1905, "pt", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/SMTUC_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11018, "Liga Endesa 2019-2020", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Liga_Endesa_2019-2020_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideMyCurrentLocation: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11019, "ACB - Barcelona", 362, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACB_-_Barcelona_1_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard"
				}), new a(11020, "ACB - Movistar Estudiantes", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACB_-_Movistar_Estudiantes_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard"
				}), new a(11021, "ACB - Casademont Zaragoza", 3201, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACB_-_Casademont_Zaragoza_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard"
				}), new a(11022, "ACB - Joventut Badalona", 362, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACB_-_Joventut_Badalona_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard"
				}), new a(11023, "ACB - Coosur Real Betis", 3802, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACB_-_Coosur_Real_Betis_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard"
				}), new a(11024, "ACB - Retabet Bilbao Basket", 1505, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/ACB_-_Retabet_Bilbao_Basket_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard"
				}), new a(11025, "Catania", 1783, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Catania_logo_1.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11026, "Manchester City", 2105, "", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Manchester_City_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11027, "Infront", 61, "it", "Infront_logo.png", 0, 0, "", {
					hideCarpool: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11028, "Carris", 2460, "pt", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Carris_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideCarpool: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11046, "UC Berkeley", 22, "en", "", 37.8719, -122.2585, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11047, "RFEF Women", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/RFEF_Women_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideCarpool: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11048, "Santa Fe Trails", 1902, "en", "", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11049, "Santo AndrÃ© MOB", 242, "pt-br", "moovitLogo.png", -23.710413, -46.5629368, "", {
					logo: "/images/partners/Santo_Andre_MOB_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11051, "Real Madrid", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Real_Madrid_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11052, "Jornal de Noticias", 2460, "pt", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Jornal_de_Noticias_logo_n.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11053, "Diario de Noticias", 2460, "pt", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Diario_de_Noticias_logo_v2.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11054, "O Jogo", 2460, "pt", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/O_Jogo_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11055, "Dinheiro vivo", 2460, "pt", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Dinheiro_vivo_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11056, "Le Figaro", 662, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Le_Figaro_logo_v2.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11057, "Besaksheir", 1563, "", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Besaksheir_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11058, "Wave Market", 61, "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Wave_Market_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11066, "COP + UITP + CRTM", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/COP_UITP_CRTM_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11067, "Mecatran", 924, "fr", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Mecatran_logo_v2.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11068, "STRAN", 1123, "fr", "moovitLogo.png", 47.274, -2.214, "", {
					logo: "/images/partners/STRAN_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11069, "Harford Transit LINK", 142, "en", "Harford_Transit_LINK_logo.png", 39.4621, -76.2769, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11070, "St. Marys County Transit", 142, "en", "", 38.2931, -76.6317, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11071, "Visit.SP", 242, "pt-br", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Visit.SP_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11072, "COP + UITP + EMT", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/COP_UITP_EMT_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11073, "COP + UITP + Madrid", 21, "es", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/COP_UITP_Madrid_logo_v2.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11074, "Liberty Transit", 5895, "en", "Liberty_Transit_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11075, "Santa Clarita Transit", 302, "en", "Santa_Clarita_Transit_logo_v2.png", 34.3908, -118.5426, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11076, "COMET", 5901, "en", "COMET_logo.png", 0, 0, "", {
					hideMetroSelection: !0,
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideSideNav: !0,
					hideCookieBar: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				}), new a(11077, "Croce Rossa Italiana", "n/a", "it", "moovitLogo.png", 0, 0, "", {
					logo: "/images/partners/Croce_Rossa_Italiana_logo.png",
					logoLink: "",
					isLogoSVG: !1,
					cssFile: "standard",
					hideSplashScreen: !0,
					hideCarpool: !0,
					hideFooterOnMobile: !0,
					hideDirectionsBanner: !0,
					hideSharing: !0,
					automaticInitialGeoLocation: !0,
					hideCommunityBar: !0
				})], a
			}();
		return b.Customer = e, c.exports
	}),
	function () {
		(0, System.amdDefine)("app/mvf/transit_line.json!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '{\n  "type": "container",\n  "background": {\n    "type": "image",\n    "id": "-18"\n  },\n  "layout": {\n    "h": 26\n  },\n  "layers": [\n    {\n      "type": "container",\n      "background": {\n        "type": "image",\n        "id": "-17",\n        "color": "%1$s"\n      },\n      "layout": {\n        "h": 26\n      },\n      "layers": [\n        {\n          "type": "text",\n          "text": "%2$s",\n          "color": "000000",\n          "size": 17,\n          "bold": true,\n          "layout": {\n            "x": 0,\n            "y": 0.5,\n            "halign": "left",\n            "valign": "center"\n          }\n        }\n      ]\n    }\n  ]\n}'
		})
	}(),
	function () {
		(0, System.amdDefine)("app/mvf/icon_default_line.json!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '{\n  "type": "container",\n  "background": {\n    "type": "image",\n    "id": "-18"\n  },\n  "layout": {\n    "h": 26\n  },\n  "layers": [\n    {\n      "type": "container",\n      "background": {\n        "type": "image",\n        "id": "-17",\n        "color": "%1$s"\n      },\n      "layout": {\n        "h": 26\n      },\n      "layers": [\n        {\n          "type": "text",\n          "text": "%2$s",\n          "color": "000000",\n          "size": 17,\n          "bold": true,\n          "layout": {\n            "x": 0,\n            "y": 0.5,\n            "halign": "left",\n            "valign": "center"\n          }\n        }\n      ]\n    }\n  ]\n}'
		})
	}(),
	function () {
		(0, System.amdDefine)("app/mvf/generic_colored_line_icon.json!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '{\n  "type": "container",\n  "layout": {\n    "h": 26\n  },\n  "layers": [\n    {\n      "type": "image",\n      "id": "%3$s",\n      "color": "%1$s",\n      "layout": {\n        "x": 0.5,\n        "y": 0.5,\n        "halign": "center",\n        "valign": "center"\n      }\n    }\n  ]\n}'
		})
	}(),
	function () {
		(0, System.amdDefine)("app/mvf/generic_colored_icon.json!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '{\n  "type": "container",\n  "layers": [\n    {\n      "type": "image",\n      "id": "%3$s",\n      "color": "%1$s",\n      "layout": {\n        "x": 0.5,\n        "y": 0.5,\n        "halign": "center",\n        "valign": "center"\n      }\n    }\n  ],\n  "layout": {\n    "h": 18,\n    "w": 18\n  }\n}'
		})
	}(),
	function () {
		(0, System.amdDefine)("app/mvf/bike_station.json!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '{\n  "type": "container",\n  "layers": [\n    {\n      "type": "image",\n      "id": "-113"\n    },\n    {\n      "type": "image",\n      "id": "-114",\n      "color": "%1$s"\n    },\n    {\n      "type": "image",\n      "id": "-115",\n      "color": "%2$s"\n    },\n    {\n      "type": "container",\n      "layout": {\n        "h": 34,\n        "w": 31\n      },\n      "ignoreIfEmpty": true,\n      "measureBackground": true,\n      "background": {\n        "type": "container",\n        "layers": [\n          {\n            "type": "image",\n            "id": "-116",\n            "color": "%3$s"\n          },\n          {\n            "type": "image",\n            "id": "-117",\n            "color": "%4$s"\n          }\n        ]\n      },\n      "layers": [\n        {\n          "type": "text",\n          "color": "%5$s",\n          "text": "%6$s",\n          "size": 8,\n          "layout": {\n            "x": 0.755,\n            "y": 0.22,\n            "halign": "center",\n            "valign": "center"\n          }\n        }\n      ]\n    }\n  ]\n}'
		})
	}(),
	function () {
		(0, System.amdDefine)("app/mvf/drive_now_cluster_station.json!node_modules/systemjs-plugin-text/text.js", [], function () {
			return '{\n  "type": "container",\n  "layout": {\n    "h": 34,\n    "w": 31\n  },\n  "layers": [\n    {\n      "type": "image",\n      "id": "-119"\n    },\n    {\n      "type": "text",\n      "color": "%1$s",\n      "text": "%2$s",\n      "size": 8,\n      "layout": {\n        "x": 0.785,\n        "y": 0.25,\n        "halign": "center",\n        "valign": "center"\n      }\n    }\n  ]\n}'
		})
	}(), System.registerDynamic("app/services/imageService.js", ["./Service", "../fx/Annotations", "../fx/Logger", "./httpService", "../mvf/transit_line.json!text", "../mvf/icon_default_line.json!text", "../mvf/generic_colored_line_icon.json!text", "../mvf/generic_colored_icon.json!text", "../mvf/bike_station.json!text", "../mvf/drive_now_cluster_station.json!text"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./Service"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("./httpService"),
			l = j.createLogger("ImageService"),
			m = function (a) {
				function b(b, c, d) {
					var e = a.call(this, l) || this;
					return e.$q = b, e.$sce = c, e.httpService = d, e.cachedImages = new Map, e.imagesToSync = [], e.imagesAddedToSync = new Map, e.imagesRequested = new Map, e.supportsMask = !/Edge\/\d./i.test(navigator.userAgent), e.isEnabled = !0, e.GERENAL_LOCATION_IMAGE_ID = -71, e
				}
				return d(b, a), b.prototype.syncImagesData = function (a) {
					return this.addImagesToSync(a), this.syncCollectedImages()
				}, b.prototype.syncMetroImageData = function (a) {
					var b = [];
					if (a.agencies)
						for (var c = 0, d = a.agencies; c < d.length; c++) {
							var e = d[c];
							e.image && b.push(e.image)
						}
					if (a.routeTypes)
						for (var f = 0, g = a.routeTypes; f < g.length; f++) {
							var h = g[f];
							h.image && b.push(h.image)
						}
					return this.addImagesToSync(b), this.syncCollectedImages()
				}, b.prototype.syncFlags = function (a) {
					for (var b = [], c = 0, d = a; c < d.length; c++) {
						var e = d[c];
						e.flagImageId && b.push(e.flagImageId)
					}
					return this.addImagesToSync(b), this.syncCollectedImages()
				}, b.prototype.syncSectionedRoutesImageData = function (a) {
					for (var b = [], c = 0, d = a; c < d.length; c++) {
						var e = d[c];
						if (e.supplementalData && e.supplementalData.lineGroupSummaryList) {
							for (var f = 0, g = e.supplementalData.lineGroupSummaryList; f < g.length; f++) {
								var h = g[f];
								if (h.imageRefSet)
									for (var i = 0, j = h.imageRefSet.images; i < j.length; i++) {
										var k = j[i];
										b.push(k.imageRef)
									}
								if (h.innerImageIds && h.innerImageIds.images)
									for (var l = 0, m = h.innerImageIds.images; l < m.length; l++) {
										var n = m[l];
										b.push(n.image)
									}
							}
							for (var o = 0, p = e.supplementalData.mVStopSyncedMetaDataList; o < p.length; o++) {
								var q = p[o];
								b.push(q.image), q.imageRefSet.images && q.imageRefSet.images[0] && b.push(q.imageRefSet.images[0].imageRef.imageId)
							}
						}
					}
					return this.addImagesToSync(b), this.syncCollectedImages()
				}, b.prototype.syncStopsImageData = function (a) {
					var b = [];
					if (a) {
						for (var c = 0, d = a; c < d.length; c++) {
							var e = d[c];
							b.push(e.image), e.imageRefSet.images && e.imageRefSet.images[0] && b.push(e.imageRefSet.images[0].imageRef.imageId)
						}
						this.addImagesToSync(b)
					}
					return this.syncCollectedImages()
				}, b.prototype.syncLineGroupSummariesImageData = function (a) {
					var b = [];
					for (var c in a) {
						var d = a[c];
						if (d.imageRefSet)
							for (var e = 0, f = d.imageRefSet.images; e < f.length; e++) {
								var g = f[e];
								b.push(g.imageRef)
							}
						if (d.innerImageIds && d.innerImageIds.images)
							for (var h = 0, i = d.innerImageIds.images; h < i.length; h++) {
								var j = i[h];
								b.push(j.image)
							}
					}
					return this.addImagesToSync(b), this.syncCollectedImages()
				}, b.prototype.syncSearchImageData = function (a) {
					for (var b = 0, c = a; b < c.length; b++) {
						var d = c[b];
						d.image && this.addImageToSync(d.image.imageId)
					}
					return this.syncCollectedImages()
				}, b.prototype.getMVFImageHtml = function (a) {
					var b = this,
						c = a.agencyIconId ? '<span class="agency"><img src="' + this.getImageById(a.agencyIconId) + '"/></span>' : "",
						d = a.transitTypeIconId ? '<span class="transit"><img src="' + this.getImageById(a.transitTypeIconId) + '"/></span>' : "",
						e = a.InnerImages.map(function (a) {
							if ("image" == a.imageType) {
								var c = b.getImageById(a.imageId),
									d = c ? '<img src="' + c + '"/>' : "";
								if (a.color && "" != a.color) {
									return '<span class="line has-mask"><span style="background-color: #' + (a.color.length > 6 ? a.color.slice(2, 8) : a.color) + "; mask-image: url(" + c + "); -webkit-mask-image: url(" + c + ')">' + d + "</span></span>"
								}
								return '<span class="line">' + d + "</span>"
							}
							return " / " == a.text ? '<span class="seperator">' + a.text + "</span>" : '<span class="text">' + a.text + "</span>"
						}),
						f = a.InnerImages.filter(function (a) {
							return "image" == a.imageType
						}).length,
						g = d || 0 != e.length ? '<div class="boxed" ' + (a.underlineColor ? 'style="border-bottom-color: #' + a.underlineColor + '"' : "") + ">" + d + e.join("") + "</div>" : "";
					return '<div class="mvf-wrapper ' + (a.agencyIconId ? "has-agency" : "") + " " + (a.transitTypeIconId ? "has-transit" : "") + " " + (0 == f ? "no-image" : 1 == f ? "single-image" : "multi-image") + '">' + c + g + "</div>"
				}, b.prototype.getImageHTML = function (a, b, c) {
					var d, e = this.getImageById(a);
					if (!e) return "";
					if (!b || "string" == typeof e && "iconified-transit-line" != e) e.layers && ("image" != e.layers[0].type || isNaN(e.layers[0].id) || (a = e.layers[0].id)), d = this.getImageById(a) ? {
						agencyIconId: null,
						agencyOffsetInPixels: null,
						transitTypeIconId: null,
						transitIconOffsetInPixels: null,
						underlineColor: null,
						InnerImages: [{
							imageType: "image",
							imageId: a,
							color: null,
							text: null
						}]
					} : {
						agencyIconId: -61,
						agencyOffsetInPixels: null,
						transitTypeIconId: null,
						transitIconOffsetInPixels: null,
						underlineColor: null,
						InnerImages: []
					};
					else if ("iconified-transit-line" == e) d = {
						agencyIconId: null,
						agencyOffsetInPixels: null,
						transitTypeIconId: b[3],
						transitIconOffsetInPixels: null,
						underlineColor: b[1],
						InnerImages: c && 1 == c ? [] : [{
							imageType: "text",
							imageId: null,
							color: "000000",
							text: b[2]
						}]
					};
					else {
						var f = null,
							g = b[3],
							h = null,
							i = null,
							j = "image";
						if (e.layers) {
							e.layers.length > 1 && b.length > 3 && (f = b[4]), "image" != e.layers[0].type || isNaN(e.layers[0].id) || (g = e.layers[0].id);
							for (var k = e.layers[e.layers.length - 1]; k.layers;) k = k.layers[k.layers.length - 1];
							"text" == k.type ? (j = "text", k.color && (i = b[1])) : (j = "image", k.color && (h = b[1]))
						}
						var l = this.getImageById(g);
						d = l ? {
							agencyIconId: f,
							agencyOffsetInPixels: null,
							transitTypeIconId: null,
							transitIconOffsetInPixels: null,
							underlineColor: i,
							InnerImages: [{
								imageType: j,
								imageId: g,
								color: h,
								text: b[2]
							}]
						} : {
							agencyIconId: -61,
							agencyOffsetInPixels: null,
							transitTypeIconId: null,
							transitIconOffsetInPixels: null,
							underlineColor: null,
							InnerImages: []
						}
					}
					return this.getMVFImageHtml(d)
				}, b.prototype.getImageById = function (a) {
					if (n[a]) return n[a];
					if (this.cachedImages[a]) {
						var b = this.cachedImages[a];
						if (b.imageType == MVImageType.MVF) {
							l.log("image id = " + a);
							var c = atob(b.imageData);
							c = c.replace(/[^\x00-\x7f]/g, "");
							var d = JSON.parse(c);
							return l.log(d), n[a] = d, d
						}
						if (b.imageType == MVImageType.PNG) {
							b.imageData.length % 4 != 0 && (b.imageData += "====".substr(0, 4 - b.imageData.length % 4));
							var e = "data:image/png;base64," + b.imageData;
							return n[a] = e, e
						}
					}
					return null
				}, b.prototype.syncCollectedImages = function () {
					var a = this;
					if (!this.isEnabled) return l.log("Image service is disabled. Skipping sync"), this.$q.when(0);
					if (this.imagesToSync.length > 0) {
						var b = this.imagesToSync.slice(0);
						return this.imagesToSync = [], this.imagesAddedToSync = new Map, this.httpService.get("/api/image", {
							params: {
								ids: b.join(",")
							}
						}).then(function (c) {
							if (c) {
								for (var d = 0, e = c; d < e.length; d++) {
									var f = e[d],
										g = f.entity.image;
									a.cachedImages[g.imageId] = g
								}
								return l.log(a.cachedImages), b.length
							}
							return 0
						}).catch(function (b) {
							return l.error("Error getting Sync images: " + JSON.stringify(b)), a.isEnabled = !1, 0
						})
					}
					return this.$q.when(0)
				}, b.prototype.addImageToSync = function (a) {
					a < 0 || this.cachedImages[a] || this.imagesAddedToSync[a] || (this.imagesToSync.push(a), this.imagesAddedToSync[a] = !0, this.imagesRequested[a] = !0)
				}, b.prototype.addImagesToSync = function (a) {
					var b = this;
					a.forEach(function (a) {
						b.addImageToSync(a)
					})
				}, b = e([i.Service({
					name: "imageService"
				}), g(0, i.Inject("$q")), g(1, i.Inject("$sce")), f("design:paramtypes", [Function, Object, k.HttpService])], b)
			}(h.ServiceBase);
		b.ImageService = m;
		var n = {
			"-1": "/images/stations/xhdpi/bus.png",
			"-2": "/images/stations/xhdpi/bus.png",
			"-3": "/images/stations/xhdpi/cablecar.png",
			"-4": "/images/stations/xhdpi/cablecar.png",
			"-5": "/images/stations/xhdpi/ferry.png",
			"-6": "/images/stations/xhdpi/ferry.png",
			"-7": "/images/stations/xhdpi/funicular.png",
			"-8": "/images/stations/xhdpi/funicular.png",
			"-9": "/images/stations/xhdpi/gondola.png",
			"-10": "/images/stations/xhdpi/gondola.png",
			"-11": "/images/stations/xhdpi/rail.png",
			"-12": "/images/stations/xhdpi/rail.png",
			"-13": "/images/stations/xhdpi/subway.png",
			"-14": "/images/stations/xhdpi/subway.png",
			"-15": "/images/stations/xhdpi/tram.png",
			"-16": "/images/stations/xhdpi/tram.png",
			"-17": "transit_color_indicator.png",
			"-18": "transit_border.png",
			"-19": JSON.parse(a("../mvf/transit_line.json!text")),
			"-20": "iconified-transit-line",
			"-50": "/images/stations/xhdpi/tram.png",
			"-51": "/images/stations/xhdpi/subway.png",
			"-52": "/images/stations/xhdpi/rail.png",
			"-53": "/images/stations/xhdpi/bus.png",
			"-54": "/images/stations/xhdpi/ferry.png",
			"-55": "/images/stations/xhdpi/cablecar.png",
			"-56": "/images/stations/xhdpi/gondola.png",
			"-57": "/images/stations/xhdpi/funicular.png",
			"-58": "/images/routeTypes/tram.svg",
			"-59": "/images/routeTypes/subway.svg",
			"-60": "/images/routeTypes/rail.svg",
			"-61": "/images/routeTypes/bus.svg",
			"-62": "/images/routeTypes/ferry.svg",
			"-63": "/images/routeTypes/cablecar.svg",
			"-64": "/images/routeTypes/gondola.svg",
			"-65": "/images/routeTypes/funicular.svg",
			"-70": JSON.parse(a("../mvf/icon_default_line.json!text")),
			"-71": "/images/poi/street.svg",
			"-72": "/images/poi/street.svg",
			"-73": "/images/poi/city.svg",
			"-74": "/images/stations/mdpi/tram.png",
			"-75": "/images/stations/mdpi/subway.png",
			"-76": "/images/stations/mdpi/rail.png",
			"-77": "/images/stations/mdpi/bus.png",
			"-78": "/images/stations/mdpi/ferry.png",
			"-79": "/images/stations/mdpi/cablecar.png",
			"-80": "/images/stations/mdpi/gondola.png",
			"-81": "/images/stations/mdpi/funicular.png",
			"-82": "/images/routeTypes/tram.svg",
			"-83": "/images/routeTypes/subway.svg",
			"-84": "/images/routeTypes/rail.svg",
			"-85": "/images/routeTypes/bus.svg",
			"-86": "/images/routeTypes/ferry.svg",
			"-87": "/images/routeTypes/cablecar.svg",
			"-88": "/images/routeTypes/gondola.svg",
			"-89": "/images/routeTypes/funicular.svg",
			"-90": JSON.parse(a("../mvf/generic_colored_line_icon.json!text")),
			"-91": JSON.parse(a("../mvf/generic_colored_icon.json!text")),
			"-92": "line_color_square.png",
			"-93": "line_color_circle.png",
			"-94": "color_black.png",
			"-95": "color_lux.png",
			"-96": "color_suv.png",
			"-97": "color_van.png",
			"-98": "color_x.png",
			"-99": "color_xl.png",
			"-100": "mono_black.png",
			"-101": "mono_lux.png",
			"-102": "mono_suv.png",
			"-103": "mono_van.png",
			"-104": "mono_x.png",
			"-105": "mono_xl.png",
			"-106": "map_black.png",
			"-107": "icon_clock.png",
			"-108": "map_suv.png",
			"-109": "icon_price.png",
			"-110": "map_x.png",
			"-111": "map_xl.png",
			"-113": "station_bikes_layer_01.png",
			"-114": "station_bikes_layer_02.png",
			"-115": "station_bikes_layer_03.png",
			"-116": "station_bikes_layer_04.png",
			"-117": "station_bikes_layer_05.png",
			"-118": JSON.parse(a("../mvf/bike_station.json!text")),
			"-119": "drive_now_map_icon_cluster.png",
			"-120": JSON.parse(a("../mvf/drive_now_cluster_station.json!text")),
			"-121": "drive_now_map_icon.png",
			"-122": "bikes_illustration.png",
			"-300": "uber_surge.png"
		};
		return c.exports
	}), System.registerDynamic("app/common/objectHelpers.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			for (var b in a) return !1;
			return !0
		}

		function e(a, b, c) {
			var d = a[b];
			a[b] = c(d)
		}

		function f(a, b) {
			return void 0 === a ? !!b : !!a
		}
		return Object.defineProperty(b, "__esModule", {
				value: !0
			}),
			function () {
				if (! function () {}.name) try {
					Object.defineProperty(Function.prototype, "name", {
						get: function () {
							var a = this.toString().match(/^function\s*([^\s(]+)/);
							if (!a || !a.length) return "UNKNWON";
							var b = a[1];
							return b ? (Object.defineProperty(this, "name", {
								value: b
							}), b) : "UNKNWON"
						}
					})
				} catch (a) {}
			}(), b.isEmptyObject = d, b.hook = e, b.toBoolean = f, c.exports
	}), System.registerDynamic("app/common/AppStorageKeys.js", [], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = function () {
			function a() {}
			return a.LOCALE_ID = "LOCALE", a.METRO_ID = "METRO", a.HIDE_INSTALL_APP_BANNER = "HIDE_INSTALL_APP_BANNER", a.USE_MY_LOCATION = "USE_MY_LOCATION", a.RECENT_LOCATIONS = "SUGGESTED_RECENT_LOCATIONS", a.SIDE_NAVIGATION_STATE = "SIDE_NAVIGATION_STATE", a.IGNORE_SPLASH = "IGNORE_SPLASH", a
		}();
		return b.AppStorageKeys = d, c.exports
	}), System.registerDynamic("app/common/AppState.js", ["../models/tripPlan", "./AppStorageKeys"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			try {
				if (window.localStorage) return window.localStorage.getItem(a)
			} catch (a) {}
			return null
		}

		function e(a) {
			try {
				if (window.sessionStorage) return window.sessionStorage.getItem(a)
			} catch (a) {}
			return null
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var f = a("../models/tripPlan"),
			g = a("./AppStorageKeys");
		return function (a) {
			a[a.Widget = 1] = "Widget", a[a.Seo = 2] = "Seo"
		}(b.MoovitOrigin || (b.MoovitOrigin = {})), b.appState = {
			appReady: !1,
			uiReady: !1,
			hasError: !1,
			isInstallAppBannerVisible: !d("HIDE_INSTALL_APP_BANNER"),
			isSplashScreenVisible: !e(g.AppStorageKeys.IGNORE_SPLASH),
			isFromSharing: !1,
			isFormInUse: !1,
			loadedFromUrl: null,
			error: null,
			origin: null,
			originalUtmSource: null,
			originalState: null,
			originalStateParams: null,
			isQrBannerVisible: !1,
			user: {
				metro: null,
				metroCustomDimensions: null,
				metroId: null,
				isUnresolvedMetro: !1,
				localeId: null,
				locale: null,
				userKey: null,
				ipAddress: null,
				useMyLocation: !1,
				apiKey: null,
				minimizeQRCodeBanner: !1
			},
			customer: null,
			tripPlan: {
				from: null,
				to: null,
				routes: [],
				originalRoute: null,
				route: null,
				sections: [],
				step: null,
				time: {
					when: new Date,
					refPoint: f.RefPoint.LeaveNow
				},
				routePriority: f.RoutePriority.BestRoute,
				routeTypes: null,
				recentLocations: null,
				similarRouteIndex: 0,
				metroId: null,
				metroSeoName: null,
				lang: null,
				multiModal: !1
			},
			view: {
				back: null
			},
			lines: {
				lineGroupId: null,
				lineId: null,
				stopId: null,
				epochDay: null,
				lineSearch: null,
				stop: null,
				metroId: null,
				metroSeoName: null,
				lang: null,
				lineShortName: null
			},
			alerts: {
				alertIds: [],
				alertEntities: []
			},
			sideNavigation: {
				state: null
			},
			itinerary: null
		}, c.exports
	}), System.registerDynamic("app/services/Service.js", ["../common/AppState", "../fx/DI"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../common/AppState"),
			e = a("../fx/DI"),
			f = function () {
				function a(a) {
					a.log("ctor"), this.logger = a, this.initPromise = null
				}
				return a.prototype.init = function () {
					return e.resolve("$q").when(!0)
				}, a.prototype.ensureInit = function () {
					return this.initPromise || (this.initPromise = this.init()), this.initPromise
				}, Object.defineProperty(a.prototype, "state", {
					get: function () {
						return d.appState
					},
					enumerable: !0,
					configurable: !0
				}), a
			}();
		return b.ServiceBase = f, c.exports
	}), System.registerDynamic("app/fx/Annotations.js", ["reflect", "./Registry"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return function (b) {
				Reflect.defineMetadata("directive", {
					options: a
				}, b), a.directive = b, i(b), j.registerDirective(a)
			}
		}

		function e(a) {
			return function (b) {
				Reflect.defineMetadata("component", a, b), a.controller = b, i(b), j.registerComponent(a)
			}
		}

		function f(a) {
			return function (b) {
				Reflect.defineMetadata("service", a, b), a.service = b, i(b), j.registerService(a)
			}
		}

		function g(a) {
			return function (b) {
				Reflect.defineMetadata("module", a, b), a.module = b, i(b), j.registerModule(a)
			}
		}

		function h(a) {
			return function (b, c, d) {
				var e = Reflect.getMetadata("injectAnnotations", b);
				e || (e = [], Reflect.defineMetadata("injectAnnotations", e, b)), e[d] = {
					index: d,
					name: a
				}
			}
		}

		function i(a) {
			var b = Reflect.getMetadata("design:paramtypes", a),
				c = Reflect.getMetadata("injectAnnotations", a),
				d = [];
			b.forEach(function (a, b) {
				var e = null,
					f = null,
					g = null;
				if (c && (g = c[b])) e = g.name;
				else {
					if (!(f = Reflect.getMetadata("service", a))) throw new Error("Failed to resolve dependency: " + a);
					e = f.name
				}
				d.push(e)
			}), a.$inject = d
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		}), a("reflect");
		var j = a("./Registry");
		return b.Directive = d, b.Component = e, b.Service = f, b.Module = g, b.Inject = h, c.exports
	}), System.registerDynamic("app/services/standaloneStoreService.js", ["./Service", "../fx/Annotations", "../fx/Logger"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./Service"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = j.createLogger("StandaloneStoreService"),
			l = function (a) {
				function b(b) {
					var c = a.call(this, k) || this;
					return c.$timeout = b, c._isUpdateNeeded = !1, c.updateFlagTimeout = null, c.sessionExpiredTimeout = null, c.isSessionExpired = null, c
				}
				return d(b, a), Object.defineProperty(b.prototype, "isUpdateNeeded", {
					get: function () {
						return this._isUpdateNeeded
					},
					enumerable: !0,
					configurable: !0
				}), b.prototype.setUpdateNeededFlagDelayed = function (a) {
					var b = this;
					this.updateFlagTimeout || (this.updateFlagTimeout = this.$timeout(function () {
						b._isUpdateNeeded = !0
					}, a))
				}, b.prototype.setSessionExpired = function (a) {
					var b = this;
					if (!a && this.sessionExpiredTimeout) return this.$timeout.cancel(this.sessionExpiredTimeout), void(this.sessionExpiredTimeout = null);
					a && !this.sessionExpiredTimeout && (this.sessionExpiredTimeout = this.$timeout(function () {
						b.isSessionExpired = a, b.reportGAEvent("blocked")
					}, 5e3))
				}, b.prototype.reportGAEvent = function (a) {
					k.log("Tracking event: Reblaze; " + a), "undefined" != typeof dataLayer && dataLayer.push({
						event: "codeTriggeredEvent",
						eventCategory: "Reblaze",
						eventAction: a,
						eventLabel: ""
					})
				}, b = e([i.Service({
					name: "standaloneStoreService"
				}), g(0, i.Inject("$timeout")), f("design:paramtypes", [Object])], b)
			}(h.ServiceBase);
		return b.StandaloneStoreService = l, c.exports
	}), System.registerDynamic("app/services/httpService.js", ["../fx/Logger", "../fx/Annotations", "./Service", "../common/AppState", "../common/objectHelpers", "./standaloneStoreService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("../fx/Logger"),
			i = a("../fx/Annotations"),
			j = a("./Service"),
			k = a("../common/AppState"),
			l = a("../common/objectHelpers"),
			m = a("./standaloneStoreService"),
			n = h.createLogger("HttpService"),
			o = function (a) {
				function b(b, c, d) {
					var e = a.call(this, n) || this;
					return e.$q = b, e.$http = c, e.standaloneStoreService = d, e.UPDATE_MESSAGE_DELAY = 96e4, e.isHttpBlocked = !1, e
				}
				return d(b, a), b.prototype.get = function (a, b) {
					var c = this;
					return this.isHttpBlocked ? this.$q.when(null) : (n.log("get", a, b), b = b || {}, this.injectHeaders(b), this.$http.get(a, b).then(function (a) {
						return c.checkForUpdates(a), c.reportResponseReblazeBlock(!0), a.data
					}, function (a) {
						403 === a.status && c.reportResponseReblazeBlock(!1)
					}))
				}, b.prototype.post = function (a, b, c) {
					var d = this;
					return this.isHttpBlocked ? this.$q.when(null) : (c = c || {}, this.injectHeaders(c), this.$http.post(a, b, c).then(function (a) {
						return d.checkForUpdates(a), d.reportResponseReblazeBlock(!0), a.data
					}, function (a) {
						403 === a.status && d.reportResponseReblazeBlock(!1)
					}))
				}, b.prototype.checkForUpdates = function (a) {
					a.headers("version") !== buildVersion && this.standaloneStoreService.setUpdateNeededFlagDelayed(this.UPDATE_MESSAGE_DELAY)
				}, b.prototype.injectHeaders = function (a) {
					if (a.headers = a.headers || {}, l.toBoolean(a.userKeyHeaderRequired, !0)) {
						var b = k.appState.user.userKey;
						if (!b) throw new Error("No userKey is available");
						a.headers.MOOVIT_USER_KEY = b
					}
					if (k.appState.customer && k.appState.customer.apiKey && (a.headers.MOOVIT_API_KEY = k.appState.customer.apiKey), k.appState.user.gtfsLanguage && (a.headers.MOOVIT_GTFS_LANGUAGE = k.appState.user.gtfsLanguage), l.toBoolean(a.metroIdHeaderRequired, !0)) {
						var c = k.appState.user.metroId;
						if (!c) throw new Error("No metroId is available");
						a.headers.MOOVIT_METRO_ID = c
					}
					var d = "5.5.0.1/" + buildVersion;
					a.headers.MOOVIT_CLIENT_VERSION = d, a.headers.MOOVIT_APP_TYPE = "WEB_TRIP_PLANNER", window.rbzid && validBase64RE.test(window.rbzid) && (a.headers.rbzid = window.rbzid)
				}, b.prototype.reportResponseReblazeBlock = function (a) {
					this.standaloneStoreService.setSessionExpired(!a)
				}, b.prototype.injectReblazeScriptTag = function () {
					var a = "script",
						b = "rbzscr",
						c = document.getElementById(b);
					c && c.parentNode.removeChild(c);
					var d, e = document.getElementsByTagName(a)[0];
					d = document.createElement(a), d.id = b, d.onload = function () {}, d.src = "/c3650cdf-216a-4ba2-80b0-9d6c540b105e58d2670b-ea0f-484e-b88c-0e2c1499ec9bd71e4b42-8570-44e3-89b6-845326fa43b6", e.parentNode.insertBefore(d, e)
				}, b = e([i.Service({
					name: "httpService"
				}), g(0, i.Inject("$q")), g(1, i.Inject("$http")), f("design:paramtypes", [Object, Object, m.StandaloneStoreService])], b)
			}(j.ServiceBase);
		return b.HttpService = o, c.exports
	}), System.registerDynamic("common/consts.js", [], !0, function (a, b, c) {
		"use strict";
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.NYC_METRO_ID = 121, b.DEFAULT_MAX_FUTURE_DAYS = 4, c.exports
	}), System.registerDynamic("common/latlon.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return {
				latitude: Math.round(1e6 * a.lat),
				longitude: Math.round(1e6 * a.lng)
			}
		}
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.toLatLonE6 = d, c.exports
	}), System.registerDynamic("app/models/latlng.js", ["../../common/latlon"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../../common/latlon"),
			e = function () {
				function a() {}
				return a.min = function (a, b) {
					a.lat > b.lat && (a.lat = b.lat), a.lng > b.lng && (a.lng = b.lng)
				}, a.max = function (a, b) {
					a.lat < b.lat && (a.lat = b.lat), a.lng < b.lng && (a.lng = b.lng)
				}, a.toMvLatLon = function (a) {
					return d.toLatLonE6(a)
				}, a.toString = function (a) {
					return a.lat + "_" + a.lng
				}, a.distanceTo = function (b, c) {
					var d = a.toMvLatLon(b),
						e = d.latitude - c.latitude,
						f = d.longitude - c.longitude;
					return Math.sqrt(e * e + f * f)
				}, a.equals = function (a, b) {
					return a == b || (a == b || null != a && null != b) && (a.lat == b.lat && a.lng == b.lng)
				}, a.parse = function (a) {
					if (!a) return null;
					var b = a.split("_"),
						c = parseFloat(b[0]);
					if (void 0 === c) throw new Error("Failed to parse LatLng: " + a);
					var d = parseFloat(b[1]);
					if (void 0 === d) throw new Error("Failed to parse LatLng: " + a);
					return {
						lat: c,
						lng: d
					}
				}, a.fromMvLatLon = function (a) {
					return {
						lat: a.latitude / 1e6,
						lng: a.longitude / 1e6
					}
				}, a.maxLatLng = function () {
					return {
						lat: 90,
						lng: 180
					}
				}, a.minLatLng = function () {
					return {
						lat: -90,
						lng: -180
					}
				}, a
			}();
		return b.LatLngHelpers = e, c.exports
	}), System.registerDynamic("app/common/iconHelpers.js", ["../models/tripPlan"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			var b = j[a];
			return b ? "/images/routeTypes/" + b + ".svg" : null
		}

		function e(a, b) {
			var c = j[a];
			return c ? "/images/stations/" + (b ? "xhdpi/" : "mdpi/") + c + ".png" : null
		}

		function f(a) {
			j[i.SuggestedRouteStepType.WalkTo] = "routeTypes/walking.svg", j[i.SuggestedRouteStepType.DriveTo] = "routeTypes/car.svg", j[i.SuggestedRouteStepType.WaitFor] = "time.svg", j[i.SuggestedRouteStepType.StartFrom] = "pin_from.svg";
			var b = j[a];
			return b ? "/images/" + b : null
		}

		function g(a) {
			return "#" + h(a)
		}

		function h(a) {
			return [(16711680 & a) >> 16, (65280 & a) >> 8, 255 & a].map(function (a) {
				var b = a.toString(16);
				return a < 16 && (b = "0" + b), b
			}).join("")
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var i = a("../models/tripPlan"),
			j = {};
		return j[i.LegType.StartFrom] = "street", j[MVLegType.Walk] = "walking", j[MVLegType.Car] = "car", j[MVLegType.Bus] = "bus", j[MVLegType.Subway] = "subway", j[MVLegType.Tram] = "tram", j[MVLegType.Rail] = "rail", j[MVLegType.Funicular] = "funicular", j[MVLegType.Ferry] = "ferry", j[MVLegType.Gondola] = "gondola", b.getLegTypeIconUrl = d, b.getLegTypeStationUrl = e, b.getStepTypeIconUrl = f, b.rgbToHex = g, b.rgbToMvfHex = h, c.exports
	}), System.registerDynamic("app/models/tripPlan.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a, b) {
			return a.id == b.id && a.type == b.type && a.latlng.lat == b.latlng.lat && a.latlng.lng == b.latlng.lng && a.name == b.name
		}

		function e(a, b) {
			return !(a.routeType != b.routeType || a.time.refPoint != j.LeaveNow && a.time.refPoint != j.Last || a.time.refPoint != b.time.refPoint || !l.equals(a.transitTypes, b.transitTypes) || !d(a.fromLocation, b.fromLocation) || !d(a.toLocation, b.toLocation))
		}

		function f(a) {
			if (!a) return a;
			var b = JSON.parse(JSON.stringify(a));
			return h(b), b
		}

		function g(a) {
			if (!a) return a;
			var b = JSON.parse(JSON.stringify(a));
			return i(b), b
		}

		function h(a) {
			return i(a.fromLocation), i(a.toLocation), a
		}

		function i(a) {
			return a.imageHtml = null, a
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
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
	}), System.registerDynamic("node_modules/object-assign/index.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(a)
		}

		function e() {
			try {
				if (!Object.assign) return !1;
				var a = new String("abc");
				if (a[5] = "de", "5" === Object.getOwnPropertyNames(a)[0]) return !1;
				for (var b = {}, c = 0; c < 10; c++) b["_" + String.fromCharCode(c)] = c;
				if ("0123456789" !== Object.getOwnPropertyNames(b).map(function (a) {
						return b[a]
					}).join("")) return !1;
				var d = {};
				return "abcdefghijklmnopqrst".split("").forEach(function (a) {
					d[a] = a
				}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, d)).join("")
			} catch (a) {
				return !1
			}
		}
		var f = Object.getOwnPropertySymbols,
			g = Object.prototype.hasOwnProperty,
			h = Object.prototype.propertyIsEnumerable;
		return c.exports = e() ? Object.assign : function (a, b) {
			for (var c, e, i = d(a), j = 1; j < arguments.length; j++) {
				c = Object(arguments[j]);
				for (var k in c) g.call(c, k) && (i[k] = c[k]);
				if (f) {
					e = f(c);
					for (var l = 0; l < e.length; l++) h.call(c, e[l]) && (i[e[l]] = c[e[l]])
				}
			}
			return i
		}, c.exports
	}), System.registerDynamic("app/models/converters.js", ["./latlng", "../common/iconHelpers", "../fx/Logger", "./tripPlan", "./lines", "moment", "object-assign"], !0, function (a, b, c) {
		"use strict";

		function d(a, b) {
			return Math.ceil((b - a) / 6e4)
		}

		function e(a) {
			return 60 * a.getTimezoneOffset() * 1e3
		}

		function f(a) {
			return a.getTime() - e(a)
		}

		function g(a) {
			var b = e(W(a).toDate());
			return W(a + b).toDate()
		}

		function h(a) {
			return a.format("LT")
		}

		function i(a) {
			var b = e(W(a).toDate());
			return h(W(a + b))
		}

		function j(a) {
			return moovitAssetsPrefix && (a = "/" + moovitAssetsPrefix + a), a
		}

		function k(a) {
			return a.carpoolRideLeg ? U.LegType.CarPoolRide : a.lineWithAlternarivesLeg ? U.LegType.Bus : a.walkLeg ? U.LegType.Walk : a.pathwayWalkLeg ? U.LegType.WalkToPath : a.waitToTaxiLeg || a.waitToMultiLineLeg ? U.LegType.WaitFor : a.taxiLeg ? U.LegType.Car : a.bicycleLeg ? U.LegType.Bicycle : a.bicycleRentalLeg ? U.LegType.Bicycle : U.LegType.Bus
		}

		function l(a, b, c) {
			var d = {
				title: "",
				subTitle: [{
					data: "",
					isImage: !1
				}]
			};
			if (a[b]) {
				d.title = a[b].stopName;
				var e = a[b].stopCode;
				e && (d.subTitle[0].data = c.instant("web_trip_plan_station_id", {
					param1: e
				}))
			}
			return d
		}

		function m(a, b, c, d, e) {
			var f = a[b],
				g = d ? "pathway_guidance_exit" : "pathway_guidance_entrance",
				h = {
					title: null,
					subTitle: null
				};
			return f && (f.mvPathways.forEach(function (a) {
				a.pathwayId === c && (h.subTitle = [{
					data: e.instant(g, {
						param1: a.name
					}),
					isImage: !1
				}])
			}), h.title = f.stopName), h
		}

		function n(a, b, c, e, g, h, j, n, p, q) {
			var t = [],
				u = new Map,
				v = !1,
				w = [],
				x = [],
				y = {},
				z = {};
			if (e.mVStopSyncedMetaDataList)
				for (var A = 0, B = e.mVStopSyncedMetaDataList; A < B.length; A++) {
					var C = B[A];
					u[C.stopId] = C
				}
			for (var D = c.length, E = F(c[0]).startTime, G = null, H = function (e) {
					var n = void 0,
						o = void 0,
						A = void 0,
						B = void 0,
						C = [{
							data: "",
							isImage: !1
						}],
						H = c[e],
						I = e < D - 1 ? c[e + 1] : null,
						J = P(H, u),
						K = k(H),
						N = r(g, u, H, I, j),
						R = s(g, H);
					if (!v) {
						B = a && a.name ? a.name : "", C = a && a.address ? a.address : [{
							data: "",
							isImage: !1
						}];
						var T = {
							leaveAt: {
								param1: i(F(c[0]).startTime)
							},
							legImageMetaData: null,
							legDescription: R
						};
						t.push({
							type: U.SuggestedRouteStepType.StartFrom,
							typeDescription: "tripplan_itinerary_startfrom",
							typeIconUrl: null,
							legType: U.LegType.StartFrom,
							title: B,
							subTitle: C,
							extra: T,
							isFirstInMultiLeg: !0,
							isLastInMultiLeg: null == I || !I.waitToMultiLineLeg,
							isRealTime: F(H).isRealTime,
							leg: J
						}), v = !0
					}
					var V = {
						alerts: {
							entities: []
						},
						leg: J,
						legType: K
					};
					if (H.pathwayWalkLeg) {
						n = U.SuggestedRouteStepType.WalkToPath, o = "tripplan_itinerary_walk", A = "/images/routeTypes/walking.svg";
						var W = m(u, H.pathwayWalkLeg.stopId, H.pathwayWalkLeg.originPathwayId, !1, q);
						B = W.title || B, C = W.subTitle || C, t.push(Q({
							type: n,
							typeDescription: o,
							typeIconUrl: A,
							title: B,
							subTitle: C,
							extra: {
								legImageMetaData: N
							},
							isFirstInMultiLeg: !1,
							isLastInMultiLeg: !0,
							isRealTime: F(H).isRealTime
						}, V))
					}
					if (H.walkLeg) {
						n = U.SuggestedRouteStepType.WalkTo, o = "tripplan_itinerary_walk", A = "/images/routeTypes/walking.svg";
						var W = {
							title: null,
							subTitle: null
						};
						I && I.pathwayWalkLeg ? W = m(u, I.pathwayWalkLeg.stopId, I.pathwayWalkLeg.originPathwayId, !1, q) : I && I.waitToMultiLineLeg ? W = l(u, I.waitToMultiLineLeg.waitAtStopId, q) : I && I.lineWithAlternarivesLeg ? W = l(u, I.lineWithAlternarivesLeg.alternativeLines[I.lineWithAlternarivesLeg.primaryAlternativeIndex].stopSequenceIds[0], q) : (B = b && b.name ? b.name : "", C = b && b.address ? b.address : [{
							data: "",
							isImage: !1
						}]), B = W.title || B, C = W.subTitle || C;
						var T = {
							distance: O(H.walkLeg.shape.distanceInMeters, p),
							distanceInMeters: H.walkLeg.shape.distanceInMeters,
							duration: d(H.walkLeg.time.startTime, H.walkLeg.time.endTime),
							instructions: H.walkLeg.walkingInstructoins.map(L),
							legImageMetaData: N,
							legDescription: R
						};
						t.push(Q({
							type: n,
							typeDescription: o,
							typeIconUrl: A,
							title: B,
							subTitle: C,
							extra: T,
							isFirstInMultiLeg: !1,
							isLastInMultiLeg: !0,
							isRealTime: F(H).isRealTime
						}, V))
					} else if (H.waitToMultiLineLeg) {
						n = U.SuggestedRouteStepType.WaitFor, o = "tripplan_itinerary_wait", A = "/images/time.svg";
						var X = H.waitToMultiLineLeg.alternatives[H.waitToMultiLineLeg.primaryAlternativeIndex],
							Y = t.length;
						H.waitToMultiLineLeg.waitAtStopId && (w.push(H.waitToMultiLineLeg.waitAtStopId), z[H.waitToMultiLineLeg.waitAtStopId] = Y), H.waitToMultiLineLeg.alternatives.forEach(function (a) {
							x.push(a.waitToLineId), y[a.waitToLineId] = Y
						}), B = "", C = [{
							data: "",
							isImage: !1
						}];
						var Z = {};
						H.waitToMultiLineLeg.alternatives.forEach(function (a) {
							Z[g[a.waitToLineId].title] = '<span style="color: ' + g[a.waitToLineId].color + '">' + g[a.waitToLineId].title + "</span>"
						});
						var $ = [];
						for (var _ in Z) $.push(Z[_]);
						B = $.join('<span class="seperator"> ' + q.instant("tripplan_itinerary_alt_route_divide_label") + " </span>"), X.waitToLineId && g[X.waitToLineId] && (C[0].data = g[X.waitToLineId].subTitle);
						var aa = void 0;
						aa = X.time.isRealTime ? d(f(new Date), X.time.endTime) - 1 : d(X.time.startTime, X.time.endTime);
						var ba = new Map;
						u[H.waitToMultiLineLeg.waitAtStopId].platformLines.forEach(function (a) {
							a.lineIds.forEach(function (b) {
								ba[b] = a.name
							})
						});
						var T = {
							startTime: {
								param1: i(X.time.startTime)
							},
							endTime: {
								param1: i(X.time.endTime)
							},
							duration: aa,
							arrivals: M(g, h, E, H, I, j),
							legImageMetaData: N,
							legDescription: R,
							platforms: ba,
							primaryLineId: X.waitToLineId
						};
						t.push(Q({
							type: n,
							typeDescription: o,
							typeIconUrl: A,
							title: B,
							subTitle: C,
							extra: T,
							isFirstInMultiLeg: !0,
							isLastInMultiLeg: !1,
							isRealTime: F(H).isRealTime
						}, V))
					} else if (H.lineWithAlternarivesLeg) {
						n = U.SuggestedRouteStepType.RideTo, o = "tripplan_itinerary_ride", A = S.getLegTypeIconUrl(k(H));
						var X = H.lineWithAlternarivesLeg.alternativeLines[H.lineWithAlternarivesLeg.primaryAlternativeIndex],
							ca = c[c.indexOf(H) + 1],
							W = {
								title: null,
								subTitle: null
							};
						W = ca && ca.pathwayWalkLeg ? m(u, ca.pathwayWalkLeg.stopId, ca.pathwayWalkLeg.destinationPathwayId, !0, q) : l(u, X.stopSequenceIds[X.stopSequenceIds.length - 1], q), B = W.title || B, C = W.subTitle || C, N.lineMetaData.summaryImageHtml = G.extra.legImageMetaData.lineMetaData.summaryImageHtml;
						var da = null,
							ea = H.lineWithAlternarivesLeg.alternativeLines.map(function (a, b) {
								var c = {
									lineTitle: g[a.lineId].title,
									lineId: g[a.lineId].id,
									lineColor: g[a.lineId].color,
									stations: a.stopSequenceIds.map(function (a) {
										return u[a] ? u[a].stopName : ""
									}),
									duration: d(a.time.startTime, a.time.endTime)
								};
								return b == H.lineWithAlternarivesLeg.primaryAlternativeIndex && (da = c), c
							}),
							T = {
								lines: ea,
								selectedLine: da,
								legImageMetaData: N,
								legDescription: R
							},
							fa = t.length;
						X.stopSequenceIds.length > 1 && (w.push(X.stopSequenceIds[X.stopSequenceIds.length - 1]), z[X.stopSequenceIds[X.stopSequenceIds.length - 1]] = fa), t.push(Q({
							type: n,
							typeDescription: o,
							typeIconUrl: A,
							title: B,
							subTitle: C,
							extra: T,
							isFirstInMultiLeg: !1,
							isLastInMultiLeg: !ca || !!ca.waitToMultiLineLeg,
							isRealTime: F(H).isRealTime
						}, V))
					} else if (H.taxiLeg) {
						n = U.SuggestedRouteStepType.DriveTo, o = "tripplan_itinerary_drive", A = "/images/routeTypes/car.svg";
						var W = {
								title: null,
								subTitle: null
							},
							ga = c.length > e + 2 ? c[e + 2] : null,
							ha = I && (I.parkingLeg || I.walkLeg) ? ga : I;
						if (ha && ha.waitToMultiLineLeg) W = l(u, ha.waitToMultiLineLeg.waitAtStopId, q);
						else if (ha && ha.lineWithAlternarivesLeg) W = l(u, ha.lineWithAlternarivesLeg.alternativeLines[ha.lineWithAlternarivesLeg.primaryAlternativeIndex].stopSequenceIds[0], q);
						else if (ha && ha.pathwayWalkLeg) W = m(u, ha.pathwayWalkLeg.stopId, ha.pathwayWalkLeg.destinationPathwayId, !0, q);
						else if (ha && ha.parkingLeg && c.length > c.indexOf(ha) + 1) {
							var ia = c[c.indexOf(ha) + 1];
							ia && ia.waitToMultiLineLeg ? W = l(u, ia.waitToMultiLineLeg.waitAtStopId, q) : ia && ia.lineWithAlternarivesLeg && (W = l(u, ia.lineWithAlternarivesLeg.alternativeLines[ia.lineWithAlternarivesLeg.primaryAlternativeIndex].stopSequenceIds[0], q))
						} else B = b && b.name ? b.name : "", C = b && b.address ? b.address : [{
							data: "",
							isImage: !1
						}];
						B = W.title || B, C = W.subTitle || C;
						var T = {
							distance: O(H.taxiLeg.shape.distanceInMeters, p),
							duration: d(H.taxiLeg.time.startTime, H.taxiLeg.time.endTime),
							legImageMetaData: N,
							legDescription: R
						};
						t.push(Q({
							type: n,
							typeDescription: o,
							typeIconUrl: A,
							title: B,
							subTitle: C,
							extra: T,
							isFirstInMultiLeg: !1,
							isLastInMultiLeg: !0,
							isRealTime: F(H).isRealTime
						}, V))
					}
					E = F(H).endTime;
					var ja = t[t.length - 1];
					G && (G.nextStep = ja, ja.previousStep = G), G = t[t.length - 1]
				}, I = 0; I < D; I++) H(I);
			return o(w, x, z, y, t, n), t
		}

		function o(a, b, c, d, e, f) {
			(a.length > 0 || b.length > 0) && f && f.getRouteAlerts(a, b).then(function (a) {
				if (a && a.data)
					for (var b = 0, f = a.data; b < f.length; b++) {
						var g = f[b],
							h = {
								title: g.serviceAlertEffect,
								entityIdentifier: g.entityIdentidier
							};
						g.entityIdentidier.entityType == MVEntityType.Stop ? null != c[g.entityIdentidier.id] && e[c[g.entityIdentidier.id]].alerts.entities.push(h) : g.entityIdentidier.entityType == MVEntityType.Line && null != d[g.entityIdentidier.id] && e[d[g.entityIdentidier.id]].alerts.entities.push(h)
					}
			})
		}

		function p(a, b, c) {
			a = a.slice();
			var d = a[0],
				e = a[1],
				f = a[2],
				g = a[3],
				h = a[4];
			if (f.length > 6) {
				f = "00" != f.slice(0, 2) ? f.substr(2) : null
			}
			for (var i = a.slice(7), j = [], k = !1, l = 0; l < i.length; l += 4)
				if (0 != +i[l + 1] || "" != i[l + 2]) {
					var m = {
						type: i[l],
						imageId: i[l + 1],
						text: i[l + 2],
						color: i[l + 3]
					};
					m.color.length > 6 && (m.color = m.color.substr(2)), j.push(m), k = k || "image" == m.type
				}
			var n = !b || b && k;
			b && (j = n ? j.filter(function (a) {
				return "text" != a.type || " / " == a.text
			}) : j.filter(function (a) {
				return "text" != a.type
			}));
			var o = {
				agencyIconId: +d,
				agencyOffsetInPixels: +e,
				underlineColor: f,
				transitTypeIconId: +g,
				transitIconOffsetInPixels: +h,
				InnerImages: j.map(function (a) {
					return {
						imageType: a.type,
						imageId: a.imageId,
						text: a.text,
						color: a.color
					}
				})
			};
			return c.getMVFImageHtml(o)
		}

		function q(a, b) {
			var c = /[^a-zA-Z]/g,
				d = /[^0-9]/g,
				e = parseInt(a, 10),
				f = parseInt(b, 10);
			if (isNaN(e) && isNaN(f)) {
				var g = a.replace(c, ""),
					h = b.replace(c, "");
				if (g === h) {
					var i = parseInt(a.replace(d, ""), 10),
						j = parseInt(b.replace(d, ""), 10);
					return i === j ? 0 : i > j ? 1 : -1
				}
				return g > h ? 1 : -1
			}
			return isNaN(e) ? 1 : isNaN(f) ? -1 : e > f ? 1 : -1
		}

		function r(a, b, c, e, f) {
			var g, h, i = null;
			c.walkLeg && e && (e.waitToMultiLineLeg || e.pathwayWalkLeg) ? e.waitToMultiLineLeg ? g = e.waitToMultiLineLeg.waitAtStopId : e.pathwayWalkLeg && (g = e.pathwayWalkLeg.stopId) : c.waitToMultiLineLeg && (i = [], c.waitToMultiLineLeg.alternatives.forEach(function (a, b) {
				b == c.waitToMultiLineLeg.primaryAlternativeIndex ? h = a.waitToLineId : i.push(a.waitToLineId)
			}), g = c.waitToMultiLineLeg.waitAtStopId), c.lineWithAlternarivesLeg && (i = [], c.lineWithAlternarivesLeg.alternativeLines.forEach(function (a, b) {
				b == c.lineWithAlternarivesLeg.primaryAlternativeIndex ? h = a.lineId : i.push(a.lineId)
			}), g = c.lineWithAlternarivesLeg.alternativeLines[c.lineWithAlternarivesLeg.primaryAlternativeIndex].stopSequenceIds[0]);
			var j = "",
				k = [],
				l = "",
				m = null;
			h && a[h] && (m = a[h], a[h].title && (j = a[h].title), a[h].color && (l = a[h].color));
			var n = null;
			if (m)
				if (n = X({}, m), n.summaryImageData = X({}, n.summaryImageData), n.stepImageData = X({}, n.stepImageData), k = [a[h].title].concat(i.map(function (b) {
						return a[b].title
					})), k = k.filter(function (a, b, c) {
						return c.indexOf(a) === b
					}), k.sort(q), i && i.length > 0 && (n.summaryImageData.params[2] = k.join("/")), c.waitToMultiLineLeg && c.waitToMultiLineLeg.multiLinesImage && c.waitToMultiLineLeg.multiLinesImage.parameters) {
					n.summaryImageHtml = p(c.waitToMultiLineLeg.multiLinesImage.parameters, !1, f);
					var o = {},
						r = c.waitToMultiLineLeg.alternatives.map(function (b) {
							var c = a[b.waitToLineId],
								d = c.summaryImageData.params[3] + "_" + c.summaryImageData.params[1];
							if (o[d]) return null;
							o[d] = !0;
							var e = c.summaryImageData.params.slice(0, 4);
							return f.getImageHTML(c.summaryImageData.id, e, !0)
						});
					n.stepImageHtml = r.filter(function (a) {
						return a
					}).join(" / ")
				} else n.summaryImageHtml = f.getImageHTML(n.summaryImageData.id, n.summaryImageData.params);
			return {
				lineNumber: j,
				allPossibleLineNumbers: k,
				lineColor: l,
				walkingTime: c.walkLeg || c.pathwayWalkLeg ? d(F(c).startTime, F(c).endTime) : 0,
				lineMetaData: n,
				stopMetaData: g && b[g] ? b[g] : null
			}
		}

		function s(a, b) {
			var c = [];
			if (b.waitToMultiLineLeg && (c = b.waitToMultiLineLeg.alternatives.map(function (a) {
					return a.waitToLineId
				})), b.lineWithAlternarivesLeg && (c = b.lineWithAlternarivesLeg.alternativeLines.map(function (a) {
					return a.lineId
				})), c.length > 0) {
				var e = [];
				return c.forEach(function (b) {
					if (b && a[b]) {
						var c = a[b];
						e.push("" + (c.title ? c.title : "") + (c.subTitle ? c.title ? " - " + c.subTitle : c.subTitle : ""))
					}
				}), e = e.filter(function (a, b, c) {
					return c.indexOf(a) === b
				}), e.sort(q), {
					value: e.join(" / "),
					translateKey: null,
					translateParams: null
				}
			}
			return b.walkLeg || b.pathwayWalkLeg ? {
				value: null,
				translateKey: "web_tripplan_itinerary_walk_single",
				translateParams: {
					param1: d(F(b).startTime, F(b).endTime)
				}
			} : null
		}

		function t(a, b, c, d) {
			if (b && b.lineGroupSummaryList)
				for (var e = null, f = null, g = null, h = void 0, i = 0, j = b.lineGroupSummaryList; i < j.length; i++) {
					var k = j[i],
						l = k.lineNumber || k.caption1 || k.caption2,
						m = d.getImageIndexForAgency(k.agencyId),
						n = d.getAgencyImageId(k.agencyId),
						o = 4;
					if (null !== m) {
						if (g = [null, S.rgbToMvfHex(k.color), k.lineNumber], h = g.slice(0), k.imageRefSet && k.imageRefSet.images)
							for (var p = 0, q = k.imageRefSet.images; p < q.length; p++) {
								var r = q[p];
								r.index == m && (e = r.imageRef), r.index == o && (f = r.imageRef)
							}
						if (k.innerImageIds && k.innerImageIds.images) {
							Y.log(k.innerImageIds.images);
							for (var s = 0, t = k.innerImageIds.images; s < t.length; s++) {
								var u = t[s];
								u.index == m && g.push(u.image.toString()), u.index == o && h.push(u.image.toString())
							}
						}
						Y.log("summaryImageId = " + f), Y.log("stepImageId = " + e)
					}
					f && n && h.push(n.toString());
					for (var v = 0, w = k.lineSummaries; v < w.length; v++) {
						var x = w[v];
						a[x.lineId] = {
							id: x.lineId,
							title: l,
							subTitle: x.destination,
							color: S.rgbToHex(k.color),
							summaryImageData: {
								id: f,
								params: h
							},
							stepImageData: {
								id: e,
								params: g
							},
							summaryImageHtml: c.getImageHTML(f, h),
							stepImageHtml: c.getImageHTML(e, g, !0)
						}
					}
				}
		}

		function u(a, b, c) {
			if (a) {
				var d = null,
					e = c.getImageIndexForAgency(a.agencyId);
				if (null !== e) {
					var f = [null, S.rgbToMvfHex(a.color), a.lineNumber],
						g = null;
					if (a.imageRefSet && a.imageRefSet.images)
						for (var h = 0, i = a.imageRefSet.images; h < i.length; h++) {
							var j = i[h];
							j.index == e && (g = j.imageRef)
						}
					if (a.innerImageIds && a.innerImageIds.images)
						for (var k = 0, l = a.innerImageIds.images; k < l.length; k++) {
							var m = l[k];
							m.index == e && f.push(m.image.toString())
						}
					null !== g && (d = b.getImageHTML(g, f))
				}
				return d
			}
		}

		function v(a, b, c) {
			b && b.mVStopSyncedMetaDataList && b.mVStopSyncedMetaDataList.map(function (b) {
				var d = b;
				if (d.image && (d.stopImageHtml = c.getImageHTML(b.image)), d.imageRefSet && d.imageRefSet.images && d.imageRefSet.images[0]) {
					var e = d.imageRefSet.images[0].imageRef;
					d.stopImageOnMapHtml = c.getImageHTML(e.imageId, e.parameters)
				}
				a[b.stopId] = d
			})
		}

		function w(a, b, c, d, e, f, g, h, i) {
			var j = B(f.lineSummaries, a, c, d, e.linesTrips, g, h, i, e.subGroupsStops),
				k = [];
			for (var l in j) k.push(j[l]);
			return {
				lineGroupId: b,
				agencyId: f.agencyId,
				lines: k
			}
		}

		function x(a, b) {
			if (a.origin && a.destination) {
				var c = b ? "â€Žâ†â€" : "â€Žâ†’";
				return "" + a.origin + c + a.destination
			}
			return a.destination
		}

		function y(a, b, c, d, e, f) {
			var g = {};
			a.tripIntervals.forEach(function (b) {
				g[b.tripPatternId] || (g[b.tripPatternId] = []);
				var c = a.tripGroups.filter(function (a) {
					return a.tripIntervalsId == b.tripIntervalsId
				});
				c.forEach(function (a) {
					a.intervals = b.intervals
				}), (d = g[b.tripPatternId]).push.apply(d, c);
				var d
			});
			var h = [],
				i = function (c) {
					for (var i = d.find(function (a) {
							return a.tripPatternId == c
						}), j = [], k = function (a) {
							var b = e.find(function (b) {
								return b.stopId == i.stopIds[a]
							});
							b ? j.push({
								id: b.stopId,
								location: b.stopLocation,
								name: b.stopName
							}) : Y.log("stop not found: " + i.stopIds[a])
						}, l = 0; l < i.stopIds.length; l++) k(l);
					var m = g[c],
						n = {},
						o = W("1970-01-01T00:00:00");
					m.forEach(function (a) {
						for (var c = a.intervals, d = o.clone().add(a.localMidnightDaysSinceEpoch, "days"), e = function (e) {
								i.stopIds.forEach(function (f, g) {
									var h = d.clone().add(a.departures[e] + (0 == g ? 0 : c[g - 1]), "seconds");
									A(h, o, b) && (n[f] || (n[f] = []), n[f].push(h.unix()))
								})
							}, f = 0; f < a.departures.length; f++) e(f)
					});
					for (var p in n) n[p] && (n[p] = z(n[p]), n[p] = n[p].sort());
					h.push({
						lineId: a.lineId,
						stopArrivals: n,
						unionStopArrivals: n,
						stops: j,
						shape: m[0] ? f.find(function (a) {
							return a.shapeId == m[0].tripShapeId
						}) : null,
						patternId: i.tripPatternId
					})
				};
			for (var j in g) i(j);
			return h
		}

		function z(a, b) {
			for (var c = {}, d = [], e = a.length, f = 0, g = 0; g < e; g++) {
				var h = a[g],
					i = b ? h[b] : h;
				1 !== c[i] && (c[i] = 1, d[f++] = h)
			}
			return d
		}

		function A(a, b, c) {
			return c == a.clone().startOf("day").diff(b, "days")
		}

		function B(a, b, c, d, e, f, g, h, i) {
			var j = {},
				k = {};
			a.forEach(function (a) {
				var l = null;
				if (e) {
					var m = e.find(function (b) {
						return b.lineId == a.lineId
					});
					m && (l = y(m, c, d, g, f, h))
				}
				var n, o;
				n = {
					lineId: a.lineId,
					origin: a.origin,
					destination: a.destination,
					lineOptions: l,
					getTitle: function () {
						return x(a, b)
					},
					getId: function () {
						return a.lineId
					},
					type: V.LineType.LINE
				};
				var p = i ? i.find(function (b) {
					return b.subGroup.subGroupId == a.subGroupId
				}) : null;
				a.subGroupId && p ? k[a.subGroupId] ? k[a.subGroupId].lines.push(n) : (o = {
					subgroupId: p.subGroup.subGroupId,
					title: p.subGroup.name,
					lines: [n],
					lineOptions: [{
						lineId: p.subGroup.subGroupId,
						patternId: null,
						stopArrivals: null,
						stops: p.stopIdsSequence.map(function (a) {
							var b = f.find(function (b) {
								return b.stopId == a
							});
							return {
								id: b.stopId,
								location: b.stopLocation,
								name: b.stopName
							}
						}),
						shape: null
					}],
					getTitle: function () {
						return p.subGroup.name
					},
					getId: function () {
						return p.subGroup.subGroupId
					},
					type: V.LineType.SUBGROUP
				}, k[a.subGroupId] = o, j[a.subGroupId] || (j[a.subGroupId] = o)) : j[n.getId()] || (j[n.getId()] = n)
			});
			var l = function (a) {
				if (j[a].type == V.LineType.SUBGROUP || j[a].lineOptions) {
					var b = null,
						c = null,
						d = 0,
						e = {},
						f = [];
					if (j[a].type == V.LineType.SUBGROUP ? j[a].lines.forEach(function (a) {
							a.lineOptions && a.lineOptions.length > 0 && (f = f.concat(a.lineOptions))
						}) : f = j[a].lineOptions, f) {
						f.forEach(function (f) {
							if (f) {
								for (var g in f.stopArrivals) e[g] || (e[g] = []), e[g] = e[g].concat(f.stopArrivals[g]);
								!b && f.shape && f.stops.length == j[a].lineOptions[0].stops.length && (b = f.shape), f.stops.length > d && (c = f.shape, d = f.stops.length)
							}
						});
						for (var g in e) e[g].sort(function (a, b) {
							return a - b
						})
					}
					b = b || c, j[a].type == V.LineType.SUBGROUP && j[a].lineOptions && j[a].lineOptions.length > 0 && (j[a].lineOptions[0].shape = b, j[a].lineOptions[0].stopArrivals = e), j[a].lineOptions.forEach(function (a) {
						a.unionStopArrivals = e
					})
				}
			};
			for (var m in j) l(m);
			return j
		}

		function C(a, b, c, e, f, h, i, j) {
			var k = new Map,
				l = new Map,
				m = e.lineGroupSummaryList ? B([].concat.apply([], e.lineGroupSummaryList.map(function (a) {
					return a.lineSummaries
				})), 1 == i.state.user.metroId, i.getTodayEpochDay(), i.state.user.metro.metroAreaData.timeZoneOffset) : [];
			t(k, e, h, i), v(l, e, h);
			var o = F(c.legs[0]).startTime,
				p = F(c.legs[c.legs.length - 1]).endTime;
			return {
				itineraryGuid: c.guid,
				durationMinutes: d(o, p),
				startTime: g(o),
				endTime: g(p),
				from: a,
				to: b,
				legs: c.legs,
				steps: n(a, b, c.legs, e, k, m, h, f, i, j),
				isRelevantForRealTime: c.relevantForRealtime,
				response: {
					itinerary: null,
					supplementalData: e
				},
				extra: D(c.legs, l, j),
				hasNext: c.hasNext,
				hasPrev: c.hasPrev,
				isAccessible: c.isAccessible
			}
		}

		function D(a, b, c) {
			for (var e, g, h = 0; h < a.length; h++) {
				var i = a[h];
				if (i.lineWithAlternarivesLeg && !e && (e = i.lineWithAlternarivesLeg.alternativeLines[i.lineWithAlternarivesLeg.primaryAlternativeIndex]), e) break
			}
			for (var h = 0; h < a.length; h++) {
				var i = a[h];
				if (g = i.waitToMultiLineLeg && !g) break
			}
			e || (e = E(a[0]));
			d(f(new Date), e.time.startTime);
			if (e && g) {
				var j = b[e.stopSequenceIds[0]];
				if (!j) return null;
				var k = j ? j.stopName : "";
				return {
					startFrom: {
						param1: k,
						firstStopName: k
					},
					startFromTranslateKey: "suggest_routes_metadata"
				}
			}
			return null
		}

		function E(a) {
			for (var b in a)
				if (a[b]) return a[b]
		}

		function F(a) {
			return H(a).time
		}

		function G(a, b) {
			H(a).time = b
		}

		function H(a) {
			for (var b in a)
				if (a[b]) {
					if (a[b].time) return a[b];
					if (a[b].lineLeg && a[b].lineLeg.time) return a[b].lineLeg;
					if (a[b].alternativeLines && a[b].alternativeLines[a[b].primaryAlternativeIndex].time) return a[b].alternativeLines[a[b].primaryAlternativeIndex]
				}
		}

		function I(a, b, c, d) {
			a.forEach(function (a) {
				var e = !0,
					f = d.state.user.metro.metroAreaData.timeZoneOffset,
					g = W().utcOffset(f).diff(W().utcOffset(f).startOf("day"), "seconds");
				W(a.startTime).diff(W().startOf("day"), "seconds");
				a.steps.filter(function (a) {
					return a.legType == U.LegType.WaitFor && 0 !== a.leg.lineId
				}).forEach(function (f) {
					var h = f.extra,
						i = b.filter(function (a) {
							var b = f.leg.altLineIds.find(function (b) {
								return a.lineArrivals.lineId == b.waitToLineId
							});
							return a.stopId == f.leg.stopIds[0] && (a.lineArrivals.lineId == f.leg.lineId || b)
						}),
						j = i[0] ? d.getSecondsSinceEpoch(i[0].epochDay) : 0,
						k = [];
					if (i.forEach(function (a) {
							a.lineArrivals.arrivals.forEach(function (b) {
								var c = Math.floor((b.relativeRealTimeSpanSeconds - (g + j)) / 60);
								k.push({
									lineId: a.lineArrivals.lineId,
									stopId: a.stopId,
									arrival: b,
									departureInMinutes: c >= 0 ? c : 0
								})
							})
						}), 0 == k.length) e && (a.isRelevantForRealTime = !1, a.extra.startFrom.param1 = a.extra.startFrom.firstStopName, a.extra.startFromTranslateKey = "suggest_routes_metadata"), f.isRealTime = !1, h.duration = null;
					else if (k = k.sort(function (a, b) {
							return a.arrival.relativeRealTimeSpanSeconds - b.arrival.relativeRealTimeSpanSeconds
						}), k = k.slice(0, 3), k.length > 0) {
						var l = k.map(function (a) {
							return a.departureInMinutes
						});
						if (l = l.filter(function (a, b, c) {
								return c.indexOf(a) === b
							}), f.isRealTime = !1, h.duration = null, f.realTimeArrivals = k, 0 == l.length) e && (a.isRelevantForRealTime = !1, a.extra.startFrom.param1 = a.extra.startFrom.firstStopName, a.extra.startFromTranslateKey = "suggest_routes_metadata"), f.isRealTime = !1, h.duration = null;
						else if (1 == l.length) l[0] >= 1 ? (e && (a.isRelevantForRealTime = !0, a.extra.startFrom.param1 = "<i></i><span class='eta'>" + l[0] + " " + c.instant("min") + "</span>", a.extra.startFrom.param2 = a.extra.startFrom.firstStopName, a.extra.startFromTranslateKey = "suggest_routes_real_time_metadata"), f.isRealTime = !0, h.duration = l[0]) : l[0] >= 0 ? (e && (a.isRelevantForRealTime = !0, a.extra.startFrom.param1 = "<i></i><span class='eta'>" + c.instant("action_now_lowercase") + "</span>", a.extra.startFrom.param2 = a.extra.startFrom.firstStopName, a.extra.startFromTranslateKey = "suggest_routes_real_time_metadata_leaves"), f.isRealTime = !0, h.duration = 0) : (a.isRelevantForRealTime = !1, a.extra.startFrom.param1 = a.extra.startFrom.firstStopName, a.extra.startFromTranslateKey = "suggest_routes_metadata");
						else {
							for (var m = !1, n = 0; n < l.length; n++) l[n] >= 0 && l[n] < 1 && (m ? l.splice(n, 1) : (l[n] = c.instant("action_now_lowercase"), m = !0));
							e && (a.extra.startFrom.param1 = "<i></i><span class='eta'>" + l.join(", ") + " " + c.instant("min") + "</span>", a.extra.startFrom.param2 = a.extra.startFrom.firstStopName, a.extra.startFromTranslateKey = m ? "suggest_routes_real_time_metadata_leaves" : "suggest_routes_real_time_metadata"), f.isRealTime = !0, h.duration = l
						}
					} else f.isRealTime = !1, h.duration = null;
					e && (e = !1)
				})
			})
		}

		function J(a, b, c, e, f, h) {
			var i = new Map,
				j = new Map,
				k = B([].concat.apply([], b.response.supplementalData.lineGroupSummaryList.map(function (a) {
					return a.lineSummaries
				})), 1 == e.state.user.metroId, e.getTodayEpochDay(), e.state.user.metro.metroAreaData.timeZoneOffset);
			t(i, b.response.supplementalData, c, e), v(j, b.response.supplementalData, c);
			for (var l = a.legs[0].time.startTime, m = a.legs[a.legs.length - 1].time.endTime, o = [], p = 0; p < b.legs.length; p++) {
				var q = angular.copy(b.legs[p]);
				G(q, a.legs[p].time), a.legs[p].futureDepartureTimes && q.waitToMultiLineLeg.alternatives.length > 0 && ((s = q.waitToMultiLineLeg.alternatives[0].futureDepartureTimes).push.apply(s, a.legs[p].futureDepartureTimes), q.waitToMultiLineLeg.alternatives[0].futureDepartureTimes = q.waitToMultiLineLeg.alternatives[0].futureDepartureTimes.filter(function (a, b, c) {
					return c.indexOf(a) === b
				})), o.push(q)
			}
			var r = n(b.from, b.to, o, b.response.supplementalData, i, k, c, f, e, h);
			return {
				itineraryGuid: b.itineraryGuid,
				durationMinutes: d(l, m),
				startTime: g(l),
				endTime: g(m),
				from: b.from,
				to: b.to,
				legs: o,
				steps: r,
				isRelevantForRealTime: b.isRelevantForRealTime,
				response: b.response,
				hasNext: a.hasNext,
				hasPrev: a.hasPrev,
				extra: D(o, j, h),
				isAccessible: b.isAccessible
			};
			var s
		}

		function K(a, b) {
			var c = null,
				d = [],
				e = "";
			return a.latLon ? (a.title && (e = a.title), a.subTitle && a.subTitle.length > 0 && (d = a.subTitle.map(function (a) {
				return a.image ? {
					data: b.getImageHTML(a.image.imageId, [null].concat(a.image.parameters)),
					isImage: !0
				} : {
					data: a.text,
					isImage: !1
				}
			}), a.type == MVSearchResultType.STREET && (d = d.filter(function (a) {
				return !1 === a.isImage
			}), e += (e.length > 0 ? ", " : "") + d.map(function (a) {
				return a.data
			}).join(", "))), a.image && a.image.imageId && (c = b.getImageHTML(a.image.imageId, a.image.parameters)), c || (c = b.getImageHTML(b.GERENAL_LOCATION_IMAGE_ID)), {
				id: a.id,
				name: a.title || e,
				address: d,
				fullName: e,
				latlng: R.LatLngHelpers.fromMvLatLon(a.latLon),
				type: a.type ? a.type.toString() : null,
				imageHtml: c,
				inaccurateSearchTerm: a.inaccurateLatLon ? e : null
			}) : null
		}

		function L(a, b) {
			var c = "";
			if (a.direction.absolute) switch (a.direction.absolute) {
				case MVAbsoluteDirection.North:
					c = "direction_north";
					break;
				case MVAbsoluteDirection.Northeast:
					c = "direction_northeast";
					break;
				case MVAbsoluteDirection.east:
					c = "direction_east";
					break;
				case MVAbsoluteDirection.Southeast:
					c = "direction_southeast";
					break;
				case MVAbsoluteDirection.South:
					c = "direction_south";
					break;
				case MVAbsoluteDirection.Southwest:
					c = "direction_southwest";
					break;
				case MVAbsoluteDirection.West:
					c = "direction_west";
					break;
				case MVAbsoluteDirection.Northwest:
					c = "direction_northwest"
			} else if (a.direction.relative) switch (a.direction.relative) {
				case MVRelativeDirection.Depart:
					c = "direction_depart";
					break;
				case MVRelativeDirection.HardLeft:
					c = "direction_hard_left";
					break;
				case MVRelativeDirection.Left:
					c = "direction_left";
					break;
				case MVRelativeDirection.SlightlyLeft:
					c = "direction_slightly_left";
					break;
				case MVRelativeDirection.Continue:
					c = "direction_continue";
					break;
				case MVRelativeDirection.SlightlyRight:
					c = "direction_slightly_right";
					break;
				case MVRelativeDirection.Right:
					c = "direction_right";
					break;
				case MVRelativeDirection.HardRight:
					c = "direction_hard_right";
					break;
				case MVRelativeDirection.CircleClockwise:
					c = "direction_circle_clockwise";
					break;
				case MVRelativeDirection.CircleCounterclockwise:
					c = "direction_circle_counter_clockwise";
					break;
				case MVRelativeDirection.Elevator:
					c = "direction_elevator";
					break;
				case MVRelativeDirection.UturnLeft:
					c = "direction_uturn_left";
					break;
				case MVRelativeDirection.UturnRight:
					c = "direction_uturn_right"
			}
			return {
				instruction_key: c,
				instruction_param: a.streetName
			}
		}

		function M(a, b, c, e, f, h) {
			var i = [],
				j = {};
			return f.lineWithAlternarivesLeg.alternativeLines.forEach(function (a) {
				j[a.lineId] = a
			}), e.waitToMultiLineLeg && e.waitToMultiLineLeg.alternatives.forEach(function (f) {
				f.futureDepartureTimes.forEach(function (k) {
					if (k >= c) {
						var l = j[f.waitToLineId],
							m = a[f.waitToLineId];
						i.push({
							lineId: f.waitToLineId,
							lineTitle: b[f.waitToLineId].getTitle(),
							lineImageHtml: h.getImageHTML(m.stepImageData.id, m.stepImageData.params),
							lineStopsAmount: l.stopSequenceIds.length,
							lineDuration: d(l.time.startTime, l.time.endTime),
							stopId: e.waitToMultiLineLeg.waitAtStopId,
							departure: g(k),
							serviceAlert: f.serviceAlert
						})
					}
				})
			}), i = i.sort(function (a, b) {
				return a.departure > b.departure ? 1 : a.departure < b.departure ? -1 : 0
			})
		}

		function N(a) {
			var b = E(a);
			return b.shape ? b.shape : b.lineLeg && b.lineLeg.shape ? b.lineLeg.shape : b.alternativeLines && b.alternativeLines[0] && b.alternativeLines[0].shape ? b.alternativeLines[0].shape : null
		}

		function O(a, b) {
			return b.isImperialDistance() ? (a *= 1.094, a < 880 ? {
				distance_key: "units_yards_short",
				distance_number: {
					param1: (a <= 10 ? 10 : 10 * Math.round(a / 10)).toString()
				}
			} : {
				distance_key: "units_miles_short",
				distance_number: {
					param1: (a / 1760).toFixed(2)
				}
			}) : a < 1e3 ? {
				distance_key: "units_meters_short",
				distance_number: {
					param1: (a <= 10 ? 10 : 10 * Math.round(a / 10)).toString()
				}
			} : {
				distance_key: "units_kilometers_short",
				distance_number: {
					param1: (a / 1e3).toFixed(2)
				}
			}
		}

		function P(a, b) {
			var c = 0,
				d = [];
			a.lineWithAlternarivesLeg && (c = a.lineWithAlternarivesLeg.alternativeLines[a.lineWithAlternarivesLeg.primaryAlternativeIndex].lineId, d = a.lineWithAlternarivesLeg.alternativeLines), a.waitToMultiLineLeg && (c = a.waitToMultiLineLeg.alternatives[a.waitToMultiLineLeg.primaryAlternativeIndex].waitToLineId, d = a.waitToMultiLineLeg.alternatives);
			var e = null,
				f = null;
			a.pathwayWalkLeg && b[a.pathwayWalkLeg.stopId] && (e = b[a.pathwayWalkLeg.stopId].mvPathways.find(function (b) {
				return b.pathwayId == a.pathwayWalkLeg.originPathwayId
			}), f = b[a.pathwayWalkLeg.stopId].mvPathways.find(function (b) {
				return b.pathwayId == a.pathwayWalkLeg.destinationPathwayId
			}));
			var g = null;
			a.pathwayWalkLeg ? g = [a.pathwayWalkLeg.stopId] : a.lineWithAlternarivesLeg ? g = a.lineWithAlternarivesLeg.alternativeLines[a.lineWithAlternarivesLeg.primaryAlternativeIndex].stopSequenceIds : a.waitToMultiLineLeg && (g = [a.waitToMultiLineLeg.waitAtStopId]);
			var h = N(a);
			return {
				lineId: c,
				altLineIds: d,
				stopIds: g,
				price: null,
				encodedPolyline: h ? h.polyline : "",
				distanceMeters: h ? h.distanceInMeters : 0,
				rideInfo: a.carpoolRideLeg ? {
					driver: a.carpoolRideLeg.driver,
					ride: a.carpoolRideLeg.ride
				} : null,
				walkingSteps: null,
				waitingSec: a.waitToMultiLineLeg ? Math.ceil((a.waitToMultiLineLeg.time.endTime - a.waitToMultiLineLeg.time.startTime) / 60) : 0,
				metaData: null,
				points: e || f ? {
					originPathwayLocation: e ? R.LatLngHelpers.fromMvLatLon(e.location) : null,
					destinationPathwayLocation: f ? R.LatLngHelpers.fromMvLatLon(f.location) : null
				} : null
			}
		}
		var Q = this && this.__assign || Object.assign || function (a) {
			for (var b, c = 1, d = arguments.length; c < d; c++) {
				b = arguments[c];
				for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
			}
			return a
		};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var R = a("./latlng"),
			S = a("../common/iconHelpers"),
			T = a("../fx/Logger"),
			U = a("./tripPlan"),
			V = a("./lines"),
			W = a("moment"),
			X = a("object-assign"),
			Y = T.createLogger("converters");
		return b.serverTimeOf = f, b.fromServerTime = g, b.formatTime = h, b.formatServerTime = i, b.fixUrl = j, b.generateLineImage = u, b.convertMVLineGroupOptionsResponseToLineGroupDisplayData = w, b.getLineTitle = x, b.getLineOptionDisplay = y, b.convertLinesSummaries = B, b.convertMVTripPlannerItineraryToSuggestedRoute = C, b.updateRealTimeInRoutes = I, b.convertMVSimilarItineraryResponseBySectionToSuggestedRoute = J, b.convertMVSearchResponseItem2TripPlanLocation = K, c.exports
	}), System.registerDynamic("app/services/metroService.js", ["moment", "../models/latlng", "../fx/Annotations", "../fx/Logger", "./imageService", "./Service", "../models/tripPlan", "./httpService", "../../common/consts", "../models/converters"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			},
			h = this && this.__awaiter || function (a, b, c, d) {
				return new(c || (c = Promise))(function (e, f) {
					function g(a) {
						try {
							i(d.next(a))
						} catch (a) {
							f(a)
						}
					}

					function h(a) {
						try {
							i(d.throw(a))
						} catch (a) {
							f(a)
						}
					}

					function i(a) {
						a.done ? e(a.value) : new c(function (b) {
							b(a.value)
						}).then(g, h)
					}
					i((d = d.apply(a, b || [])).next())
				})
			},
			i = this && this.__generator || function (a, b) {
				function c(a) {
					return function (b) {
						return d([a, b])
					}
				}

				function d(c) {
					if (e) throw new TypeError("Generator is already executing.");
					for (; i;) try {
						if (e = 1, f && (g = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(g = g.call(f, c[1])).done) return g;
						switch (f = 0, g && (c = [0, g.value]), c[0]) {
							case 0:
							case 1:
								g = c;
								break;
							case 4:
								return i.label++, {
									value: c[1],
									done: !1
								};
							case 5:
								i.label++, f = c[1], c = [0];
								continue;
							case 7:
								c = i.ops.pop(), i.trys.pop();
								continue;
							default:
								if (g = i.trys, !(g = g.length > 0 && g[g.length - 1]) && (6 === c[0] || 2 === c[0])) {
									i = 0;
									continue
								}
								if (3 === c[0] && (!g || c[1] > g[0] && c[1] < g[3])) {
									i.label = c[1];
									break
								}
								if (6 === c[0] && i.label < g[1]) {
									i.label = g[1], g = c;
									break
								}
								if (g && i.label < g[2]) {
									i.label = g[2], i.ops.push(c);
									break
								}
								g[2] && i.ops.pop(), i.trys.pop();
								continue
						}
						c = b.call(a, i)
					} catch (a) {
						c = [6, a], f = 0
					} finally {
						e = g = 0
					}
					if (5 & c[0]) throw c[1];
					return {
						value: c[0] ? c[1] : void 0,
						done: !0
					}
				}
				var e, f, g, h, i = {
					label: 0,
					sent: function () {
						if (1 & g[0]) throw g[1];
						return g[1]
					},
					trys: [],
					ops: []
				};
				return h = {
					next: c(0),
					throw: c(1),
					return: c(2)
				}, "function" == typeof Symbol && (h[Symbol.iterator] = function () {
					return this
				}), h
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var j = a("moment"),
			k = a("../models/latlng"),
			l = a("../fx/Annotations"),
			m = a("../fx/Logger"),
			n = a("./imageService"),
			o = a("./Service"),
			p = a("../models/tripPlan"),
			q = a("./httpService"),
			r = a("../../common/consts"),
			s = a("../models/converters"),
			t = m.createLogger("MetroService"),
			u = function (a) {
				function b(b, c, d, e, f, g, h) {
					var i = a.call(this, t) || this;
					return i.$q = b, i.$location = c, i.$injector = d, i.$translate = e, i.$http = f, i.imageService = g, i.httpService = h, i.routeTypesMap = null, i.metrosCarpoolData = {
						1: {
							url: "http://www.carpool.moovit.com?utm_source=Moovit_for_web"
						}
					}, i.metroSeoNamesMap = null, i.zoomLevel = 14, i
				}
				return d(b, a), b.prototype.getCurrentMetroCarpoolData = function () {
					return this.metrosCarpoolData[this.state.user.metroId]
				}, b.prototype.getMetroIdByCoords = function (a, b) {
					return t.log("getMetroIdByCoords: " + a + ", " + b), this.httpService.get("/api/metro/coords", {
						params: {
							latitude: a,
							longitude: b
						}
					})
				}, b.prototype.getMetroIdByGeolocation = function () {
					var a = this;
					return t.log("getMetroIdByGeolocation"), this.getGeolocationPosition().then(function (b) {
						return t.log("Gelocation position is: ", b.coords), a.getMetroIdByCoords(b.coords.latitude, b.coords.longitude)
					})
				}, b.prototype.getMetroIdByIpAddress = function (a) {
					return this.httpService.get("/api/metro/ip" + (a ? "/" + a : ""), {
						metroIdHeaderRequired: !1
					})
				}, b.prototype.getAgency = function (a) {
					if (!this.state.user.metro || !this.state.user.metro.metroAreaData.agencies) return null;
					for (var b = 0, c = this.state.user.metro.metroAreaData.agencies; b < c.length; b++) {
						var d = c[b];
						if (d.agencyId == a) return d
					}
					return null
				}, b.prototype.getAgencyLineTemplate = function (a) {
					var b = this.getAgency(a);
					if (!b || !b.presentationLineTemplates) return null;
					for (var c = 0, d = b.presentationLineTemplates; c < d.length; c++) {
						var e = d[c];
						if (e.presentationType == MVPresentationType.Itinerary) return e
					}
					return null
				}, b.prototype.getAgencyImageId = function (a) {
					var b = this.getAgency(a);
					return b ? b.image : null
				}, b.prototype.getImageIndexForAgency = function (a) {
					var b = this.getAgencyLineTemplate(a);
					return b ? b.imageIndex : null
				}, b.prototype.getGeolocationPosition = function () {
					t.log("getGeolocationPosition");
					var a = this.$q.defer();
					return navigator.geolocation.getCurrentPosition(function (b) {
						a.resolve(b)
					}, function (b) {
						a.reject(b)
					}), a.promise
				}, b.prototype.getCentralPoint = function (a) {
					return this.getMetroInfo(a).then(function (a) {
						return k.LatLngHelpers.fromMvLatLon(a.metroAreaData.defaultLocation)
					})
				}, b.prototype.getMetroSeoName = function (a) {
					return h(this, void 0, void 0, function () {
						var b, c, d, e, f;
						return i(this, function (g) {
							switch (g.label) {
								case 0:
									return b = a || this.state.user.metroId, c = moovitIsBundle ? "" : "/server", d = s.fixUrl(c + "/config/metroMapId.json"), this.metroSeoNamesMap ? [3, 2] : [4, this.$http.get(d)];
								case 1:
									e = g.sent(), this.metroSeoNamesMap = e.data, g.label = 2;
								case 2:
									try {
										return f = this.metroSeoNamesMap[b], [2, f && f.metroSeoName ? f.metroSeoName.toLowerCase() : null]
									} catch (a) {
										t.error("Could not get metro seo name. Error = ", a)
									}
									return [2]
							}
						})
					})
				}, b.prototype.getMetroTransitTypeImages = function () {
					var a = this,
						b = moovitIsBundle ? "" : "/server",
						c = s.fixUrl(b + "/config/transitTypeImageNames.json");
					return this.$http.get(c).then(function (b) {
						var c = b.data;
						try {
							return {
								metroTransitImagesPaths: a.getTransitImagesPath(c, a.state.user.metroId),
								genericTransitImagesPaths: a.getTransitImagesPath(c)
							}
						} catch (a) {
							t.error("Could not get metro transit type image names. Error = ", a)
						}
					})
				}, b.prototype.getTransitImagesPath = function (a, b) {
					var c = b && a[b] ? b : "generic";
					return a[c].map(function (a) {
						return "/images/splash-screen/local-icons/" + c + "/" + a
					})
				}, b.prototype.getMetroInfo = function (a) {
					var b = this;
					return t.log("getMetroInfo"), this.getMetroAreaData(a).then(function (a) {
						if (a) {
							a.metroAreaData.metroSeoName = a.metroCustomDimensions.metroSeoName.toLowerCase(), b.state.user.metroSeoName = a.metroCustomDimensions.metroSeoName.toLowerCase(), b.state.user.metroCustomDimensions = a.metroCustomDimensions;
							var c = a.metroAreaData.routeTypes.map(function (a) {
								var b = p.RouteType.getRouteTypeById(a.routeType);
								return b.translationKey = a.clientOverrideTextResourceId, b.imageId = a.image, b
							});
							return b.routeTypesMap = {}, c.forEach(function (a) {
								b.routeTypesMap[a.routeTypeId] = a
							}), b.imageService.syncMetroImageData(a.metroAreaData), {
								metroAreaData: a.metroAreaData,
								maxFutureDays: {
									metroAreaId: a.metroAreaData.metroAreaId,
									daysAmount: a.maxFutureDays
								},
								supportedRouteTypes: c
							}
						}
						return {
							metroAreaData: null,
							maxFutureDays: null,
							supportedRouteTypes: []
						}
					})
				}, b.prototype.getMetroAreaData = function (a) {
					return t.log("getMetroAreaData", a), this.httpService.get("/api/metro/combined/" + a)
				}, b.prototype.getMaxFutureDays = function (a) {
					return t.log("getMaxFutureDays", a), this.httpService.get("/api/metro/maxfuturedays/" + a).catch(function (b) {
						return t.error("getMaxFutureDays error " + b), {
							metroAreaId: a,
							daysAmount: r.DEFAULT_MAX_FUTURE_DAYS
						}
					})
				}, b.prototype.getAgencyLines = function (a, b, c) {
					return t.log("getAgencyLines", a, b, c), this.httpService.get("/api/lines/agency", {
						params: {
							agencyId: a,
							offset: b,
							limit: c
						}
					}).catch(function (a) {})
				}, b.prototype.getAgencyOrder = function () {
					return t.log("getAgencyOrder"), this.httpService.get("/api/lines/agency_order", null).catch(function (a) {})
				}, b.prototype.searchLines = function (a, b, c) {
					return t.log("searchLines", b, b, c), this.httpService.get("/api/lines/search", {
						params: {
							query: a,
							offset: b,
							limit: c
						}
					}).catch(function (a) {})
				}, b.prototype.getSecondsSinceEpoch = function (a, b) {
					return 86400 * Math.abs(this.getTodayEpochDay(b) - a)
				}, b.prototype.getTodayEpochDay = function (a) {
					return a ? j().utcOffset(a).startOf("day").diff(j(0).utcOffset(a), "days") : j().startOf("day").diff(j("1970-01-01T00:00:00"), "days")
				}, b.prototype.getEpochDayByDayOffset = function (a) {
					return a || 0 == a ? this.getTodayEpochDay() + a : null
				}, b.prototype.getDayOffsetByEpochDay = function (a) {
					return a ? a - this.getTodayEpochDay() : null
				}, b.prototype.getLineGroupTrips = function (a, b, c) {
					return void 0 === c && (c = !0), t.log("getLineGroupTrips", a), b = b || this.getTodayEpochDay(), this.httpService.get("/api/lines/grouptrips", {
						params: {
							lineGroupId: a,
							revision: this.state.user.metro.metroAreaData.revisionNumber,
							dayOffset: b,
							isExtended: c ? 1 : 0
						}
					}).then(function (b) {
						if (a % 17 == 0 && b.syncedStops)
							for (var c = 0, d = b.syncedStops; c < d.length; c++) {
								var e = d[c];
								e.stopLocation && e.stopId % 13 == 0 && (e.stopLocation.latitude -= 1e3)
							}
						return b
					})
				}, b.prototype.getLineTrips = function (a, b, c) {
					return t.log("getLineTrips", a), this.httpService.get("/api/lines/linetrips", {
						params: {
							lineGroupId: a,
							revision: this.state.user.metro.metroAreaData.revisionNumber,
							dayOffset: c ? this.getEpochDayByDayOffset(c) : this.getTodayEpochDay()
						}
					}).then(function (b) {
						if (a % 17 == 0)
							for (var c = 0, d = b.syncedStops; c < d.length; c++) {
								var e = d[c];
								e.stopLocation && e.stopId % 13 == 0 && (e.stopLocation.latitude -= 1e3)
							}
						return b
					})
				}, b.prototype.getLineArrivalsToStop = function (a, b) {
					return t.log("getLineArrivalsToStop", a, b), this.httpService.get("/api/lines/linearrival", {
						params: {
							stopId: a,
							lineIds: {
								ids: b
							}
						}
					}).catch(function (a) {})
				}, b.prototype.getLinesArrivalsToStops = function (a) {
					return t.log("getLinesArrivalsToStops", a), this.httpService.post("/api/lines/linesarrival", {
						params: {
							lineStopPairs: a
						}
					}).catch(function (a) {})
				}, b.prototype.getAgencyTypeFromRouteType = function (a) {
					return this.$translate.instant(this.routeTypesMap[a].translationKey)
				}, b.prototype.isHierarchyMetro = function (a) {
					return !1
				}, b.prototype.isImperialDistance = function () {
					var a = this.state.user.metro.metroAreaData.countryName;
					return "USA" === a || "United Kingdom" === a
				}, b = e([l.Service({
					name: "metroService"
				}), g(0, l.Inject("$q")), g(1, l.Inject("$location")), g(2, l.Inject("$injector")), g(3, l.Inject("$translate")), g(4, l.Inject("$http")), f("design:paramtypes", [Function, Object, Object, Object, Object, n.ImageService, q.HttpService])], b)
			}(o.ServiceBase);
		return b.MetroService = u, c.exports
	}), System.registerDynamic("app/services/analyticsService.js", ["./Service", "../fx/Annotations", "../fx/Logger", "../fx/Application", "../common/AppEvents", "../models/general", "./userProfileService", "../../common/customer", "./metroService"], !0, function (a, b, c) {
		"use strict";
		var d = this && this.__extends || function () {
				var a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (a, b) {
					a.__proto__ = b
				} || function (a, b) {
					for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
				};
				return function (b, c) {
					function d() {
						this.constructor = b
					}
					a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
				}
			}(),
			e = this && this.__decorate || function (a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			},
			f = this && this.__metadata || function (a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			},
			g = this && this.__param || function (a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			};
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./Service"),
			i = a("../fx/Annotations"),
			j = a("../fx/Logger"),
			k = a("../fx/Application"),
			l = a("../common/AppEvents"),
			m = a("../models/general"),
			n = a("./userProfileService"),
			o = a("../../common/customer"),
			p = a("./metroService"),
			q = j.createLogger("AnalyticsService"),
			r = "Web App",
			s = "cd8",
			t = "cd11",
			u = "cd1",
			v = "cd2",
			w = "cd7",
			x = "cd22",
			y = "cd30",
			z = function (a) {
				function b(b, c, d, e, f) {
					var g = a.call(this, q) || this;
					return g.userProfileService = b, g.metroService = c, g.$q = d, g.$location = e, g.$timeout = f, g
				}
				return d(b, a), b.prototype.init = function () {
					return k.events.subscribe(l.AppEvents.TRIPPLAN_SEARCH_LOCATION_BEGIN, this, this.trackSearchMapLocation), k.events.subscribe(l.AppEvents.TRIPPLAN_TEXT_SEARCH_END, this, this.trackSearchTextLocation), k.events.subscribe(l.AppEvents.TRIPPLAN_SEARCH_ROUTES_BEGIN, this, this.trackSearchRoutes), k.events.subscribe(l.AppEvents.SHOW_ROUTE_STEPS, this, this.trackShowRouteSteps), k.events.subscribe(l.AppEvents.USER_LOCALE_CHANGED, this, this.trackLocaleChanged), k.events.subscribe(l.AppEvents.METRO_CHANGED, this, this.trackMetroChanged), k.events.subscribe(l.AppEvents.TRIPPLAN_SIMILAR_ROUTE_CHANGED, this, this.trackSimilarRouteChanged), this.sendFlag = !1, this.pendingDataLayer = [], this.trackedMeaningfulPaintEvents = [], "undefined" != typeof dataLayer && (this.source = dataLayer[0] ? dataLayer[0].Source : "", this.state.customer && dataLayer.push({
						CustomerName: this.state.customer.name,
						Source: this.source
					})), this.$q.when()
				}, b.prototype.trackUserData = function () {
					if ("undefined" != typeof dataLayer) {
						dataLayer.push({
							CountryName: this.state.user.metroCustomDimensions.countryName,
							MetroName: this.state.user.metroCustomDimensions.metroSeoName,
							MetroId: this.state.user.metro.metroAreaData.metroAreaId,
							PageLanguage: this.state.user.locale.id
						});
						try {
							if (ga.loaded && ga.getAll) {
								var a = ga.getAll()[0],
									b = a.get("clientId");
								b && dataLayer.push({
									AnalyticsClientId: b
								})
							}
						} catch (a) {}
						this.sendFlag || (this.sendFlag = !0, dataLayer.push.apply(dataLayer, this.pendingDataLayer))
					}
				}, b.prototype.trackVirtualPageView = function (a) {
					q.log("Tracking page view: " + a);
					var b = {
						event: "virtualPageView",
						virtualPageUrl: "/" + a,
						virtualPageTitle: "Moovit",
						Timestamp: this.getTrackingTimestamp(),
						FullURL: this.getPagePathUrl()
					};
					this.sendFlag && "undefined" != typeof dataLayer ? dataLayer.push(b) : this.pendingDataLayer.push(b)
				}, b.prototype.getTrackingTimestamp = function () {
					return (new Date).toISOString()
				}, b.prototype.getPagePathUrl = function () {
					return this.$location.path()
				}, b.prototype.trackOutboundLink = function (a) {
					return this.sendEvent("outbound", "click", a), this.$timeout(function () {
						return a
					})
				}, b.prototype.trackSideNavigationEvent = function (a) {
					return this.sendEvent("Side Navigation", a, void 0), this.$timeout(function () {
						return a
					})
				}, b.prototype.trackItineraryDisplayed = function (a) {
					var b = a + "," + this.userProfileService.metroId;
					this.sendEvent("Web itinerary view", "Itinerary loaded", b)
				}, b.prototype.trackItineraryError = function (a) {
					var b = a + "," + this.userProfileService.metroId;
					this.sendEvent("Web itinerary view", "Error loading itinerary", b)
				}, b.prototype.trackUseCurrentLocation = function () {
					this.sendEvent("Use current location", "click", this.userProfileService.metroId.toString())
				}, b.prototype.trackUseCurrentLocationPopup = function (a) {
					this.sendEvent("Use current location", "OS pop up", a ? "Allow" : "Block")
				}, b.prototype.trackUseCurrentLocationFailed = function (a) {
					var b = "unknown error";
					switch (a) {
						case 0:
							b = "unknown error";
							break;
						case 1:
							b = "permission denied";
							break;
						case 2:
							b = "position unavailable";
							break;
						case 3:
							b = "timed out"
					}
					this.sendEvent("Use current location", "failure", b)
				}, b.prototype.trackLinesAction = function (a) {
					this.sendEvent("Lines", a)
				}, b.prototype.trackShareAction = function (a, b) {
					this.sendEvent("Share", a + (b ? " (" + b + ")" : ""))
				}, b.prototype.trackDownloadApp = function (a, b) {
					if ("splash" == b && this.state.customer.id == o.Customer.MoovitSeo.id) {
						var c = Date.now() - splashStartTimeStamp;
						q.remote("[SeoSplashTiming] DownloadApp. Load time: " + splashLoadTimeLabel + ". Now: " + c + ")")
					}
					this.sendEvent("DownloadApp", b, a)
				}, b.prototype.trackClickToWebApp = function (a) {
					try {
						if (this.state.customer.id == o.Customer.MoovitSeo.id) {
							var b = Date.now() - splashStartTimeStamp;
							q.remote("[SeoSplashTiming] Click to web app. Load time: " + splashLoadTimeLabel + ". Now: " + b)
						}
					} catch (a) {}
					this.sendEvent("Click to web app", "splash_continue", a)
				}, b.prototype.getTrackingState = function () {
					return (this.state.customer ? this.state.customer.id : "??") + "," + (this.state.user ? this.userProfileService.metroId : "??")
				}, b.prototype.sendEvent = function (a, b, c) {
					q.log("Tracking event: " + a + "; " + b + (c ? "; " + c : "")), "undefined" != typeof dataLayer && dataLayer.push({
						event: "codeTriggeredEvent",
						eventCategory: a,
						eventAction: b,
						eventLabel: c || "",
						Timestamp: this.getTrackingTimestamp(),
						FullURL: this.getPagePathUrl()
					})
				}, b.prototype.trackError = function (a) {
					this.sendEvent("Error", a, this.getTrackingState())
				}, b.prototype.trackApplicationInitialized = function () {
					this.sendEvent("Web app initialized", "app OK", this.getTrackingState())
				}, b.prototype.trackUserEvent = function (a) {
					this.sendEvent("Web user action", a, this.getTrackingState())
				}, b.prototype.trackCarpoolBannerClick = function () {
					this.trackUserEvent("Carpool banner click")
				}, b.prototype.trackCarpoolBannerDisplay = function () {
					this.trackUserEvent("Carpool banner display")
				}, b.prototype.trackDismissSplash = function () {
					this.trackUserEvent("dismiss splash")
				}, b.prototype.trackSearchRoutes = function () {
					this.trackUserEvent("Search routes")
				}, b.prototype.trackShowRouteSteps = function () {
					this.trackUserEvent("Expand route")
				}, b.prototype.trackShowRouteStopArrivals = function () {
					this.trackUserEvent("Expand stop schedule")
				}, b.prototype.trackSearchMapLocation = function (a) {
					this.trackUserEvent("Search " + (a.fromTo == m.FromTo.From ? "from" : "to") + " location via map")
				}, b.prototype.trackSearchTextLocation = function (a) {
					this.trackUserEvent("Search " + (a.fromTo == m.FromTo.From ? "from" : "to") + " location via text field")
				}, b.prototype.trackLocationAccuracy = function (a) {
					this.sendEvent("Location", "Accuracy", a)
				}, b.prototype.trackLocaleChanged = function () {
					this.trackUserData(), this.trackUserEvent("Change locale")
				}, b.prototype.trackSideNavStateChange = function (a) {
					this.sendEvent("Side Navigation", a, void 0)
				}, b.prototype.trackMetroChanged = function () {
					this.trackUserData(), this.trackUserEvent("Change metro")
				}, b.prototype.trackSimilarRouteChanged = function (a) {
					1 === a ? this.trackUserEvent("Later route") : this.trackUserEvent("Earlier route")
				}, b.prototype.trackAlertEvent = function (a, b) {
					this.sendEvent("Alerts", a, b)
				}, b.prototype.trackReblazeEvent = function (a) {
					this.sendEvent("Reblaze", a)
				}, b.prototype.trackCommunityEvent = function (a) {
					this.sendEvent("Community", a)
				}, b.prototype.trackMeaningfulPaintEvent = function (a) {
					if (window.measurements && window.PERFORMANCE_EVENTS && !this.trackedMeaningfulPaintEvents[a]) {
						var b = Date.now(),
							c = window.measurements[window.PERFORMANCE_EVENTS.FIRST_JS],
							d = (b - c.timestamp) / 1e3,
							e = d > 20 ? "20+" : (Math.round(2 * d) / 2).toFixed(1);
						this.sendEvent("Timing", "MP " + a, e), this.trackedMeaningfulPaintEvents[a] = !0
					}
				}, b.prototype.trackSplashLoadTimes = function () {}, b.prototype.getGaPayloadForNativeApp = function (a, b) {
					var c = null;
					try {
						var d = ga.getAll()[0],
							e = d.get("clientId"),
							f = b;
						f && (f = "_" + f), c = "v=1&t=event&tid=UA-36954272-1&cid=" + encodeURIComponent(e) + "&ec=offline&ea=install" + f + "&el=" + a;
						var g = r,
							h = null,
							i = null,
							j = null,
							k = null;
						try {
							h = this.state.customer.name, i = this.state.user.metroCustomDimensions.countryName, j = this.state.user.metroCustomDimensions.metroSeoName, k = this.state.user.locale.id
						} catch (a) {}
						g && (c += "&" + s + "=" + encodeURIComponent(g)), h && (c += "&" + t + "=" + encodeURIComponent(h)), i && (c += "&" + u + "=" + encodeURIComponent(i)), j && (c += "&" + v + "=" + encodeURIComponent(j)), k && (c += "&" + w + "=" + encodeURIComponent(k)), this.source && (c += "&" + x + "=" + encodeURIComponent(this.source)), e && (c += "&" + y + "=" + encodeURIComponent(e))
					} catch (a) {}
					return c
				}, b = e([i.Service({
					name: "analyticsService"
				}), g(2, i.Inject("$q")), g(3, i.Inject("$location")), g(4, i.Inject("$timeout")), f("design:paramtypes", [n.UserProfileService, p.MetroService, Function, Object, Function])], b)
			}(h.ServiceBase);
		return b.AnalyticsService = z, c.exports
	}), System.registerDynamic("app/common/promiseHelpers.js", ["./module"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return new p(a)
		}

		function e(a) {
			var b = n.defer();
			return setTimeout(function () {
				b.resolve()
			}, a), b.promise
		}

		function f(a, b) {
			return n.all([a, b]).then(function (a) {
				return {
					val1: a[0],
					val2: a[1]
				}
			})
		}

		function g(a, b) {
			return a ? n.when(a) : b()
		}

		function h(a) {
			return "object" == typeof a && null !== a && a.then ? a : n.when(a)
		}

		function i() {
			function a() {
				++e == b.length && d.reject(new Error("Non empty value was not found")), h((0, b[e])()).then(function (b) {
					b ? d.resolve(b) : a()
				}).catch(function (a) {
					d.reject(a)
				})
			}
			for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
			for (var d = n.defer(), e = -1, f = function () {
					if ("function" != typeof b[g]) {
						var a = b[g];
						b[g] = function () {
							return h(a)
						}
					}
				}, g = 0; g < b.length; g++) f();
			return a(), d.promise
		}

		function j(a) {
			var b = n.defer();
			return a.then(function (a) {
				b.resolve(a)
			}).catch(function (a) {
				b.reject(a)
			}), b.promise
		}

		function k() {
			return n.when()
		}

		function l(a) {
			return n.all(a)
		}

		function m(a) {
			var b = n.defer();
			return a(function (a) {
				b.resolve(a)
			}, function (a) {
				b.reject(a)
			}), b.promise
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var n, o = a("./module");
		b.cachePromise = d, b.delay = e, b.aggregate = f;
		var p = function () {
			function a(a) {
				this.func = a
			}
			return a.prototype.get = function () {
				for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
				for (var c = [], d = 0; d < arguments.length; d++) c["arg" + d] = arguments[d];
				if (!angular.equals(this.data, c)) {
					var e = this.func;
					this.promise = e.apply(null, arguments), this.data = c
				}
				return this.promise
			}, a
		}();
		return b.CachedPromise = p, b.valueOrFunc = g, b.promisify = h, b.firstTruthy = i, b.wrapPromiseWithNgPromise = j, b.resolve = k, b.all = l, b.create = m, o.appModule.run(["$q", function (a) {
			n = a
		}]), c.exports
	}), System.registerDynamic("app/fx/EventEmitter.js", ["./Logger"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("./Logger"),
			e = function () {
				function a() {
					this.events = {}
				}
				return a.prototype.raise = function (a, b, c) {
					void 0 === c && (c = new d.NullLogger), c.log("BEGIN raise", a, "with", b);
					var e = new Date,
						f = this.events[a];
					if (f) {
						f.forEach(function (a) {
							a.method.call(a.obj, b)
						});
						var g = new Date;
						c.log("END raise", a, " AFTER " + (g.valueOf() - e.valueOf()) + "ms")
					}
				}, a.prototype.subscribe = function (a, b, c) {
					void 0 == c && (c = b, b = null);
					var d = this.events[a];
					d || (d = this.events[a] = []), d.push({
						obj: b,
						method: c
					})
				}, a.prototype.unsubscribeAll = function (a) {
					for (var b in this.events)
						for (var c = this.events[b], d = 0; d < c.length; d++) {
							var e = c[d];
							e.obj == a && (c.splice(d, 1), --d)
						}
				}, a.prototype.unsubscribe = function (a, b, c) {
					void 0 == c && (c = b, b = null);
					var d = this.events[a];
					if (d) {
						for (var e = -1, f = 0; f < d.length; f++) {
							var g = d[f];
							if (g.obj == b && g.method == c) {
								e = f;
								break
							}
						} - 1 != e && d.splice(e, 1)
					}
				}, a
			}();
		b.EventEmitterSource = e;
		var f = function () {
			function a(a) {
				this.event = a
			}
			return a.prototype.subscribe = function (a, b, c) {
				this.event.subscribe(a, b, c)
			}, a.prototype.unsubscribe = function (a, b, c) {
				this.event.unsubscribe(a, b, c)
			}, a
		}();
		return b.EventEmitter = f, c.exports
	}), System.registerDynamic("app/common/jqHelpers.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			if (!a.length) throw new Error("JQuery element is empty");
			return a[0]
		}

		function e(a, b) {
			for (;;) {
				if (b[0] == a[0]) return !0;
				if (b[0] == document.rootElement) return !1;
				b = b.parent()
			}
		}

		function f(a) {
			var b = a;
			b && (b.moovitHandled = !0)
		}

		function g(a) {
			var b = a;
			return !!b && b.moovitHandled
		}

		function h(a, b) {
			var c;
			return c = b ? b[0].querySelectorAll(a) : document.querySelectorAll(a), angular.element(c)
		}
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.getSingleNode = d, b.isParent = e, b.markEventAsHandled = f, b.wasEventHandled = g, b.find = h, Array.prototype.find = Array.prototype.find || function (a) {
			if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
			if ("function" != typeof a) throw new TypeError("callback must be a function");
			for (var b = Object(this), c = b.length >>> 0, d = arguments[1], e = 0; e < c; e++) {
				var f = b[e];
				if (a.call(d, f, e, b)) return f
			}
		}, c.exports
	}), System.registerDynamic("app/fx/Component.js", ["../common/module", "./EventEmitter", "../fx/Logger", "./Application", "../common/jqHelpers", "../common/stringHelpers", "./Common", "./DI"], !0, function (a, b, c) {
		"use strict";

		function d(a, b, c, d) {
			p = a, n = b, o = c, q = d
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var e = a("../common/module"),
			f = a("./EventEmitter"),
			g = a("../fx/Logger"),
			h = a("./Application"),
			i = a("../common/jqHelpers"),
			j = a("../common/stringHelpers"),
			k = a("./Common"),
			l = a("./DI"),
			m = 1,
			n = null,
			o = null,
			p = null,
			q = null,
			r = (g.createLogger("ComponentBase"), function () {
				function a(b) {
					this.id = a.nextId++, this.logger = b.create("(" + this.id + ")"), this.injector = null, this.scope = null, this.element = null, this.inputs = null, this.eventsSource = new f.EventEmitterSource, this.events = new f.EventEmitter(this.eventsSource), this.onPushedFirstTime = !0
				}
				return a.prototype.onInit = function () {
					this.watchInputs()
				}, a.prototype.onDestroy = function () {
					h.events.unsubscribeAll(this)
				}, a.prototype.internalOnPush = function (a, b) {
					a && 1 == a.length && (a = a[0]), b && 1 == b.length && (b = b[0]), this.onPushed(), this.onPushedFirstTime = !1
				}, a.prototype.onPushed = function () {}, a.prototype.destroy = function () {
					this.scope && (this.scope.$destroy(), this.scope = null), this.element = null
				}, a.prototype.getElement = function () {
					return this.element
				}, a.prototype.getParent = function () {
					var a = this.scope.$parent;
					if (!a) return null;
					for (; a;) {
						if (a.hasOwnProperty("ctrl")) {
							var b = a.ctrl;
							if (b) return b
						}
						a = a.$parent
					}
					return null
				}, a.prototype.getClosestParent = function (a) {
					for (var b = this.injector.get("$rootScope"), c = this.scope.$parent;;) {
						if (c.ctrl && c.ctrl instanceof a) return c.ctrl;
						if ((c = c.$parent) == b) break
					}
					throw Error("No parent component of type: " + a.name + " was found")
				}, a.prototype.createComponent = function (a) {
					var b = this.scope,
						c = "<" + a + "></" + a + ">",
						d = angular.element(c),
						e = b.$$childTail;
					q(d)(b);
					var f = b.$$childTail;
					if (e == f) throw new Error("DOM compilation is broken. No injected component scope was found");
					var g = f.ctrl;
					if (!g) throw new Error("DOM compilation is broken. A new scope was created but attached ctrl was not found");
					return g
				}, a.prototype.focus = function () {
					return this.logger.log("focus"), !1
				}, a.prototype.isEventOutside = function (a) {
					return !i.isParent(this.element, angular.element(a.target))
				}, a.prototype.isEventInside = function (a) {
					return i.isParent(this.element, angular.element(a.target))
				}, a.buildComponentTemplate = function (a) {
					var b = a.template,
						c = angular.element(b);
					if (c[0].tagName == a.tagName.toUpperCase()) {
						b = c.html(), a.hostAttributes = a.hostAttributes || {};
						for (var d = c[0].attributes, e = 0; e < d.length; e++) {
							var f = d[e];
							a.hostAttributes[f.name] = f.value
						}
					}
					return b
				}, a.mergeHostAttributes = function (a, b) {
					if (b.hostAttributes)
						for (var c in b.hostAttributes) void 0 === a.attr(c) && a.attr(c, b.hostAttributes[c])
				}, a.registerComponent = function (b) {
					var c = j.snakeCaseToCamelCase(b.tagName),
						d = a.buildComponentTemplate(b),
						f = ["$injector", function (c) {
							return {
								restrict: "E",
								controller: b.controller,
								transclude: !!b.transclude,
								compile: function (c, d) {
									return a.mergeHostAttributes(c, b),
										function (c, d, e) {
											a.postLink(b, c, d, e)
										}
								},
								controllerAs: "ctrl",
								template: d,
								bindToController: !0,
								scope: b.scope || {}
							}
						}];
					k.isBootstrapped() ? l.resolve("$compileProvider").directive(c, f) : e.appModule.directive(c, f)
				}, a.postLink = function (b, c, d, e) {
					var f = c.ctrl;
					if (!(f instanceof a)) throw new Error("Component: " + f.constructor.name + " does not extend Component");
					if (f) {
						f.injector = p, f.scope = c, f.element = d, f.attrs = e, f.inputs = [], f.metadata = b, a.elementToComponent.set(d, f), e.moovitComponentName && (c.$parent.ctrl[e.moovitComponentName] = f);
						for (var g in b.scope) "<" != b.scope[g] && "<?" != b.scope[g] || f.inputs.push(g);
						f.onInit && f.onInit(), c.$on("$destroy", function () {
							a.elementToComponent.delete(d), f.onDestroy && f.onDestroy()
						})
					}
				}, a.fromElement = function (b) {
					return a.elementToComponent.get(b)
				}, a.generateId = function () {
					return "componentId" + m++
				}, a.invokeOnVmTurnEnd = function (a) {
					if (null == n) throw new Error("Component.$rootScope is not available yet");
					n.$$postDigest(a)
				}, a.invokeOnNextVmTurn = function (a) {
					if (null == o) throw new Error("Component.$timeout is not available yet");
					o(a)
				}, a.prototype.watchInputs = function () {
					var a = this;
					if (this.inputs.length) {
						var b = [];
						this.scope.$watchCollection(function () {
							return b.splice(0, b.length), a.inputs.forEach(function (c) {
								b.push(a[c])
							}), b
						}, function (b, c) {
							a.internalOnPush(b, c)
						})
					}
				}, a.nextId = 1, a.elementToComponent = new WeakMap, a
			}());
		return b.ComponentBase = r, d.$inject = ["$injector", "$rootScope", "$timeout", "$compile"], e.appModule.run(d), c.exports
	}), System.registerDynamic("app/fx/Directive.js", ["../fx/Logger", "../common/stringHelpers", "../common/module"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../fx/Logger"),
			e = a("../common/stringHelpers"),
			f = a("../common/module"),
			g = d.createLogger("Directive"),
			h = function () {
				function a(a, b, c) {
					this.scope = a, this.element = b, this.attrs = c
				}
				return a.compile = function (b, c, d) {
					return {
						pre: function (c, d, e) {
							a.preLink(b, c, d, e)
						},
						post: function (c, d, e) {
							a.postLink(b, c, d, e)
						}
					}
				}, a.preLink = function (b, c, d, e) {
					var f = new b.directive(c, d, e);
					a.stack.push(f), f.onPreLink()
				}, a.postLink = function (b, c, d, e) {
					a.current().onPostLink(), a.stack.pop()
				}, a.current = function () {
					var b = a.stack;
					if (!b.length) throw new Error("No current directive");
					return b[b.length - 1]
				}, a.prototype.onPreLink = function () {
					this.log("onPreLink")
				}, a.prototype.onPostLink = function () {
					this.log("onPostLink")
				}, a.prototype.log = function (a) {
					for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
					g.log(this, a, b)
				}, a.registerDirective = function (b) {
					var c = e.snakeCaseToCamelCase(b.name);
					f.appModule.directive(c, [function () {
						return {
							restrict: "A",
							compile: function (c, d) {
								return a.compile(b, c, d)
							}
						}
					}])
				}, a.stack = [], a
			}();
		return b.Directive = h, c.exports
	}), System.registerDynamic("app/fx/Common.js", ["../common/module"], !0, function (a, b, c) {
		"use strict";

		function d() {
			return f
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var e = a("../common/module"),
			f = !1;
		return b.isBootstrapped = d, e.appModule.run(["$rootScope", function (a) {
			f = !0
		}]), c.exports
	}), System.registerDynamic("app/fx/Service.js", ["../common/module", "./Common", "./DI"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../common/module"),
			e = a("./Common"),
			f = a("./DI"),
			g = function () {
				function a() {}
				return a.registerService = function (a) {
					e.isBootstrapped() ? f.resolve("$provide").service(a.name, a.service) : d.appModule.service(a.name, a.service)
				}, a
			}();
		return b.ServiceBase = g, c.exports
	}), System.registerDynamic("app/fx/ModuleLoader.js", ["../routes", "../common/promiseHelpers", "./Logger", "./DI", "./Component", "./Directive", "./Service"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return r.log("Loading module from: " + a), Promise.resolve().then(function () {
				if (moovitIsBundle) {
					r.log("Under production cannot load main script directly. Need to load the bundle first");
					var b = h(a);
					return r.log("Loading bundle from: " + b), SystemJS.import(b)
				}
			}).then(function () {
				return l.wrapPromiseWithNgPromise(SystemJS.import(a + "/module")).then(function (a) {
					return a.default
				})
			})
		}

		function e(a) {
			return Promise.resolve().then(function () {
				return r.log("loadModule", a), s[a] ? void r.log("Module: " + a + " was already loaded") : d(a).then(function (b) {
					r.log("Loaded module ctor is", b);
					var c = Reflect.getMetadata("module", b);
					if (!c) throw new Error("Failed to read module metadata for module ctor");
					if (c.services)
						for (var d = 0, e = c.services; d < e.length; d++) {
							var f = e[d],
								g = Reflect.getMetadata("service", f);
							q.ServiceBase.registerService(g)
						}
					if (c.directives)
						for (var h = 0, i = c.directives; h < i.length; h++) {
							var j = i[h],
								k = Reflect.getMetadata("directive", j);
							p.Directive.registerDirective(k)
						}
					for (var l = 0, m = c.components; l < m.length; l++) {
						var t = m[l],
							u = Reflect.getMetadata("component", t);
						o.ComponentBase.registerComponent(u)
					}
					s[a] = n.instantiate(b)
				})
			})
		}

		function f(a) {
			r.log("loadModules", a);
			var b = a.map(e);
			return l.all(b)
		}

		function g(a) {
			return r.log("loadModulesByState", a), f(k.Routes.get(a).modules || [])
		}

		function h(a) {
			var b = a.lastIndexOf("/");
			if (-1 == b) throw new Error("Invalid script location: " + a);
			var c = a.substring(b + 1),
				d = c + ".bundle.js";
			return t.bundlesLocation + "/" + d
		}

		function i(a) {
			if (r.log("registerModule", a), s[a.name]) throw new Error("A module with name: " + a.name + " is already registered");
			s[a.name] = a
		}

		function j(a) {
			angular.extend(t, a)
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var k = a("../routes"),
			l = a("../common/promiseHelpers"),
			m = a("./Logger"),
			n = a("./DI"),
			o = a("./Component"),
			p = a("./Directive"),
			q = a("./Service"),
			r = m.createLogger("ModuleLoader"),
			s = {},
			t = {
				bundlesLocation: ""
			};
		return b.loadModule = e, b.loadModules = f, b.loadModulesByState = g, b.registerModule = i, b.configure = j, c.exports
	}), System.registerDynamic("app/fx/Promise.js", ["../common/module"], !0, function (a, b, c) {
		"use strict";

		function d() {
			if (!e) throw new Error("Promise.$q is not available. Did angular bootstrap already ?")
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var e, f = a("../common/module");
		f.appModule.run(["$q", function (a) {
			e = a
		}]);
		var g = function () {
			function a() {}
			return a.resolve = function (a) {
				return d(), e.when(a)
			}, a
		}();
		return b.Promise = g, c.exports
	}), System.registerDynamic("app/fx/Router.js", ["./ModuleLoader", "./Logger", "./Promise", "./Registry", "./Router"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return "<" + a.component + "></" + a.component + ">"
		}

		function e(a) {
			return j.Promise.resolve().then(function () {
				if (a.modules) return h.loadModules(a.modules)
			})
		}

		function f(a, b) {
			a.state(b.name, {
				name: b.name,
				url: b.url,
				templateProvider: function () {
					return e(b).then(function () {
						return d(b)
					}).catch(function (a) {
						m.error(a)
					})
				},
				reloadOnSearch: !1,
				redirectTo: b.redirectTo,
				isSharing: b.isSharing
			})
		}

		function g(a, b) {
			b.otherwise("/"), k.routes.forEach(function (b) {
				l.registerRouteIntoUIRouter(a, b)
			})
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h = a("./ModuleLoader"),
			i = a("./Logger"),
			j = a("./Promise"),
			k = a("./Registry"),
			l = a("./Router"),
			m = i.createLogger("Router");
		return b.registerRouteIntoUIRouter = f, g.$inject = ["$stateProvider", "$urlRouterProvider"], b.configure = g, c.exports
	}), System.registerDynamic("app/common/stringHelpers.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			for (var b = [], c = 0; c < a.length; c++) {
				var d = a[c];
				f(d) ? b.push("-" + d.toLowerCase()) : b.push(d)
			}
			return b.join("")
		}

		function e(a) {
			for (var b = [], c = 0; c < a.length; c++) {
				var d = a[c],
					e = a[c + 1];
				"-" == d ? (b.push(e.toUpperCase()), c++) : b.push(d)
			}
			return b.join("")
		}

		function f(a) {
			return a.toUpperCase() == a
		}

		function g(a, b, c) {
			for (var d = [], e = 0; e < b - a.length; e++) d.push(c);
			return d.push(a), d.join("")
		}

		function h(a, b) {
			return a.substring(0, b.length) == b
		}

		function i(a, b) {
			return a.substring(a.length - b.length) == b
		}

		function j(a) {
			var b = {};
			if (a && a.indexOf("?") > 0)
				for (var c = a.split("?")[1], d = c.split("&"), e = 0; e < d.length; e++) {
					var f = d[e].split("=");
					b[f[0]] = f[1]
				}
			return b
		}

		function k(a) {
			for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
			var d;
			if (b instanceof Array) {
				for (d = 0; d < b.length; d++) a = a.replace(new RegExp("\\{" + d + "\\}", "gm"), b[d]);
				return a
			}
			for (d = 0; d < arguments.length - 1; d++) a = a.replace(new RegExp("\\{" + d + "\\}", "gm"), arguments[d + 1]);
			return a
		}
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.camelCaseToSnakeCase = d, b.snakeCaseToCamelCase = e, b.isUpper = f, b.padLeft = g, b.startsWith = h, b.endsWith = i, b.extractSearchFromUrl = j, b.formatString = k, c.exports
	}), System.registerDynamic("app/fx/DI.js", ["../common/module", "../common/stringHelpers", "./Logger"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return l.endsWith(a, "Provider") ? h.get(a) : "$provide" == a ? j : i.get(a)
		}

		function e(a, b) {
			return i.invoke(a, b)
		}

		function f(a, b) {
			return h.invoke(a, b)
		}

		function g(a, b) {
			return n.log("instantiate", a, b), i.instantiate(a, b)
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var h, i, j, k = a("../common/module"),
			l = a("../common/stringHelpers"),
			m = a("./Logger"),
			n = m.createLogger("DI");
		return k.appModule.config(["$injector", "$provide", function (a, b) {
			h = a, j = b
		}]), k.appModule.run(["$injector", function (a) {
			i = a
		}]), b.resolve = d, b.run = e, b.config = f, b.instantiate = g, c.exports
	}), System.registerDynamic("app/fx/Logger.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			if (moovitIsRemoteLogging) return new h(a);
			if (moovitIsProduction) return new g;
			if (e(a)) return new g;
			var b = {
				prefix: a
			};
			return b.log = console.log.bind(console, a), b.remote = console.log.bind(console, a), b.error = console.error.bind(console, a), b.info = console.info.bind(console, a), b.create = function (a) {
				return d(b.prefix + a)
			}, b
		}

		function e(a) {
			return -1 != f.indexOf(a)
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var f = [];
		b.createLogger = d;
		var g = function () {
			function a() {
				this.prefix = ""
			}
			return a.prototype.log = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a.prototype.info = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a.prototype.error = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a.prototype.e2e = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a.prototype.create = function () {
				return this
			}, a.prototype.remote = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a
		}();
		b.NullLogger = g;
		var h = function () {
			function a(a) {
				this.prefix = a, this.isAutomation = !1, document.cookie.indexOf("automation=true") > -1 && (this.isAutomation = !0)
			}
			return a.prototype.log = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a.prototype.info = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a.prototype.error = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]
			}, a.prototype.e2e = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
				this.isAutomation && console.log.apply(console, [this.prefix, a].concat(b))
			}, a.prototype.create = function () {
				return this
			}, a.prototype.remote = function (a) {
				for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
				var d = JSON.stringify(b);
				d.length > 1e3 && (d = d.substr(0, 1e3) + "... (message truncated)"), remoteLogger.log(this.prefix + " " + a + " " + d)
			}, a
		}();
		return b.RemoteLogger = h, c.exports
	}), System.registerDynamic("app/fx/Registry.js", ["./Logger"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			if (b.components[a.tagName]) throw new Error("Component with name: " + a.tagName + " already exists");
			b.components[a.tagName] = a
		}

		function e(a) {
			b.directives.push(a)
		}

		function f(a) {
			if (b.services[a.name]) throw new Error("Service with name: " + a.name + " already exists");
			b.services[a.name] = a
		}

		function g(a) {
			b.modules.push(a)
		}

		function h(a) {
			b.routes.push(a)
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var i = a("./Logger");
		i.createLogger("Registry");
		return b.services = {}, b.directives = [], b.components = {}, b.routes = [], b.modules = [], b.registerComponent = d, b.registerDirective = e, b.registerService = f, b.registerModule = g, b.registerRoute = h, c.exports
	}), System.registerDynamic("app/fx/Application.js", ["./EventEmitter", "./Logger", "./ModuleLoader", "./Component", "./Service", "./Directive", "./Router", "./DI", "../common/module", "./Registry"], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			for (var b = 0, c = a.routes; b < c.length; b++) {
				var d = c[b];
				n.registerRoute(d)
			}
			for (var e in n.services) i.ServiceBase.registerService(n.services[e]);
			for (var f = 0, o = n.directives; f < o.length; f++) {
				var p = o[f];
				j.Directive.registerDirective(p)
			}
			for (var q in n.components) h.ComponentBase.registerComponent(n.components[q]);
			g.configure(a.loader), m.appModule.config(function () {
				l.config(k.configure)
			}), angular.bootstrap(a.element, [a.appModule.name], {
				strictDi: !0
			})
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var e = a("./EventEmitter"),
			f = a("./Logger"),
			g = a("./ModuleLoader"),
			h = a("./Component"),
			i = a("./Service"),
			j = a("./Directive"),
			k = a("./Router"),
			l = a("./DI"),
			m = a("../common/module"),
			n = a("./Registry");
		b.events = new e.EventEmitterSource;
		f.createLogger("Application");
		return b.bootstrap = d, c.exports
	}), System.registerDynamic("app/common/AppEvents.js", [], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = function () {
			function a() {}
			return a.TRIPPLAN_QUERY_CHANGED = "TRIPPLAN_QUERY_CHANGED", a.TRIPPLAN_APP_READY = "TRIPPLAN_APP_READY", a.TRIPPLAN_SELECTED_ROUTE_CHANGED = "TRIPPLAN_SELECTED_ROUTE_CHANGED", a.TRIPPLAN_SIMILAR_ROUTE_CHANGED = "TRIPPLAN_SIMILAR_ROUTE_CHANGED", a.TRIPPLAN_STEP_SELECTED = "TRIPPLAN_STEP_SELECTED", a.TRIPPLAN_SEARCH_ROUTES_BEGIN = "TRIPPLAN_SEARCH_ROUTES_BEGIN", a.TRIPPLAN_SEARCH_ROUTES_MORE = "TRIPPLAN_SEARCH_ROUTES_MORE", a.TRIPPLAN_SEARCH_ROUTES_END = "TRIPPLAN_SEARCH_ROUTES_END", a.TRIPPLAN_SEARCH_LOCATION_BEGIN = "TRIPPLAN_SEARCH_LOCATION_BEGIN", a.TRIPPLAN_SEARCH_LOCATION_END = "TRIPPLAN_SEARCH_LOCATION_END", a.TRIPPLAN_TEXT_SEARCH_BEGIN = "TRIPPLAN_TEXT_SEARCH_BEGIN", a.TRIPPLAN_TEXT_SEARCH_END = "TRIPPLAN_TEXT_SEARCH_END", a.SHOW_ROUTE_STEPS = "SHOW_ROUTE_STEPS", a.MAP_CLICKED = "MAP_CLICKED", a.MAP_RESET_ROUTE_VIEW = "MAP_RESET_ROUTE_VIEW", a.CENTER_MAP = "CENTER_MAP", a.USER_LOCALE_CHANGED = "USER_LOCALE_CHANGED", a.METRO_CHANGING = "METRO_CHANGING", a.METRO_CHANGED = "METRO_CHANGED", a.URL_CHANGED = "URL_CHANGED", a.SIDE_BAR_POPUP_OPEN = "SIDE_BAR_POPUP_OPEN", a.SIDE_BAR_POPUP_CLOSE = "SIDE_BAR_POPUP_CLOSE", a.LOCATION_INPUT_FOCUS = "LOCATION_INPUT_FOCUS", a.TRIPPLAN_USE_CURRENT_LOCATION_FAILED = "TRIPPLAN_USE_CURRENT_LOCATION_FAILED", a.SIDE_NAV_STATE_CHANGED = "SIDE_NAV_STATE_CHANGED", a.ALERT_CLICKED = "ALERT_CLICKED", a.LINE_GROUP_SELECTED = "LINE_GROUP_SELECTED", a.LINE_ROUTE_DISPLAY = "LINE_ROUTE_DISPLAY", a.LINE_STOP_VIEW = "LINE_STOP_VIEW", a
		}();
		return b.AppEvents = d, c.exports
	}), System.registerDynamic("node_modules/ts-helpers/index.js", [], !1, function (a, b, c) {
		var d = System.get("@@global-helpers").prepareGlobal(c.id, null, null);
		return function () {
			function a(a) {
				for (var b, c = 1, d = arguments.length; c < d; c++) {
					b = arguments[c];
					for (var e in b) Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
				}
				return a
			}

			function b(a, b) {
				function c() {
					this.constructor = a
				}
				for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
				a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
			}

			function c(a, b, c, d) {
				var e, f = arguments.length,
					g = f < 3 ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(a, b, c, d);
				else
					for (var h = a.length - 1; h >= 0; h--)(e = a[h]) && (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
				return f > 3 && g && Object.defineProperty(b, c, g), g
			}

			function d(a, b) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(a, b)
			}

			function e(a, b) {
				return function (c, d) {
					b(c, d, a)
				}
			}

			function f(a, b, c, d) {
				return new(c || (c = Promise))(function (e, f) {
					function g(a) {
						try {
							i(d.next(a))
						} catch (a) {
							f(a)
						}
					}

					function h(a) {
						try {
							i(d.throw(a))
						} catch (a) {
							f(a)
						}
					}

					function i(a) {
						a.done ? e(a.value) : new c(function (b) {
							b(a.value)
						}).then(g, h)
					}
					i((d = d.apply(a, b)).next())
				})
			}
			this.__assignFn = a, this.__extendsFn = b, this.__decorateFn = c, this.__metadataFn = d, this.__paramFn = e, this.__awaiterFn = f,
				function (g) {
					g.__assign = g && g.__assign || Object.assign || a, g.__extends = g && g.__extends || b, g.__decorate = g && g.__decorate || c, g.__metadata = g && g.__metadata || d, g.__param = g && g.__param || e, g.__awaiter = g && g.__awaiter || f
				}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope ? self : "undefined" != typeof global ? global : Function("return this;")())
		}(), d()
	}), System.registerDynamic("app/common/module.js", ["es6-collections", "moment", "reflect", "angular", "angular-sanitize", "angular-animate", "angular-aria", "angular-cookies", "angular-ui-router", "angular-translate", "angular-material", "clipboard", "ngclipboard", "ts-helpers"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		}), a("es6-collections"), a("moment"), a("reflect"), a("angular"), a("angular-sanitize"), a("angular-animate"), a("angular-aria"), a("angular-cookies"), a("angular-ui-router"), a("angular-translate"), a("angular-material"), a("clipboard"), a("ngclipboard"), a("ts-helpers");
		var d = ["ui.router", "ngMaterial", "ngSanitize", "pascalprecht.translate", "ngclipboard", "ngCookies"];
		return b.appModule = angular.module("webTripPlanner", d), c.exports
	}), System.registerDynamic("app/common/utmHelper.js", [], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d;
		! function (a) {
			a[a.SharedLink = 1] = "SharedLink", a[a.SharedEmail = 2] = "SharedEmail", a[a.SharedMessenger = 3] = "SharedMessenger", a[a.SharedWhatsApp = 4] = "SharedWhatsApp"
		}(d = b.UTMSourceMedium || (b.UTMSourceMedium = {})), b.UTM_SOURCE_SHARED = "shared", b.UTM_SOURCE_WIDGET = "widget", b.UTM_SOURCE_SEO_TRIPLAN = "seo_pages", b.UTM_SOURCE_SEO_LINES = "seo_lines", b.UTM_SOURCE_SEO_MAPS = "seo_maps";
		var e = function () {
			function a() {}
			return a.getUTMParamsByShortId = function (a) {
				var b = this.find_key_by_value(d, a);
				return this.utmMatrix[b]
			}, a.getShortUtmParamString = function (a) {
				return "t=" + a
			}, a.find_key_by_value = function (a, b) {
				for (var c in a)
					if (a.hasOwnProperty(c) && a[c] == b) return c
			}, a.utmMatrix = {
				SharedLink: {
					source: b.UTM_SOURCE_SHARED,
					medium: "link"
				},
				SharedEmail: {
					source: b.UTM_SOURCE_SHARED,
					medium: "email"
				},
				SharedMessenger: {
					source: b.UTM_SOURCE_SHARED,
					medium: "facebook"
				},
				SharedWhatsApp: {
					source: b.UTM_SOURCE_SHARED,
					medium: "whatsapp"
				}
			}, a
		}();
		return b.UTMConvertor = e, c.exports
	}), System.registerDynamic("app/routes.js", ["./fx/Logger", "./fx/Application", "./common/AppEvents", "./common/module", "./common/utmHelper"], !0, function (a, b, c) {
		"use strict";

		function d(a, b) {
			return b.lgid && b.lid && b.lang ? n.lineLang.name : b.lgid && b.lid ? n.line.name : b.lgid ? n.lineGroup.name : b.lang ? n.linesLang.name : n.lines.name
		}

		function e(a, b) {
			return b.to && b.from ? n.poiToPoi.name : b.to ? n.toPoi.name : b.from ? n.fromPoi.name : n.directions.name
		}

		function f(a, b, c, f, g, j, m) {
			a.$on("$locationChangeStart", function () {
				l.log("$locationChangeStart", arguments)
			}), window.addEventListener("popstate", function () {
				l.log("popstate", arguments), l.remote("popstate"), h.events.raise(i.AppEvents.URL_CHANGED, {}, l)
			}), a.$on("$stateChangeStart", function (h, i, o, p, q) {
				if (l.log("$stateChangeStart", arguments), f.state.originalState || (f.state.originalState = "splash" != i.name ? i.name : "tripPlan", f.state.originalStateParams = o), o.t) {
					var r = k.UTMConvertor.getUTMParamsByShortId(o.t);
					o.utm_source = r.source, o.utm_medium = r.medium, o.t = null
				}
				if (f.isMobile && n.isLineIndexingInnerView(i.name) && !m.showSplashScreen() && (i.redirectTo = n.lineGroupStops.name), i.redirectTo) {
					h.preventDefault(), i.isSharing && (f.state.isFromSharing = !0, g.trackShareAction("received short url", i.name));
					var s = i.redirectTo;
					return i.name === n.oldLines.name ? s = d(i, o) : i.name === n.tripPlanOld.name && (s = e(i, o)), j.getMetroSeoName(o.metroId).then(function (a) {
						o.metroSeoName = a, b.go(s, o, {
							location: "replace"
						})
					})
				}
				f.state.origin || (f.state.origin = +o.o), f.state.originalUtmSource || (f.state.originalUtmSource = o.utm_source), o.utm_source == k.UTM_SOURCE_SHARED && g.trackShareAction("received utm", (o.utm_source || "") + " " + (o.utm_medium || ""));
				var t = n.get(i.name),
					u = t.data;
				if (f.isDesktop && !u.isDesktop || f.isMobile && !u.isMobile) {
					l.log("Requested state: " + i.name + " is not allowed on current app profile"), l.log("App profile"), l.log("  isDesktop: " + f.isDesktop), l.log("  isMobile: " + f.isMobile), l.log("App state:"), l.log("  isDesktop: " + u.isDesktop), l.log("  isMobile: " + u.isMobile), h.preventDefault();
					var v = "/";
					return void a.$evalAsync(function () {
						l.log("Reverting to url: " + v), c.url(v).replace()
					})
				}
				g.trackVirtualPageView(i.name)
			}), a.$on("$stateChangeSuccess", function (a, b, c, d, e) {
				l.remote("$stateChangeSuccess"), h.events.raise(i.AppEvents.URL_CHANGED, {
					newUrl: b.url,
					oldUrl: d.url,
					newState: b,
					oldState: d
				}, l)
			})
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var g = a("./fx/Logger"),
			h = a("./fx/Application"),
			i = a("./common/AppEvents"),
			j = a("./common/module"),
			k = a("./common/utmHelper"),
			l = g.createLogger("routes"),
			m = "o&t&customerId&ref&poiType&debug&forceAbVariant&secret",
			n = function () {
				function a() {}
				return a.get = function (b) {
					for (var c = 0, d = a.all; c < d.length; c++) {
						var e = d[c];
						if (e.name == b) return e
					}
					throw new Error("State with name: " + b + " was not found")
				}, a.isAlertsView = function (a) {
					return a == this.alerts.name || a == this.alert.name || a == this.alertDetails.name
				}, a.isLineIndexingInnerView = function (a) {
					return a == this.lineGroup.name || a == this.line.name || a == this.lineLang.name
				}, a.isLinesView = function (a) {
					return a == this.lines.name || a == this.linesLang.name || this.isLineIndexingInnerView(a) || a == this.lineGroupStops.name || a == this.lineStopArrivals.name || a == this.mapLineView.name
				}, a.isDirectionsIndexingView = function (a) {
					return a == this.tripPlan.name || a == this.toPoi.name || a == this.fromPoi.name || a == this.poiToPoi.name
				}, a.isTripPlanView = function (a) {
					return this.isDirectionsIndexingView(a) || a == this.mapView.name || a == this.itinerary.name || a == this.tripPlan.name
				}, a.oldTripPlan = {
					name: "oldTripPlan",
					url: "/tripplan?from&to&fll&tll&fsid&tsid&routeTypes&timeType&time&utm_medium&utm_source",
					redirectTo: "tripPlan",
					isSharing: !1
				}, a.oldLines = {
					name: "oldLines",
					url: "/lines?lgid&lid&sid&epochDay&query&utm_medium&utm_source",
					redirectTo: "lines",
					isSharing: !1
				}, a.tripPlanOld = {
					name: "tripPlanOld",
					url: "/?itid&from&to&fll&tll&fsid&tsid&routeTypes&timeType&time&utm_medium&utm_source&multiModal",
					redirectTo: "tripPlan",
					isSharing: !1
				}, a.itinerary = {
					name: "itinerary",
					url: "/itinerary?id&index&from&fll&to&tll&action&multiModal",
					component: "itinerary",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.stopArrivals = {
					name: "stopArrivals",
					url: "/stopArrivals?id&index&from&fll&to&tll&multiModal",
					component: "stop-arrivals",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.alert = {
					name: "alert",
					url: "/alert?etype&eid",
					component: "alert-view",
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.mapView = {
					name: "mapView",
					url: "/mapview?id&index&from&to&fll&tll&multiModal",
					component: "map-view",
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.settings = {
					name: "settings",
					url: "/settings?from&to&fll&tll&multiModal",
					component: "settings-view",
					modules: ["app/settings"],
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.language = {
					name: "language",
					url: "/language?from&to&fll&tll&multiModal",
					component: "lang-selector-view",
					modules: ["app/settings"],
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.metro = {
					name: "metro",
					url: "/metro?from&to&fll&tll&multiModal",
					component: "metro-selector-view",
					modules: ["app/settings"],
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.tripPlan = {
					name: "tripPlan",
					url: "/{metroSeoName}-{metroId}/{lang}?tll&tsid&itid&fll&fsid&routeTypes&timeType&time&utm_medium&utm_source&multiModal&" + m,
					component: "trip-plan",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.toPoi = {
					name: "tripPlan.toPoi",
					url: "/poi/{to}/t",
					component: "trip-plan",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.fromPoi = {
					name: "tripPlan.fromPoi",
					url: "/poi/{from}/f",
					component: "trip-plan",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.poiToPoi = {
					name: "tripPlan.poiToPoi",
					url: "/poi/{to}/{from}",
					component: "trip-plan",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.directions = {
					name: "directions",
					url: "/?utm_medium&utm_source",
					component: "trip-plan",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.lines = {
					name: "lines",
					url: "/{metroSeoName}-{metroId}/lines?epochDay&query&utm_medium&utm_source&" + m,
					component: "lines-view",
					modules: ["app/lines"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.linesLang = {
					name: "lines.linesLang",
					url: "/:lang",
					component: "lines-view",
					modules: ["app/lines"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.lineGroup = {
					name: "lines.lineGroup",
					url: "/:lineShortName/:lgid",
					component: "lines-view",
					modules: ["app/lines"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.line = {
					name: "lines.lineGroup.line",
					url: "/:lid?sid",
					component: "lines-view",
					modules: ["app/lines"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.lineLang = {
					name: "lines.lineGroup.line.lang",
					url: "/:lang",
					component: "lines-view",
					modules: ["app/lines"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.lineGroupStops = {
					name: "lineGroupStops",
					url: "/lineGroupStops?lgid&lid&sid&epochDay",
					component: "line-group-stops",
					modules: ["app/lines"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.mapLineView = {
					name: "mapLineView",
					url: "/mapLineView?lgid&lid&sid&epochDay",
					component: "map-line-view",
					modules: ["app/lines"],
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.lineStopArrivals = {
					name: "lineStopArrivals",
					url: "/lineStopArrivals?lgid&lid&sid&epochDay",
					component: "line-stop-arrivals",
					modules: ["app/lines"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.splash = {
					name: "splash",
					url: "/splash?from&to&fll&tll&utm_medium&utm_source&multiModal",
					component: "splash-screen-view",
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.alerts = {
					name: "alerts",
					url: "/alerts?alertIds",
					component: "alerts",
					modules: ["app/alerts"],
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.alertDetails = {
					name: "alertDetails",
					url: "/alertDetails?alertIds&etype&eid&from&fll&to&tll&multiModal",
					component: "alert-details",
					data: {
						isDesktop: !1,
						isMobile: !0
					}
				}, a.backwardCompatibility = {
					name: "backwardCompatibility",
					url: "/ma/?metroAreaId&langId&destination&currLocation",
					component: "backward-compatibility",
					data: {
						isDesktop: !0,
						isMobile: !0
					}
				}, a.share_itinerary = {
					name: "shareItinerary",
					url: "/i/{itid}",
					redirectTo: "tripPlan",
					isSharing: !0
				}, a.all = [a.share_itinerary, a.itinerary, a.stopArrivals, a.language, a.mapView, a.settings, a.tripPlanOld, a.oldTripPlan, a.directions, a.metro, a.alert, a.alerts, a.oldLines, a.lineGroupStops, a.mapLineView, a.lineStopArrivals, a.splash, a.alertDetails, a.backwardCompatibility], a.pathStructuredRoutes = [a.lines, a.linesLang, a.lineGroup, a.line, a.lineLang, a.tripPlan, a.toPoi, a.fromPoi, a.poiToPoi], a.sharedParams = m + "&metroId&lang", a
			}();
		b.Routes = n;
		for (var o = 0, p = n.all; o < p.length; o++) {
			var q = p[o],
				r = -1 == q.url.indexOf("?") ? "?" : "&";
			q.url += r + n.sharedParams
		}
		return n.all = n.pathStructuredRoutes.concat(n.all), f.$inject = ["$rootScope", "$state", "$location", "appProfileService", "analyticsService", "metroService", "appStoreService"], j.appModule.run(f), c.exports
	}), System.registerDynamic("common/userAgent.js", [], !0, function (a, b, c) {
		"use strict";

		function d(a) {
			return -1 != a.indexOf("MSIE") || -1 != a.indexOf("rv:11.0")
		}
		return Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.isIEUserAgent = d, c.exports
	}), System.registerDynamic("app/common/browserHelpers.js", ["../../common/userAgent"], !0, function (a, b, c) {
		"use strict";
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = a("../../common/userAgent");
		return b.isIE = d.isIEUserAgent(navigator.userAgent), c.exports
	}), System.registerDynamic("config.js", ["fs", "path"], !0, function (a, b, c) {
		function d() {
			const b = a("fs"),
				c = a("path"),
				d = c.join(f, i.version);
			var e = !1;
			try {
				b.lstatSync(d).isDirectory() && (e = !0)
			} catch (a) {}
			return e ? h.BUNDLE : h.DEV
		}
		var e = System.get("@@cjs-helpers").getPathVars(c.id),
			f = (e.filename, e.dirname);
		const g = {
				DEV: "dev",
				QA: "qa",
				STG: "stg",
				PROD: "production"
			},
			h = {
				DEV: "dev",
				BUNDLE: "bundle"
			};
		var i = {
			release: "5.0.0",
			version: "V567",
			base: "/",
			env: void 0,
			package: void 0,
			httpPort: void 0,
			httpsPort: void 0,
			envs: g,
			packages: h,
			isProfiling: !1,
			isRemoteLogging: !0
		};
		return "undefined" == typeof window ? (i.env = "production", i.package = d(), i.httpPort = process.env.PORT || 8080, i.httpsPort = process.env.HTTPS_PORT || 8443) : (i.env = window.moovitEnv, i.package = window.moovitPackage), "undefined" == typeof window && (console.log("config"), console.log("    env: " + i.env), console.log("    package: " + i.package), console.log("    version: " + i.version), console.log("    release: " + i.release), console.log("    httpPort: " + i.httpPort), console.log("    httpsPort: " + i.httpsPort)), c.exports = i, c.exports
	}), System.registerDynamic("fflags.js", ["./config"], !0, function (a, b, c) {
		var d = a("./config"),
			e = a("./config").envs,
			f = {
				APP_TYPE_HEADER: !0,
				REBLAZE: !0,
				SHARE_ITINERARY: !0,
				STOP_BY_ID: !0
			};
		if (d.env !== e.PROD)
			for (var g in f) f.hasOwnProperty(g) && "boolean" == typeof f[g] && (f[g] = !0);
		return c.exports = f, c.exports
	}), System.registerDynamic("app/main.js", ["thrift", "./fx/Logger", "./common/module", "./services/services", "./directives/directives", "./filters/filters", "./components/app", "./services/userProfileService", "./services/appStoreService", "./services/imageService", "./services/localeService", "./services/settingsService", "./services/analyticsService", "./fx/Application", "./routes", "moment", "./common/browserHelpers", "../config", "../fflags"], !0, function (a, b, c) {
		"use strict";

		function d(a, b, c, d) {
			x.log("run"), a.$mdMedia = d, b.init().then(function () {
				x.log("Application loading is DONE"), c.trackApplicationInitialized()
			}).catch(function (a) {
				x.error("Application initialization failed with error", a), c.trackError("Application initialization failed")
			})
		}

		function e() {
			function a(a) {
				if (!moovitIsProfiling) return a;
				var b = window.moovitProfiler;
				return b && !u.isIE ? function () {
					b.run(a)
				} : void 0
			}
			var b = document.getElementById("html");
			if (!b) return void x.error("Root element was not found");
			var c = a(function () {
					r.bootstrap({
						element: b,
						appModule: g.appModule,
						routes: s.Routes.all,
						loader: {
							bundlesLocation: v.version
						}
					})
				}),
				d = function () {
					document.body.offsetWidth > 0 ? c() : (x.log("waiting for iframe to be visible..."), setTimeout(d, 200))
				};
			document.body ? d() : c()
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		}), a("thrift");
		var f = a("./fx/Logger"),
			g = a("./common/module"),
			h = a("./services/services");
		PREVENT_IMPORT_REMOVE(h);
		var i = a("./directives/directives");
		PREVENT_IMPORT_REMOVE(i);
		var j = a("./filters/filters");
		PREVENT_IMPORT_REMOVE(j);
		var k = a("./components/app");
		PREVENT_IMPORT_REMOVE(k.AppComponent);
		var l = a("./services/userProfileService");
		PREVENT_IMPORT_REMOVE(l.UserProfileService);
		var m = a("./services/appStoreService");
		PREVENT_IMPORT_REMOVE(m.AppStoreService);
		var n = a("./services/imageService");
		PREVENT_IMPORT_REMOVE(n.ImageService);
		var o = a("./services/localeService");
		PREVENT_IMPORT_REMOVE(o.LocaleService);
		var p = a("./services/settingsService");
		PREVENT_IMPORT_REMOVE(p.SettingsService);
		var q = a("./services/analyticsService");
		PREVENT_IMPORT_REMOVE(q.AnalyticsService);
		var r = a("./fx/Application"),
			s = a("./routes"),
			t = a("moment"),
			u = a("./common/browserHelpers"),
			v = a("../config"),
			w = a("../fflags"),
			x = f.createLogger("app");
		return d.$inject = ["$rootScope", "appStoreService", "analyticsService", "$mdMedia"], g.appModule.run(d), g.appModule.config(["$compileProvider", "$locationProvider", "$mdDateLocaleProvider", "$mdGestureProvider", function (a, b, c, d) {
			moovitIsProduction && a.debugInfoEnabled(!1), b.html5Mode({
				enabled: !0,
				requireBase: !0,
				rewriteLinks: !1
			}), c.parseDate = function (a) {
				var b = t(a, "L", !0);
				return b.isValid() ? b.toDate() : new Date(NaN)
			}, c.formatDate = function (a) {
				return t(a).format("L")
			}, d.skipClickHijack()
		}]), g.appModule.constant("featureFlags", w), b.init = e, c.exports
	});