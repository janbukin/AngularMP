import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { CourseComponent } from './pages/courses/course';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  //{ path: 'courses',  component: CoursesComponent },
  //{ path: 'course',  component: CourseComponent },
  { path: '**',    component: NoContentComponent },
];
