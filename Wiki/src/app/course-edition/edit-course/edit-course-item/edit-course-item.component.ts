import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/course-list/course.service';
import { map } from 'rxjs/operators';
import { FirestoreService } from 'src/app/auth/firestore.service';

@Component({
  selector: 'app-edit-course-item',
  templateUrl: './edit-course-item.component.html',
  styleUrls: ['./edit-course-item.component.css']
})
export class EditCourseItemComponent implements OnInit {
  courseForm: FormGroup;
  course: Course;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private firestore: FirestoreService
  ) { }

  private initForm() {
    const name: string = this.course.name;
    const ects: number = this.course.ects;
    const image: string = this.course.image;
    const description: string = this.course.description;
    const semester: number = this.course.semester;
    const formOfCourse: string = this.course.formOfCourse;
    const maxStudents: number = this.course.maxStudents;

    this.courseForm = new FormGroup({
      name: new FormControl(name),
      ects: new FormControl(ects),
      image: new FormControl(image),
      description: new FormControl(description),
      semester: new FormControl(semester),
      formOfCourse: new FormControl(formOfCourse),
      maxStudents: new FormControl(maxStudents),
    });
  }
  ngOnInit() {
    this.route.params.pipe(map(params => params['idd'])).subscribe(idd => {
      this.courseService.getCourse(idd).subscribe(c => {
        this.course = c;
        this.initForm();
      });
    });
  }
  onSubmit() {
    const idd: string = this.course.idd;
    const name: string = this.courseForm.value.name;
    const ects: number = this.courseForm.value.ects;
    const image: string = this.courseForm.value.image;
    const description: string = this.courseForm.value.description;
    const semester: number = this.courseForm.value.semester;
    const formOfCourse: string = this.courseForm.value.formOfCourse;
    const maxStudents: number = this.courseForm.value.maxStudents;

    this.firestore.editCourse(idd, idd, name, ects, image, description, semester, formOfCourse, maxStudents, this.course.grade, this.course.numberOfStudents, this.course.numberOfVotes, this.course.sumOfGrade);
    this.router.navigate(['/courses']);
  }

}
