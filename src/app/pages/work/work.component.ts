import { Component, OnInit } from '@angular/core';
import { ImgBoxComponent } from '../../ui/img-box/img-box.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  standalone: true,
  imports: [ImgBoxComponent],
})
export class WorkComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
