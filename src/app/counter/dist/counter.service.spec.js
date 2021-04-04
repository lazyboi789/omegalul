"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var counter_service_1 = require("./counter.service");
describe('CounterService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(counter_service_1.CounterService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
