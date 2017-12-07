import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../shared-models/course.model';

@Component({
    selector: 'course-tile',
    templateUrl: './course-tile.component.html'
  })
  export class CourseTileComponent implements OnInit {
    @Input() public course: Course;

    constructor() { }

    public ngOnInit() { }
  }
