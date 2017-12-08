import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared-models/course.model';
import { CourseService } from '../../shared-services/';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: [ './courses.styles.scss' ]
  })
  export class CoursesComponent implements OnInit {
    //private courses: Observable<Course[]>;
    private staticCourses: Course[];
    private isLoading: boolean = false;

    constructor(private courseService: CourseService) {
      //this.courses = new Observable<Course[]>();
      this.staticCourses = [];
    }

    public ngOnInit() {
      this.isLoading = true;
      //this.courses = Observable.of(this.courseService.get()).map((o: any) => o);
      this.staticCourses = this.courseService.get();
      this.isLoading = false;
    }

    public delete(id: number) {
      console.log(id + ' is deleted');
    }
  }
