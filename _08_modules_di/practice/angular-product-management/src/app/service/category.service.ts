import {Injectable} from '@angular/core';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    {id: 1 , name : 'Phone'},
    {id: 2 , name : 'Television'}
  ];

  constructor() { }
  findAll(){
    return this.categories
  }
  findById(id : number){
    return this.categories.find(x => x.id === id);
  }
  saveCategory(category: Category){
    if (isNaN(category.id)){
      category.id = this.categories[this.categories.length - 1].id + 1;
      this.categories.push(category)
    }else {
      let id = category.id;
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].id === id) {
          this.categories[i] = category;
          break;
        }
      }
    }
  }

  deleteById(id : number){
    // this.categories = this.categories.filter(category => {
    //   return category.id !== id;
    // })
    let category = this.findById(id);
    let index = this.categories.indexOf(category);
    this.categories.splice(index,1);
  }
}
