import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MarvelApiService} from '../../services/marvel-api.service';
import {DataComicResponse} from '../../interfaces/comic';
import {FavoritosServiceService} from '../../services/favoritos-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  url: string;
  title: string;
  description: string;

  constructor(private dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private favoritosService: FavoritosServiceService,
              private marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    console.log('INFO.DATA: ', this.data.idComic);
    this.marvelApiService.getComicId(this.data.idComic).subscribe((info: DataComicResponse) => {
      this.url = `${info.results[0].thumbnail.path}.${info.results[0].thumbnail.extension}`;
      this.title = info.results[0].title;
      this.description = info.results[0].description;
    });
  }

  buyComic() {

  }

  addFavourites() {
    const favorito = {
      id: this.data.idComic,
      img: this.url,
      title: this.title
    }
    this.favoritosService.addFavourite(favorito);
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
