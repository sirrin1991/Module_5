import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './dictionanry-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionay-page/dictionary-page.component';


const routes: Routes = [
  {path: '', component: DictionaryPageComponent},
  {path: 'translate/:index' , component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
