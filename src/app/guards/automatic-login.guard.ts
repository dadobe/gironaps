import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutomaticLoginGuard implements CanActivate {

  constructor(
    private _route: Router,
    private _auth: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot
    ):Observable<boolean>
    {
      return this._auth.user.pipe(
        take(1),
        map(user => {
          console.log('user automatically logged:', user);
          if(!user){
            return true;
          } else {
            return false;
          }
        })
      );
  }


  
}
