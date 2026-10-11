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
  title='EMPRESAS PARA LAS QUE HE TRABAJADO';
  branches = [
    { name: 'Canal 44', logo: '/branches/canal44.webp' },
    { name: 'Promomedios', logo: '/branches/promomedios.webp' },
    { name: 'MegaRadio', logo: '/branches/megaradio.webp' },
    { name: 'Omnilife Chivas', logo: '/branches/omnilife.webp' }
  ]
}
