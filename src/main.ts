import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddtionComponent } from './app/addtion/addtion.component';
import { ArrayexComponent } from './app/arrayex/arrayex.component';

bootstrapApplication(ArrayexComponent, appConfig)
  .catch((err) => console.error(err));
