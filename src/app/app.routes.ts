import { Routes } from '@angular/router';
import {MainPage} from './pages/main-page/main-page';
import {ServiciosVoz} from './pages/servicios-voz/servicios-voz';

export const routes: Routes = [
  {path: '', component: MainPage},
  {path: 'servicios-de-voz', component: ServiciosVoz, title: 'Servicios de Voz y Locución | Saira Quiñones'},
];
