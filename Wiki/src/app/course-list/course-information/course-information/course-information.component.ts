import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course-list/course.service';
import { Course } from 'src/app/models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/my-courses/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-information',
  templateUrl: './course-information.component.html',
  styleUrls: ['./course-information.component.css']
})
export class CourseInformationComponent implements OnInit {
  course: Course;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private userService: UserService) { }

  ngOnInit() {
    this.route.params.pipe(map(params => params['idd'])).subscribe(idd => {
      this.courseService.getCourse(idd).subscribe(c => this.course = c);
      this.id = idd;
    });
  }
  joinCourse() {
    this.userService.joinCourse(this.id);
  }

}
