import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService, User } from '../services/auth.service';

// Import for taking & loading images
import { Plugins, CameraResultType } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
const { Camera } = Plugins;

// Import for enable DarkMode
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  user: User = null;  // from the INTERFACE created in auth.service.ts
  dummyAvatar = '';

  //for darkmode
  darkMode: boolean = false;

  constructor(
    private _route: Router,
    private _afAuth: AngularFireAuth,
    private _authService: AuthService,
    private _loading: LoadingController,
    private _darkModeService: DarkModeService
    ) {
    
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkMode = prefersDark.matches;

      //Event Listener
      prefersDark.addEventListener(
        'change',
        mediaQuery => {
          console.log('CHANGE: ', mediaQuery.matches);
          this.darkMode = mediaQuery.matches;
          document.body.classList.toggle('dark', this.darkMode);
        });

    }

  ngOnInit() {

    //Sets the display name and email on the profile (TAB3), when no images have been loaded (at first time) a dummy image is loaded
    this._authService.getUserData().subscribe(user => {
      this.user = user;
      if (!this.user.photoURL) {
      const name = user.displayName.split(' ').join('+')
      this.dummyAvatar = '/assets/images/dummy.jpeg';
      }
      });
  }

  async signOut(){
    await this._afAuth.signOut();
    this._route.navigate(["/"]);
  }

  async changeAvatar(){
    //todo
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      });

    const loading = await this._loading.create();

    await loading.present();
    this._authService.uploadAvatar(image.base64String).subscribe((res) => {
    loading.dismiss();
    });
  }

  toogleDarkmode(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }

}
