import { Component, OnInit } from '@angular/core';
import { LeadService, ModelService } from 'src/app/services';
import { Lead } from 'src/app/models/Lead'

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})


export class LeadDetailsComponent implements OnInit {

  leads: Lead[] = [];
  constructor(private leadService: LeadService, private modelService: ModelService) { }

  ngOnInit(): void {
    this.leadService.getLeads().subscribe(resp => {
      this.leads = resp["data"]
    })
  }

  OpenLeadDetails(data) { 
    this.modelService.showLeadTrackingModel(data);
  }

}



