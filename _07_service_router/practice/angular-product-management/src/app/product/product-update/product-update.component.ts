import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private routerService : Router) {

  }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params.idProduct;
    this.product = this.productService.findById(id);
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    })
  }

  updateProduct() {
    let product = this.productForm.value;
    this.productService.saveProduct(product);
    this.routerService.navigate(['/product/list']);
  }
}
