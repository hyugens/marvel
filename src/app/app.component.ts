import { Component } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FindCharacterService} from './services/find-character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  finder = this.formBuilder.group({
    character: ['']
  })
  constructor(private formBuilder: FormBuilder,
              private finderValue: FindCharacterService) {
  }

  findCharacter(character) {
    console.log('character: ', character);
    this.finderValue.finderCharacter(character);
  }

}
