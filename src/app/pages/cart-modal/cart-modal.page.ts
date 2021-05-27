import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart = [];

  constructor(
    private _cartService: CartService,
    private _modalController: ModalController,
    private _router: Router
  ) { }

  ngOnInit() {
    this._cartService.getCart().subscribe(res =>{
      this.cart = res;
    })
  }

  increaseCartItem(product){
    this._cartService.addProduct(product);
  }

  decreaseCartItem(product){
    this._cartService.decreaseProduct(product);

  }

  emptyCartItem(product){
    this._cartService.removeProduct(product);
  }

  getTotal(){
    return this.cart.reduce( ( i, j ) => i + j.itemPrice * j.amount, 0);
  }

  close(){
    this._modalController.dismiss();
  }

  checkout(){
    this._modalController.dismiss();
    this._router.navigateByUrl('/checkout');
  }
}
