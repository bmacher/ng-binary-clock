import { Component } from '@angular/core';

// SERVICE
import { BinaryClockService } from './binary-clock.service';

// INTERFACE
import { IBinaryClock } from './binary-clock.interface';

@Component({
  selector: 'binary-clock',
  templateUrl: './binary-clock.component.html',
  styleUrls: [ './binary-clock.component.css' ]
})

export class BinaryClockComponent {
  private current_time: IBinaryClock;

  constructor (
    private binaryClockService: BinaryClockService
  ) {}
}