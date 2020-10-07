import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.css']
})
export class UserBodyComponent implements OnInit {

  CourseList: Courses[] = [];

  programs: string[] = [
    "Data Science", "Cloud Computing", "Machine Learning"
  ]

  Categories: Category[] = [
    {
      "ImageUrl": "assets/images/ds.svg",
      "info": [""],
      "name": "Lean Six Sigma Black Belt"
    },
    {
      "ImageUrl": "assets/images/sd.svg",
      "info": ["", ""],
      "name": "Predictive Analysis with Python"
    },
    {
      "ImageUrl": "assets/images/cc.svg",
      "info": ["", ""],
      "name": "Agile Software Developement Life Cycle"
    }

  ];


  // {
  //   "ImageUrl": "assts/images/ml.svg",
  //   "info": ["", ""],
  //   "name": "Machine Learning"
  // },
  // {
  //   "ImageUrl": "assets/images/ai.svg",
  //   "info": ["", ""],
  //   "name": "Artificial Intelligence"
  // },


  // , "", "", "", "Deep Learning"


  //   1. PGP AI-ML 
  // 2. Data Science With Python
  // 3. Cloud Computing
  // 4. Software Development
  // 5. Game Development
  CoursesDetail: CoursesDetails[] = [
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "PGP AI-ML",
      "info": [`Ranked #1 PGP AI-ML Program in India for future oriented professionals`]
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Data Science With Python",
      "info": [`Ranked #1 Data Science With Python Program in India for future oriented professionals`]
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Cloud Computing",
      "info": [`Ranked #1 Cloud Computing Program in India for future oriented professionals`]
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Software Development",
      "info": [`Ranked #1 Software Development Program in India for future oriented professionals`]
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Game Development",
      "info": [`Ranked #1 Game Development Program in India for future oriented professionals`]
    }

  ];

  responsiveOptions;

  constructor() {
    // var courses: Courses[] = [];
    // var coursesdetails: CoursesDetails[] = [];
    for (let index = 0; index < 3; index++) {
      let courseObj: Courses = {
        "Id": (index + 1),
        "ImageUrl": 'assets/images/course.jpg',
        "Title": `PG Program in ${this.programs[index]}`,
        "Subtitle": '12 Months | Online | Weekend',
        "info": `Ranked #${index} ${this.programs[index]} Program in India for future oriented professionals`,
      }
      this.CourseList.push(courseObj);
    }

    // for (let index = 1; index <= 4; index++) {
    //   let s: string[] = []
    //   for (let j = 1; j < 5; j++) {
    //     s.push(" Lorem Ipsum data fearuens of Progream " + j)
    //   }

    //   let coursesdetailObj: CoursesDetails = {
    //     "Id": index,
    //     "ImageUrl": 'assets/images/course.jpg',
    //     "Title": `PG Program in ${this.programs[index]}`,
    //     "Subtitle": 'Sample Course Subtitle  : ' + index,
    //     "info": ["Advance Statistics", "Data Mining", "Predictive Modeling"],
    //   }

    //   this.CoursesDetail.push(coursesdetailObj);
    // }

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
  name: string;
  info: string[];
  ImageUrl: string;
}
