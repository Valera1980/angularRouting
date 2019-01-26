import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  delay } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner/spinner.service';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(
    private _spinnerService: SpinnerService,
    private _activateRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._activateRoute.queryParams
      .subscribe(data => {
        setTimeout(()=>{
          this._spinnerService.stopSpinner();

        },3000)

      })
  }

  reload() {
    this._router.navigate(['/one'],{queryParams:{a:2,b:8}})
  }

}
