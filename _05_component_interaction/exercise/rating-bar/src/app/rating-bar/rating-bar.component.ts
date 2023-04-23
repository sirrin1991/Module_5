import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IRate} from './irate';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {
  @Input() vote: string;
  rates: IRate[] = [
    {value: 1, color: ''},
    {value: 2, color: ''},
    {value: 3, color: ''},
    {value: 4, color: ''},
    {value: 5, color: ''},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i = 0; i < this.rates.length; i++) {
      if (i < changes.vote.currentValue) {
        this.rates[i].color = 'pink';
      }else {
        this.rates[i].color = '';
      }
    }
  }

}
