import { Component } from '@angular/core';
import {HeroComponent} from '../../components/hero-component/hero-component';
import {SectionComponent} from '../../components/section-component/section-component';

@Component({
  selector: 'app-main-page.ts',
  imports: [
    HeroComponent,
    SectionComponent
  ],
  templateUrl: './main-page.ts.html',
  styleUrl: './main-page.ts.css',
})
export class MainPageTs {

}
