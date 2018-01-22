import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { BinaryClockComponent } from './binary-clock.component';

// SERVICE
import { BinaryClockService } from './binary-clock.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ BinaryClockComponent ],
  exports: [ BinaryClockComponent ]
})

export class BinaryClockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BinaryClockModule,
      providers: [ BinaryClockService ]
    }
  }
}