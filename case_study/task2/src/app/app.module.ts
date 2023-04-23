import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { CreateContractDetailComponent } from './create-contract-detail/create-contract-detail.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchfilterPipe } from './listcustomer/searchfilter.pipe';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { SearchByNamePipe } from './list-employee/search-by-name.pipe';
import { ListServiceComponent } from './list-service/list-service.component';
import { SearchServiceByNamePipe } from './list-service/search-service-by-name.pipe';
import { ListContractComponent } from './list-contract/list-contract.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    CreateContractComponent,
    CreateServiceComponent,
    CreateContractDetailComponent,
    ListcustomerComponent,
    SearchfilterPipe,
    ListEmployeeComponent,
    SearchByNamePipe,
    ListServiceComponent,
    SearchServiceByNamePipe,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule, FormsModule,
    HttpClientModule, ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
