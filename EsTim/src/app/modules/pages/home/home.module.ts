import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CatalogComponent } from 'src/app/modules/component/catalog/catalog.component';
import { SortyByPipe } from 'src/app/shared/pipes/sorty-by.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    SortyByPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
