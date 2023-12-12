import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStateService } from '../user-state.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialProfilesServicesService {
  private baseUrl:string = 'http://localhost:8080/social';


  constructor(private http: HttpClient,private userStateService: UserStateService) { }

  retriveInfo(userID:number):Observable<any>{
    const retriveUrl = this.baseUrl + "/getAll/" + userID;
    const response = this.http.get<any>(retriveUrl,{responseType : "json"});
    console.log("Social Profile Data from service : "+response)
    return response;
  }
}
