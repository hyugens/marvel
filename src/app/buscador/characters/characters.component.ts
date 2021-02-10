import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../../interfaces/character';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input() characters: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
