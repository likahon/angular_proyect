import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInfoComponent } from '../game-info/game-info.component';
import { EditGameComponent } from '../edit-game/edit-game.component';
import { CatalogComponent } from '../../component/catalog/catalog.component';

const routes: Routes = [
  {path: ":id", component: GameInfoComponent },
  {path: "edit-game", component: EditGameComponent },
  { path: "", component: CatalogComponent },
  {path: "**", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
