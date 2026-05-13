import { Component } from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {ButtonComponent} from '../../components/button-component/button-component';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-hero-section',
  imports: [
    NzRowDirective,
    NzColDirective,
    NzFlexDirective,
    ButtonComponent,
    NzIconDirective
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

}
