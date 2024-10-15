import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgZorroModule } from './ng-zorro.module';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgZorroModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-ping';
}
