import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import * as AllIcons from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
import {provideNzIcons} from 'ng-zorro-antd/icon';

const icons = Object.values(AllIcons);
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNzIcons(icons)
  ]
};
