import { Component } from '@angular/core';

import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';

@Component({
  selector: 'app-mainview',
  standalone: true,
  imports: [YoutubePlayerComponent],
  templateUrl: './mainview.component.html',
  styleUrl: './mainview.component.scss',
})
export class MainviewComponent {}
