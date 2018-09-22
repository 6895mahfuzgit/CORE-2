import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { User } from "../_models/user";
import { Observable } from "rxjs/Observable";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class MembersListResolver implements Resolve<User[]> {

  constructor(private userService: UserService, private router: Router,
    private alertify: AlertifyService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getAllUsers().pipe(
      catchError(error => {

        this.alertify.error('Problem With Getting  Data');
        this.router.navigate(['/home']);
        return of(null);

      })

    );
  }
}
