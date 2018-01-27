import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { NgBinaryClock } from './ng-binary-clock';

// SERVICE
import { NgBinaryClockService } from './ng-binary-clock.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ NgBinaryClock ],
  exports: [ NgBinaryClock ]
})

export class NgBinaryClockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgBinaryClockModule,
      providers: [ NgBinaryClockService ]
    };
  }
}
