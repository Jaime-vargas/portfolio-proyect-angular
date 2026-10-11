import { Component } from '@angular/core';
import {NzFlexDirective} from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-waveform-section',
  imports: [
    NzFlexDirective
  ],
  templateUrl: './waveform-section.html',
  styleUrl: './waveform-section.css',
})
export class WaveformSection {
  paragraphs = "Hago que tu marca se entienda... y se escuche."
}
