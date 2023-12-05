import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { FormComponent } from './form/form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';


@NgModule({
  declarations: [
    FormComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
