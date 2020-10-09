import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { SystemDashboardComponent, CarouselMasterComponent, TestimonyMasterComponent } from './system/system-index';

import {
  CarouselTemplateComponent, HomeTemplateComponent, CoursesComponent, UserBodyComponent,
  TestimonialComponent, UserDashboardComponent, CourseDetailsComponent
} from './user/user-index';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselTemplateComponent,
    HomeTemplateComponent,
    CoursesComponent,
    TestimonialComponent,
    SystemDashboardComponent,
    UserDashboardComponent,
    UserBodyComponent,
    CourseDetailsComponent,
    CarouselMasterComponent,
    TestimonyMasterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
