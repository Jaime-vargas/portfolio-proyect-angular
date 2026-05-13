import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NavbarComponent} from './components/navbar-component/navbar-component';
import {HeroSection} from './sections/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzRowDirective, NzColDirective, NavbarComponent, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-proyect-angular');
}
