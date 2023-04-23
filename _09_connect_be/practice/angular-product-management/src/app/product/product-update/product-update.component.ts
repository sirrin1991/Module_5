import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  categories: Category[];
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private routerService : Router,
              private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.productService.findById(id).subscribe(data => {
      this.product = data;
      console.log(this.product);
      this.categoryService.getAll().subscribe(value => {
        this.categories = value;
        this.initUpdateForm();
      })
    })
  }
  initUpdateForm(){
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      category: new FormControl(this.product.category),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    })
  }

  updateProduct() {
    let product = this.productForm.value;
    this.productService.updateProduct(product).subscribe();
    this.routerService.navigate(['/product/list']);
  }
}
