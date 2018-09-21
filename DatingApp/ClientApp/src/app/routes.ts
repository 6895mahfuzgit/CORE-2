import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

import { ListsComponent } from "../../lists/lists.component";
import { RegisterComponent } from "./register/register.component";
import { MessagesComponent } from "../../messages/messages.component";
import { AuthGuard } from "./_guard/auth.guard";
import { MemberListComponent } from "../../members/member-list/member-list.component";


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'members', component: MemberListComponent },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
