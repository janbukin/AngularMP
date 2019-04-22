import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Course } from 'app/shared/models/course.model';
import { DurationPipe } from 'app/shared/pipes';
import { CourseService } from 'app/services';
import * as CourseActions from '../store/course.actions';
import { getCourse, CourseState } from '../store/course.reducer';

@Component({
    selector: 'save-course',
    templateUrl: './save-course.component.html',
    styleUrls: [ './save-course.styles.scss' ]
  })
  export class SaveCourseComponent implements OnInit, OnDestroy {
    public course: Course = {} as Course;
    public subscription: Subscription;
    private courseState: Observable<CourseState>;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private store: Store<any>
    ) { }

    public ngOnInit() {
      let id: string;
      this.route.params.subscribe((data) => {
        id = data['id'];

        if (typeof id === 'undefined' || id === null) {
          this.course.date = new Date();
        } else {
          this.load(+id);
        }
      });
    }

    public load(id: number): void {
      this.store.dispatch(new CourseActions.GetCourseRequest(id));
      this.store.select(getCourse).subscribe((course: Course) => {
        this.course = course;
      });
    }

    public onSubmit(): void {
      this.save();
    }

    public save(): void {
      if (typeof this.course.id === 'undefined' || this.course.id === null) {
        this.store.dispatch(new CourseActions.UpdateCourseRequest(this.course));
      } else {
        this.store.dispatch(new CourseActions.CreateCourseRequest(this.course));
      }

      this.router.navigate(['/courses']);
    }

    public cancel(): void {
      this.router.navigate(['/courses']);
    }

    public ngOnDestroy(): void {
      if (typeof this.subscription !== 'undefined' && this.subscription !== null) {
        this.subscription.unsubscribe();
      }
    }
  }
