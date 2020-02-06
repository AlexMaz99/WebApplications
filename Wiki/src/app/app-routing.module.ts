import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseInformationComponent } from './course-list/course-information/course-information/course-information.component';
import { CourseEditionComponent } from './course-edition/course-edition/course-edition.component';
import { DeleteCourseComponent } from './course-edition/delete-course/delete-course.component';
import { AddCourseComponent } from './course-edition/add-course/add-course.component';
import { EditCourseComponent } from './course-edition/edit-course/edit-course.component';
import { EditCourseItemComponent } from './course-edition/edit-course/edit-course-item/edit-course-item.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SignComponent } from './auth/sign/sign.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CourseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:idd',
    component: CourseInformationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myCourses',
    component: MyCoursesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign',
    component: SignComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'courseEdition',
    component: CourseEditionComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'deleteCourse',
        component: DeleteCourseComponent
      },
      {
        path: 'addCourse',
        component: AddCourseComponent
      },
      {
        path: 'editCourse',
        component: EditCourseComponent,
        pathMatch: 'full'
      },
      {
        path: 'editCourse/:idd',
        component: EditCourseItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
