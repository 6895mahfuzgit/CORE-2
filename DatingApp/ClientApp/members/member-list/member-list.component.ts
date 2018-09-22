import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { User } from '../../src/app/_models/user';
import { UserService } from '../../src/app/_services/user.service';
import { AlertifyService } from '../../src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})


export class MemberListComponent implements OnInit {



  users: User[];

  constructor(private userService: UserService, private aletify: AlertifyService,private route:ActivatedRoute) {

  }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];

    });
  }

  







}
