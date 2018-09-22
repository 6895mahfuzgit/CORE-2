import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';



import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { ListsComponent } from '../../lists/lists.component';
import { MemberListComponent } from '../../members/member-list/member-list.component';
import { MessagesComponent } from '../../messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guard/auth.guard';
import { MemberCardComponent } from '../../members/member-card/member-card.component';
import { JwtHelper } from 'angular2-jwt';
import { MemberDetailComponent } from '../../members/member-detail/member-detail.component';

import { MemberDetailsResolver } from './_resolver/member-details.resolver';
import { MembersListResolver } from './_resolver/members-list.resolver';






@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    MemberListComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TabsModule.forRoot()

  ],
  providers: [
    AuthService,
    AlertifyService,
    UserService,
    AuthGuard,
    MemberDetailsResolver,
    MembersListResolver,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
