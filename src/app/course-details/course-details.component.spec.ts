import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsComponent } from './course-details.component';
//comment0
describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailsComponent ]
    })
    .compileComponents();
  }));
//comment1
  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//comment2
});
