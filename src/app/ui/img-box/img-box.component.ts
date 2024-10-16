import { Component, OnInit } from '@angular/core';
import { imgData } from '../../data/img.data';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeInUp', [
      transition(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(100px)' }),
          animate(
            '{{ timing }}ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ],
        { params: { timing: 100 } }
      ),
    ]),
  ],
})
export class ImgBoxComponent implements OnInit {
  imgData = imgData;
  constructor() {}

  ngOnInit() {}
}
