import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() name = '';
  @Input() job = '';
  @Input() imgLink = '';
  @Input() socialMediaLinks: any;
  // TODO: make interface for socialMediaLinks object type


  constructor() { }

  ngOnInit(): void {
  }

}
