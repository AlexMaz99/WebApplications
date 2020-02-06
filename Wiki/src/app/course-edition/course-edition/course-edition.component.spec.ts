import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditionComponent } from './course-edition.component';

describe('CourseEditionComponent', () => {
  let component: CourseEditionComponent;
  let fixture: ComponentFixture<CourseEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
