import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-milestone-counter',
  templateUrl: './milestone-counter.component.html',
  styleUrls: ['./milestone-counter.component.scss']
})
export class MilestoneCounterComponent {

  @Input() icon = '';
  @Input() digit = 0;
  @Input() text = '';
  triggered = false;
  steps = 65;
  // @ts-ignore
  @ViewChild('animatedDigit') animatedDigit: ElementRef;

  constructor() {
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      console.log('bottom');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY  < 1900 && this.triggered === false) {
      if (this.digit) {
        this.animateCount();
        this.triggered = true;
      }
    }
  }

  animateCount(): void {
    this.counterFunc(this.digit, 10000, this.animatedDigit);
  }

  counterFunc(endValue: any, durationMs: any, element: any): void {

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step(): void {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

}
