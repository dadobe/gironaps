import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';

import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  products: Observable<any>;
  cartItemCount: BehaviorSubject<number> = this._cartService.getCartItemCount();

  public itemList: any[];
  public itemListBackup: any[];
  searchActive = false;
  searchResults = [];

  constructor(
    private _auth: AuthService, 
    private _productServive: ProductService,
    private _cartService: CartService,
    private _modalController: ModalController,
    private _afstore : AngularFirestore
    ) {}

    ngOnInit() {
      /* to load all the products on initiating the app */
      this.products = this._productServive.getAllProducts();
    }

    async openCart(){
      const modal = await this._modalController.create({
        component: CartModalPage,
        cssClass: 'cart-modal'
      });
      modal.present();

    }

    //Implementation of Search function  in the E-SHOP
    async initializedItems(): Promise<any> {
      const itemList = await this._afstore.collection('products')
      .valueChanges()
      .pipe(first())
      .toPromise();

      this.itemListBackup = itemList;
      return itemList;
    }

    async filterList(evt) {
      this.itemList = await this.initializedItems();
      const searchTerm = evt.srcElement.value;
    
      if (!searchTerm) {
        this.searchActive = false;
        this.searchResults = [];
      }
      this.searchActive = true;
      this.itemList = this.itemList.filter(currentItem => {
        if (currentItem.itemName && searchTerm) {
          return (currentItem.itemName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }
      });
    }
}
