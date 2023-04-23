import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  firstOperand: number = 0;
  secondOperand: number = 0;
  result: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeFirstOperand($event: any) {
    this.firstOperand = $event.target.value;
  }

  changeSecondOperand($event: any) {
    this.secondOperand = $event.target.value;
  }


  sum() {
    this.result = Number(this.firstOperand) + Number(this.secondOperand);
  }
  sub() {
    this.result = Number(this.firstOperand) - Number(this.secondOperand);
  }
  mul() {
    this.result = Number(this.firstOperand) * Number(this.secondOperand);
  }
  div() {
    if (Number(this.secondOperand) === 0){
      this.result = 'can not division by 0' ;
    }else {
      this.result = Number(this.firstOperand) / Number(this.secondOperand);
    }
  }
}
