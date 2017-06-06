/* tslint:disable: membre-ordering */
import { Component } from '@angular/core';


import { Membre } from '../members/membres';

@Component({
  selector: 'membre-form-template1',
  templateUrl: './membre-form-template1.component.html'
})
export class MembreFormTemplate1Component {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  membre = new Membre(18, 'Dr. WhatIsHisWayTooLongName', this.powers[0], 'Dr. What');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  addMembre() {
    this.membre = new Membre(42, '', '','');

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
