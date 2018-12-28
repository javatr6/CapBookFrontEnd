import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserfeedComponent } from './userfeed/userfeed.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupsComponent } from './groups/groups.component';
import { OnlineComponent } from './online/online.component';
import { RequestComponent } from './request/request.component';
import { StatusupdateComponent } from './statusupdate/statusupdate.component';
import { StatusnwallComponent } from './statusnwall/statusnwall.component';
import { MapsComponent } from './maps/maps.component';
import { LikeComponent } from './like/like.component';
import { CommentService } from '../api/comment.service';
import { ProfilewallComponent } from './profile/profilewall/profilewall.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { FeedflowComponent } from './feedflow/feedflow.component';

@NgModule({
  declarations: [
    AppComponent,
    UserfeedComponent,
    HomepageComponent,
    MessagesComponent,
    SettingsComponent,
    ProfileComponent,
    GroupsComponent,
    OnlineComponent,
    RequestComponent,
    StatusupdateComponent,
    StatusnwallComponent,
    MapsComponent,
    LikeComponent,
    ProfilewallComponent,
    BirthdaysComponent,
    FeedflowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent },
      { path: 'userfeed', component: UserfeedComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'profilewall', component: ProfilewallComponent },
      { path: 'birthdays', component: BirthdaysComponent }
    ])
  ],
  providers: [CommentService],
  bootstrap: [
    AppComponent,
    HomepageComponent
  ]
})
export class AppModule { }
