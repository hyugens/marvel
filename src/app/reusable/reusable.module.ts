import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DetalleModule} from '../detalle/detalle.module';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    DetalleModule,
    MatDialogModule
  ],
  exports: [CardComponent]
})
export class ReusableModule { }
