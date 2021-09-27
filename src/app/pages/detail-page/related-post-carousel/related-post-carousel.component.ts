import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-related-post-carousel',
  templateUrl: './related-post-carousel.component.html',
  styleUrls: ['./related-post-carousel.component.scss']
})
export class RelatedPostCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    dots: false,
    dotsEach: 1,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
