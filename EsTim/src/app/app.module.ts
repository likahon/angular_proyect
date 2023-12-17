import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/component/header/header.component';
import { CreateEditCategoriesComponent } from './modules/forms/create-edit-categories/create-edit-categories.component';
import { CreateEditGameComponent } from './modules/forms/create-edit-game/create-edit-game.component';
import { CreateGameComponent } from './modules/pages/create-game/create-game.component';
import { EditGameComponent } from './modules/pages/edit-game/edit-game.component';
import { SortyByPipe } from './shared/pipes/sorty-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateEditCategoriesComponent,
    CreateEditGameComponent,
    CreateGameComponent,
    EditGameComponent,
    SortyByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
