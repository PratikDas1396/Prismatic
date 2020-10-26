import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from 'src/app/services/index';
@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.css']
})


export class UserBodyComponent implements OnInit, OnDestroy {
  responsiveOptions;

  constructor(private applyModelService: ModelService, private route: Router) {

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

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

  callModel(object: any) {
    this.applyModelService.showApplyModel(object);
  }



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

  HigherEducation: Courses[] = [
    {
      "Id": 1,
      "ImageUrl": "assets/images/AI&ML.jpg",
      "Subtitle": "",
      "Title": "PGP AI ML",
      "info": "Duration : 12 Months | Fully Online",
      "isAvailable": true
    },
    {
      "Id": 2,
      "ImageUrl": "assets/images/DA.jpg",
      "Subtitle": "",
      "Title": "PGP Data Science and Analytics",
      "info": "Duration : 12 Months | Fully Online",
      "isAvailable": true
    },
    {
      "Id": 3,
      "ImageUrl": "assets/images/AIML.jpeg",
      "Subtitle": "",
      "Title": "Advance Deep Learning",
      "info": "Duration : 12 Months | Fully Online",
      "isAvailable": true
    }

  ]

  ProfessionProgram: Courses[] = [
    {
      "Id": 1,
      "ImageUrl": "assets/images/dswpp.jpg",
      "Subtitle": "",
      "Title": "Data Science With Python",
      "info": "Duration : 6 Months | Online",
      "isAvailable": true
    },

    {
      "Id": 1,
      "ImageUrl": "assets/images/se.jpg",
      "Subtitle": "",
      "Title": "Software Engineering",
      "info": "Duration : 6 Months | Online",
      "isAvailable": true
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/pwb.jpg",
      "Subtitle": "",
      "Title": "Full Stack Web Development Python ",
      "info": "Duration : 6 Months | Online",
      "isAvailable": false
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/cc.jpg",
      "Subtitle": "",
      "Title": "Cloud Computing",
      "info": "Duration : 6 Months | Online",
      "isAvailable": false
    }

  ]


  Cerificates: Courses[] = [
    {
      "Id": 4,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "AI Chatbot with IBM whatson",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": true
    },
    {
      "Id": 5,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Predictive analytics with python",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": true
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Advance NLA ",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": false
    },

    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Applied Statistics ",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": false
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Learn 6 Sigma",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": false
    },
   
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Data Mining and Business Analytics with R",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": false
    },

    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "AI Stratergy For Leaders ",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": false
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Advance Computer Vision ",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
      "isAvailable": false
    },
    {
      "Id": 1,
      "ImageUrl": "assets/images/course.jpg",
      "Subtitle": "",
      "Title": "Business Forecasting with R ",
      "info": "Duration : 3 Months | 6 Months | 9 Months",
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
  ];

  navigate(obj) {
    debugger;
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
