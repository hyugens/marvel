import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MarvelApiService} from '../../services/marvel-api.service';
import {merge, Observable, of, Subject} from 'rxjs';
import {Data} from '../../interfaces/character';
import {Router} from '@angular/router';
import {catchError, map, startWith, switchMap, tap} from 'rxjs/operators';
import {FormBuilder} from '@angular/forms';
import {FindCharacterService} from '../../services/find-character.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, AfterViewInit {
  characters$: Observable<any>
  maxLength = 1;
  limitLength = 1;
  page$ = new Subject<number>();
  itemsPerPage$ = new Subject<string>();
  findCharacter$: Observable<string>;

  buscador = this.formBuilder.group({
    sort: [''],
    paginator: ['']
  })
  isLoadingResults: boolean = false;
  pageFind: number = 1;
  itemsPerPage: string = '10';
  nameCharacter: string = '';

  constructor(private formBuilder: FormBuilder,
              private finderValue: FindCharacterService,
              private marvelApi: MarvelApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.findCharacter$ = this.finderValue.listenFinder().pipe(
      tap((finder) => { this.nameCharacter = finder; })
    );
  }

  ngAfterViewInit() {
    this.characters$ = merge(this.buscador.get('sort').valueChanges, this.page$, this.findCharacter$, this.itemsPerPage$)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.marvelApi.getCharacters(this.nameCharacter, this.buscador.get('sort').value, this.pageFind, this.itemsPerPage)
        }),
        map(data => {
          this.isLoadingResults = false;
          this.maxLength = data.total;
          this.limitLength = data.limit;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      );
  }

  detail(idHero: number) {
    this.router.navigate(['detalle/'+idHero]);
  }

  changeItemsPerPage(items) {
    this.itemsPerPage = items;
    this.itemsPerPage$.next(items);
  }

  navigateTo(page: number) {
    this.pageFind = page;
    this.page$.next(page);
  }
}

