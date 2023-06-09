import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from '../customer/list/list.component';
import {ListComponent} from './list/list.component';


const routes: Routes = [
  {
    path: 'list',
    component:ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
