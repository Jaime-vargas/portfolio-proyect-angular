import {Component, input} from '@angular/core';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-button-component',
  imports: [
    NzIconDirective,
  ],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  variant = input<'filled'|'outline'|'text'>("filled");
}
