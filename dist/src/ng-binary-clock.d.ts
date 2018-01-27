import { OnInit } from '@angular/core';
import { NgBinaryClockService } from './ng-binary-clock.service';
import { IBinaryClock } from './ng-binary-clock.interface';
export declare class NgBinaryClock implements OnInit {
    private ngBinaryClockService;
    current_time: IBinaryClock;
    private timer;
    constructor(ngBinaryClockService: NgBinaryClockService);
    ngOnInit(): void;
    ngOnDestory(): void;
}
