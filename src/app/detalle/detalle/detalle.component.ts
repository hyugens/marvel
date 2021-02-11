import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelApiService} from '../../services/marvel-api.service';
import {Observable} from 'rxjs';
import {DataComicsCharacter} from '../../interfaces/comicsCharacter';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../../reusable/modal/modal.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  infoCharacter$: Observable<DataComicsCharacter>;
  constructor(public route: ActivatedRoute,
              public dialog: MatDialog,
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

  openComicModal(id: number) {
    const dialogRef = this.dialog.open(ModalComponent, { data: { idComic: id }, disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  navigateTo(page: number) {
    console.log('NavigateTo detalle: ', page);
  }
}
