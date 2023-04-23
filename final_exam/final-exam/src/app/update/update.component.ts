import {Component, OnInit} from '@angular/core';
import {HouseService} from '../house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {House} from '../house';
import {Category} from '../category';
import {City} from '../city';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  house: House;
  updateForm: FormGroup;
  categoryList: Category[];
  cityList: City[];

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute,
              private route: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params.id;
    this.houseService.findById(id).subscribe(value => {
      this.house = value;
      let categoryObs = this.houseService.getCategoryList();
      let cityObs = this.houseService.getCityList();
      forkJoin([categoryObs, cityObs]).subscribe(result => {
        this.categoryList = result[0];
        this.cityList = result[1];
        this.initUpdateForm();
      });
    });
  }

  initUpdateForm(){
    this.updateForm = this.fb.group({
      id: this.house.id,
      category: this.house.category,
      city: this.house.city,
      dateOfPost: this.house.dateOfPost,
      post: this.house.post,
      status: this.house.status,
      address: [this.house.address, Validators.required],
      area: [this.house.area, [Validators.required, Validators.min(20)]],
      direction: this.house.direction,
      title: [this.house.title, Validators.required],
      content: [this.house.content, Validators.required],
      price: [this.house.price, [Validators.required, Validators.min(100000000)]],
    })
  }

  submit() {
    let house = this.updateForm.value;
    this.houseService.update(house).subscribe(() => {
      this.route.navigateByUrl('/houselist')
    })
  }
}
