import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/interval';
import { IBinaryClock } from './ng-binary-clock.interface';
export declare class NgBinaryClockService {
    timer$: Observable<IBinaryClock>;
    constructor();
    convertTimeIntoBinary(time: String): IBinaryClock;
}
