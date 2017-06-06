import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MaterialModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';

import { ReactiveModule } from './reactive/reactive.module';
import { MembreFormTemplateModule } from './template/membre-form-template.module';

export const firebaseConfig = {
  apiKey: "AIzaSyDfCg1Vh4mhJxKpTH3DUG1d94REjPbtR7A",
    authDomain: "coodev-2c209.firebaseapp.com",
    databaseURL: "https://coodev-2c209.firebaseio.com",
    projectId: "coodev-2c209",
    storageBucket: "coodev-2c209.appspot.com",
    messagingSenderId: "1006673087736"
};

@NgModule({
  declarations: [

    AppComponent,

    LoginComponent,

    EmailComponent,

    SignupComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, MdButtonModule, MdCheckboxModule, MdIconModule, MaterialModule, ReactiveFormsModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase,'cooDev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveModule,
    MembreFormTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
