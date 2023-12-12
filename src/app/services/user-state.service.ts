import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private userIdSubject = new BehaviorSubject<string | null>(this.retrieveUserIdFromLocalStorage());
  private inactivityTimeout: any;

  constructor() {
    // Set up the inactivity timeout on service initialization
    this.setupInactivityTimeout();
  }

  private retrieveUserIdFromLocalStorage(): string | null {
    // Retrieve userId from localStorage
    return localStorage.getItem('userId');
  }

  private saveUserIdToLocalStorage(userId: string): void {
    // Save userId to localStorage
    localStorage.setItem('userId', userId);
  }

  setUserId(userId: string): void {
    // Save userId to localStorage, reset inactivity timeout, and update BehaviorSubject
    this.saveUserIdToLocalStorage(userId);
    this.resetInactivityTimeout();
    this.userIdSubject.next(userId);
  }

  getUserId(): BehaviorSubject<string | null> {
    return this.userIdSubject;
  }

  private setupInactivityTimeout(): void {
    // Set up a timeout to clear localStorage after 5 minutes of inactivity
    this.inactivityTimeout = setTimeout(() => {
      this.clearLocalStorage();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  }

  private resetInactivityTimeout(): void {
    // Reset the inactivity timeout
    console.log("Resetiing");
    clearTimeout(this.inactivityTimeout);
    this.setupInactivityTimeout();
  }

  private clearLocalStorage(): void {
    // Clear userId from localStorage and update BehaviorSubject
    console.log("Clearing");
    localStorage.removeItem('userId');
    this.userIdSubject.next(null);
  }

  logout(){
    this.clearLocalStorage();
  }

}


//The Below Code Doesn't have any time limit So it will store the userId Until LogOut 


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserStateService {

//   private userIdSubject = new BehaviorSubject<string | null>(this.retrieveUserIdFromLocalStorage());

//   constructor() { }

//   private retrieveUserIdFromLocalStorage(): string | null {
//     // Retrieve userId from localStorage
//     return localStorage.getItem('userId');
//   }

//   setUserId(userId: string): void {
//     // Save userId to both localStorage and BehaviorSubject
//     localStorage.setItem('userId', userId);
//     this.userIdSubject.next(userId);
//   }

//   getUserId(): BehaviorSubject<string | null> {
//     return this.userIdSubject;
//   }
// }



//THe Below Code iS for SessionStorage [Removed Because It doesn't work as i Want (When Opened A NewTab the data is not passed to the other tab )] 

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserStateService {

//   private userIdSubject = new BehaviorSubject<string | null>(this.retrieveUserIdFromSessionStorage());

//   constructor() { }

//   private retrieveUserIdFromSessionStorage(): string | null {
//     // Retrieve userId from sessionStorage
//     return sessionStorage.getItem('userId');
//   }

//   setUserId(userId: string): void {
//     // Save userId to both sessionStorage and BehaviorSubject
//     sessionStorage.setItem('userId', userId);
//     console.log("Logged the USerID : "+userId);
//     this.userIdSubject.next(userId);
//   }

//   getUserId(): BehaviorSubject<string | null> {
//     return this.userIdSubject;
//   }
// }
