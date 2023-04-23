import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  red: string = '00';
  green: string = '00';
  blue: string  = '00';
  color: string = '#000000' ;

  constructor() { }

  ngOnInit(): void {
  }

  changeRed($event : any){
    this.red = Number($event.target.value).toString(16).toUpperCase();
    if(this.red.length ===1){
      this.color = ('#0' + this.red + this.green + this.blue);
    }else {
      this.color = ('#' + this.red + this.green + this.blue);
    }

  }

  changeGreen($event: any) {
    this.green = Number($event.target.value).toString(16).toUpperCase();
    if(this.green.length ===1){
      this.color = ('#0' + this.red + this.green + this.blue);
    }else {
      this.color = ('#' + this.red + this.green + this.blue);
    }
  }
  changeBlue($event: any) {
    this.blue = Number($event.target.value).toString(16).toUpperCase();
    if(this.blue.length === 1){
      this.color = ('#0' + this.red + this.green + this.blue);
    }else {
      this.color = ('#' + this.red + this.green + this.blue);
    }
  }
}
