import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  // @Input() arrayLength: number;
  @Input() limitLength: number;
  @Input() maxResults: number;
  @Output() nextPage = new EventEmitter<number>();
  pages = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.maxResults) {
      this.setPagination();
    }
  }

  setPagination() {
    const pages = Math.ceil(this.maxResults / this.limitLength);
    for(let i = 1; i <= pages; i++) this.pages.push(i);
  }

  navigateTo(page) {
    console.log('navigateTO: ', page);
    this.nextPage.emit(page);
  }
}
