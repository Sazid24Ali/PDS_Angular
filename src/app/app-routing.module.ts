import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:"full" },
  // {path:'login',redirectTo:'home'},
  {path:'login', component:LoginPageComponent},
  {path:'register', component:UserRegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'login_register',component:LoginRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
