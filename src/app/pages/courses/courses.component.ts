import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared-models/course.model';
import { CourseService } from '../../shared-services/courses/course.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
  })
  export class CoursesComponent implements OnInit {
    private courses: Observable<Course[]>;
    private isLoading: boolean = false;

    constructor(private courseService: CourseService) {
      this.courses = new Observable<Course[]>();
    }

    public ngOnInit() {
      this.isLoading = true;

      this.courses = Observable.of(this.courseService.get()).map((o: any) => o);
      this.isLoading = false;
    }
  }
