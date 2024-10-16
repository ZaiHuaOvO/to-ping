import { Component, OnInit } from '@angular/core';
import { ImgBoxComponent } from '../../ui/img-box/img-box.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { imgData } from '../../data/img.data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  standalone: true,
  imports: [ImgBoxComponent],
})
export class WorkComponent implements OnInit {
  imgData = imgData;
  constructor() {}

  ngOnInit() {}
}
