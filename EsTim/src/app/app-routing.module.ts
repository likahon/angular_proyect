import { NgModule } from "@angular/core";
import { HomeComponent } from "./modules/home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./modules/category/form/form.component";
import { CategoriesListComponent } from "./modules/category/categories-list/categories-list.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'forms', component: FormComponent },
    { path: 'catList', component: CategoriesListComponent },
    { path: 'games', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule) },
    { path: 'prueba', loadChildren: () => import('./modules/prueba/prueba.module').then(m => m.PruebaModule) }, //PRUEBAS PARA PASAR ESTADOS ENTRE COMPONENTES
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}