import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TruncateDescPipe} from './truncate-desc.pipe';



@NgModule({
  declarations: [ TruncateDescPipe ],
  exports: [ TruncateDescPipe ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
