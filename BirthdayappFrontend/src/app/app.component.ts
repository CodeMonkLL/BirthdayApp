import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YoutubePlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Leas Birthdayapp';
}
