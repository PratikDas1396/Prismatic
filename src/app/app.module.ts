import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { SystemHeaderComponent, SystemDashboardComponent, SystemSidenavComponent } from './system/system-index';
import { CarouselTemplateComponent, HomeTemplateComponent, CoursesComponent, UserBodyComponent,  TestimonialComponent, UserDashboardComponent } from './user/user-index';
// import {  MaterialModule } from './modules/material.module'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuListItemComponent } from './system/component/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselTemplateComponent,
    HomeTemplateComponent,
    CoursesComponent,
    TestimonialComponent,
    SystemHeaderComponent,
    SystemDashboardComponent,
    SystemSidenavComponent,
    UserDashboardComponent,
    MenuListItemComponent,
    UserBodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
