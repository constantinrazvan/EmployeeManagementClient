// src/app/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes, withRouterConfig({}))
  ],
};
