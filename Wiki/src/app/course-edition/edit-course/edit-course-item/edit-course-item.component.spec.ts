import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseItemComponent } from './edit-course-item.component';

describe('EditCourseItemComponent', () => {
  let component: EditCourseItemComponent;
  let fixture: ComponentFixture<EditCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
