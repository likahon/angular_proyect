import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { GameInfoComponent } from './pages/game-info/game-info.component';
import { CreateEditCategoriesComponent } from './forms/create-edit-categories/create-edit-categories.component';
import { CreateEditGameComponent } from './forms/create-edit-game/create-edit-game.component';


@NgModule({
  declarations: [
    CreateEditCategoriesComponent,
    CreateEditGameComponent,
    CreateGameComponent,
    EditGameComponent,
    GameInfoComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
