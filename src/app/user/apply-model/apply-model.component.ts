import { Component, OnInit } from '@angular/core';
import { AlertService, LeadService, ModelService } from 'src/app/services/index';
import { CallModel, CallToast, CloseModel } from 'src/assets/js/jquery-functions.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/models/Lead';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-apply-model',
  templateUrl: './apply-model.component.html',
  styleUrls: ['./apply-model.component.css']
})

export class ApplyModelComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private applyModelService: ModelService,
    private fb: FormBuilder,
    private leadService: LeadService,
    private alertService: AlertService
  ) {
    this.form = fb.group({
      Name: ['', [Validators.required, Validators.pattern("/^[a-z]$")]],
      phoneNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}")]],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  data: any = null;

  ngOnInit(): void {
    this.applyModelService.showModal().subscribe(message => {
      this.data = message.obj;
      CallModel("#applyModalCaller");
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    let l: Lead = {
      "Name": this.f.Name.value,
      "ContactNo": this.f.phoneNo.value,
      "Email": this.f.Email.value,
      "CourseID": this.data.Id
    }

    this.leadService.insertLeadData(l)
      .pipe(first())
      .subscribe(response => {
        
        if (response["status"] == 0) {
          CloseModel('#closeModal')
          this.form.reset()
          this.alertService.notify("success", `Thank you for Applying for  ${this.data.Title}. Our team will reach you soon.`)
        }
        else {
          this.alertService.notify("error", 'Your request cannot be made right now. \n Please try after sometime.')
        }
      });
  }

  closeModal() {
    this.form.reset()
    // CloseModel('#closeModal')
  }

}
