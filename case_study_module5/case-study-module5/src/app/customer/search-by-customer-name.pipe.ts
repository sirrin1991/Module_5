import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from '../model/customer';

@Pipe({
  name: 'searchByCustomerName'
})
export class SearchByCustomerNamePipe implements PipeTransform {

  transform(customerList: Customer[], searchValue: string ): Customer[] {
    if (!customerList || !searchValue){
      return customerList;
    }
    return customerList.filter(customer => customer.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
