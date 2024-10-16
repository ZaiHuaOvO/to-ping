import { Component, OnInit } from '@angular/core';
import { ContactMsgComponent } from '../../ui/contact-msg/contact-msg.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [ContactMsgComponent],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
