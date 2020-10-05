import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  CourseList: Courses[] = [];
  Categories: string[] = [
    "Data Science", "Software Engineering", "Cloud Computing", "Machine Learning", "Deep Learning"
  ];

  CoursesDetail: CoursesDetails[] = [];

  responsiveOptions;

  constructor() {
    // var courses: Courses[] = [];
    // var coursesdetails: CoursesDetails[] = [];
    for (let index = 1; index <= 4; index++) {
      let courseObj: Courses = {
        "Id": index,
        "ImageUrl": 'assets/images/course.jpg',
        "Title": 'Sample Course : ' + index,
        "Subtitle": 'Sample Course Subtitle  : ' + index,
        "info": 'this is the information about the course : information ' + index,
      }
      this.CourseList.push(courseObj);
    }

    for (let index = 1; index <= 4; index++) {
      let s :string [] = []
      for (let j = 1; j <  5; j++) {
        s.push(" Lorem Ipsum data fearuens of Progream " + j)
      }

      let coursesdetailObj: CoursesDetails = {
        "Id": index,
        "ImageUrl": 'assets/images/course.jpg',
        "Title": 'Sample Course : ' + index,
        "Subtitle": 'Sample Course Subtitle  : ' + index,
        "info": s,
      }

      this.CoursesDetail.push(coursesdetailObj);
    }

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
class Courses {
  Id: number
  ImageUrl: string;
  Title: string;
  Subtitle: string
  info: string
}

class CoursesDetails {
  Id: number
  ImageUrl: string;
  Title: string;
  Subtitle: string
  info: string[]
}