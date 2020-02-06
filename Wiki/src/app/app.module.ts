import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course-list/course/course.component';
import { CourseInformationComponent } from './course-list/course-information/course-information/course-information.component';
import { FilterPipe } from './filters/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseEditionComponent } from './course-edition/course-edition/course-edition.component';
import { DeleteCourseComponent } from './course-edition/delete-course/delete-course.component';
import { AddCourseComponent } from './course-edition/add-course/add-course.component';
import { FilterByEctsPipe } from './filters/filter-by-ects.pipe';
import { FilterBySemesterPipe } from './filters/filter-by-semester.pipe';
import { FilterByGradePipe } from './filters/filter-by-grade.pipe';
import { EditCourseComponent } from './course-edition/edit-course/edit-course.component';
import { EditCourseItemComponent } from './course-edition/edit-course/edit-course-item/edit-course-item.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SignComponent } from './auth/sign/sign.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MyCourseComponent } from './my-courses/my-course/my-course.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseListComponent,
    CourseComponent,
    CourseInformationComponent,
    FilterPipe,
    CourseEditionComponent,
    DeleteCourseComponent,
    AddCourseComponent,
    FilterByEctsPipe,
    FilterBySemesterPipe,
    FilterByGradePipe,
    EditCourseComponent,
    EditCourseItemComponent,
    LoginComponent,
    RegisterComponent,
    SignComponent,
    MyCoursesComponent,
    MyCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFirestoreModule, // do obslugi baz danych
    AngularFireDatabaseModule, // do obslugi baz danych,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
