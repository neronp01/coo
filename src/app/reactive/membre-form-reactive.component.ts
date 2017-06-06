/* tslint:disable: member-ordering forin */
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Membre } from '../members/membres';
import { forbiddenNameValidator } from '../members/forbidden-name.directive';

@Component({
  selector: 'membre-form-reactive3',
  templateUrl: './membre-form-reactive.component.html'
})
export class MembreFormReactiveComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  membre = new Membre(42, '', '','','', '', '','','', '', 12,true,true, true, true,true,true, true, true,true,true, true, '','','');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.membre = this.membreForm.value;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  addMembre() {
    this.membre = new Membre(42, '', '','','', '', '','','', '', 12,true,true, true, true,true,true, true, true,true,true, true, '','','');
    this.buildForm();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  membreForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.membreForm = this.fb.group({
      'name': [this.membre.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          forbiddenNameValidator(/bob/i)
        ]
      ],
      'alterEgo': [this.membre.alterEgo],
      'power':    [this.membre.power, Validators.required]
    });

    this.membreForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.membreForm) { return; }
    const form = this.membreForm;

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
