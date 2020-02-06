import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
   coursesCol: AngularFirestoreCollection<Course>;
   courses: Observable<Course[]>;
   coursesWithID: any;

   courseDoc: AngularFirestoreDocument<Course>;
   course: Observable<Course>;

  constructor(private firestore: AngularFirestore) {
   this.coursesCol = this.firestore.collection('Course');
   this.courses = this.coursesCol.valueChanges();
   this.coursesWithID = this.coursesCol.snapshotChanges().pipe(
      map(changes => {
         return changes.map(a => {
            const data = a.payload.doc.data() as Course;
            const id = a.payload.doc.id;
            return { id, data };
         });
      })
   );
   }
  getCourses() {
      return this.courses;
   }
   getCourse(courseID) {
      this.courseDoc = this.firestore.doc('Course/' + courseID);
      this.course = this.courseDoc.valueChanges();
      return this.course;
   }
   getCoursesWithID() {
      return this.coursesWithID;
   }
   addCourse(name: string, ects: number, image: string, description: string, semester: number, formOfCourse: string, maxStudents: number) {
      const course: Course = {
        idd: (12).toString(),
        name,
        ects,
        image,
        description,
        semester,
        formOfCourse,
        maxStudents,
        grade: 0,
        numberOfStudents: 0,
        sumOfGrade: 0,
        numberOfVotes: 0
      };
      this.createCourse(course);
      this.changeID(course);
    }
    changeID(c: Course) {
      this.coursesWithID.subscribe(x => {
         x.forEach(a => {
            if (a.data.idd === '12') {
               this.editCourse(a.id, a.id, c.name, c.ects, c.image, c.description, c.semester, c.formOfCourse, c.maxStudents, c.grade, c.numberOfStudents, c.numberOfVotes, c.sumOfGrade);
            }
         });
       } );
    }
  createCourse(course: Course) {
      return this.firestore.collection('Course').add(course);
  }
  editCourse(cID: string, idd: string, name: string, ects: number, image: string, description: string, semester: number, formOfCourse: string, maxStudents: number, grade: number, numberOfStudents: number, numberOfVotes: number, sumOfGrade: number) {
   const course: Course = {
      idd,
      name,
      ects,
      image,
      description,
      semester,
      formOfCourse,
      maxStudents,
      grade,
      numberOfStudents,
      sumOfGrade,
      numberOfVotes
    };
   this.updateCourse(course, cID);
 }
  updateCourse(course: Course, courseID: string) {
     this.firestore.collection('Course').doc(courseID).set(course);
   }
   deleteCourse(courseID: string) {
      this.firestore.doc('Course/' + courseID).delete();
   }
}
