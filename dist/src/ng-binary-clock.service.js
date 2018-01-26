import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/interval';
var NgBinaryClockService = (function () {
    function NgBinaryClockService() {
        var _this = this;
        this.timer$ = Observable.interval(500)
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
        { type: Injectable },
    ];
    NgBinaryClockService.ctorParameters = function () { return []; };
    return NgBinaryClockService;
}());
export { NgBinaryClockService };
//# sourceMappingURL=ng-binary-clock.service.js.map