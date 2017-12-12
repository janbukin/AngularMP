import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  //{ path: '',      component: CoursesComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: '**',    component: NoContentComponent },
];
