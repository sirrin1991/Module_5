import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {
    path: 'list',
    component: CustomerListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
