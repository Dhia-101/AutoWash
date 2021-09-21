import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plan-box',
  templateUrl: './plan-box.component.html',
  styleUrls: ['./plan-box.component.scss']
})
export class PlanBoxComponent implements OnInit {

  @Input() shadow = true;
  @Input() boxType = 'main';
  @Input() title = '';
  @Input() price = 0;
  @Input() list = [];
  state = true;
  constructor() { }

  ngOnInit(): void {
  }

}
