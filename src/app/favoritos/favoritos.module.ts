import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos/favoritos.component';

@NgModule({
  declarations: [FavoritosComponent],
  exports: [
    FavoritosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FavoritosModule { }
