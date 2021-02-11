import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MarvelApiService} from '../../services/marvel-api.service';
import {DataComicResponse} from '../../interfaces/comic';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  url: string;
  title: string;
  description: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
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

  }

  closeModal() {

  }
}
