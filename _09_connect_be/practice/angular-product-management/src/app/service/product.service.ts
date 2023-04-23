import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  private API_URL_PRODUCT = 'http://localhost:3000/productList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL_PRODUCT);
  }

  saveProduct(product: Product): Observable<void> {
    return this.httpClient.post<void>(this.API_URL_PRODUCT, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL_PRODUCT + '/' + id);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.API_URL_PRODUCT + '/' + product.id, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_PRODUCT + '/' + id);
  }

  orderByName(any: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API_URL_PRODUCT + '?_sort=name&_order=' + any)
  }

}
