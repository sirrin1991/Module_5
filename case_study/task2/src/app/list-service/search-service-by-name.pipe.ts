import {Pipe, PipeTransform} from '@angular/core';
import {Service} from './service';

@Pipe({
  name: 'searchServiceByName'
})
export class SearchServiceByNamePipe implements PipeTransform {

  transform(services: Service[], searchValue: string): Service[] {
    if (!services || !searchValue) {
      return services;
    }
    return services.filter(service => service.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
