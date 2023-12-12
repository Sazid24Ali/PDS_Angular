import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from '../../../services/login/login-services.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  invalidCredentials : boolean | undefined;
  noData : boolean|undefined;

  constructor(private loginService: LoginServicesService,private router: Router) {}

  onSubmit() {
    this.username = this.username.trim();
    this.password.trim();
    if(this.username === '' || this.password === ''){
      this.noData = true;
      this.invalidCredentials = false;   // Resetting the error
      return;
    }
    
    this.noData= false;

    const loginData = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(this.username,this.password).subscribe(
      (response) => {
        // Handle successful login response
        // console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
        this.invalidCredentials = true;
        //this.router.navigate(['/'])
      }      
    );
    
  }
}