import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {DataComicsCharacter} from '../../interfaces/comicsCharacter';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit, OnChanges {

  @Input() comics: DataComicsCharacter;
  @Output() detailEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.comics) {
      console.log('comics: ', this.comics);
    }
  }

  comicSelected(id: number) {
    this.detailEvent.emit(id);
  }
}
