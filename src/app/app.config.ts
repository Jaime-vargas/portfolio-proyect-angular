import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import {
  ArrowRightOutline,
  AudioOutline,
  BookOutline,
  CaretRightOutline,
  CustomerServiceOutline,
  MobileOutline,
  NotificationOutline,
  PaperClipOutline,
  PauseOutline,
  PhoneOutline,
  SoundOutline,
  VideoCameraOutline,
} from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
import {provideNzIcons} from 'ng-zorro-antd/icon';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const icons = [
  ArrowRightOutline,
  AudioOutline,
  BookOutline,
  CaretRightOutline,
  CustomerServiceOutline,
  MobileOutline,
  NotificationOutline,
  PaperClipOutline,
  PauseOutline,
  PhoneOutline,
  SoundOutline,
  VideoCameraOutline,
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideNzIcons(icons), provideClientHydration(withEventReplay())
  ]
};
