import {Component, input} from '@angular/core';
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {ButtonComponent} from '../../components/button-component/button-component';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-about-section',
  imports: [
    NzFlexDirective,
    ButtonComponent,
    NzIconDirective,
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  title='¿QUIÉN SOY?';
  paragraphs= [
    `Soy Saira Quiñones, Licenciada en Ciencias de la Comunicación por el ITESO,
    con especialidad en producción, locución de radio y locución comercial.`,
    `Me dedico a la creación de contenidos sonoros y desarrollo de propuestas creativas para
      marcas y proyectos de comunicación.`,
    `He trabajado con Promomedios, Canal 44, Omnilife Chivas y Megaradio.`
  ]
}
