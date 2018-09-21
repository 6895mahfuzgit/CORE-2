import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { User } from '../_models/user';



const httpOptions = {


  headers: new HttpHeaders({

    'Authorization': 'Bearer ' + localStorage.getItem('token')

  })
}




@Injectable()
export class UserService {

  baseUrl = environment.apiUrl + 'Users/';


  //allusers
  //getuserbyid/{id}

  constructor(private http: HttpClient) {

  }



  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'allusers', httpOptions);
  }


  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'getuserbyid/' + id, httpOptions);
  }


}
