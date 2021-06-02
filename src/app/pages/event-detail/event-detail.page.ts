import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/types';

//Import AlertController
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  eventDetail: Observable<Event>;

  constructor(
    eventService: EventService,
    activatedRoute: ActivatedRoute,
    private _emailComposer: EmailComposer,
    private _angularFireStore: AngularFirestore,
    private _alertCtrl: AlertController
/*     ,
    private _socialShare: SocialSharing */
    ) { 

    //we use activatedRoute to GET the specific ID we are looking for (passed as parameter)
    const eventID = activatedRoute.snapshot.params["eventID"];
    console.log(eventID);

    this.eventDetail = eventService.getEvent(eventID);
    }

  ngOnInit() {
  }

  sendInquiry(){
  
    this._emailComposer.open({
       to:'dadobe20@gmail.com',
       subject: 'Event Detail',
       body: 'I am interested in getting more information about this event detail',
       isHtml: true
     })
   }
 
   async presentAlert() {
    const alert = await this._alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Interested in this event?',
      subHeader: 'Events',
      message: 'Please send us an email to gironaps@gmail.com',
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  /*  share(){
     this.eventDetail.subscribe( (event) => {
       this._socialShare.share("Look what I found on this app called GPS", event.title, "", event.imageURL);
     });
   } */

}
