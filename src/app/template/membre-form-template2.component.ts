/* tslint:disable: member-ordering forin */
import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Membre } from '../members/membres';

@Component({
  selector: 'membre-form-template2',
  templateUrl: './membre-form-template2.component.html'
})
export class MembreFormTemplate2Component implements AfterViewChecked {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  membre = new Membre(42, '', '','','', '', '','','', '', 12,true,true, true, true,true,true, true, true,true,true, true, '','','');

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
    this.membre = new Membre(42, '', '','','', '', '','','', '', 12,true,true, true, true,true,true, true, true,true,true, true, '','','');

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  membreForm: NgForm;
  @ViewChild('membreForm') currentForm: NgForm;

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.membreForm) { return; }
    this.membreForm = this.currentForm;
    if (this.membreForm) {
      this.membreForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.membreForm) { return; }
    const form = this.membreForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'power': '',
    'prenom': ''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'prenom': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
