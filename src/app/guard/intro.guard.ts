import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IntroPage } from '../pages/intro/intro.page';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(public rout: Router){}

  canActivate(): boolean {
    if(localStorage.getItem('intro') === 'true'){
      this.rout.navigate(['register'])
      return false;
      }
      return true;
    }
}
