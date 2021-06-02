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

  //Viewchild in order to use the cardElement in the HTML page of the checkout
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

    //Card element which captures the input
    this.card = elements.create('card');
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('card changes: ', ({error}) => {
      console.log('error:', error);
      this.cardErrors = error && error.message;
    });
 
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.itemPrice * j.amount, 0);
  }
 
  async buyNow(){

    const stripeData = {
      payment_method_data: {
        billing_details: {
          name: this.dataForm.get('name').value,
          address: {
            line1: this.dataForm.get('street').value,
            city: this.dataForm.get('city').value,
            postal_code: this.dataForm.get('zip').value,
            country: this.dataForm.get('country').value
          },
          email: this._authService.getEmail()
        }
      },
      receipt_email: this._authService.getEmail()
    };

    //mapping to get from our cart all the items with id and amount
    const items = this.cart.map(item => {
      return {
        id: item.id,
        amount: item.amount
      };
    })

    //Loading animation after purchase order
    const loading = await this._loadingCtrl.create();
    await loading.present();

    // the * 100 is to get the right number in stripe
    this._productService.startPaymentIntent(this.getTotal() * 100,items)
    .subscribe(async paymentIntent => {
    console.log('my payment intent: ', paymentIntent);
    const secret = paymentIntent.client_secret;

    // This allows us to send the secret which identifies the payment intent, the credit card info and stripe data
    const {result, err} = await this.stripe.handleCardPayment(
      secret,
      this.card,
      stripeData
    );

    console.log('Result of handleCardPayment; ', result);

    //error message in case payment could not be Fulfilled, toaster appears for 3 seconds
    if(err){
      await loading.dismiss();
      const toast = await this._toastCtrl.create({
        message: `Could not process your payment, please try again later`,
        duration: 3000
      });
      await toast.present();
    } else {
      await loading.dismiss();
      const toast = await this._toastCtrl.create({
        message: `Could not process your payment, please try again later`,
        duration: 3000
      });
      await toast.present();
      this._router.navigateByUrl('/tabs/tab2');
    }
    }, async err => {
      await loading.dismiss();
      const toast = await this._toastCtrl.create({
        message: `Could not process your payment, please try again later`,
        duration: 3000
      });
      await toast.present();
    });
  }

}