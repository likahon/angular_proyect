import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/component/header/header.component';
import { CreateEditCategoriesComponent } from './modules/forms/create-edit-categories/create-edit-categories.component';
import { CreateEditGameComponent } from './modules/forms/create-edit-game/create-edit-game.component';

import { GameInfoComponent } from './modules/pages/game-info/game-info.component';
import { ModulesModule } from './modules/modules.module';
import { EditGameComponent } from './modules/pages/edit-game/edit-game.component';
import { CreateGameComponent } from './modules/pages/create-game/create-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateEditCategoriesComponent,
    CreateEditGameComponent,
    CreateGameComponent,
    EditGameComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
