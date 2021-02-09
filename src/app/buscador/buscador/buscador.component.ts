import { Component, OnInit } from '@angular/core';
import {MarvelApiService} from '../../services/marvel-api.service';
import {Observable} from 'rxjs';
import {Data} from '../../interfaces/character';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  characters$: Observable<Data>

  constructor(private marvelApi: MarvelApiService) { }

  ngOnInit(): void {
    this.characters$ = this.marvelApi.getCharacters();
  }

}
