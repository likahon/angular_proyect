import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  { path: 'forms', component: FormComponent },
  { path: 'catList', component: CategoriesListComponent },
  {
    path: '**',
    redirectTo: '/catList',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
