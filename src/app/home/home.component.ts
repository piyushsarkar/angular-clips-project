import { Component, OnInit } from '@angular/core';
import { ClipService } from '../services/clip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public clipService: ClipService) {
    this.clipService.getHeroClip();
  }

  ngOnInit(): void {
  }
}
