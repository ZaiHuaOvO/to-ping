import { Component, OnInit } from '@angular/core';
import { imgData } from '../../data/img.data';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';
@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.css'],
  standalone: true,
  imports: [CommonModule, NzImageModule],
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
  constructor(private nzImageService: NzImageService) {}

  ngOnInit() {}

  // img(i: any): void {
  //   const images = [
  //     {
  //       src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //       alt: '',
  //     },
  //   ];
  //   this.nzImageService.preview(images, {
  //     nzZoom: 1,
  //     nzRotate: 0,
  //     nzScaleStep: this.scaleStep,
  //   });
  // }
}
