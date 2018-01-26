let config = {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/ng-binary-clock.umd.js',
    format: 'umd',
    name: 'ng.binary.clock',
    sourcemap: false,
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
}

export default config;