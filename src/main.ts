import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// PWA elements to add simple camera like overlay as a fallback when running Capacitor in the browser
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
