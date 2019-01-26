import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private _stopSubject:Subject<boolean> =  new Subject();
  
  constructor() { }
  
  get stopSubject():Subject<boolean>{
    return this._stopSubject;
  }

  stopSpinner():void{
    this._stopSubject.next();
  }
}
