import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  tList: TestimonialData[] = [
    // {
    //   "info": "Store Owner",
    //   "name": "Delbert Simonas",
    //   "testimony": "Online reviews can make or break a customer's decision to make a purchase. Read about these customer review sites where your customers'"
    // },

    // {
    //   "info": "Store Owner",
    //   "name": "Delbert Simonas",
    //   "testimony": "When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical on laptops i purchased."
    // },

    {
      "info": "Store Owner",
      "name": "Delbert Simonas",
      "testimony": "For the last 10 years, I have owned an old Gateway laptop. Although it was amazing and lasted me, it was time for an upgrade. I own an Apple phone so I decided to look into a computer."
    },
    {
      "info": "Store Owner",
      "name": "Delbert Simonas",
      "testimony": "This MacBook has excellent processing speed. The screen is crystal clear and I really enjoy the touchbar. I set up the fingerprint reader."
    },
    {
      "info": "Store Owner",
      "name": "Delbert Simonas",
      "testimony": "I’ve wanted a MacBook for a while now because of the build quality and the simplicity of the OS. I spend an average 6 hours a day using it for college and the battery still has a fair."
    }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}

class TestimonialData {
  name: string;
  info: string;
  testimony: string
}
