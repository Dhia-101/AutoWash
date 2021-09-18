import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() defaultBackgroundColor = '#FFFFFF';
  @Input() animatedBackgroundColor = '#E81C2E';
  backgroundColor: String = this.defaultBackgroundColor ;

  @Input() defaultTextColor = '#202C45';
  @Input() animatedTextColor = '#FFFFFF';
  textColor = this.defaultTextColor;

  constructor() {   }

  ngOnInit(): void {
    // second initilization in this point of lifecycle in case there is input
    this.backgroundColor = this.defaultBackgroundColor;
    this.textColor = this.defaultTextColor;
  }

}
