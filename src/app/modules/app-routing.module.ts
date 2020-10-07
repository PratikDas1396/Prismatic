import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemDashboardComponent } from '../system/system-index';
import { UserDashboardComponent, HomeTemplateComponent, CoursesComponent } from '../user/user-index';

const appRoutes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: '', component: HomeTemplateComponent },
      { path: 'courses', component: CoursesComponent },
    ]
  },
  {
    path: 'administrator',
    component: SystemDashboardComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
