import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [BuscadorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
