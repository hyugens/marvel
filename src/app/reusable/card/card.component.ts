import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() idHero: number;
  @Input() heroImg: string;
  @Input() heroName: string;
  @Input() description: string;

  @Output() viewMoreEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  viewMore() {
    this.viewMoreEvent.emit(this.idHero);
  }
}
