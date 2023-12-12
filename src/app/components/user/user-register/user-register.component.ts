import { Router } from '@angular/router';
import { LoginEntity } from '../../../entites/login/login-entity';
import { UserServicesService } from '../../../services/user/user-services.service';
import { UserEntity } from './../../../entites/user/user-entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {

  user: UserEntity = new UserEntity('', '', '',this.getCurrentDate()); // Initialize a new user object
  
  
  valuesNotEntered: boolean | undefined;
  selectedFileName: string = '';
  profilePic: File | null = null;
  submit_response:boolean|undefined;
  submit_msg:string = "Unknown State";

  constructor(private userService : UserServicesService,private router:Router){ }

  ngOnInit(): void {    
   
  }

  // setInitialDate(): void {
  //   const today = new Date();
  //   const month = (today.getMonth() + 1).toString().padStart(2, '0');
  //   const day = today.getDate().toString().padStart(2, '0');
  //   this.user.dateOfBirth = today.getFullYear()+"-"+month+"-"+day;;
  // }

  getCurrentDate(): string {
    //To Restrict The Calendar 
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return today.getFullYear()+"-"+month+"-"+day;
  }

  redirectToLoginRegisteration(userId : number){
    this.router.navigate(['/login_register'], { queryParams: { userID: userId } });
  }

  sendUserData(){

    this.userService.register(this.user,this.profilePic).subscribe(
      (response) => {
        const userId : number = response.userId;
        this.submit_msg = response.msg ;
        this.submit_response = true;
        
        this.redirectToLoginRegisteration(userId);
        // Handle the successful registration response
        // console.log('The Ouput', response);
        // console.log("UserId"+ userId)

        // Optionally, navigate to a different page or display a success message
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
  }

  onFileSelected(event: any): void {
      const file = event.target.files[0];
      this.selectedFileName = file.name;
      this.profilePic = file;
      this.selectedFileName = file.name;

      // console.log("The THe Picture : "+this.profilePic);
  }

  onSubmit() {
    // if(this.profilePic){
    //   console.log("Got the Picture")
    // }
    if(this.user.firstName === '' || this.user.lastName === '' || this.user.email == '' || this.user.dateOfBirth == '' ){
      this.valuesNotEntered = true;
      return;
    }
    //Reset
    this.valuesNotEntered = false;

    //Data Beign Send to Backend via service
    this.sendUserData();
  }
  
}