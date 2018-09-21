import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { User } from '../../src/app/_models/user';
import { UserService } from '../../src/app/_services/user.service';
import { AlertifyService } from '../../src/app/_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})


export class MemberListComponent implements OnInit {



  users: User[];

  constructor(private userService: UserService, private aletify: AlertifyService) {

  }


  ngOnInit() {
    this.loadUsers();
  }


  loadUsers() {

    this.userService.getAllUsers().subscribe((users: User[]) => {

      this.users = users;

    }, error => {

      this.aletify.error(error);

    });

  }






}
