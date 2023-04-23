import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[];
  any = 'asc';

  constructor(private productService: ProductService, private categoryService: CategoryService, private route: Router) {

  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
      this.getAll();
    }, error => {
    });
  }

  getAll() {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.getAll());
  }

  sort() {
    this.any == 'asc' ? this.any = 'desc' : this.any = 'asc';
    console.log(this.any);
    this.productService.orderByName(this.any).subscribe(value => {
        this.products = value;
      }, error => {
        console.log('err: ' + error);
      }
    )
    ;
  }

}
