import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { SharedModule } from '../members/shared.module';
import { MembreFormTemplate1Component } from './membre-form-template1.component';
import { MembreFormTemplate2Component } from './membre-form-template2.component';

@NgModule({
  imports: [ SharedModule,
  FormsModule,
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MaterialModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  BrowserModule, ],
  declarations: [ MembreFormTemplate1Component, MembreFormTemplate2Component ],
  exports:      [ MembreFormTemplate1Component, MembreFormTemplate2Component ]
})
export class MembreFormTemplateModule { }



