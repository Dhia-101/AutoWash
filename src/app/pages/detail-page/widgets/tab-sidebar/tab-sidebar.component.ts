import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tab-sidebar',
  templateUrl: './tab-sidebar.component.html',
  styleUrls: ['./tab-sidebar.component.scss'],
  animations: [
    trigger('tabBodyAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TabSidebarComponent implements OnInit {

  selectedTab = 1;
  constructor() { }

  ngOnInit(): void {
  }

  ChangeTab(value: number): void {
    this.selectedTab = value;
  }

}
