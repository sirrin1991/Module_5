import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.categoriesService.getAll().subscribe(categories => {
      this.categories = categories;
    })
  }

  deleteCategory(id: number) {
    this.categoriesService.deleteCategory(id).subscribe(() => {
        this.getAll();
      }, e => {
        console.log(e)
      }
    );
  }
}
