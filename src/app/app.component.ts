import { Component, ViewChild, ElementRef, NgZone, Renderer } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routesTest';
  constructor(
    private _loginService: LoginService
  ){}
   ngOnInit() {
  }

  get isLogin():boolean{
    return this._loginService.isLogin();
  }

}
