import { Component, OnInit, ViewChild, ElementRef, NgZone, Renderer } from '@angular/core';
import { RouterEvent, NavigationStart, Router, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { SpinnerService } from '../services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @ViewChild('spinner_el') spinnerElement: ElementRef;
  constructor(
    private _spinnerService: SpinnerService,
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer) {

    
  }
 

  ngOnInit() {
    console.log('init');

    this.router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event)
    });
    this._spinnerService.stopSubject.subscribe(_ => {
      this._hideSpinner();
    })
  }

   // Shows and hides the loading spinner during RouterEvent changes
   private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'opacity',
          '1'
        )
      })
    }
    // if (event instanceof NavigationEnd) {
    //   // setTimeout(() => {
    //     this._hideSpinner()

    //   // }, 2000);
    // }
    // // Set loading state to false in both of the below events to
    // // hide the spinner in case a request fails
    // if (event instanceof NavigationCancel) {
    //   this._hideSpinner()
    // }
    // if (event instanceof NavigationError) {
    //   this._hideSpinner()
    // }
  }

  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'opacity',
        '0'
      )
    })
  }

}
