import { Component, OnInit } from '@angular/core';
import {Course} from '../courseclass';
import {COURSES} from '../test-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],

})
export class CoursesComponent implements OnInit {
  
  'selectedCourse': Course;

    onSelect(course:Course): void {this.selectedCourse =course;}


  course:Course = {
    course_title:'Web Development',
    course_id :1,
    Semester: 'Semester one',
    Period: 'Thuresday 12pm - 2pm',
    Lecturer: 'Dr. Jian Yu'
  }
  courses = COURSES;
  constructor() { }
  ngOnInit(): void {
   
  }
 
}
