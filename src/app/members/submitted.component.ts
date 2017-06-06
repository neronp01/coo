import { Component, EventEmitter, Input, Output } from '@angular/core';

 import { Membre } from './membres';

@Component({
  selector: 'membre-submitted',
  template: `
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ membre.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Alter Ego</div>
    <div class="col-xs-9 pull-left">{{ membre.alterEgo }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Power</div>
    <div class="col-xs-9 pull-left">{{ membre.power }}</div>
    </div>
    <br>
    <button class="btn btn-default" (click)="onClick()">Edit</button>
  </div>`
})
export class SubmittedComponent {
  @Input()  membre: Membre;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false); }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
