import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { IAngularStatic } from 'angular';
import { Router } from '@angular/router';
import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

declare const angular: IAngularStatic;

const ng1app = angular
  .module('ng1app', [])
  .directive('ygRoot', downgradeComponent({
    component: AppComponent,
    inputs: [],
    outputs: [],
  }));

// First we bootstrap the Angular 2 HybridModule
// (We are using the dynamic browser platform as this example has not been compiled AoT)
// platformBrowserDynamic().bootstrapModule(AppModule);
const bootstrapPromise = platformBrowserDynamic().bootstrapModule(AppModule);

bootstrapPromise.then(ref => {
  // Bootstrap Angular 1
  (<any>ref.instance).upgrade.bootstrap(document.body, [ng1app.name]);

  ref.injector.get(Router).initialNavigation();

});
