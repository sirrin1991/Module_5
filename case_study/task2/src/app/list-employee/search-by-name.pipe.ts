import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from './employee';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(employees: Employee[], searchValue: string): Employee[] {
    if (!employees || !searchValue) {
      return employees;
    }
    return employees.filter(employee => employee.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
