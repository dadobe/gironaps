import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const THEME_KEY = 'selected-app-theme';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode: any;

  constructor(private _storage: Storage) { }

  checkDarkmode(dark){

    this.darkMode = dark;
    if(dark){
      document.body.classList.add('dark');
    }else {
      document.body.classList.remove('dark');
    }
    this._storage.set(THEME_KEY, dark);
    }
  }