import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { NgBinaryClockComponent } from './ng-binary-clock';

// SERVICE
import { NgBinaryClockService } from './ng-binary-clock.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ NgBinaryClockComponent ],
  exports: [ NgBinaryClockComponent ]
})

export class NgBinaryClockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgBinaryClockModule,
      providers: [ NgBinaryClockService ]
    };
  }
}
