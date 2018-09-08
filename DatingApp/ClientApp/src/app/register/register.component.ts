import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

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
  constructor(private auth: AuthService, private alertifyService: AlertifyService ) {

  }




  register() {


    this.auth.register(this.model).subscribe(() => {

      this.alertifyService.success('Succefully registered');
      //console.log('Succefully registered');
    }, error => {
      this.alertifyService.error(error);
      //console.log(error);

      });

    
  }

  cancle() {
    this.cancelRegister.emit(false);
    this.alertifyService.warning('Registration is canclled ');
  }






}
