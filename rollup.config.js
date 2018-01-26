export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng-binary-clock.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.binary.clock',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/share': 'Rx.Observable.prototype',
    'rxjs/add/observable/interval': 'Rx.Observable'
  }
}