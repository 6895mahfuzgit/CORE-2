import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "../../member-list/member-list.component";
import { ListsComponent } from "../../lists/lists.component";
import { RegisterComponent } from "./register/register.component";
import { MessagesComponent } from "../../messages/messages.component";


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'members', component: MemberListComponent },
  { path: '**', redirectTo: 'home', pathMatch:'full' },
];
