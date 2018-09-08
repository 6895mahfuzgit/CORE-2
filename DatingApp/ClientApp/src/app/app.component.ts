import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  jwtHelper: JwtHelper = new JwtHelper();
  title = 'app';


  constructor(private authSerices: AuthService) {

  } 


  ngOnInit(){


    const token = localStorage.getItem('token');
    this.authSerices.decodeToken = this.jwtHelper.decodeToken(token);
    

  }
}
