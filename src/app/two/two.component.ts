import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner/spinner.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(
    private _spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this._spinnerService.stopSpinner();

    }, 2000);
  }

}
