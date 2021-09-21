import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plan-box',
  templateUrl: './plan-box.component.html',
  styleUrls: ['./plan-box.component.scss']
})
export class PlanBoxComponent implements OnInit {

  @Input() shadow = true;
  @Input() buttonType = 'main';
  constructor() { }

  ngOnInit(): void {
  }

}
