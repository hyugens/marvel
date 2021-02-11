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
    const favouritosSave = JSON.parse(localStorage.getItem('favoritos'))
    this.favoritos = favouritosSave ? favouritosSave : [];
    this.listenFavourite();
    this.listenRemoveFavourite();
  }

  listenFavourite() {
    this.favoritoService.listenAddFavourite().subscribe((favorito) => {
      const favoritoExiste = this.favoritos.findIndex((f) => f.id === favorito.id );
      if (favoritoExiste >= 0) {
      } else {
        this.favoritos.push(favorito);
        localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
      }
    });
  }

  listenRemoveFavourite() {
    this.favoritoService.listenRemoveFavourite().subscribe((index) => {
      this.favoritos.splice(index, 1);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    });
  }

}
