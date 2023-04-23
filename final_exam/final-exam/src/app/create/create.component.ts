import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HouseService} from '../house.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {House} from '../house';
import {Category} from '../category';
import {City} from '../city';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  tempHouse: House;
  categoryList: Category[];
  cityList: City[];

  constructor(private fb: FormBuilder, private houseService: HouseService,
              private toast: ToastrService, private route: Router) {
  }

  ngOnInit(): void {
    this.houseService.getCategoryList().subscribe(value => {
      this.categoryList = value;
      console.log(this.categoryList);
      this.houseService.getCityList().subscribe(data => {
        this.cityList = data;
        this.initForm();
      }, error => {
        console.log('Get city list error: ' + error);
      });
    }, error => {
      console.log('Get category list error: ' + error);
    });
  }

  initForm() {
    this.createForm = this.fb.group({
      category: '',
      city: '',
      dateOfPost: '',
      post: '',
      status: '',
      address: ['', Validators.required],
      area: ['', [Validators.required, Validators.min(20)]],
      direction: '',
      title: ['', Validators.required],
      content: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(100000000)]],
    });
  }

  submit() {
    let house = this.createForm.value;
    this.houseService.save(house).subscribe(() => {
      this.callToast();
      this.route.navigateByUrl('/houselist');
    });
  }

  callToast() {
    this.toast.success('Successfully', 'Create new post');
  }

  sendInfor() {
    this.tempHouse = this.createForm.value;
  }
}
