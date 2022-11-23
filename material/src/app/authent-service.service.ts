import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentServiceService implements CanActivate {
  private isloggedIn: boolean;
  private userName: string;


  constructor(private routeNav: Router) {
    this.isloggedIn = false;}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    debugger;

    //check some condition
    //someCondition
    if (this.isloggedIn) {
      //alert('You are  allowed to view this page');
      //redirect to login/home page etc
      //return false to cancel the navigation
      return true;
    }
    alert('You are not  allowed to view this page');
    this.routeNav.navigate(['']);
    return false;
  }
  login(username: string, password: string) {

    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    this.isloggedIn = true;
    this.userName = username;
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
