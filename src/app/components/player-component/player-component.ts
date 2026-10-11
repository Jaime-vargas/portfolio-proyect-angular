import {Component, inject} from '@angular/core';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {SoundcloudPlayerService} from '../../services/soundcloud-player.service';

@Component({
  selector: 'app-player',
  imports: [NzIconDirective],
  templateUrl: './player-component.html',
  styleUrl: './player-component.css',
})
export class PlayerComponent {
  bgPlayer = '/player/bgmic.webp';
  player = inject(SoundcloudPlayerService);
}
