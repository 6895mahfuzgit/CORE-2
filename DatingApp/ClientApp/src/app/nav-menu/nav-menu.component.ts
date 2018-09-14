import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  model: any = {};

  constructor(private authSerices: AuthService, private alertifyService: AlertifyService,private router:Router) {

  }

  ngOnInit() { }


  login() {

    this.authSerices.login(this.model).subscribe(next => {
      this.alertifyService.success("Logged in succcessfully");
      //console.log("loggged in succcessfully");
    }
      , error => {
        this.alertifyService.error(error); //console.log(error);
      },() => {
        this.router.navigate(['/members']);
      });

  }


  loggedIn() {
    return this.authSerices.loggedIn();

  }


  logout() {

    localStorage.removeItem('token');
    this.alertifyService.message("Logout Successfully");


    this.router.navigate(['/home']);
    //console.log("Logout");

  }


}
