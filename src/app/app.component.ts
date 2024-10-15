import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgZorroModule } from './ng-zorro.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgZorroModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-ping';
}
