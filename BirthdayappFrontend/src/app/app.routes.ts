import { Routes } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { StartComponent } from './start/start.component';
import { MainviewComponent } from './mainview/mainview.component';

export const routes: Routes = [
  { path: 'youtube', component: YoutubePlayerComponent },
  { path: 'start', component: StartComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'mainview', component: MainviewComponent },
];
