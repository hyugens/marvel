import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import {DetalleRoutingModule} from './detalle-routing.module';
import {ReusableModule} from '../reusable/reusable.module';
import { ComicsComponent } from './comics/comics.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [DetalleComponent, ComicsComponent],
  exports: [DetalleComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReusableModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
