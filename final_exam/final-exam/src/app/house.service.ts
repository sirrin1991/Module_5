import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from './house';
import {Category} from './category';
import {City} from './city';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private API_URL = 'http://localhost:8080/house';
  private API_URL_CATEGORY = 'http://localhost:8080/categoryList';
  private API_URL_CITY = 'http://localhost:8080/cityList';

  constructor(private httpClient: HttpClient) {
  }

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL_CATEGORY);
  }

  getCityList(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.API_URL_CITY);
  }

  findAll(): Observable<House[]> {
    return this.httpClient.get<House[]>(this.API_URL);
  }

  save(house: House): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, house);
  }

  update(house: House): Observable<void> {
    return this.httpClient.put<void>(this.API_URL + '/' + house.id, house);
  }

  delete(id: number): Observable<void>{
    return  this.httpClient.delete<void>(this.API_URL+ '/' + id );
  }

  findById(id: number): Observable<House> {
    return this.httpClient.get<House>(this.API_URL + '/' + id);
  }

  search(area: string, price: string, direction: string): Observable<House[]> {
    return this.httpClient.get<House[]>(this.API_URL + '?area_gte=' + area + '&price_gte=' + price + '&direction_like=' + direction);
  }
}

// area_gte=50&price_gte=100000001&direction=
