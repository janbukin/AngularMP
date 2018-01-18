import { Routes, RouterModule } from '@angular/router';
import { SaveCourseComponent } from './save-course.component';

const courseRoutes: Routes = [
  { path: 'course/:id',  component: SaveCourseComponent }
];

export const routes = RouterModule.forChild(courseRoutes);
