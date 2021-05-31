import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

//Variable for using STRIPE (payments)
declare var Stripe;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  dataForm: FormGroup;
  cart = [];
  
  //Variables for using STRIPE (payments method)
  stripe;
  card;
  cardErrors;

  @ViewChild('cardElement', {static: true}) cardElement: ElementRef;

  constructor(
    private _loadingCtrl: LoadingController,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _productService: ProductService,
    private _toastCtrl: ToastController,
    private _cartService: CartService,
    private _router: Router
  ) {}
 
  ngOnInit() {
    this._cartService.getCart().subscribe(res => {
      this.cart = res;
    });
 
    this.dataForm = this._fb.group({
      name: ['Daniel Domínguez', Validators.required],
      zip: ['17004', Validators.required],
      street: ['Avenida Girona', Validators.required],
      city: ['Girona', Validators.required],
      country: ['ES', Validators.required]
    });

    //Stripe Settings, passing the stripe_key which is allocated in the environment file.
    this.stripe = Stripe(environment.stripe_key);
    const elements = this.stripe.elements();

    //Card element ehich captures the input
    this.card = elements.create('card');
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({error}) => {
      console.log('error:', error);
      this.cardErrors = error && error.message;
    });
 
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.itemPrice * j.amount, 0);
  }
 
  async buyNow() {
   
  }

}
