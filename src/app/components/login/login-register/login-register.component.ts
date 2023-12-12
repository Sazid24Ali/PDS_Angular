import { ActivatedRoute, Router } from '@angular/router';
import { LoginServicesService } from './../../../services/login/login-services.service';
import { Component } from '@angular/core';
import { LoginEntity } from '../../../entites/login/login-entity';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent {
  loginCreds: LoginEntity = new LoginEntity('', '');
  passwordMismatch: boolean | undefined;
  retypePassword: any;
  valuesNotEntered: boolean | undefined;
  userID!: number; /// !: means Not null
  submit_response: boolean | undefined;
  submit_msg: string = 'Unknown State';
  countdown = 5;
  success : boolean | undefined;

  constructor(
    private loginService: LoginServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userID = params['userID'];
    });
  }

  redirectToLogin() {
    var form = document.getElementById("LoginForm") as HTMLFormElement;
    form.reset();  /// To Clear The Data On the Form 
    const intervalId = setInterval(() => {
      this.submit_msg = 'Redirecting To Login Page in  : ' + this.countdown;
      this.submit_response = true;
      this.countdown--;

      if (this.countdown === 0) {
        clearInterval(intervalId);
        this.router.navigate(['/login']);
      }
    }, 1000);
  }

  sendLoginData() {
    this.loginService.register(this.loginCreds, this.userID).subscribe(
      (response) => {
        // this.submit_msg = response.msg;
        // this.submit_response = true;
        // console.log(response);
        this.success = true;
        this.redirectToLogin();
      },
      (error) => {
        if (error.error && error.error.msg) {
          // If the error response contains a "msg" property
          this.submit_msg = error.error.msg;
        } else {
          // If the error response doesn't contain a "msg" property
          this.submit_msg = 'An error occurred';
        }
        this.submit_response = true;
        console.log('The Ouput', error.msg);
      }
    );
    return;
  }

  onSubmit() {
    // if(this.profilePic){
    //   console.log("Got the Picture")
    // }
    if (this.loginCreds.username === '' || this.loginCreds.password === '') {
      this.valuesNotEntered = true;
      return;
    }
    //Reset
    this.valuesNotEntered = false;

    if (this.loginCreds.password !== this.retypePassword) {
      this.passwordMismatch = true;
      return;
    }
    // Reset the error message if passwords match
    this.passwordMismatch = false;

    this.sendLoginData();
  }
}
