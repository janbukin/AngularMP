import { Routes, RouterModule } from '@angular/router';
import { CourseTileComponent } from './course-tile.component';

const courseRoutes: Routes = [
  { path: 'courses/:id',  component: CourseTileComponent },
];

export const routes = RouterModule.forChild(courseRoutes);