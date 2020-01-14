import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../course';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService} from '../course.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }
  getCourse(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
    .subscribe(course=>this.course=course);
  }
  goBack(): void{
    this.location.back();
  }
  rateCourse(value: number){
    this.course.rate=((this.course.rate*this.course.number_of_rates)+value)/(this.course.number_of_rates+1);
    this.course.number_of_rates=this.course.number_of_rates+1;
  }
}
