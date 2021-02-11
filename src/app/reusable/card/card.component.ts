import {Component, Input, OnInit} from '@angular/core';
import {StoriesItem} from '../../interfaces/character';
import {MatDialog} from '@angular/material/dialog';
import {DetalleComponent} from '../../detalle/detalle/detalle.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DetalleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
