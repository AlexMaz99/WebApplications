import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { FirestoreService } from './firestore.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;
  readonly authState$: Observable<User | null> = this.fireAuth.authState;
  user: User;

  constructor(public router: Router, public fireAuth: AngularFireAuth, private fireStore: FirestoreService) {
    this.userData = fireAuth.authState;
    fireAuth.authState.subscribe(auth => {
      if (auth) {
        console.log ('Zalogowano ' + auth.email);
      } else {
        console.log ('Nie zalogowano');
      }
    });
   }
   getUser(): User | null {
     return this.fireAuth.auth.currentUser;
   }
  isLoggedIn(): boolean {
    return this.getUser() != null;
  }
  isAdmin(): boolean {
    return this.getUser() != null && this.getUser().email === 'your_email';
  }
  SignIn(email, password) {
    return this.fireAuth.auth
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => { this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['courses']))
      .catch(err => {
        window.alert('Something went wrong: ' + err.message);
      }); });
  }
  SignUp(email, password) {
    return this.fireAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => this.router.navigate(['courses']))
    .catch(err => {
      window.alert('Something went wrong: ' + err.message);
    });
  }
  SignOut() {
    return this.fireAuth.auth
    .signOut()
    .then(() => this.router.navigate(['sign']));
  }
}
