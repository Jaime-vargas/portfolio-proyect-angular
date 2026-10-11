import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  ArrowRightOutline,
  CaretRightOutline,
  CustomerServiceOutline,
  PaperClipOutline,
  PauseOutline,
} from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
import {provideNzIcons} from 'ng-zorro-antd/icon';

const icons = [
  ArrowRightOutline,
  CaretRightOutline,
  CustomerServiceOutline,
  PaperClipOutline,
  PauseOutline,
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNzIcons(icons)
  ]
};
