import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindCharacterService {
  finder$ = new Subject<number>();

  constructor() { }

  listenFinder() {
    return this.finder$;
  }

  finderCharacter(character) {
    this.finder$.next(character);
  }

}
