import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelApiService} from '../../services/marvel-api.service';
import {merge, Observable, of, Subject} from 'rxjs';
import {DataComicsCharacter} from '../../interfaces/comicsCharacter';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../../reusable/modal/modal.component';
import {catchError, map, startWith, switchMap, tap} from 'rxjs/operators';
import {FormBuilder} from '@angular/forms';
import {FindCharacterService} from '../../services/find-character.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, AfterViewInit {
  infoCharacter$: Observable<any>;
  maxLength: number = 1;
  limitLength: number = 1;
  itemsPerPage: string = '10';
  pageFind: number = 1;
  page$ = new Subject<number>();
  itemsPerPage$ = new Subject<string>();
  findCharacter$: Observable<string>;
  isLoadingResults: boolean = false;

  detalle = this.formBuilder.group({
    sort: [''],
    paginator: ['']
  })
  idComic: string;
  titleComic: string = '';
  constructor(public route: ActivatedRoute,
              private finderValue: FindCharacterService,
              public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    this.findCharacter$ = this.finderValue.listenFinder().pipe(
      tap((finder) => { this.titleComic = finder; })
    );
    this.route.paramMap.subscribe(() => {
      this.idComic = this.route.snapshot.paramMap.get('id');
      // this.consultarInfo(id);
    });
  }

  ngAfterViewInit() {
    this.infoCharacter$ = merge(this.detalle.get('sort').valueChanges, this.page$, this.findCharacter$, this.itemsPerPage$)
      .pipe(
        startWith({}),
        switchMap((t) => {
          this.isLoadingResults = true;
          return this.marvelApiService.getComicsHero(this.idComic, this.titleComic, this.detalle.get('sort').value, this.pageFind, this.itemsPerPage)
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

  changeItemsPerPage(items) {
    this.itemsPerPage = items;
    this.itemsPerPage$.next(items);
  }

  openComicModal(id: number) {
    const dialogRef = this.dialog.open(ModalComponent, { data: { idComic: id }, disableClose: true });
  }

  navigateTo(page: number) {
    this.pageFind = page;
    this.page$.next(page);
  }
}
