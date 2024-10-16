import { Component, OnInit } from '@angular/core';
import { QuickUp } from '../../animation/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [QuickUp],
})
export class HomeComponent implements OnInit {
  text = '@ 汤米大人 2024';

  constructor() {}

  ngOnInit() {}
}
