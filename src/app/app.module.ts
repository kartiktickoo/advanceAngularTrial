import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonProductCreateComponent } from './pokemon-product-create/pokemon-product-create.component';
import { PokemonProductListComponent } from './pokemon-product-list/pokemon-product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateProductChildComponent } from './create-product-child/create-product-child.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotAuthorisedComponent } from './not-authorised/not-authorised.component';
import { TwoDigitDecimaNumberDirective } from './two-digit-decima-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHomeComponent,
    PokemonDetailComponent,
    PokemonProductCreateComponent,
    PokemonProductListComponent,
    HomePageComponent,
    CreateProductChildComponent,
    NotAuthorisedComponent,
    TwoDigitDecimaNumberDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
