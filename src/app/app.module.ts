import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselTemplateComponent } from './carousel-template/carousel-template.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { CoursesComponent } from './courses/courses.component';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselTemplateComponent,
    HomeTemplateComponent,
    CoursesComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CardModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
