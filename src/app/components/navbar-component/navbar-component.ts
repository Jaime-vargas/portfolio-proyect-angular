import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NzFlexDirective} from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-navbar-component',
  imports: [
    RouterLink,
    NzFlexDirective
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {

}
