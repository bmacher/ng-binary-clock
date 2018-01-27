import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';

// SERVICE
import { NgBinaryClockService } from './ng-binary-clock.service';

// INTERFACE
import { IBinaryClock } from './ng-binary-clock.interface';

@Component({
  selector: 'ng-binary-clock',
  styles: [`
    .bc-wrapper {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 5px;
      width: 300px;
      height: 200px;
      padding: 10px;
      border-radius: 5%;
      background-color: #000;
    }
    
    .bc-wrapper > .bc-section {
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 5px;
    }
    
    .bc-wrapper > .bc-section > .bc-led-box {
      width: 100%;
      height: 100%;
    }
    
    .bc-wrapper > .bc-section > .bc-led-box-span-2 {
      grid-row: span 2;
    }
    
    .bc-wrapper > .bc-section > .bc-led-box > span.bc-led {
      width: 100%;
      height: 100%;
      display: inline-block;
      border-radius: 50%;
      background-color: #fff;
    }
    
    .bc-wrapper > .bc-section > .bc-led-box > span.bc-led-active {
      background-color: #007BFF;
    },
  `],
  template: `
    <!-- BINARY CLOCK -->
    <div class="bc-wrapper" *ngIf="current_time" >
      <!-- hour double digit -->
      <div class="bc-section">
        <div class="bc-led-box bc-led-box-span-2"></div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.hour[20] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.hour[10] }"></span>
        </div>
      </div>

      <!-- hour single digit -->
      <div class="bc-section">
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.hour[8] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.hour[4] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.hour[2] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.hour[1] }"></span>
        </div>
      </div>

      <!-- minute double digit -->
      <div class="bc-section">
        <div class="bc-led-box"></div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.minute[40] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.minute[20] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.minute[10] }"></span>
        </div>
      </div>
      
      <!-- minute single digit -->
      <div class="bc-section">
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.minute[8] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.minute[4] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.minute[2] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.minute[1] }"></span>
        </div>
      </div>

      <!-- second double digit -->
      <div class="bc-section">
        <div class="bc-led-box"></div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.second[40] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.second[20] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.second[10] }"></span>
        </div>
      </div>
      
      <!-- second single digit -->
      <div class="bc-section">
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.second[8] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.second[4] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.second[2] }"></span>
        </div>
        <div class="bc-led-box">
          <span class="bc-led" [ngClass] = "{ 'bc-led-active': current_time.second[1] }"></span>
        </div>
      </div>

    </div>
    <!-- /BINARY CLOCK -->
  `
})

export class NgBinaryClock implements OnInit {
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
