import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Data} from '../../interfaces/character';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit, OnChanges {

  @Input() comics: Data;
  @Output() detailEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.comics) {
      console.log('comics: ', this.comics);
    }
  }

}
