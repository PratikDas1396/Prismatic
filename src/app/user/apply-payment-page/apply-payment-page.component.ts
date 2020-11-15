import { Component, OnInit } from '@angular/core';
import { registration_init } from 'src/assets/js/jquery-functions.js'
 
@Component({
  selector: 'app-apply-payment-page',
  templateUrl: './apply-payment-page.component.html',
  styleUrls: ['./apply-payment-page.component.css']
})

export class ApplyPaymentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    registration_init();
  }

}
