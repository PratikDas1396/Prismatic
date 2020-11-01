import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../_components/index';
import { SystemDashboardComponent, CarouselMasterComponent, TestimonyMasterComponent, PrismoAdvtgComponent } from '../system/system-index';
import { UserDashboardComponent, HomeTemplateComponent, CoursesComponent, CourseDetailsComponent } from '../user/user-index';

const appRoutes: Routes = [

  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: '', component: HomeTemplateComponent },
      { path: 'home', redirectTo: '/' },
      { path: 'courses', component: CoursesComponent },
      { path: 'courseinfo', component: CourseDetailsComponent },
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
          { path: 'prismoadvtg', component: PrismoAdvtgComponent }
        ]
      }
      ,
    ]
  },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
