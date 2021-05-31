import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
  private cartItems = new BehaviorSubject([]);
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

getCart() {
  return this.cartItems.asObservable();
}

getCartItemCount() {
  return this.cartItemCount;
}

addProduct(product) {
  let added = false;
  for (let p of this.cart) {
    if (p.id === product.id) {
      p.amount += 1;
      added = true;
      break;
    }
  }
  if (!added) {
    product.amount = 1;
    this.cart.push(product);
  }
  this.cartItems.next(this.cart);
  this.cartItemCount.next(this.cartItemCount.value + 1);
}

//In here we make sure that it's not possible to decrease the amount of product if already reaches zero
decreaseProduct(product) {
  for (let [index, p] of this.cart.entries()) {
    if (p.id === product.id) {
      p.amount -= 1;
      if (p.amount == 0) {
        this.cart.splice(index, 1);
      }
    }
  }
  this.cartItems.next(this.cart);
  this.cartItemCount.next(this.cartItemCount.value - 1);
}

removeProduct(product) {
  for (let [index, p] of this.cart.entries()) {
    if (p.id === product.id) {
      this.cartItemCount.next(this.cartItemCount.value - p.amount);
      this.cart.splice(index, 1);
    }
  }
  this.cartItems.next(this.cart);
}

//Helper function to find out th specific item count for an object
getItemCount(id) {
  for (let [index, p] of this.cart.entries()) {
    if (p.id === id) {
      return p.amount;
    }
  }
  return 0;
}
}
