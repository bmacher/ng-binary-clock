import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBinaryClock } from './ng-binary-clock';
import { NgBinaryClockService } from './ng-binary-clock.service';
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [NgBinaryClock],
                    exports: [NgBinaryClock]
                },] },
    ];
    NgBinaryClockModule.ctorParameters = function () { return []; };
    return NgBinaryClockModule;
}());
export { NgBinaryClockModule };
//# sourceMappingURL=ng-binary-clock.module.js.map