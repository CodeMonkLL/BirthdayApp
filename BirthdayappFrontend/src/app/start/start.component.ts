import { Component } from '@angular/core';
import { MainviewComponent } from '../mainview/mainview.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [MainviewComponent, RouterLink],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {}
