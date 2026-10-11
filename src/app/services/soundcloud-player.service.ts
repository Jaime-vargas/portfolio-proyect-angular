import {inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

declare const SC: any;

export interface Track {
  titulo: string;
  link: string;
}

@Injectable({providedIn: 'root'})
export class SoundcloudPlayerService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly tracks = signal<Track[]>([]);
  readonly currentIndex = signal(0);
  readonly playerSrc = signal<SafeResourceUrl | null>(null);

  readonly isPlaying = signal(false);
  readonly progress = signal(0);
  readonly duration = signal(0);
  readonly currentTime = signal('00:00');
  readonly durationText = signal('00:00');

  private widget: any;

  constructor() {
    if (!this.isBrowser) {
      return;
    }
    this.http.get<Track[]>('/data/playlist.json').subscribe((tracks) => {
      this.tracks.set(tracks);
      if (tracks.length) {
        this.playerSrc.set(this.buildSrc(tracks[0].link));
        this.initPlayer(tracks[0].link);
      }
    });
  }

  selectTrack(index: number): void {
    const track = this.tracks()[index];
    if (!track) {
      return;
    }
    if (index === this.currentIndex()) {
      this.togglePlay();
      return;
    }
    this.currentIndex.set(index);
    this.progress.set(0);
    this.currentTime.set('00:00');
    this.widget?.load(track.link, {
      auto_play: true,
      callback: () => this.updateDuration(),
    });
  }

  togglePlay(): void {
    if (this.isPlaying()) {
      this.widget?.pause();
    } else {
      this.widget?.play();
    }
  }

  seek(event: Event): void {
    const value = Number(
      (event.target as HTMLInputElement).value
    );
    this.widget?.seekTo(value);
  }

  trackIconType(index: number): string {
    return index === this.currentIndex() && this.isPlaying()
      ? 'pause'
      : 'caret-right';
  }

  private buildSrc(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.playerUrl(link));
  }

  private playerUrl(link: string): string {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(link)}&auto_play=false&visual=false`;
  }

  private initPlayer(link: string): void {
    if (this.widget || !this.isBrowser) {
      return;
    }
    const iframe = document.createElement('iframe');
    iframe.width = '0';
    iframe.height = '0';
    iframe.setAttribute('frameborder', 'no');
    iframe.setAttribute('scrolling', 'no');
    iframe.allow = 'autoplay';
    iframe.title = 'Reproductor de audio de SoundCloud';
    iframe.style.display = 'none';
    iframe.src = this.playerUrl(link);
    document.body.appendChild(iframe);

    this.whenSoundcloudReady(() => {
      this.widget = SC.Widget(iframe);
      this.bindWidget();
    });
  }

  private whenSoundcloudReady(callback: () => void): void {
    if (typeof SC !== 'undefined' && SC.Widget) {
      callback();
      return;
    }
    const timer = setInterval(() => {
      if (typeof SC !== 'undefined' && SC.Widget) {
        clearInterval(timer);
        callback();
      }
    }, 100);
  }

  private bindWidget(): void {
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
    this.widget?.getDuration((duration: number) => {
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
