import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLogin():boolean{
     const token = localStorage.getItem('token');
     return token != undefined;
  }
}
