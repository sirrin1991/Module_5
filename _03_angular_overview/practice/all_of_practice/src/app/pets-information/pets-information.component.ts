import { Component, OnInit } from '@angular/core';
import {Pet} from '../pets-information/Pet';
@Component({
  selector: 'app-pets-information',
  templateUrl: './pets-information.component.html',
  styleUrls: ['./pets-information.component.css']
})
export class PetsInformationComponent implements OnInit {
  pet: Pet = {
    name : 'KiKi',
    image : 'https://petmaster.vn/petroom/wp-content/uploads/2020/03/cho-corgi-1.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
