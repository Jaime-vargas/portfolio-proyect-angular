import { Component } from '@angular/core';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-navbar-component',
  imports: [
    NzFlexDirective,
    NzRowDirective,
    NzColDirective
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {

}
