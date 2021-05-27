import { Injectable } from '@angular/core';

//For hanlde authorizations
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

//import * as firebase from 'firebase/app';
import { firebase } from '@firebase/app'
import '@firebase/auth';

// To upload data (images ofr example)
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';


//Interface for User
export interface User{
  uid: string;
  email: string;
  photoURL?: string;
  displayName: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;

  constructor(
    private _afAuth: AngularFireAuth,
    private _db: AngularFirestore, 
    private _navCtrl: NavController,
    private _storage: AngularFireStorage
    ) {
    this.user = this._afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this._db.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  signIn(credentials): Observable<any> {
    return from(this._afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        console.log('real user: ', user);
        if (user) {
          return this._db.doc(`users/${user.user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  /* signUp(credentials) {
    return this._afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
      console.log('after register: ', data);
      return this._db.doc(`users/${data.user.uid}`).set({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      });
    });
  } */

  //Method to regster as new user
  async signUp({email, password, fullname}): Promise<any> {
    const credential = await this._afAuth.createUserWithEmailAndPassword(
    email,
    password
    );
    return this.updateUserData(credential.user, fullname);
    }


  // Sets user data to firestore on login
  private updateUserData(user: User, name = null, image = null): Promise<any> {
    const userRef: AngularFirestoreDocument<User> = this._db.doc(`users/${user.uid}`);
    
    const data = {
    uid: user.uid,
    email: user.email,
    displayName: name,
    photoURL: image,
  };
  return userRef.set(data, { merge: true });
  }

  //Mehtod for sign out the application
  signOut() {
    this._afAuth.signOut().then(() => {
      this._navCtrl.navigateRoot('/');
    });
  }

  //Method to get the user ID
  getUserId(){
    return firebase.auth().currentUser.uid;
  }

  //Methos to get the user DATA
  getUserData(){
    return this._db.doc<User>(`users/${this.getUserId()}`).valueChanges();
  }

  //Method to load the image on the profile tab
  uploadAvatar(base64String) {

    const filePath = `${this.getUserId()}/avatar`;
    const fileRef = this._storage.ref(filePath);
    const task: AngularFireUploadTask = fileRef.putString(base64String,'base64', { contentType: 'image/png' });

    return from(task).pipe(
    switchMap(result => {
    // Upload Task finished, get URL to the image
    return fileRef.getDownloadURL();
    }),
    switchMap(photoURL => {
    // Set the URL to the user document
    const uploadPromise = this._db
    .doc(`users/${this.getUserId()}`)
    .set({ photoURL }, { merge: true });
    return from(uploadPromise);
    })
    )
  }
}