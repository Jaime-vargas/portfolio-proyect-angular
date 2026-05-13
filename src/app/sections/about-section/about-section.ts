import {Component, input} from '@angular/core';
import {NzFlexDirective} from "ng-zorro-antd/flex";

@Component({
  selector: 'app-about-section',
    imports: [
        NzFlexDirective,
    ],
  templateUrl: './section-component.html',
  styleUrl: './section-component.css',
})
export class SectionComponent {
    title = input();
    paragraphs = input<string[]>();
}
