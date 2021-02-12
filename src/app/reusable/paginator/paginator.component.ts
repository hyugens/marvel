import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

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
  @Output() itemsPerPage = new EventEmitter<string>();

  formPagination = this.formBuilder.group({
    itemsPerPage: ['10']
  });
  actualPage = '1';
  rangeButtons = 5;
  maxButtonPage =  1;
  minButtonPage = 1;
  totalPages = 1;
  pages = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPagination.get('itemsPerPage').valueChanges.subscribe(items => {
      this.itemsPerPage.emit(items);
    })
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
    this.actualPage = page;
    this.nextPage.emit(page);
  }

  next() {
    if (Number(this.actualPage) < this.maxButtonPage && Number(this.actualPage) < this.totalPages )
      this.actualPage = (Number(this.actualPage)+1).toString();
  }

  previous() {
    if (Number(this.actualPage) > this.minButtonPage && Number(this.actualPage) > 1)
      this.actualPage = (Number(this.actualPage)-1).toString();
  }

  more() {
    this.pages=[];
    const auxMax = this.maxButtonPage + this.rangeButtons;
    this.minButtonPage = this.maxButtonPage + 1;
    this.actualPage = this.minButtonPage.toString();
    this.nextPage.emit(Number(this.actualPage));

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
    this.actualPage = this.maxButtonPage.toString();
    this.nextPage.emit(Number(this.actualPage));

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
