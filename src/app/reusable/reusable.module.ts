import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {PipesModule} from '../pipes/pipes.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CardComponent, ModalComponent, PaginatorComponent],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [CardComponent, ModalComponent, PaginatorComponent]
})
export class ReusableModule { }
