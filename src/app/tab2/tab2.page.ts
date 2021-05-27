import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  products: Observable<any>;
  cartItemCount: BehaviorSubject<number> = this._cartService.getCartItemCount();

  constructor(
    private _auth: AuthService, 
    private _productServive: ProductService,
    private _cartService: CartService,
    private _modalController: ModalController
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

}
