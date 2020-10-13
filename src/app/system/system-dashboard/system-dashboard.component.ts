import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticateService } from 'src/app/services';
declare var $: any;
@Component({
  selector: 'app-system-dashboard',
  templateUrl: './system-dashboard.component.html',
  styleUrls: ['./system-dashboard.component.css']
})
export class SystemDashboardComponent implements OnInit {

  authSubscriber: Subscription ;
  constructor(private auth: AuthenticateService,
    private router: Router) {
    this.authSubscriber = this.auth.currentUser.subscribe(resp => {
      if (resp === null || resp == "") {
        this.router.navigate(['login'])
        this.authSubscriber.unsubscribe();
      }
    })
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login'])
    this.authSubscriber.unsubscribe();
  }

}
