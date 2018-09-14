import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router, private alertifySesrvice: AlertifyService) {
  }


  canActivate(): boolean {

    if (this.authService.loggedIn()) {
      return true;
    }


    this.alertifySesrvice.error('You Can Not Pass@#$@#');
    this.router.navigate(['/home']);
    return false;
  
  }



}
