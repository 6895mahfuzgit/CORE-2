import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { environment } from '../../environments/environment';





@Injectable()
export class AuthService {

  baseUrl = environment.apiUrl + 'Auth/';
  
  userToken: any;
  decodeToken: any;
  jwtHelper: JwtHelper = new JwtHelper();

  

  constructor(private http: HttpClient) {

  }


  login(model: any) {


    return this.http.post(this.baseUrl + 'login', model).pipe(

      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.tokenString);


          this.decodeToken = this.jwtHelper.decodeToken(user.tokenString);
          console.log(this.decodeToken);
          this.userToken = user.tokenString;
        }
      }
      ), catchError(this.errorHandlar)
    );
  }


  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model).pipe(catchError(this.errorHandlar));
  }



  loggedIn() {

    return tokenNotExpired('token');
  }








  errorHandlar(error: any) {

    const appliactionError = error.header.get('Application-Error');

    if (appliactionError) {
      return Observable.throw(appliactionError);
    }


    const serverError = error.json();
    let modelStateError = '';

    if (serverError) {
      for (let key in serverError) {
        if (serverError[key]) {
          modelStateError += serverError[key] + '\n';
        }
      }
    }
    throw (modelStateError || 'Server Error');
  }



}
