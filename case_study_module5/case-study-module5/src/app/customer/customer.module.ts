import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SearchByCustomerNamePipe } from './search-by-customer-name.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CustomerListComponent, CreateComponent, EditComponent, SearchByCustomerNamePipe],
  exports: [
    CustomerListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
  ]
})
export class CustomerModule { }
