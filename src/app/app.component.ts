import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FindCharacterService} from './services/find-character.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  finder = this.formBuilder.group({
    character: ['']
  })
  constructor(private formBuilder: FormBuilder,
              private finderValue: FindCharacterService) {
  }

  ngOnInit() {
    this.finder.get('character').valueChanges.pipe(
      debounceTime(3000),
      distinctUntilChanged()
    ).subscribe(t => this.findCharacter(t));
  }

  findCharacter(character) {
    this.finderValue.finderCharacter(character);
  }

}
