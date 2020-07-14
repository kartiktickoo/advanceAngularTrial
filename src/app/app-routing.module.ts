import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonProductCreateComponent } from './pokemon-product-create/pokemon-product-create.component';
import { PokemonProductListComponent } from './pokemon-product-list/pokemon-product-list.component';
import { YourGuardGuard } from './your-guard.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { NotAuthorisedComponent } from './not-authorised/not-authorised.component';

const routes: Routes = [
  { path: 'pokemonHomeComponent', component: PokemonHomeComponent },
  { path: 'notAuthorisedComponent', component: NotAuthorisedComponent },
  { path: 'homePageComponent', component: HomePageComponent },
  { path: 'pokemonDetailComponent', component: PokemonDetailComponent },
  { path: 'pokemonProductCreateComponent', component: PokemonProductCreateComponent, },
  { path: 'pokemonProductListComponent', component: PokemonProductListComponent, canActivate: [YourGuardGuard], },
  { path: '', redirectTo: '/homePageComponent', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/homePageComponent', pathMatch: 'full' }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
