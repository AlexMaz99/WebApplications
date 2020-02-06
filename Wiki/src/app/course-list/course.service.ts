import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirestoreService } from '../auth/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Observable <Course[]>;
  course: Course;

  constructor(private http: HttpClient, private firestore: FirestoreService) {
    this.courses = this.firestore.getCourses();
  }

  getCourse(idd: string) {
    return this.firestore.getCourse(idd);
  }
  getCourses() {
    return this.firestore.getCourses();
  }
  changeNumberOfStudents(c: Course) {
    this.firestore.editCourse(c.idd, c.idd, c.name, c.ects, c.image, c.description, c.semester, c.formOfCourse, c.maxStudents, c.grade, (c.numberOfStudents + 1), c.numberOfVotes, c.sumOfGrade);
  }
  rateCourse(idd: string, rate: number) {
    this.firestore.getCourse(idd).subscribe(c => {
      const newG = +(( (c.sumOfGrade + rate) / (c.numberOfVotes + 1)).toFixed(2));
      this.firestore.editCourse(c.idd, c.idd, c.name, c.ects, c.image, c.description, c.semester, c.formOfCourse, c.maxStudents, newG, c.numberOfStudents, (c.numberOfVotes + 1), (c.sumOfGrade + rate));
    });
  }
}
