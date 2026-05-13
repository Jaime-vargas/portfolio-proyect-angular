import { Component } from '@angular/core';
import {ButtonComponent} from '../../components/button-component/button-component';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-services-section',
  imports: [
    ButtonComponent,
    NzFlexDirective,
    NzIconDirective,
    NzRowDirective,
    NzColDirective
  ],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
  title='SERVICIOS';
  paragraphs = [
    '¿Te cuesta poner en palabras lo que quieres decir?',
    'Te ayudo a convertir ideas en mensajes claros, coherentes y alineados con tu marca.']

  services = [
    {
      title: 'REDACCIÓN DE GUIONES',
      text: 'Te ayudo a construir mensajes con intención. Diseño contenidos para personas reales, contextos especificos y objetivos claros de marca. ',
      logo: '/assets/pencil.webp'},
    {
      title: 'SERVICIOS DE VOZ Y LOCUCIÓN',
      text: 'Puedo ser la voz para tu marca o empresa en spots, videos corporativos, IVR, podcast, audiolibros y más.',
      logo: '/assets/mic.webp'},
    {
      title: 'IDENTIDAD SONORA',
      text: 'Diseño identidad sonora para radio y proyectos digitales: desde la arquitectura auditiva hasta la producción completa',
      logo: '/assets/headphones.webp'}
  ]
}
