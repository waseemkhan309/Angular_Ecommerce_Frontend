import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations'; // Required
import { provideToastr } from 'ngx-toastr'; // Required


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({
      timeOut: 3000,          // Duration in milliseconds (3 seconds)
      positionClass: 'toast-top-right', // Position on screen
      preventDuplicates: true, // Avoid stacking identical toasts
    }),
  ]
};


