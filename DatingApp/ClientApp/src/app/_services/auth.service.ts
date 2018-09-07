import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AuthService {

  baseUrl = "http://localhost:15406/api/Auth/";
  userToken: any;

  constructor(private http: HttpClient) {

  }


  login(model: any) {


    return this.http.post(this.baseUrl + 'login', model).pipe(

      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.tokenString);
          this.userToken = user.tokenString;
        }
      }
      )
    );
  }


  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }



}
