import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.css']
})


export class UserBodyComponent implements OnInit {

  CourseList: CoursesDetails[] = [
    {
      "Id": 1,
      "ImageUrl": "assets/images/CL.jpg",
      "Subtitle": "",
      "Title": "Complete Learning",
      "info": [
        "Cutting-edge in-depth curriculum",
        "Courses personalized to your needs",
        "Online access to study and practice labs"
      ],
      "isAvailable": true
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/CG.jpg",
      "Subtitle": "",
      "Title": "Full mentoring",
      "info": [
        "One-on-one mentoring",
        "Flexible mentoring sessions and Q&A",
        "Industry case studies & projects"
      ],
      "isAvailable": true
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/OM.jpg",
      "Subtitle": "",
      "Title": "Career Guidance",
      "info": [
        "Develop job-ready skills",
        "Personal career support and counselling",
        "Job recommendations"
      ],
      "isAvailable": true
    }
  ];

  programs: string[] = [
    "Data Science", "Cloud Computing", "Machine Learning"
  ]

  HigherEducation: any[] = [
    {
      "Id": 1,
      "ImageUrl": "assets/images/AI&ML.jpg",
      "Subtitle": "Get ready for tomorrow with a comprehensive course in Artificial Intelligence and Machine Learning.",
      "Title": "PGP AI ML",
      "Duration": "12 Months | Fully Online",
      "Schedule": "Weekends",
      "Starts": "1st December",
      "isAvailable": true
    },
    {
      "Id": 2,
      "ImageUrl": "assets/images/DA.jpg",
      "Subtitle": "Master Big Data and analytics with this cutting edge curriculum on Data Science.",
      "Title": "PGP Data Science and Analytics",
      "Duration": "12 Months | Fully Online",
      "Schedule": "Weekends",
      "Starts": "1st December",
      "isAvailable": true
    },
    {
      "Id": 3,
      "ImageUrl": "assets/images/AIML.jpeg",
      "Subtitle": "Take a deep dive into Deep Learning, and master one of the most sought after skills today.",
      "Title": "Advance Deep Learning",
      "Duration": "4 Months | Fully Online",
      "Schedule": "Weekends",
      "Starts": "1st December",
      "isAvailable": true
    }

  ]

  ProfessionProgram: Courses[] = [
    {
      "Id": 1,
      "ImageUrl": "assets/images/dswpp.jpg",
      "Subtitle": "",
      "Title": "Data Science With Python",
      "info": "Duration : 4 Months | Online",
      "isAvailable": false
    },

    {
      "Id": 1,
      "ImageUrl": "assets/images/se.jpg",
      "Subtitle": "",
      "Title": "Software Engineering",
      "info": "Duration : 4 Months | Online",
      "isAvailable": false
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/pwb.jpg",
      "Subtitle": "",
      "Title": "Full Stack Web Development Python ",
      "info": "Duration : 4 Months | Online",
      "isAvailable": false
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/cc.jpg",
      "Subtitle": "",
      "Title": "Cloud Computing",
      "info": "Duration : 4 Months | Online",
      "isAvailable": false
    }

  ]

  Cerificates: any[] = [
    {
      "Id": 4,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "Build a predictive model from the ground up, using Python.",
      "Title": "AI Chatbot with IBM watson",
      "info": "Duration : 3 Months ",
      "Schedule": "Weekends",
      "CohortStarts": "1st December",
      "isAvailable": true
    },
    {
      "Id": 5,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "Build an AI powered chatbot that delights your users!",
      "Title": "Predictive analytics with python",
      "info": "Duration : 3 Months ",
      "Schedule": "Weekends",
      "CohortStarts": "1st December",
      "isAvailable": true
    },
    // {
    //   "Id": 1,
    //   "ImageUrl": "assets/images/course.jpg",
    //   "Subtitle": "",
    //   "Title": "Advance NLA ",
    //   "info": "Duration : 3 Months ",
    //   "isAvailable": false
    // },

    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Applied Statistics ",
      "info": "Duration : 3 Months ",
      "isAvailable": false
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Learn 6 Sigma",
      "info": "Duration : 3 Months ",
      "isAvailable": false
    },
  
    // {
    //   "Id": 1,
    //   "ImageUrl": "assets/images/course.jpg",
    //   "Subtitle": "",
    //   "Title": "Data Mining and Business Analytics with R",
    //   "info": "Duration : 3 Months ",
    //   "isAvailable": false
    // },

    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "AI Stratergy For Leaders ",
      "info": "Duration : 3 Months ",
      "isAvailable": false
    },
    // {
    //   "Id": 1,
    //   "ImageUrl": "assets/images/course.jpg",
    //   "Subtitle": "",
    //   "Title": "Advance Computer Vision ",
    //   "info": "Duration : 3 Months ",
    //   "isAvailable": false
    // },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Business Forecasting with R ",
      "info": "Duration : 3 Months ",
      "isAvailable": false
    },

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
  CoursesDetail: CoursesDetails[] = [
    {
      "Id": 1,
      "ImageUrl": "assets/images/pythonbasic.jpg",
      "Subtitle": "",
      "Title": "Learn Python Programming!",
      "info": ["Introduction to Programming", "What is python", "Basics of Python", "Logical Operators"],
      "isAvailable": false
    }
    // ,
    // {
    //   "Id": 1,
    //   "ImageUrl": "assets/images/course.jpg",
    //   "Subtitle": "",
    //   "Title": "Data Science With Python",
    //   "info": [`Ranked #1 Data Science With Python Program in India for future oriented professionals`]
    // },
    // {
    //   "Id": 1,
    //   "ImageUrl": "assets/images/course.jpg",
    //   "Subtitle": "",
    //   "Title": "Cloud Computing",
    //   "info": [`Ranked #1 Cloud Computing Program in India for future oriented professionals`]
    // },
    // {
    //   "Id": 1,
    //   "ImageUrl": "assets/images/course.jpg",
    //   "Subtitle": "",
    //   "Title": "Software Development",
    //   "info": [`Ranked #1 Software Development Program in India for future oriented professionals`]
    // },
    // {
    //   "Id": 1,
    //   "ImageUrl": "assets/images/course.jpg",
    //   "Subtitle": "",
    //   "Title": "Game Development",
    //   "info": [`Ranked #1 Game Development Program in India for future oriented professionals`]
    // }

  ];

  responsiveOptions;

  constructor(
    private route: Router
  ) {
    // var courses: Courses[] = [];
    // var coursesdetails: CoursesDetails[] = [];
    // for (let index = 0; index < 3; index++) {
    //   let courseObj: Courses = {
    //     "Id": (index + 1),
    //     "ImageUrl": 'assets/images/pg'+ (index +1)+'.jpg',
    //     "Title": `PG Program in ${this.programs[index]}`,
    //     "Subtitle": '12 Months | Online | Weekend',
    //     "info": `Ranked #${index} ${this.programs[index]} Program in India for future oriented professionals`,
    //     "isAvailable" : true
    //   }
    //   this.CourseList.push(courseObj);
    // }

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

  callModel(obj) {
    //this.applyModelService.showApplyModel(object);
    this.route.navigate([`courseinfo/${obj.Id}`])
  }

}



class Courses {
  Id: number
  ImageUrl: string;
  Title: string;
  Subtitle: string;
  info: string;
  isAvailable: boolean
}

class CoursesDetails {
  Id: number
  ImageUrl: string;
  Title: string;
  Subtitle: string;
  info: string[];
  isAvailable: boolean
}

class Category {
  name: string;
  info: string[];
  ImageUrl: string;
}
