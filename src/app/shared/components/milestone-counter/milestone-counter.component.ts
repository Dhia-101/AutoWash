import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-milestone-counter',
  templateUrl: './milestone-counter.component.html',
  styleUrls: ['./milestone-counter.component.scss']
})
export class MilestoneCounterComponent implements OnInit {

  @Input() icon = '';
  @Input() digit = 0;
  @Input() text = '';
  constructor() { }

  ngOnInit(): void {
  }

}
