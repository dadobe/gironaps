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
    private _emailComposer: EmailComposer
    ) 
    { 
    //we use activatedRoute to GET the specific ID we are looking for (passed as parameter)
    const biketourID = activatedRoute.snapshot.params["biketourID"];
    console.log(biketourID);

    this.biketourDetail = biketourService.getBiketour(biketourID);
    }

  ngOnInit() {
  }

  sendInquiry(){
  
    let email = {
      to:'dadobe20@gmail.com',
      subject: 'Biketours Detail',
      body: 'I am interested in getting more information about this biketour detail',
      isHtml: true
    };
    
    this._emailComposer.open(email);
   }
}
