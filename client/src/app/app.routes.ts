import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './no-content';
import { SaveCourseComponent } from './pages/courses/save/save-course.component';
import { AuthorizationGuard } from './shared/services';

export const ROUTES: Routes = [
  { path: '',   redirectTo: 'courses', pathMatch: 'full', canActivate: [AuthorizationGuard] },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'courses',  component: CoursesComponent, canActivate: [AuthorizationGuard] },
  { path: 'courses/new',  component: SaveCourseComponent, canActivate: [AuthorizationGuard] },
  { path: 'courses/:id',  component: SaveCourseComponent, canActivate: [AuthorizationGuard] },
  { path: '**',    component: NoContentComponent }
];
