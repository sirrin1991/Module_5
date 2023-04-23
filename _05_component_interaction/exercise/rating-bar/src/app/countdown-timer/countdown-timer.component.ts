import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit , OnChanges {
  @Input()
  countChild: number = 0;

  startTime = 0;

  isDisable = false;
  constructor() {
  }

  ngOnInit(): void {
  }
  interval: any;
  start() {
    this.interval = setInterval(() => {
      this.isDisable = true;
      this.startTime = this.startTime - 1;
      if (this.startTime === 0) {
        clearInterval(this.interval);
      }
    }, 1000);

  }
  stop() {
    clearInterval(this.interval);
    this.isDisable = this.startTime == 0;
  }

  reset(){
    clearInterval(this.interval);
    this.startTime = Number(this.countChild);
    this.isDisable = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.startTime = Number(this.countChild)
  }
}
