import { Component } from '@angular/core';
import { NgBinaryClockService } from './ng-binary-clock.service';
var NgBinaryClockComponent = (function () {
    function NgBinaryClockComponent(ngBinaryClockService) {
        this.ngBinaryClockService = ngBinaryClockService;
    }
    NgBinaryClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = this.ngBinaryClockService.timer$.subscribe(function (res) { return _this.current_time = res; });
    };
    NgBinaryClockComponent.prototype.ngOnDestory = function () {
        this.timer.unsubscribe();
    };
    NgBinaryClockComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-binary-clock',
                    templateUrl: './ng-binary-clock.component.html',
                    styleUrls: ['./ng-binary-clock.component.css']
                },] },
    ];
    NgBinaryClockComponent.ctorParameters = function () { return [
        { type: NgBinaryClockService, },
    ]; };
    return NgBinaryClockComponent;
}());
export { NgBinaryClockComponent };
//# sourceMappingURL=ng-binary-clock.component.js.map