import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';

const courseRoutes: Routes = [
  { path: 'courses/:id',  component: CourseComponent },
];

export const routes = RouterModule.forChild(courseRoutes);
