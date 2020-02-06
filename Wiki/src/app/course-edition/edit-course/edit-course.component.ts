import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/course-list/course.service';
import { FirestoreService } from 'src/app/auth/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courses: Observable<Course[]>;
  constructor(private courseService: CourseService, private fireStore: FirestoreService) { }

  ngOnInit() {
    this.courses = this.fireStore.getCourses();
  }

}
