import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
/** register component*/
export class RegisterComponent {


  @Output() cancelRegister = new EventEmitter()


  model: any = {};

  /** register ctor */
  constructor(private auth: AuthService) {

  }




  register() {


    this.auth.register(this.model).subscribe(() => {

      console.log('Succefully registered');
    }, error => {
      console.log(error);

      });

    
  }

  cancle() {
    this.cancelRegister.emit(false);
  }






}
