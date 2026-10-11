import {Component, inject} from '@angular/core';
import {PlayerComponent} from '../../components/player-component/player-component';
import {PlaylistComponent} from '../../components/playlist-component/playlist-component';
import {SoundcloudPlayerService} from '../../services/soundcloud-player.service';

@Component({
  selector: 'app-demo-section',
  imports: [PlayerComponent, PlaylistComponent],
  templateUrl: './demo-section.html',
  styleUrl: './demo-section.css',
})
export class DemoSection {
  title = 'DEMO DE VOZ';
  player = inject(SoundcloudPlayerService);
}
