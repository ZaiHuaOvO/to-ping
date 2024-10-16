import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { QuickUp } from '../../animation/animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule],
  animations: [QuickUp],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
