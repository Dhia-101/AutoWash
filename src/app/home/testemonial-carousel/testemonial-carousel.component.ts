import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testemonial-carousel',
  templateUrl: './testemonial-carousel.component.html',
  styleUrls: ['./testemonial-carousel.component.scss']
})
export class TestemonialCarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 3000,
    dots: true,
    dotsEach: 1,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
