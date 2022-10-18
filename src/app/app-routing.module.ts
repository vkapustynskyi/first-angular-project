import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./feature/heroes/heroes.component";
import {HeroDetailComponent} from "./feature/heroes/hero-detail/hero-detail.component";


const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
