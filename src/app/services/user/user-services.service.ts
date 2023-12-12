import { UserEntity } from './../../entites/user/user-entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginEntity } from '../../entites/login/login-entity';
import { Observable, catchError, throwError, tap } from 'rxjs';
import { UserStateService } from '../user-state.service';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private baseUrl:string = 'http://localhost:8080/user';


  constructor(private http: HttpClient,private userStateService: UserStateService) { }

  // userId : any = this.userStateService.getUserId()
  

  retriveInfo(userID:number): Observable<any>{
    const retriveUrl = this.baseUrl + "/get/" + userID;
    const response = this.http.get<any>(retriveUrl,{responseType : "json"});
    console.log("Get USerData Response : "+response);
    return response;
  }

  register(user: UserEntity, profilePic: File | null ): Observable<any> {
    const formData = new FormData();
    
    if (profilePic !== null ) {
      formData.append('profilePic', profilePic);
    }

    formData.append('userData', JSON.stringify(user));
    // formData.append('profilePic', profilePic);
    const registerUrl = `${this.baseUrl}/register`;
    const response = this.http.post<any>(registerUrl, formData);
    // console.log("THe Respone In Service"+response);
    return response;
  }
}

