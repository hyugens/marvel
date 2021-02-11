import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [DetalleComponent],
  exports: [DetalleComponent],
  imports: [
    CommonModule
  ]
})
export class DetalleModule { }
