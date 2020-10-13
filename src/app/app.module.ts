import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { SystemDashboardComponent, CarouselMasterComponent, TestimonyMasterComponent } from './system/system-index';
import {InputNumberModule} from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http'

import {
  CarouselTemplateComponent, HomeTemplateComponent, CoursesComponent, UserBodyComponent,
  TestimonialComponent, UserDashboardComponent, CourseDetailsComponent
} from './user/user-index';
import { PrismoAdvtgComponent } from './system/prismo-advtg/prismo-advtg.component';
import { ApplyModelComponent } from './user/apply-model/apply-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';


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
    TestimonyMasterComponent,
    PrismoAdvtgComponent,
    ApplyModelComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputNumberModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
