import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../members/shared.module';
import { MembreFormReactiveComponent } from './membre-form-reactive.component';


@NgModule({
  imports:      [ SharedModule, ReactiveFormsModule ],
  declarations: [ MembreFormReactiveComponent ],
  exports:      [ MembreFormReactiveComponent ]
})
export class ReactiveModule { }
