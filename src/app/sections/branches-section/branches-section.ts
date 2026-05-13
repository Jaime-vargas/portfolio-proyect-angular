import { Component } from '@angular/core';
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-branches-section',
  imports: [
    NzFlexDirective,
    NzColDirective,
    NzRowDirective
  ],
  templateUrl: './branches-section.html',
  styleUrl: './branches-section.css',
})
export class BranchesSection {
  title='MARCAS PARA LAS QUE HE TRABAJADO';
  branches = [
    "/branches/canal44.webp",
    "/branches/promomedios.webp",
    "/branches/megaradio.webp",
    "/branches/omnilife.webp"
  ]
}
