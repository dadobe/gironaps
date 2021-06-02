import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports for AUTHENTICATION (login & register)
// > npm install firebase @angular/fire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

//Import needed for the payment with stripe / firebase
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';

//in this import we connect our app with Firebase
import { environment } from 'src/environments/environment';

//Import of HTTPClient module to interact with API
import { HttpClientModule } from '@angular/common/http';

//Import email composer for INQUIRY EMAILS in details pages
// 'npm install cordova-plugin-email-composer' & 'npm install @ionic-native/email-composer'
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { IonicNativePlugin } from '@ionic-native/core';

//Import for DarkMode theme
import { IonicStorageModule } from '@ionic/storage-angular';

//Import for the cart module
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';

//Import InAppBrowser needed for openInvoice() function
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

//Import social sharing option
// > 'npm install cordova-plugin-x-socialsharing' & 'npm install @ionic-native/social-sharing'
// install also related dependecy 'npm install @ionic-native/core'
//import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthGuardModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    CartModalPageModule,
    AngularFireFunctionsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: EmailComposer, useClass: IonicNativePlugin},
    { provide: REGION, useValue: 'us-central1'},
    InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
