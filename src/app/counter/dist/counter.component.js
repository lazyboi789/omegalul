"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CounterComponent = void 0;
var core_1 = require("@angular/core");
var CounterComponent = /** @class */ (function () {
    function CounterComponent(counterService) {
        this.counterService = counterService;
        this.count = 0;
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.buttonClicked = function () {
        this.counterService.incrementNumber();
        this.count = this.counterService.getNumber();
    };
    CounterComponent = __decorate([
        core_1.Component({
            selector: 'app-counter',
            templateUrl: './counter.component.html',
            styleUrls: ['./counter.component.less']
        })
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
