"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ScheduleComponent = (function () {
    function ScheduleComponent() {
        this.heading = "Ultra Racing Schedule";
        this.races = [{
                "id": 1,
                "name": "Daytona Thunderdome",
                "date": new Date('2512-01-04T14:00:00'),
                "about": "Race through the ruins of an ancient Florida battle arena.",
                "entryFee": 3200,
                "isRacing": false
            }, {
                "id": 2,
                "name": "San Francisco Ruins",
                "date": new Date('2512-07-03T20:00:00'),
                "about": "Drift down the streets of a city almost sunk under the ocean.",
                "entryFee": 4700,
                "isRacing": true
            }, {
                "id": 3,
                "name": "New York City Skyline",
                "date": new Date('2512-07-12T21:00:00'),
                "about": "Fly between buildings in the electronic sky.",
                "entryFee": 4300,
                "isRacing": false
            }];
    }
    ScheduleComponent.prototype.totalCost = function () {
        var totalFees = 0;
        for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
            var race = _a[_i];
            if (race.isRacing) {
                totalFees += race.entryFee;
            }
        }
        return totalFees;
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: "racing-app",
            template: "\n  <h1>{{heading}}</h1>\n  <ul>\n    <li *ngFor=\"let race of races\">\n      <h2>{{race.name}} {{race.entryFee | currency:\"USD\":true }}</h2>\n      <p>{{race.date | date:\"MMM d, y, h:MM a\":true }}</p>\n      <p>{{race.about}}</p>\n      <button *ngIf=\"!race.isRacing\" >Enter Race</button>\n      <h3 *ngIf=\"race.isRacing\" >Already Racing</h3>\n    </li>\n  </ul>\n  <h2>Total cost: {{totalCost() | currency:\"USD\":true}}</h2>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map