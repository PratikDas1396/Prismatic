import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  CourseList: Courses[] = [];

  programs :string[] = [
    "Data Science", "Software Engineering" , "Cloud Computing",  "Machine Learning", "Artificial Intelligence"
  ] 

  Categories: Category[] = [
    {
      "ImageUrl" :"assets/images/ds.svg",
      "info" : [""],
      "name" : "Data Science"
    },
    {
      "ImageUrl" :"assets/images/sd.svg",
      "info" : ["", ""],
      "name" : "Software Engineering"
    },
    {
      "ImageUrl" :"assets/images/cc.svg",
      "info" : ["", ""],
      "name" : "Cloud Computing"
    },
    {
      "ImageUrl" :"assets/images/ml.svg",
      "info" : ["", ""],
      "name" : "Machine Learning"
    },
    {
      "ImageUrl" :"assets/images/ai.svg",
      "info" : ["", ""],
      "name" : "Artificial Intelligence"
    },    
  ];



  // , "", "", "", "Deep Learning"
  CoursesDetail: CoursesDetails[] = [];

  responsiveOptions;

  constructor() {
    // var courses: Courses[] = [];
    // var coursesdetails: CoursesDetails[] = [];
    for (let index = 1; index <= 4; index++) {
      let courseObj: Courses = {
        "Id": index,
        "ImageUrl": 'assets/images/course.jpg',
        "Title": `PG Program in ${ this.programs[index] }`,
        "Subtitle": '12 Months | Online | Weekend',
        "info": `Ranked #${index} ${ this.programs[index] } Program in India for future oriented professionals`,
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
        "Title": `PG Program in ${ this.programs[index] }`,
        "Subtitle": 'Sample Course Subtitle  : ' + index,
        "info" : ["Advance Statistics", "Data Mining", "Predictive Modeling", "Time Series Forecasting", "Optimization Techniques"],
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

class Category { 
  name :string;
  info :string[];
  ImageUrl : string;
}