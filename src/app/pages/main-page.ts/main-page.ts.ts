import { Component } from '@angular/core';
import {HeroSection} from '../../sections/hero-section/hero-section';
import {AboutSection} from '../../sections/about-section/about-section';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {ButtonComponent} from '../../components/button-component/button-component';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {BranchesSection} from '../../sections/branches-section/branches-section';
import {WaveformSection} from '../../sections/waveform-section/waveform-section';
import {ServicesSection} from '../../sections/services-section/services-section';
import {DemoSection} from '../../sections/demo-section/demo-section';

@Component({
  selector: 'app-main-page.ts',
  imports: [
    HeroSection,
    AboutSection,
    NzRowDirective,
    NzColDirective,
    NzFlexDirective,
    BranchesSection,
    WaveformSection,
    ServicesSection,
    DemoSection
  ],
  templateUrl: './main-page.ts.html',
  styleUrl: './main-page.ts.css',
})
export class MainPageTs {
}
