import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./buscador/buscador.module').then(m => m.BuscadorModule) },
  { path: 'detalle/:id', loadChildren: () => import('./detalle/detalle.module').then(m => m.DetalleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
