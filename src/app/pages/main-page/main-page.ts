import { Component } from '@angular/core';
import {HeroSection} from '../../sections/hero-section/hero-section';
import {AboutSection} from '../../sections/about-section/about-section';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {BranchesSection} from '../../sections/branches-section/branches-section';
import {WaveformSection} from '../../sections/waveform-section/waveform-section';
import {ServicesSection} from '../../sections/services-section/services-section';
import {DemoSection} from '../../sections/demo-section/demo-section';

@Component({
  selector: 'app-main-page',
  imports: [
    HeroSection,
    AboutSection,
    NzRowDirective,
    NzColDirective,
    BranchesSection,
    WaveformSection,
    ServicesSection,
    DemoSection
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
}
