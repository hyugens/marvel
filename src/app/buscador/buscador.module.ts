import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import {ReusableModule} from '../reusable/reusable.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [BuscadorComponent, CharactersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReusableModule,
    BuscadorRoutingModule,
    ReactiveFormsModule
  ]
})
export class BuscadorModule { }
