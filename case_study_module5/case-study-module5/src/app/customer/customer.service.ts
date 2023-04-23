import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})


export class CustomerService {
  private _API_URL_CUSTOMERTYPE = 'http://localhost:3000/customertypes';

  constructor(private httpClient: HttpClient) {
  }

  getAllTypeOfCustomer(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this._API_URL_CUSTOMERTYPE);
  }

  // findAll(): Observable<Customer[]> {
  //   return this.httpClient.get<Customer[]>(API_URL + '/customers');
  // }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL}/customers/${id}`);
  }
  findCTById(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(this._API_URL_CUSTOMERTYPE+ "/" + id);
  }

  updateCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  deleteById(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${API_URL}/customers/${id}`);
  }

  sortByName(sort: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customers?_sort=name&_order=' + sort);
  }

  findAll(code: string, name: string, email: string): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(API_URL + '/customers?code_like=' + code + '&name_like=' + name + '&email_like=' + email);
  }
  // searchByName(name: string): Observable<Customer[]>{
  //   return this.httpClient.get<Customer[]>(API_URL + '/customers?name_like=' + name)
  // }

  searchInRange(startDate: string, endDate: string): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(API_URL + '/customers?birthday_gte=' + startDate + '&birthday_lte=' + endDate);
  }
}
