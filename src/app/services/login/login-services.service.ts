import { LoginEntity } from './../../entites/login/login-entity';
import { UserStateService } from './../user-state.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private baseUrl:string = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private userStateService: UserStateService) {}

  //insertData
  register(loginDetails:LoginEntity ,userID:number):Observable<any>{
    // const formData = new FormData();
    // formData.append('loginDetails',JSON.stringify(loginDetails));
    // const userId = this.userStateService.getUserId;
    const insertUrl = this.baseUrl+'/insert/'+userID;

    return this.http.post<any>(insertUrl,loginDetails);
  }
  // Login
  login(username: string, password: string): Observable<any> {
    const loginUrl = this.baseUrl+'/get/'+username+'/'+password;

    return this.http.get<any>(loginUrl).pipe(
      tap(response => {
        if (response.userId) {
          this.userStateService.setUserId(response.userId);
        }
      })
    );
  }
}