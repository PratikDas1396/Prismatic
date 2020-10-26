import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SystemDashboardComponent, CarouselMasterComponent, TestimonyMasterComponent, PrismoAdvtgComponent, LeadDetailsComponent } from '../system/system-index';
import { UserDashboardComponent, HomeTemplateComponent, CoursesComponent, CourseDetailsComponent } from '../user/user-index';

const appRoutes: Routes = [

  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: '', component: HomeTemplateComponent },
      { path: 'home', redirectTo: '/' },
      { path: 'courses', component: CoursesComponent },
      { path: 'courseinfo/:id', component: CourseDetailsComponent },
    ],
  },
  {
    path: 'administrator',
    component: SystemDashboardComponent,
    children: [
      {
        path: 'setup', children: [
          { path: 'carousel', component: CarouselMasterComponent },
          { path: 'testimony', component: TestimonyMasterComponent },
          { path: 'prismoadvtg', component: PrismoAdvtgComponent },
        ]
      },
      { path: 'leads', component: LeadDetailsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
