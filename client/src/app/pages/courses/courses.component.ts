import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Console } from '@angular/core/src/console';
import { Store } from '@ngrx/store';

import { CourseService } from 'app/services';
import { Course } from 'app/shared/models/course.model';
import { RequestQuery } from 'app/shared/models/request-query.model';
import { SearchPipe } from './pipes';
import { OrderByPipe } from 'app/shared/pipes';
import * as CoursesActions from './store';
import { CoursesState, getCourses } from './store/courses.reducer';

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
    private coursesState: Observable<CoursesState>;

    constructor(private searchPipe: SearchPipe, private store: Store<any>) {
      this.coursesState = this.store.select((state: any) => state.courses);
      this.store.select(getCourses)
      .subscribe((courses: Course[]) => {
        this.courses = courses;
        this.filteredCourses = courses;
      });
    }

    public ngOnInit() {
      this.store.dispatch(new CoursesActions.GetCoursesRequest());
    }

    public onDelete(id: number): void {
      if (confirm('Do you really want to delete this course?')) {
        this.store.dispatch(new CoursesActions.DeleteCourseRequest(id));
        this.store.dispatch(new CoursesActions.GetCoursesRequest());
      }
    }

    public onSearch(query: string): void {
      this.filteredCourses = this.searchPipe.transform(this.courses, query);
      //this.store.dispatch(new CoursesActions.ChangeFilter(query));
    }

    public ngOnDestroy(): void {
      if (typeof this.subscription !== 'undefined' && this.subscription !== null) {
        this.subscription.unsubscribe();
      }
    }
  }
