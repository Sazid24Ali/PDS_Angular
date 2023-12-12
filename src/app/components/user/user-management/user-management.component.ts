import { Component } from '@angular/core';
import { UserStateService } from '../../../services/user-state.service';
import { Router } from '@angular/router';
import { UserEntity } from '../../../entites/user/user-entity';
import { UserServicesService } from '../../../services/user/user-services.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  userId: any;
  userData !: UserEntity;
  profilePicture : string | null = null;

  constructor(
    private userService : UserServicesService,
    private userIDService: UserStateService,
    private router: Router) {}

  getData(){

    this.userService.retriveInfo(this.userId).subscribe(
      (response) => {
        console.log(response);
        this.userData = response.userData;
        this.userData.dateOfBirth = new Date(this.userData.dateOfBirth).toDateString() ;
        if(response.userData.profilePicture !== ''){
          // console.log("ProilePic : "+response.userData.profilePicture);
          this.profilePicture = "data:image/*;base64,"+response.userData.profilePicture;        
        }
        
        
      },
      (error) => {
        if (error.error && error.error.msg) {
          // If the error response contains a "msg" property
          // this.submit_msg = error.error.msg;
          console.log("UserData Errors : "+error.error.msg);
        }
         else {
          // If the error response doesn't contain a "msg" property
          // this.submit_msg = 'An error occurred';
          console.log("UserData Errors : Don't Know")
        }
      }
    );

  }


  ngOnInit() {
    // Subscribe to changes in the userId
    this.userIDService.getUserId().subscribe(userId => {
      this.userId = userId;
      //Now using this userId get all the data and display on the web page
      if (this.userId === null){
        //console.log("Go to login page ");
        this.router.navigate(['/login']);
        return;
      }
      // console.log("THe userid is : "+this.userId);
    });

    this.getData();

  }
}
