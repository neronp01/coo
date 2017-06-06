import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';


email = 'pascal@gmail.com';
password = '1234';

  title = 'app works!';

  tiles = [
    {text: 'One', cols: 2, rows: 6, color: '#ffffff'},
    {text: 'Two', cols: 2, rows: 4, color: '#ffffff'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Four', cols: 2, rows: 1, color: '#ffffff'},
  ];

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
     this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = afAuth.authState;
  }

 login(email,password) {

 firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  console.log(email);
  var errorCode = error.name;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}
test(email, password){
  console.log(email);
}
logout() {
    this.afAuth.auth.signOut();
}



Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
}

}
