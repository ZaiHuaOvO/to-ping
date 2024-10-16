import { Component, OnInit } from '@angular/core';
import { QuickUp, SlowUp } from '../../animation/animation';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { homeData, imgData } from '../../data/img.data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [QuickUp, SlowUp],
  imports: [NzCarouselModule, NzImageModule, RouterModule],
  standalone: true,
})
export class HomeComponent implements OnInit {
  text = '@ 汤米大人 2024';
  array = homeData;
  constructor() {}

  ngOnInit() {}
}
