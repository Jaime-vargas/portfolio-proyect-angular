import {Component, inject, input} from '@angular/core';
import {Router} from '@angular/router';
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
  link = input<string>();

  private router = inject(Router);

  navigate(): void {
    const url = this.link();
    if (url) {
      this.router.navigateByUrl(url);
    }
  }
}
