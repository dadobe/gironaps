import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';

import { AngularFireFunctions } from '@angular/fire/functions';

//import { auth } from 'firebase/app';
import 'firebase/auth';
 
import { firebase } from '@firebase/app'
import '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _db: AngularFirestore, 
    private _afAuth: AngularFireAuth, 
    private _storage: AngularFireStorage,
    private _functions: AngularFireFunctions) { }

  getAllProducts() {
    return this._db.collection('products')
    .valueChanges({idField: 'id'});
  }

  getOneProduct(id) {
    return this._db.doc(`products/${id}`).valueChanges();
  }
    
/*   deleteProduct(id) {
    this.db.doc(`products/${id}`).delete();
    this.storage.ref(`products/${id}`).delete().subscribe(res => {});
  } */

  startPaymentIntent(amount, items){
    const callable = this._functions.httpsCallable('startPaymentIntent'); // Calls function startPaymentIntent from Firebase
    const obs = callable( { 
        userId: firebase.auth().currentUser.uid,
        amount,
        items
      }
    );
    return obs;
  }

  getCustomerOrders(){
    const callable = this._functions.httpsCallable('getCustomerOrders'); // Calls function getCustomerOrders from Firebase
    const obs = callable({userId: firebase.auth().currentUser.uid});
    return obs;
  }

  //Return form database the document paymentIntentId
  getOrderData(paymentIntentId){
    return this._db.doc(`orders/${paymentIntentId}`).valueChanges();
  }
}
