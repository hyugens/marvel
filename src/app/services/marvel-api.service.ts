import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {pluck} from 'rxjs/operators';
import {Data, ResponseCharacterMarvel} from '../interfaces/character';
import {DataComicsCharacter, ResponseComicsCharacter} from '../interfaces/comicsCharacter';
import {DataComicResponse, ResponseComic} from '../interfaces/comic';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  getCharacters(name, sort, pageIndex, limits) {
    const url = `${environment.url + environment.characters}`;
    let params = new HttpParams();
    if (sort !== '' ) params = params.set('orderBy', sort);
    if (name !== '' ) params = params.set('name', name);
    params = params.set('offset', ((Number(pageIndex) -1) * Number(limits)).toString());
    params = params.set('limit', limits);
    return this.http.get<ResponseCharacterMarvel>(url, {params}).pipe(
      pluck<ResponseCharacterMarvel, Data>('data')
    );
  }

  getComicsHero(idHero, title, sort, pageIndex, limits) {
    const url = `${environment.url + environment.characters}/${idHero}/comics`;
    let params = new HttpParams();
    if (sort !== '' ) params = params.set('orderBy', sort);
    if (title !== '' ) params = params.set('title', title);
    params = params.set('offset', ((Number(pageIndex) -1) * Number(limits)).toString());
    params = params.set('limit', limits);
    return this.http.get<ResponseComicsCharacter>(url, {params}).pipe(
      pluck<ResponseComicsCharacter, DataComicsCharacter>('data')
    );
  }

  getComicId(idComic) {
    const url = `${environment.url + environment.comics}/${idComic}`;
    return this.http.get<ResponseComic>(url).pipe(
      pluck<ResponseComic, DataComicResponse>('data')
    );
  }
}
