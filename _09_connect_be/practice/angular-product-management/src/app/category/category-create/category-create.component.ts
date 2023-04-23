import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService,
              private router: Router,
              private toastr : ToastrService) {
  }

  ngOnInit(): void {
  }
  showToastr(){
    this.toastr.success("ok","abc", {
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }
  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe(() => {
      this.router.navigateByUrl('/category/list');
      this.showToastr();
    }, e => {
      console.log(e);
    });

  }
}
