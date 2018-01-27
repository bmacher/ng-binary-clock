(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Observable'), require('rxjs/add/operator/map'), require('rxjs/add/operator/share'), require('rxjs/add/observable/interval'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/share', 'rxjs/add/observable/interval', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.binary = global.ng.binary || {}, global.ng.binary.clock = {}),global.ng.core,global.Rx,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable,global.ng.common));
}(this, (function (exports,core,Observable,map,share,interval,common) { 'use strict';

var NgBinaryClockService = (function () {
    function NgBinaryClockService() {
        var _this = this;
        this.timer$ = Observable.Observable.interval(500)
            .map(function () {
            var time = (new Date).toLocaleTimeString();
            return _this.convertTimeIntoBinary(time);
        });
    }
    NgBinaryClockService.prototype.convertTimeIntoBinary = function (time) {
        var binaryTime = {
            'hour': { '20': false, '10': false, '8': false, '4': false, '2': false, '1': false, },
            'minute': { '40': false, '20': false, '10': false, '8': false, '4': false, '2': false, '1': false, },
            'second': { '40': false, '20': false, '10': false, '8': false, '4': false, '2': false, '1': false, }
        };
        var hourDouble = +time.substr(0, 1);
        var hourSingle = +time.substr(1, 1);
        var minDouble = +time.substr(3, 1);
        var minSingle = +time.substr(4, 1);
        var secDouble = +time.substr(6, 1);
        var secSingle = +time.substr(7, 1);
        if ((hourDouble - 2) >= 0) {
            binaryTime.hour['20'] = true;
            hourDouble -= 2;
        }
        if ((hourDouble - 1) >= 0) {
            binaryTime.hour['10'] = true;
        }
        if ((hourSingle - 8) >= 0) {
            binaryTime.hour['8'] = true;
            hourSingle -= 8;
        }
        if ((hourSingle - 4) >= 0) {
            binaryTime.hour['4'] = true;
            hourSingle -= 4;
        }
        if ((hourSingle - 2) >= 0) {
            binaryTime.hour['2'] = true;
            hourSingle -= 2;
        }
        if ((hourSingle - 1) >= 0) {
            binaryTime.hour['1'] = true;
        }
        if ((minDouble - 4) >= 0) {
            binaryTime.minute['40'] = true;
            minDouble -= 4;
        }
        if ((minDouble - 2) >= 0) {
            binaryTime.minute['20'] = true;
            minDouble -= 2;
        }
        if ((minDouble - 1) >= 0) {
            binaryTime.minute['10'] = true;
        }
        if ((minSingle - 8) >= 0) {
            binaryTime.minute['8'] = true;
            minSingle -= 8;
        }
        if ((minSingle - 4) >= 0) {
            binaryTime.minute['4'] = true;
            minSingle -= 4;
        }
        if ((minSingle - 2) >= 0) {
            binaryTime.minute['2'] = true;
            minSingle -= 2;
        }
        if ((minSingle - 1) >= 0) {
            binaryTime.minute['1'] = true;
        }
        if ((secDouble - 4) >= 0) {
            binaryTime.second['40'] = true;
            secDouble -= 4;
        }
        if ((secDouble - 2) >= 0) {
            binaryTime.second['20'] = true;
            secDouble -= 2;
        }
        if ((secDouble - 1) >= 0) {
            binaryTime.second['10'] = true;
        }
        if ((secSingle - 8) >= 0) {
            binaryTime.second['8'] = true;
            secSingle -= 8;
        }
        if ((secSingle - 4) >= 0) {
            binaryTime.second['4'] = true;
            secSingle -= 4;
        }
        if ((secSingle - 2) >= 0) {
            binaryTime.second['2'] = true;
            secSingle -= 2;
        }
        if ((secSingle - 1) >= 0) {
            binaryTime.second['1'] = true;
        }
        return binaryTime;
    };
    NgBinaryClockService.decorators = [
        { type: core.Injectable },
    ];
    NgBinaryClockService.ctorParameters = function () { return []; };
    return NgBinaryClockService;
}());

var NgBinaryClock = (function () {
    function NgBinaryClock(ngBinaryClockService) {
        this.ngBinaryClockService = ngBinaryClockService;
    }
    NgBinaryClock.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = this.ngBinaryClockService.timer$.subscribe(function (res) { return _this.current_time = res; });
    };
    NgBinaryClock.prototype.ngOnDestory = function () {
        this.timer.unsubscribe();
    };
    NgBinaryClock.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng-binary-clock',
                    styles: ["\n    .bc-wrapper {\n      display: grid;\n      grid-template-columns: repeat(6, 1fr);\n      grid-gap: 5px;\n      width: 300px;\n      height: 200px;\n      padding: 10px;\n      border-radius: 5%;\n      background-color: #000;\n    }\n    \n    .bc-wrapper > .bc-section {\n      display: grid;\n      grid-template-rows: repeat(4, 1fr);\n      grid-gap: 5px;\n    }\n    \n    .bc-wrapper > .bc-section > .bc-led-box {\n      width: 100%;\n      height: 100%;\n    }\n    \n    .bc-wrapper > .bc-section > .bc-led-box-span-2 {\n      grid-row: span 2;\n    }\n    \n    .bc-wrapper > .bc-section > .bc-led-box > span.bc-led {\n      width: 100%;\n      height: 100%;\n      display: inline-block;\n      border-radius: 50%;\n      background-color: #fff;\n    }\n    \n    .bc-wrapper > .bc-section > .bc-led-box > span.bc-led-active {\n      background-color: #007BFF;\n    },\n  "],
                    template: "\n    <!-- BINARY CLOCK -->\n    <div class=\"bc-wrapper\" *ngIf=\"current_time\" >\n      <!-- hour double digit -->\n      <div class=\"bc-section\">\n        <div class=\"bc-led-box bc-led-box-span-2\"></div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.hour[20] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.hour[10] }\"></span>\n        </div>\n      </div>\n\n      <!-- hour single digit -->\n      <div class=\"bc-section\">\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.hour[8] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.hour[4] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.hour[2] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.hour[1] }\"></span>\n        </div>\n      </div>\n\n      <!-- minute double digit -->\n      <div class=\"bc-section\">\n        <div class=\"bc-led-box\"></div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.minute[40] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.minute[20] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.minute[10] }\"></span>\n        </div>\n      </div>\n      \n      <!-- minute single digit -->\n      <div class=\"bc-section\">\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.minute[8] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.minute[4] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.minute[2] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.minute[1] }\"></span>\n        </div>\n      </div>\n\n      <!-- second double digit -->\n      <div class=\"bc-section\">\n        <div class=\"bc-led-box\"></div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.second[40] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.second[20] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.second[10] }\"></span>\n        </div>\n      </div>\n      \n      <!-- second single digit -->\n      <div class=\"bc-section\">\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.second[8] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.second[4] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.second[2] }\"></span>\n        </div>\n        <div class=\"bc-led-box\">\n          <span class=\"bc-led\" [ngClass] = \"{ 'bc-led-active': current_time.second[1] }\"></span>\n        </div>\n      </div>\n\n    </div>\n    <!-- /BINARY CLOCK -->\n  "
                },] },
    ];
    NgBinaryClock.ctorParameters = function () { return [
        { type: NgBinaryClockService, },
    ]; };
    return NgBinaryClock;
}());

var NgBinaryClockModule = (function () {
    function NgBinaryClockModule() {
    }
    NgBinaryClockModule.forRoot = function () {
        return {
            ngModule: NgBinaryClockModule,
            providers: [NgBinaryClockService]
        };
    };
    NgBinaryClockModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [NgBinaryClock],
                    exports: [NgBinaryClock]
                },] },
    ];
    NgBinaryClockModule.ctorParameters = function () { return []; };
    return NgBinaryClockModule;
}());

exports.NgBinaryClockModule = NgBinaryClockModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
