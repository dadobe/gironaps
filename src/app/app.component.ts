import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(

  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.checkDarkmode();
  }

  // Method to toggle between DARK and LIGHT mode
  checkDarkmode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark.matches);
    if (prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }
}
