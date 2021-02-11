import { Component, OnInit } from '@angular/core';
import {MarvelApiService} from '../../services/marvel-api.service';
import {Observable} from 'rxjs';
import {Data} from '../../interfaces/character';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  characters$: Observable<Data>
  maxLength = 1;
  limitLength: number;

  constructor(private marvelApi: MarvelApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.characters$ = this.marvelApi.getCharacters().pipe(
      tap((characters) => {
        this.maxLength = characters.total;
        this.limitLength = characters.limit;
      })
    );
  }

  detail(idHero: number) {
    this.router.navigate(['detalle/'+idHero]);
  }

  navigateTo(page: number) {
    console.log('NAVIGATE TO BUSCADOR: ', page);
  }
}
