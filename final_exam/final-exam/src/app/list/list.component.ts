import {Component, OnInit} from '@angular/core';
import {HouseService} from '../house.service';
import {House} from '../house';
import {Category} from '../category';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  houseList: House[];
  area: string = '';
  price: string = '';
  direction: string = '';
  categoryList: Category[];
  id : number;
  tempTitle: string;

  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    let categoryObs = this.houseService.getCategoryList();
    let houseListObs = this.houseService.findAll();
    forkJoin([categoryObs,houseListObs]).subscribe(value => {
      this.houseList = value[1];
      this.categoryList = value[0];
    });
  }

  search() {
    this.houseService.search(this.area, this.price, this.direction).subscribe(value => {
      this.houseList = value;
      console.log(value);
    });
  }

  deleteHouse() {
    this.houseService.delete(this.id).subscribe(() =>{
      this.findAll();
    })
  }

  sendId(id: number) {
    this.id = id;
    this.houseService.findById(this.id).subscribe(value => {
      this.tempTitle = value.title
    })
  }
}
