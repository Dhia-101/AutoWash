import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss', './carousel.component.queries.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

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
      promotionText: 'Quality Service For You',
      text: 'Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales'
    },
    { 
      src: 'assets/img/carousel-3.jpg',
      serviceName: 'Washing & Detailing',
      promotionText: 'Exterior & Interior Washing',
      text: 'Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam'
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
