import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  model: any = {};

  constructor(private authSerices: AuthService) {

  }

  ngOnInit() { }


  login() {

    this.authSerices.login(this.model).subscribe(next => { console.log("loggged in succcessfully"); }
      , error => { console.log("loggged in Failed"); });

  }


  loggedIn() {
    var user = localStorage.getItem('token');

    return !!user;

  }


  logout() {

    localStorage.removeItem('token');
    console.log("Logout");

  }


}
