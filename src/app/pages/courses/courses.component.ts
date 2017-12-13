import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CourseService } from 'app/services';
import { Course } from 'app/shared/models/course.model';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: [ './courses.styles.scss' ]
  })
  export class CoursesComponent implements OnInit {
    private courses: Course[];
    private isLoading: boolean = false;

    constructor(private courseService: CourseService) {
      this.courses = [];
    }

    public ngOnInit() {
      this.isLoading = true;
      this.load();
      this.isLoading = false;
    }

    public load(): void {
      this.courses = this.courseService.getAll();
    }

    public delete(id: number): void {
      if (confirm('Do you really want to delete this course?')) {
        console.log(id + ' is deleted');
      }
    }
  }
