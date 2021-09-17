import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    { 
      src: 'assets/img/carousel-1.jpg',
      serviceName: 'Washing & Detailing',
      promotionText: 'Keep your Car Newer',
      text: 'Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac'
    },
    { 
      src: 'assets/img/carousel-2.jpg',
      serviceName: 'Washing & Detailing',
      promotionText: 'Keep your Car Newer',
      text: 'Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac'
    },
    { 
      src: 'assets/img/carousel-3.jpg',
      serviceName: 'Washing & Detailing',
      promotionText: 'Keep your Car Newer',
      text: 'Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac'
    }
  ]

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? 2 : this.currentSlide - 1;
  }

}
