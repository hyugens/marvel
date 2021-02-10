import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import {ReusableModule} from '../reusable/reusable.module';
import {FavoritosModule} from '../favoritos/favoritos.module';



@NgModule({
  declarations: [BuscadorComponent, CharactersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FavoritosModule,
    ReusableModule,
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
