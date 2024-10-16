import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgZorroModule } from './ng-zorro.module';
import { HeaderComponent } from './ui/header/header.component';
import { ContactMsgComponent } from './ui/contact-msg/contact-msg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgZorroModule, HeaderComponent, ContactMsgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-ping';
}
