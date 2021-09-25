import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {
  @Input() title = '';
  @Input() items: any;

  constructor() { }

  ngOnInit(): void {
  }

}
