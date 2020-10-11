
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from 'src/app/services/index';

declare var $: any;

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;
    timeoutRef;
    isShow = true;

    constructor(private alertService: AlertService) { }

    closePopup = () => {
        this.isShow = false;
        clearTimeout(this.timeoutRef)
    }

    ngOnInit() {
        this.subscription = this.alertService.showNotification().subscribe(message => {
            clearTimeout(this.timeoutRef)
            this.message = message;
            this.isShow = true;
            this.timeoutRef = setTimeout(this.closePopup, 15000)
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}


// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { AlertService } from 'src/app/services/index';
// import { CallToast } from 'src/assets/js/jquery-functions.js';

// @Component({
//   selector: 'alert',
//   templateUrl: 'alert.component.html'
// })

// export class AlertComponent implements OnInit, OnDestroy {
//   private subscription: Subscription;
//   notification: any = [];
//   timeoutRef;
//   isShow = true;

//   constructor(private alertService: AlertService) { }

//   closePopup = () => {
//     this.isShow = false;
//     clearTimeout(this.timeoutRef)
//   }

//   ngOnInit() {

//     this.subscription = this.alertService.showNotification().subscribe(message => {
//       
//       this.notification.push(message)
//       CallToast("#toast")
//     });
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }
// }