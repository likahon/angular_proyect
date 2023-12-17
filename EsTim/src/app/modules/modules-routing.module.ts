import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './component/catalog/catalog.component';
import { GameInfoComponent } from './pages/game-info/game-info.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';

const routes: Routes = [
  {path: "create-game", component: CreateGameComponent },
  {path: ":id", component: GameInfoComponent },
  {path: ":id/edit-game", component: EditGameComponent },
  {path: "", component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
