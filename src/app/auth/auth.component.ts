import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  name:string;
  pass:string;
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('token');
  }

  submit(){
    if(this.name == 'aaa'  && this.pass == '1111'){
       localStorage.setItem('token','1111');
       this._router.navigate(['one'])
       
    }else{
      alert('wrong!');
    }
  }

}
