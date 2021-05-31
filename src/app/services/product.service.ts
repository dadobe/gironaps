import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageReference, AngularFireStorage } from '@angular/fire/storage';

/* import { auth } from 'firebase/app';
import 'firebase/auth';
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _db: AngularFirestore, 
    private _afAuth: AngularFireAuth, 
    private _storage: AngularFireStorage) { }

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
}
