import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  declarations: [CardComponent, ModalComponent, PaginatorComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [CardComponent, ModalComponent, PaginatorComponent]
})
export class ReusableModule { }
