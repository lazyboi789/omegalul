import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let userFromSession = sessionStorage.getItem('username');

    if (userFromSession == null) {
      this._router.navigateByUrl('login');
      return false;
    }
    else {
      return true;
    }

  }
}
