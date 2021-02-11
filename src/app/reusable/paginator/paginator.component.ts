import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

export class PaginationButton {
  tag: string;
  id: string;
}

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
  actualPage = 1;
  rangeButtons = 5;
  maxButtonPage =  1;
  minButtonPage = 1;
  totalPages = 1;
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
    this.totalPages = Math.ceil(this.maxResults / this.limitLength);
    this.viewInitialButtons();
  }

  navigateTo(page) {
    console.log('navigateTO: ', page);
    this.actualPage = page;
    console.log('ActualPage: ', this.actualPage);
    // this.nextPage.emit(page);
  }

  next() {
    this.actualPage++;
    console.log('ActualPage: ', this.actualPage);

  }

  previous() {
    this.actualPage--;
    console.log('ActualPage: ', this.actualPage);
  }

  more() {
    this.pages=[];
    const auxMax = this.maxButtonPage + this.rangeButtons;
    this.minButtonPage = this.maxButtonPage + 1;
    this.actualPage = this.minButtonPage;

    const pageButton = new PaginationButton();
    pageButton.id = 'less'; pageButton.tag = '...';
    this.pages.push(pageButton);

    for(let i = this.maxButtonPage +1; i <= this.totalPages && i <= auxMax; i++){
      const pageButton = new PaginationButton();
      pageButton.id = i + ''; pageButton.tag = i + '';
      this.pages.push(pageButton);
    }

    if (auxMax < this.totalPages) {
      this.maxButtonPage = auxMax;
      const pageButton = new PaginationButton();
      pageButton.id = 'more'; pageButton.tag = '...';
      this.pages.push(pageButton);
    } else this.maxButtonPage = this.totalPages;

  }

  less() {
    this.pages=[];
    const auxMin = this.minButtonPage - this.rangeButtons;
    this.maxButtonPage = this.minButtonPage -1;
    this.actualPage = this.maxButtonPage;

    for( let i = this.minButtonPage -1; i >= 1 && i >= auxMin; i--) {
      const pageButton = new PaginationButton();
      pageButton.id = i + ''; pageButton.tag = i + '';
      this.pages.unshift(pageButton);
    }

    if (auxMin > 1) {
      this.minButtonPage = auxMin;
      const pageButton = new PaginationButton();
      pageButton.id = 'less'; pageButton.tag = '...';
      this.pages.unshift(pageButton);
    } else this.minButtonPage = 1;

    const pageButton = new PaginationButton();
    pageButton.id = 'more'; pageButton.tag = '...';
    this.pages.push(pageButton);

  }

  viewInitialButtons() {
    this.pages = [];
    if(this.totalPages <= this.rangeButtons) {
      this.maxButtonPage = this.totalPages;
      for(let i = 1; i <= this.totalPages; i++) {
        const pageButton = new PaginationButton();
        pageButton.id = i + ''; pageButton.tag = i + '';
        this.pages.push(pageButton);
      }
    } else {
      this.maxButtonPage = this.rangeButtons;
      for(let i = 1; i <= this.rangeButtons; i++) {
        const pageButton = new PaginationButton();
        pageButton.id = i + ''; pageButton.tag = i + '';
        this.pages.push(pageButton);
      }
      const pageButton = new PaginationButton();
      pageButton.id = 'more'; pageButton.tag = '...';
      this.pages.push(pageButton);
    }
  }

}
