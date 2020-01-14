import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {COURSES} from '../mock-courses';
import {CourseService} from '../course.service'
import { Observable, of, from } from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }
  getCourses(): void{
    this.courseService.getCourses()
    .subscribe(courses => this.courses=courses);
  }
  deleteCourse(course){
    console.log("Komunikat");
    let index=this.courses.indexOf(course)+1;
    console.log(index);
    this.courses.slice(index, 1);
    
  }
}
