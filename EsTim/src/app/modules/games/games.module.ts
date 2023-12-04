import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesFormComponent } from './components/games-form/games-form.component';
import { CreateGamesComponent } from './pages/create-games/create-games.component';
import { EditGamesComponent } from './pages/edit-games/edit-games.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { FormGenreComponent } from './components/form-genre/form-genre.component';
import { EditGenreComponent } from './pages/edit-genre/edit-genre.component';
import { CreateGenreComponent } from './pages/create-genre/create-genre.component';

import { OrderByPricePipe } from '../games/pipes/order-by-price.pipe';
import { RedOnHoverDirective } from 'src/app/dom-dir-lists.directive';



@NgModule({
  declarations: [
    GamesFormComponent,
    CreateGamesComponent,
    EditGamesComponent,
    GamesListComponent,
    FormGenreComponent,
    EditGenreComponent,
    CreateGenreComponent,
    OrderByPricePipe,
    RedOnHoverDirective

  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { 

}
