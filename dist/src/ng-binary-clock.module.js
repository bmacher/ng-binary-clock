import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBinaryClockComponent } from './ng-binary-clock.component';
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
                    declarations: [NgBinaryClockComponent],
                    exports: [NgBinaryClockComponent]
                },] },
    ];
    NgBinaryClockModule.ctorParameters = function () { return []; };
    return NgBinaryClockModule;
}());
export { NgBinaryClockModule };
//# sourceMappingURL=ng-binary-clock.module.js.map