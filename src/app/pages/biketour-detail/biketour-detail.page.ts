import { BiketourService } from './../../services/biketour.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Biketours } from '../../types';


//Import FireStore & FireAuth module
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';
//require('firebase/auth');

//Import email component
import { EmailComposer } from '@ionic-native/email-composer/ngx';

//Import AlertController
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-biketour-detail',
  templateUrl: './biketour-detail.page.html',
  styleUrls: ['./biketour-detail.page.scss'],
})
export class BiketourDetailPage implements OnInit {

   biketourDetail: Observable<Biketours>;

  constructor(
    activatedRoute: ActivatedRoute,
    biketourService: BiketourService,
    private _angularFireStore: AngularFirestore,
    private _angularFireAuth: AngularFireAuth,
    //Email composer injection
    private _emailComposer: EmailComposer,
    //AlertController
    private _alertCtrl: AlertController
    ) 
    { 
    //we use activatedRoute to GET the specific ID we are looking for (passed as parameter)
    const biketourID = activatedRoute.snapshot.params["biketourID"];
    console.log(biketourID);

    this.biketourDetail = biketourService.getBiketour(biketourID);
    }

  ngOnInit() {
  }

  //We user the AlertController instead of EmailComposer to show message output to cusotmer
  //as the emialcomposer does not work in CAPACITOR as well as in CORDOVA
  sendInquiry(){
    this._emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //We can send email
      }
    });
  
    let email = {
      to:'dadobe20@gmail.com',
      subject: 'Biketours Detail',
      body: 'I am interested in getting more information about this biketour detail',
      isHtml: true
    };
    console.log('email:', email);
    this._emailComposer.open(email);
    console.log('email:', email);
   }

   async presentAlert() {
    const alert = await this._alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Are you interested in this activity?',
      subHeader: 'Bike Tours',
      message: 'Please send us an email to gironaps@gmail.com',
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
