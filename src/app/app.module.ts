import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserManagementComponent } from './components/user/user-management/user-management.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';
import { EduDetailsManagementComponent } from './components/edu_details/edu-details-management/edu-details-management.component';
import { SocialProfilesManagementComponent } from './components/socail_profiles/social-profiles-management/social-profiles-management.component';
import { XDocsManagementComponent } from './components/x_docs/x-docs-management/x-docs-management.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserManagementComponent,
    HomeComponent,
    LoginPageComponent,
    LoginRegisterComponent,
    EduDetailsManagementComponent,
    SocialProfilesManagementComponent,
    XDocsManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot([]),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


