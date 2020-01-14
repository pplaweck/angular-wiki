import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AddCourseComponent } from './add-course/add-course.component';
@NgModule({ 
declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailsComponent,
    MessagesComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
