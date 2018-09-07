import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/** home component*/
export class HomeComponent implements OnInit {


  registerModel = false;
  values: any;

  /** home ctor */
  constructor(private http: HttpClient) {

  }


  regsiterToggle() {

    this.registerModel = true;

  }


  ngOnInit() {

  
  }

  

  cancelRegisterMethod(registerModel: boolean) {

    this.registerModel = registerModel;
  }




}
