import { Component, OnInit } from '@angular/core';
import {MarvelApiService} from '../../services/marvel-api.service';
import {Observable} from 'rxjs';
import {Data} from '../../interfaces/character';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  characters$: Observable<Data>

  constructor(private marvelApi: MarvelApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.characters$ = this.marvelApi.getCharacters();
  }

  detail(idHero: number) {
    this.router.navigate(['detalle/'+idHero]);
  }

  navigateTo(page: number) {
    console.log('NAVIGATE TO BUSCADOR: ', page);
  }
}
