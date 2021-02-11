import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [CardComponent, ModalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [CardComponent]
})
export class ReusableModule { }
