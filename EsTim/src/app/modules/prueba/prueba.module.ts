import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';
import { FormPruebaComponent } from './pages/form-prueba/form-prueba.component';


@NgModule({
  declarations: [
    PruebaComponent,
    FormPruebaComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }