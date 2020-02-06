import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { UserService } from '../my-courses/user.service'

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Course[];
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.courses = this.userService.getCourses();
  }
  havingCourse(): boolean {
    return this.userService.haveCourses();
  }

}
