import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NavbarComponent} from './components/navbar-component/navbar-component';
import {HeroComponent} from './components/hero-component/hero-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzRowDirective, NzColDirective, NavbarComponent, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-proyect-angular');
}
