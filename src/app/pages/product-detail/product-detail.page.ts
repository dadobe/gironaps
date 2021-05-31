import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  id = null;
  product = null;
  amount = 0;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._productService.getOneProduct(this.id).subscribe(res => {
      console.log('my products:', res);
      this.product = res;
      this.product.id = this.id;
      this.amount = this._cartService.getItemCount(this.id);
    });
    // Update our cart
    this._cartService.getCart().subscribe(cart => {
      console.log('cart:', cart);
      this.amount = this._cartService.getItemCount(this.id);
    })
  }

  addItemToCart(){
    this._cartService.addProduct(this.product);
  }

  removeItemFromCart(){
    this._cartService.decreaseProduct(this.product);
  }

  emptyCart(){
    this._cartService.removeProduct(this.product);
  }

}
