import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FavoritosRoutingModule } from './favoritos-routing.module';



@NgModule({
  declarations: [FavoritosComponent],
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
