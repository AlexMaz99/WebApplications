import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CourseService } from 'src/app/course-list/course.service';
import { Course } from 'src/app/models/course.model';
import { FirestoreService } from 'src/app/auth/firestore.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {
  courses: Observable<Course[]>;
  constructor(private courseService: CourseService, private fireStore: FirestoreService) { }

  ngOnInit() {
    this.courses = this.fireStore.getCourses();
  }
  remove(idd) {
    this.fireStore.deleteCourse(idd);
  }
}
