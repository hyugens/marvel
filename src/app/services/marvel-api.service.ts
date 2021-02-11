import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {pluck} from 'rxjs/operators';
import {Data, ResponseCharacterMarvel} from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    const url = `${environment.url + environment.characters}`;
    return this.http.get<ResponseCharacterMarvel>(url).pipe(
      pluck<ResponseCharacterMarvel, Data>('data')
    );
  }

  getComicsHero(idHero) {
    const url = `${environment.url + environment.characters}/${idHero}/comics`;
    return this.http.get<ResponseCharacterMarvel>(url).pipe(
      pluck<ResponseCharacterMarvel, Data>('data')
    );
  }

  getComicId(idComic) {
    const url = `${environment.url + environment.comics}/${idComic}`;
    return this.http.get<ResponseCharacterMarvel>(url).pipe(
      pluck<ResponseCharacterMarvel, Data>('data')
    );
  }
}
