import {
  AfterViewInit,
  Component,
  ElementRef, signal,
  ViewChild
} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {NzIconDirective} from 'ng-zorro-antd/icon';

declare const SC: any;

@Component({
  selector: 'app-demo-section',
  imports: [NzIconDirective],
  templateUrl: './demo-section.html',
  styleUrl: './demo-section.css',
})
export class DemoSection implements AfterViewInit {

  title = 'DEMO DE VOZ';

  playlist: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.playlist = this.setPlaylistID(this.trackId[0]);
  }

  bgPlayer = '/player/bgmic.webp';
  trackId = ['1523484274','1523484061'];

  setPlaylistID(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&auto_play=false&visual=false`
    );
  }

  @ViewChild('soundcloudPlayer')
  soundcloudPlayer!: ElementRef<HTMLIFrameElement>;

  widget: any;
  isPlaying = signal<boolean>(false);
  progress = signal<number>(0);
  duration = signal<number>(0);
  currentTime = signal<string>('00:00');
  durationText = signal<string>('00:00');

  ngAfterViewInit(): void {
    this.widget = SC.Widget(
      this.soundcloudPlayer.nativeElement
    );

    this.widget.bind(
      SC.Widget.Events.READY,
      () => {
        this.widget.getDuration(
          (duration: number) => {
            this.duration.set(duration);
            this.durationText.set(this.formatTime(duration));
          }
        );
      }
    );

    this.widget.bind(
      SC.Widget.Events.PLAY_PROGRESS,
      (event: any) => {
        this.progress.set(event.currentPosition);
        this.currentTime.set(this.formatTime(event.currentPosition));
      }
    );

    this.widget.bind(
      SC.Widget.Events.PLAY,
      () => this.isPlaying.set(true)
    );

    this.widget.bind(
      SC.Widget.Events.PAUSE,
      () => this.isPlaying.set(false)
    );

    this.widget.bind(
      SC.Widget.Events.FINISH,
      () => this.isPlaying.set(false)
    );
  }

  togglePlay(): void {
    if (this.isPlaying()) {
      this.widget.pause();
    } else {
      this.widget.play();
    }
  }


  seek(event: Event): void {
    const value = Number(
      (event.target as HTMLInputElement).value
    );
    this.widget.seekTo(value);
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }
}
