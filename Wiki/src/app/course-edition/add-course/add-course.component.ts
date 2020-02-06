import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/course-list/course.service';
import { FirestoreService } from 'src/app/auth/firestore.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  constructor(
    private courseService: CourseService,
    private fireStore: FirestoreService,
    private route: Router
  ) { }

  private initForm() {
    let name: string;
    let ects: number;
    let image: string;
    let description: string;
    let semester: number;
    let formOfCourse: string;
    let maxStudents: number;

    this.courseForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      ects: new FormControl(ects, Validators.required),
      image: new FormControl(image, Validators.required),
      description: new FormControl(description, Validators.required),
      semester: new FormControl(semester, Validators.required),
      formOfCourse: new FormControl(formOfCourse, Validators.required),
      maxStudents: new FormControl(maxStudents, Validators.required),
    });
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    const name: string = this.courseForm.value.name;
    const ects: number = this.courseForm.value.ects;
    const image: string = this.courseForm.value.image;
    const description: string = this.courseForm.value.description;
    const semester: number = this.courseForm.value.semester;
    const formOfCourse: string = this.courseForm.value.formOfCourse;
    const maxStudents: number = this.courseForm.value.maxStudents;
    this.fireStore.addCourse(name, ects, image, description, semester, formOfCourse, maxStudents);
    this.route.navigate(['/courses']);
  }

}
