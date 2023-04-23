import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm : FormGroup;
  constructor(private categoryService: CategoryService, private fb: FormBuilder,
              private router: Router) {
    this.categoryForm = this.fb.group({
      name : ''
    })
  }

  ngOnInit(): void {
  }
  saveNewCategory(){
    let category = this.categoryForm.value;
    console.log(category.id);
    this.categoryService.saveCategory(category);
    this.router.navigateByUrl('/category/list')
  }
}
