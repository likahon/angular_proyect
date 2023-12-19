import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './modules/pages/create-game/create-game.component';
import { EditGameComponent } from './modules/pages/edit-game/edit-game.component';

const routes: Routes = [
  {path: "home", loadChildren: ()=> import ("./modules/pages/home/home.module").then(m => m.HomeModule)},
  // {path: "edit-game", loadChildren: ()=> import ("./modules/pages/edit-game/edit-game.module").then(m => m.EditGameModule)},
  {path: "create-game", component: CreateGameComponent},
  {path: "edit-game", component: EditGameComponent},
  {path: "**", redirectTo: '/home', pathMatch: 'full'}
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
