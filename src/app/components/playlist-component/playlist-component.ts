import {Component, inject} from '@angular/core';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {SoundcloudPlayerService} from '../../services/soundcloud-player.service';

@Component({
  selector: 'app-playlist',
  imports: [NzIconDirective],
  templateUrl: './playlist-component.html',
  styleUrl: './playlist-component.css',
})
export class PlaylistComponent {
  player = inject(SoundcloudPlayerService);
}
