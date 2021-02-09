import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'buscador', loadChildren: () => import('./buscador/buscador.module').then(m => m.BuscadorModule) },
  { path: 'detalle', loadChildren: () => import('./detalle/detalle.module').then(m => m.DetalleModule) },
  { path: 'favoritos', loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
