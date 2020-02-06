import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';
import { FirestoreService } from '../auth/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Observable <Course[]>;
  constructor(private courseService: CourseService, private fireService: FirestoreService) { }

  ngOnInit() {
    this.courses = this.fireService.getCourses();
  }

}
