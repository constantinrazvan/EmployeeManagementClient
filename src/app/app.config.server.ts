import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

export const serverConfig: ApplicationConfig = {
  providers: [
    // Add any server-specific providers here
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
