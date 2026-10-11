import {
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {NzIconDirective} from 'ng-zorro-antd/icon';

declare const SC: any;

interface Track {
  titulo: string;
  link: string;
}

@Component({
  selector: 'app-demo-section',
  imports: [NzIconDirective],
  templateUrl: './demo-section.html',
  styleUrl: './demo-section.css',
})
export class DemoSection {
  title = 'DEMO DE VOZ';
  bgPlayer = '/player/bgmic.webp';

  tracks = signal<Track[]>([]);
  currentIndex = signal<number>(0);
  playerSrc = signal<SafeResourceUrl | null>(null);

  isPlaying = signal<boolean>(false);
  progress = signal<number>(0);
  duration = signal<number>(0);
  currentTime = signal<string>('00:00');
  durationText = signal<string>('00:00');

  soundcloudPlayer = viewChild<ElementRef<HTMLIFrameElement>>('soundcloudPlayer');

  widget: any;

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
  ) {
    this.http.get<Track[]>('/data/playlist.json').subscribe((tracks) => {
      this.tracks.set(tracks);
      if (tracks.length) {
        this.playerSrc.set(this.buildSrc(tracks[0].link));
      }
    });

    effect(() => {
      const iframe = this.soundcloudPlayer();
      if (iframe && !this.widget) {
        this.initWidget(iframe.nativeElement);
      }
    });
  }

  selectTrack(index: number): void {
    if (index === this.currentIndex()) {
      this.togglePlay();
      return;
    }
    this.currentIndex.set(index);
    this.progress.set(0);
    this.currentTime.set('00:00');
    this.widget.load(this.tracks()[index].link, {
      auto_play: true,
      callback: () => this.updateDuration(),
    });
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

  trackIconType(index: number): string {
    return index === this.currentIndex() && this.isPlaying()
      ? 'pause'
      : 'caret-right';
  }

  private buildSrc(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://w.soundcloud.com/player/?url=${encodeURIComponent(link)}&auto_play=false&visual=false`
    );
  }

  private initWidget(iframe: HTMLIFrameElement): void {
    this.widget = SC.Widget(iframe);

    this.widget.bind(
      SC.Widget.Events.READY,
      () => this.updateDuration()
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

  private updateDuration(): void {
    this.widget.getDuration((duration: number) => {
      this.duration.set(duration);
      this.durationText.set(this.formatTime(duration));
    });
  }

  private formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }
}
