import { Component, OnInit } from '@angular/core';
import {FavoritosServiceService} from '../../services/favoritos-service.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  favoritos = [];

  constructor(private favoritoService: FavoritosServiceService) { }

  ngOnInit(): void {
    this.listenFavourite();
    this.listenRemoveFavourite();
  }

  listenFavourite() {
    this.favoritoService.listenAddFavourite().subscribe((favorito) => {
      this.favoritos.push(favorito);
    });
  }

  listenRemoveFavourite() {
    this.favoritoService.listenRemoveFavourite().subscribe((index) => {
      this.favoritos.splice(index, 1);
    });
  }

}
