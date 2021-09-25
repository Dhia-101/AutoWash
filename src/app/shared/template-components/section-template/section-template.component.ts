import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-template',
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.scss']
})
export class SectionTemplateComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  constructor() { }

  ngOnInit(): void {
  }

}
