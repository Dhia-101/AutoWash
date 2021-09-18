import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() defaultBackgroundColor = '#FFFFFF';
  @Input() animatedBackgroundColor = '#E81C2E';
  backgroundColor: String;

  @Input() defaultTextColor = '#202C45';
  @Input() animatedTextColor = '#FFFFFF';
  textColor: String;

  constructor() { 
    this.backgroundColor = this.defaultBackgroundColor;
    this.textColor = this.defaultTextColor;
  }

  ngOnInit(): void {
  }

}
