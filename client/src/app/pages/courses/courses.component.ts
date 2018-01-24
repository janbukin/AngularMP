import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'app/services';
import { Course } from 'app/shared/models/course.model';
import { RequestQuery } from 'app/shared/models/request-query.model';
import { SearchPipe } from './pipes';
import { OrderByPipe } from 'app/shared/pipes';
import { Subscription } from 'rxjs';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: [ './courses.styles.scss' ],
    providers: [ SearchPipe ]
  })
  export class CoursesComponent implements OnInit, OnDestroy {
    public courses: Course[] = [];
    public filteredCourses: Course[] = [];
    public subscription: Subscription;
    private isLoading: boolean = false;

    constructor(private courseService: CourseService, private searchPipe: SearchPipe) {}

    public ngOnInit() {
      this.load();
    }

    public load(): void {
      let query: RequestQuery = { start: 0, count: 10, sort: '' };
      this.subscription = this.courseService.getAll(query)
        .subscribe((courses: Course[]) => {
          this.courses = courses;
          this.filteredCourses = courses;
        });

      // .filter((x: Course) => {
      //     return x.date.getDate() > (new Date().getDate() - 14);
      // });
    }

    public onDelete(id: number): void {
      if (confirm('Do you really want to delete this course?')) {
        this.courseService.delete(id);

        let deletedCourse = this.courses.find((x: Course) => x.id === id);
        this.courses = this.courses.filter((c: Course) => c !== deletedCourse);
        this.filteredCourses = this.filteredCourses.filter((c: Course) => c !== deletedCourse);

        console.log(id + ' is deleted');
      }
    }

    public onSearch(query: string): void {
      this.filteredCourses = this.searchPipe.transform(this.courses, query);
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
