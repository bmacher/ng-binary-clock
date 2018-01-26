import { Component, OnInit, OnDestroy } from '@angular/core';
//import {  NgClass } from '@angular/common';
import { ISubscription } from 'rxjs/Subscription';

// SERVICE
import { NgBinaryClockService } from './ng-binary-clock.service';

// INTERFACE
import { IBinaryClock } from './ng-binary-clock.interface';

@Component({
  selector: 'ng-binary-clock',
  templateUrl: './ng-binary-clock.component.html',
  styleUrls: [ './ng-binary-clock.component.css' ]
})

export class NgBinaryClockComponent implements OnInit {
  public current_time: IBinaryClock;
  private timer: ISubscription;

  constructor (
    private ngBinaryClockService: NgBinaryClockService
  ) {}

  ngOnInit () {
    // subscript to timer picker
    this.timer = this.ngBinaryClockService.timer$.subscribe( res => this.current_time = res );
  }

  ngOnDestory () {
    // unsubscript from timer picker
    this.timer.unsubscribe();
  }
}
