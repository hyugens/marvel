import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Data} from '../../interfaces/character';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input() characters: Data;
  @Output() detailEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  personajeSelected(idHero: number) {
    this.detailEvent.emit(idHero);
  }
}
