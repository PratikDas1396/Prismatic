import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService, LeadService, ModelService } from 'src/app/services/index';
import { CallModel, CallToast, CloseModel } from 'src/assets/js/jquery-functions.js';

@Component({
  selector: 'app-lead-tracking',
  templateUrl: './lead-tracking.component.html',
  styleUrls: ['./lead-tracking.component.css']
})
export class LeadTrackingComponent implements OnInit, OnDestroy {

  modelSubscription: Subscription;
  data: any = null;

  Disposition = "";
  Remarks = ""
  constructor(
    private applyModelService: ModelService,
    private leadService: LeadService,
    private alertService: AlertService
  ) { }


  ngOnInit(): void {
    this.modelSubscription = this.applyModelService.showModal().subscribe(message => {
      debugger;
      this.data = message.obj;
      this.Disposition = this.data["Disposition"];
      this.Remarks = this.data["Remark"];
      CallModel("#leadTrackerModalCaller");
    });
  }

  submit() {
    
  }

  openModel() {

  }

  closeModal() {
    this.data = null;
    this.Disposition = "";
    this.Remarks = ""
  }

  ngOnDestroy(): void {

  }

}
