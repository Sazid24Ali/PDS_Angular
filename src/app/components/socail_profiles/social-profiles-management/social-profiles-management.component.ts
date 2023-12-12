import { Component } from '@angular/core';
import { SocialProfilesServicesService } from '../../../services/social_profiles/social-profiles-services.service';
import { UserStateService } from '../../../services/user-state.service';
import { Router } from '@angular/router';
import { SocialProfilesEntity } from '../../../entites/social_profiles/social-profiles-entity';

@Component({
  selector: 'app-social-profiles-management',
  templateUrl: './social-profiles-management.component.html',
  styleUrl: './social-profiles-management.component.css'
})
export class SocialProfilesManagementComponent {
  userId: any;
  newSocialProfile : SocialProfilesEntity = new SocialProfilesEntity();
  isEditing: boolean = false;
  isDelete : boolean = false;
  showDelete : boolean = false;
  validData : boolean = true;
  showNewRow : boolean = false;
  ListsProfileData !: Array<SocialProfilesEntity> ;  

  constructor(
    private sProfileService : SocialProfilesServicesService ,
    private userIDService: UserStateService,
    private router: Router) {}


    getData(){
      console.log("Got till here");
      this.sProfileService.retriveInfo(this.userId).subscribe(
        (response) => {
          console.log("Data From component "+response);
          this.ListsProfileData =  response.sProfileData;
          console.log("SprofileData : "+this.ListsProfileData);
        },(error) => {
          if (error.error && error.error.msg) {
            this.ListsProfileData = [] ;
            // If the error response contains a "msg" property
            // this.submit_msg = error.error.msg;
            console.log("Social Profile Errors : "+error.error.msg);
          }
           else {
            // If the error response doesn't contain a "msg" property
            // this.submit_msg = 'An error occurred';
            console.log("Social Profile Errors : Don't Know")
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

    toggleEditMode(value:boolean = false): void {
      this.isEditing = value;
      this.showDelete = value;
    }

    insertData(){
      
      //After Inserting the data
      // this.getData();
      return;
    }

    saveData(){
      this.insertData();
      this.toggleEditMode();
    }

    deleteRow(toDelete:SocialProfilesEntity){
      toDelete.isDeleted = !toDelete.isDeleted;
      const theIndexOfRow = this.ListsProfileData.findIndex((profile => profile.socialPlatformName === toDelete.socialPlatformName));
      console.log("Present Data "+theIndexOfRow);
      // this.ListsProfileData.splice(theIndexOfRow,1);
      this.ListsProfileData = this.ListsProfileData.filter((_, i) => i !== theIndexOfRow);
      console.log("profile to be deleted : "+toDelete.socialPlatformName);
    }

    addRow(): void {
      const newRow: SocialProfilesEntity = { ...this.newSocialProfile };
      if(newRow.socialPlatformName.trim() === '' || newRow.socialPlatformURL.trim() === '' || newRow.socialPlatformURL.trim() ==='') {
        console.log("New Row"+ newRow );
        this.validData = false;
        return;
      }
      this.validData = true;
      this.newSocialProfile = new SocialProfilesEntity();
      this.ListsProfileData.push(newRow);//Currently Pushing the Data 
      //But after this directly call the insert command here so that the data 
      this.showNewRow = false;
      this.toggleEditMode();
      
    }
}
