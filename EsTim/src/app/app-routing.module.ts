import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './modules/pages/create-game/create-game.component';
import { CatalogComponent } from './modules/component/catalog/catalog.component';
import { EditGameComponent } from './modules/pages/edit-game/edit-game.component';
import { GameInfoComponent } from './modules/pages/game-info/game-info.component';

const routes: Routes = [
  {path: "create-game", component: CreateGameComponent },
  {path: "home", component: CatalogComponent },
  {path: ":id", component: GameInfoComponent },
  {path: ":id/edit-game", component: EditGameComponent },
  {path: "", loadChildren: ()=> import ("./modules/pages/home/home.module").then(m => m.HomeModule)},
  {path: "**", redirectTo: '/home', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
