import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CatalogComponent } from 'src/app/core/component/catalog/catalog.component';


@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
