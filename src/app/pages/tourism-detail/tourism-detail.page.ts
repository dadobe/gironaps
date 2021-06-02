import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
//import { SocialSharing } from '@ionic-native/social-sharing';
import { Observable } from 'rxjs';
import { TourismService } from 'src/app/services/tourism.service';
import { Tourism } from 'src/app/types';

//Import AlertController
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tourism-detail',
  templateUrl: './tourism-detail.page.html',
  styleUrls: ['./tourism-detail.page.scss'],
})
export class TourismDetailPage implements OnInit {

  tourismDetail: Observable<Tourism>;

  constructor(
    private _emailComposer: EmailComposer,
    tourismService: TourismService,
    activatedRoute: ActivatedRoute,
    private _angularFireStore: AngularFirestore,
    private _alertCtrl: AlertController
    //private _socialShare: SocialSharing
  ) { 

    //we use activatedRoute to GET the specific ID of the TOURISM SERVICE we are looking for (passed as parameter)
    const tourismID = activatedRoute.snapshot.params["tourismID"];
    console.log(tourismID);

    this.tourismDetail = tourismService.getTourism(tourismID);

  }

  ngOnInit() {
  }

/*   share(){
    this.tourismDetail.subscribe( (tourism) => {
      this._socialShare.share("Look what I found on this app called GPS", tourism.title, "", tourism.imageURL);
    });
  } */

  async presentAlert() {
    const alert = await this._alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Interested in making tourism in here?',
      subHeader: 'Tourism',
      message: 'Please send us an email to gironaps@gmail.com',
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
