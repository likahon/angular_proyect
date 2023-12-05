import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';
import { CreateGamesComponent } from './pages/create-games/create-games.component';
import { EditGamesComponent } from './pages/edit-games/edit-games.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  { path: 'create', component: CreateGamesComponent },
  { path: ':id', component:  GamesComponent},
  { path: ':id/edit', component: EditGamesComponent },
  { path: '', component: GamesListComponent },
  // { path: '**', redirectTo: '/err404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
