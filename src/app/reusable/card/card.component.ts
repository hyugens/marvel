import {Component, Input, OnInit} from '@angular/core';
import {StoriesItem} from '../../interfaces/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() heroImg: string;
  @Input() heroName: string;
  @Input() description: string;
  @Input() related: StoriesItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
