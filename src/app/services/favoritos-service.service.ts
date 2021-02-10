import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosServiceService {

  favourite$ = new Subject<any>();
  favouriteRemove$ = new Subject<any>();

  constructor() { }

  listenAddFavourite() {
    return this.favourite$;
  }

  listenRemoveFavourite() {
    return this.favouriteRemove$;
  }

  addFavourite(hero) {
    this.favourite$.next(hero);
  }

  removeFavourite(index) {
    this.favouriteRemove$.next(index);
  }
}
