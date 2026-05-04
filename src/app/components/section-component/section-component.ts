import { Component } from '@angular/core';
import {ButtonComponent} from "../button-component/button-component";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-section-component',
    imports: [
        ButtonComponent,
        NzColDirective,
        NzFlexDirective,
        NzIconDirective,
        NzRowDirective
    ],
  templateUrl: './section-component.html',
  styleUrl: './section-component.css',
})
export class SectionComponent {

}
