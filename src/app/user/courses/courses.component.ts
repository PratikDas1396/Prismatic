import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  courses: CourseList[] = [];
  constructor() {
    for (let index = 1; index <= 11; index++) {
      let course : CourseList = { 
        "Features": [ "3 Weeks", "120 Lectures", "Begineer" ],
        "ImageUrl": "",
        "Name" :"Course list of subject " + index
      }
      this.courses.push(course);
    }
  }

  ngOnInit(){
    
  }
}


class CourseList { 
  Name: string;
  ImageUrl :string;
  Features: string [];
}
