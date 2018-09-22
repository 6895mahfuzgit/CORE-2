import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

import { ListsComponent } from "../../lists/lists.component";
import { RegisterComponent } from "./register/register.component";
import { MessagesComponent } from "../../messages/messages.component";
import { AuthGuard } from "./_guard/auth.guard";
import { MemberListComponent } from "../../members/member-list/member-list.component";
import { MemberDetailComponent } from "../../members/member-detail/member-detail.component";
import { MemberDetailsResolver } from "./_resolver/member-details.resolver";
import { MembersListResolver } from "./_resolver/members-list.resolver";


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'members', component: MemberListComponent, resolve: { users: MembersListResolver} },
      { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailsResolver } },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
