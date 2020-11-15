import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, LeadService, ModelService } from 'src/app/services';
import { Lead } from 'src/app/models/Lead';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  data: any = null;
  selectedId: number;
  Course: any = null;
  constructor(private httpClient: HttpClient,
    private fb: FormBuilder,
    private leadService: LeadService,
    private route: ActivatedRoute, private router: Router,
    private alertService: AlertService,
    private modalService: ModelService
    ) {
    this.form = fb.group({
      Name: ['', [Validators.required, Validators.pattern("/^[a-z]$")]],
      phoneNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}")]],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  get f() {
    return this.form.controls;
  }


  callModal() { 
    const CourseID = this.route.snapshot.paramMap.get('id');
    this.modalService.showApplyModel(this.Course);
  }
  ngOnInit() {
    const CourseID = this.route.snapshot.paramMap.get('id');
    this.httpClient.get("assets/courses.json").subscribe(data => {
      this.Course = data["courses"].filter(course => course.CourseID == CourseID)[0];
    })
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
          this.form.reset()
          this.alertService.notify("success", `Thank you for Applying for  ${this.data.Title}. Our team will reach you soon.`)
        }
        else {
          this.alertService.notify("error", 'Your request cannot be made right now. \n Please try after sometime.')
        }
      });
  }

}
