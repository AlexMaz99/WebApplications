import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edition',
  templateUrl: './course-edition.component.html',
  styleUrls: ['./course-edition.component.css']
})
export class CourseEditionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
