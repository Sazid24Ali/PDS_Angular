import { Component } from '@angular/core';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private userIDService: UserStateService){
  }

  logout(){
    console.log("called logout");
    this.userIDService.logout();
  }
}
