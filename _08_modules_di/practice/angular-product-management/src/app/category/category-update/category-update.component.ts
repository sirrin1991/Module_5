import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  category: Category;
  categoryForm : FormGroup;
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    let id = +this.activatedRoute.snapshot.params.id;
    this.category = this.categoryService.findById(id);
    this.categoryForm = new FormGroup({
      id: new FormControl(this.category.id),
      name: new FormControl(this.category.name)
    })
  }

  ngOnInit(): void {
  }

  updateCategory() {
    this.category = this.categoryForm.value;
    this.categoryService.saveCategory(this.category);
    alert('Successfully');
    this.router.navigateByUrl('category/list');
  }
}
