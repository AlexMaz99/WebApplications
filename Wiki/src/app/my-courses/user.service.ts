import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CourseService } from '../course-list/course.service';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { FirestoreService } from '../auth/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    email: '',
    courses: [],
    coursesVoted: []
  };
  coursesChanged = new Subject<Course[]>();
  constructor(public router: Router, public authService: AuthService, public courseService: CourseService, private fireStore: FirestoreService, private firestore: AngularFirestore) {
    this.user.email = authService.getUser().email;
  }
  getCourses() {
    this.user.courses.forEach(c => {
      const data = this.firestore.collection('Course').doc(c.idd);
      data.get().subscribe(snap => {
        if (! snap.exists) {
          this.deleteCourse(c.idd);
        }
      });
    });
    return this.user.courses.slice();
  }
  deleteCourse(idd: string) {
    const courseToDelete = this.user.courses.find(c => c.idd === idd);
    const index = this.user.courses.indexOf(courseToDelete);
    this.user.courses.splice(index, 1);
    this.coursesChanged.next(this.user.courses.slice());
  }
  haveCourses(): boolean {
    return !(this.user.courses.length === 0);
  }
  joinCourse(idd: string) {
      this.courseService.getCourse(idd).subscribe(c => {
        let flag = true;
        this.user.courses.forEach(co => {
        if (co.idd === idd) {
        flag = false;
       }
      });
        if (flag) {
          if (c.maxStudents === c.numberOfStudents) {
            window.alert('Nie ma już miejsc na ten kurs'); } else {
              this.user.courses.push(c);
              this.courseService.changeNumberOfStudents(c); }
        }
         });
  }
  canRateCourse(idd: string): boolean {
    let flag = true;
    this.user.coursesVoted.forEach(c => {
      if (c.idd === idd) {
        flag = false;
      }
    });
    return flag;
  }
  rateCourse(idd: string, rate: number) {
    this.courseService.getCourse(idd).subscribe(c => {
      if (this.canRateCourse(idd)) {
      const newG = +(( (c.sumOfGrade + rate) / (c.numberOfVotes + 1)).toFixed(2));
      this.fireStore.editCourse(c.idd, c.idd, c.name, c.ects, c.image, c.description, c.semester, c.formOfCourse, c.maxStudents, newG, c.numberOfStudents, (c.numberOfVotes + 1), (c.sumOfGrade + rate));
      this.user.coursesVoted.push(c);
      this.user.courses.forEach(a => {
        if (a.idd === c.idd) {
          a.sumOfGrade = c.sumOfGrade;
          a.numberOfVotes = c.numberOfVotes;
          a.grade = c.grade;
        }
      }); }} );
  }
}
