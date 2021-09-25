import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testemonial-carousel',
  templateUrl: './testemonial-section.component.html',
  styleUrls: ['./testemonial-section.component.scss', 'testemonial-section.component.query.scss']
})
export class TestemonialSectionComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    dots: true,
    dotsEach: 1,
    navSpeed: 700,
    navText: ['', ''],
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
    nav: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
