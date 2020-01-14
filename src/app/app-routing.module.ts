import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
const routes: Routes = [
  {path:'', redirectTo: '/courses', pathMatch: 'full'}
  ,
  { path: 'courses', component: CoursesComponent}
  ,
  {path: 'detail/:id', component: CourseDetailsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
