import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelApiService} from '../../services/marvel-api.service';
import {Observable} from 'rxjs';
import {Data} from '../../interfaces/character';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  infoCharacter$: Observable<Data>;
  constructor(public route: ActivatedRoute,
              private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      const id = this.route.snapshot.paramMap.get('id');
      this.consultarInfo(id);
    });
  }

  consultarInfo(id) {
    this.infoCharacter$ = this.marvelApiService.getComicsHero(id);
  }

  addFavourite(id: number) {
    console.log('add Favourite: ', id);
  }
}
