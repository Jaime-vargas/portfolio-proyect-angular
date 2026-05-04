import { Component } from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {ButtonComponent} from '../button-component/button-component';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-hero-component',
  imports: [
    NzRowDirective,
    NzColDirective,
    NzFlexDirective,
    ButtonComponent,
    NzIconDirective
  ],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {

}
