# NgBinaryClock
NgBinaryClock is an angular module which displays the system time as a binary clock.

![NgBinaryClock](https://github.com/bmacher/ng-binary-clock/blob/master/ng-binary-clock.png?raw=true)

## Installation

```bash
npm install ng-binary-clock
```

## Dependencies

```bash
npm install @angular/core@5.0.0 @angular/common@5.0.0 rxjs@5.5.6
```

## Usage

Import the module in _app.module.ts_. Instead of importing the module directly, use `forRoot()` to only add the contained service to the root injector.
```ts
import { NgBinaryClockModule } from 'ng-binary-clock';

@NgModule({
  imports: [
    NgBinaryClockModule.forRoot()
  ],
})
```

Template
```html
<ng-binary-clock></ng-binary-clock>
```
# What is a binary clock?
A binary clock is a clock that displays the time of day in a binary format. Originally, such clocks showed each decimal digit of sexagesimal time as a binary value, but presently binary clocks also exist which display hours, minutes, and seconds as binary numbers. Most binary clocks are digital, although analog varieties exist. True binary clocks also exist, which indicate the time by successively halving the day, instead of using hours, minutes, or seconds. Similar clocks, based on Gray coded binary, also exist. [Wikipedia](https://en.wikipedia.org/wiki/Binary_clock)

![Binary clock](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Binary_clock.svg/480px-Binary_clock.svg.png)
