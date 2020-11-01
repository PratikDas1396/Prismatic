import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { SystemDashboardComponent, CarouselMasterComponent, TestimonyMasterComponent, LeadDetailsComponent, LeadTrackingComponent } from './system/system-index';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import {
  CarouselTemplateComponent, HomeTemplateComponent, CoursesComponent, UserBodyComponent,
  TestimonialComponent, UserDashboardComponent, CourseDetailsComponent
} from './user/user-index';
import { PrismoAdvtgComponent } from './system/prismo-advtg/prismo-advtg.component';
import { ApplyModelComponent } from './user/apply-model/apply-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';



//PrimeNG Module
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';


// Interceptor
import { httpInterceptorProviders } from 'src/app/intercepter'

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
    LoginComponent,
    LeadDetailsComponent,
    LeadTrackingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputNumberModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,

    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
