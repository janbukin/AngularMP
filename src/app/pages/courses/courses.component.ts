import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CourseService } from 'app/services';
import { Course } from 'app/shared/models/course.model';
import { OrderByPipe, SearchPipe } from './pipes';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: [ './courses.styles.scss' ],
    providers: [ SearchPipe ]
  })
  export class CoursesComponent implements OnInit {
    private courses: Course[] = [];
    private filteredCourses: Course[];
    private isLoading: boolean = false;

    constructor(private courseService: CourseService, private searchPipe: SearchPipe) {}
    //constructor(private courseService: CourseService) {}

    public ngOnInit() {
      this.isLoading = true;
      this.load();
      this.isLoading = false;
    }

    public load(): void {
      this.courses = this.courseService.getAll();
      this.filteredCourses = this.courses;
    }

    public onDelete(id: number): void {
      if (confirm('Do you really want to delete this course?')) {
        console.log(id + ' is deleted');
      }
    }

    public onSearch(query: string): void {
      this.filteredCourses = this.searchPipe.transform(this.courses, query);
      console.log(query);
      console.log(this.courses);
      console.log(this.filteredCourses);
    }
  }
