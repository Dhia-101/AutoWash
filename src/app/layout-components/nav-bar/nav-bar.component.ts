import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('navbarState', [
      state('normal', style({
        height: '100px'
      })),
      state('minimized', style({
        height: '70px'
      })),
      transition('normal <=> minimized', animate(250))
    ])
  ]
})
export class NavBarComponent {
  navbarState = 'normal';
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    // set to resize right before it reaches the navbar
    // to stop the resize from glitching with the scroll
    this.navbarState = window.scrollY <= 70 ? 'normal' : 'minimized';
  }

// TODO: navbar height bug check

}
