import { Component, Input } from '@angular/core';
import { Course } from '../../../shared-models/course.model';

@Component({
    selector: 'course-tile',
    templateUrl: './course-tile.component.html'
  })
  export class CourseTileComponent {
    @Input() public course: Course;
  }
