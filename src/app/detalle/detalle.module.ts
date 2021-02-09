import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleRoutingModule } from './detalle-routing.module';



@NgModule({
  declarations: [DetalleComponent],
  imports: [
    CommonModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
