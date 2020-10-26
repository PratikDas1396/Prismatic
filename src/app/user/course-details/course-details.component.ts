import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  selectedId: number;
  Course: any = null;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = Number(params.get('id'));
    //     this.httpClient.get("assets/courses.json").subscribe(data => {
    //       debugger;
    //       console.log(data["courses"]);
    //       this.Course = data["courses"][0];
    //       return ""
    //     })
    //   })
    // );


    const CourseID = this.route.snapshot.paramMap.get('id');
    this.httpClient.get("assets/courses.json").subscribe(data => {
      debugger;
      this.Course = data["courses"].filter(course => course.CourseID == CourseID)[0];
    })
    // this.route.paramMap.toPromise().then()



  }

}
