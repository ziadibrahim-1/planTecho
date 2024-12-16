import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Legend, Colors, BarController } from 'chart.js';
 

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withViewTransitions()), provideClientHydration(),
  importProvidersFrom(HttpClientModule),
  ]
};
