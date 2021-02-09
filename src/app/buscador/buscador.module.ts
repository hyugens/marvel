import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { BuscadorRoutingModule } from './buscador-routing.module';



@NgModule({
  declarations: [BuscadorComponent],
  imports: [
    CommonModule,
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
