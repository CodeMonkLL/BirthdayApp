import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { taylorPlaylist } from './taylorplaylist';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

@Component({
  imports: [],
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  standalone: true,
})
export class YoutubePlayerComponent implements AfterViewInit {
  // Playlist etc. wie gehabt

  playerId = 'yt-player-' + Math.floor(Math.random() * 1000000);
  private player: any;
  private currentIndex = 0;
  private apiLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Code nur im Browser ausführen
      this.loadApi();
    }
  }

  allSongs = [
    { title: 'Shake It Off', videoId: 'nfWlot6h_JM', album: '1989' },
    { title: 'Blank Space', videoId: 'e-ORhEE9VVg', album: '1989' },
    { title: 'Love Story', videoId: '8xg3vE8Ie_E', album: 'Fearless' },
    { title: 'You Belong With Me', videoId: 'VuNIsY6JdUw', album: 'Fearless' },
    { title: 'Lover', videoId: '-BjZmE2gtdo', album: 'Lover' },
  ];

  private loadApi() {
    if (this.apiLoaded) {
      this.initPlayer();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      this.apiLoaded = true;
      this.initPlayer();
    };
  }

  private initPlayer() {
    if (!window.YT || !this.allSongs.length) return;

    const currentSong = this.allSongs[this.currentIndex];

    this.player = new window.YT.Player(this.playerId, {
      height: '360',
      width: '640',
      videoId: currentSong.videoId,
      events: {
        onReady: () => console.log(`Player bereit: ${currentSong.title}`),
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            this.nextVideo();
          }
        },
      },
    });
  }

  play() {
    this.player?.playVideo();
  }

  pause() {
    this.player?.pauseVideo();
  }

  stop() {
    this.player?.stopVideo();
  }
  nextVideo() {
    if (!this.player || !this.allSongs.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.allSongs.length;
    const nextSong = this.allSongs[this.currentIndex];
    this.player.loadVideoById(nextSong.videoId);
    console.log(`Jetzt läuft: ${nextSong.title} (${nextSong.album})`);
  }

  prevVideo() {
    if (!this.player || !this.allSongs.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.allSongs.length) % this.allSongs.length;
    const prevSong = this.allSongs[this.currentIndex];
    this.player.loadVideoById(prevSong.videoId);
    console.log(`Jetzt läuft: ${prevSong.title} (${prevSong.album})`);
  }
}
