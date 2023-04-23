import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];


  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.loadCategory();
  }

  ngOnInit(): void {
    this.initForm();
  }

  loadCategory() {
    this.categoryService.getAll().subscribe(data => this.categories = data);
  }

  initForm() {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      category: new FormControl(''),
      price: new FormControl(),
      description: new FormControl(),
    });
  }

  submit() {
    let product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
    }, e => {
      console.log('Error: ' + e);
    });
  }
}
