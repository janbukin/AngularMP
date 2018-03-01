import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as CourseActions from './course.actions';
import { CourseService } from 'app/services';
import { Course } from 'app/shared/models/course.model';

type Action = CourseActions.All;

@Injectable()
export class CourseEffects {

  @Effect()
  public getCourse: Observable<Action> =
    this.actions.ofType(CourseActions.GET_COURSE_REQUEST)
      .pipe(mergeMap((action: CourseActions.GetCourseRequest) => {
        return this.courseService.getById(action.id)
          .pipe(
            map((response: Course) => new CourseActions.GetCourseRequestSuccess(response)),
            catchError((e: any) => of(new CourseActions.GetCourseRequestFailed()))
          );
      }));

  @Effect()
  public createCourse: Observable<Action> =
    this.actions.ofType(CourseActions.CREATE_COURSE_REQUEST)
      .pipe(mergeMap((action: CourseActions.CreateCourseRequest) => {
        return this.courseService.create(action.course)
          .pipe(
            map((response: Course) => new CourseActions.CreateCourseRequestSuccess(response)),
            catchError((e: any) => of(new CourseActions.CreateCourseRequestFailed()))
          );
      }));

  @Effect({ dispatch: false })
  public createCourseSucess =
    this.actions.ofType(CourseActions.CREATE_COURSE_REQUEST_SUCCESS)
      .pipe(mergeMap(() => {
        this.router.navigate(['/courses']);
        return of();
      }));

  @Effect()
  public updateCourse: Observable<Action> =
  this.actions.ofType(CourseActions.UPDATE_COURSE_REQUEST)
    .pipe(mergeMap((action: CourseActions.UpdateCourseRequest) => {
      return this.courseService.update(action.course)
        .pipe(
          map((response: Course) => new CourseActions.UpdateCourseRequestSuccess(response)),
          catchError((e: any) => of(new CourseActions.UpdateCourseRequestFailed()))
        );
    }));

  @Effect({ dispatch: false })
  public updateCourseSucess =
    this.actions.ofType(CourseActions.UPDATE_COURSE_REQUEST_SUCCESS)
      .pipe(mergeMap(() => {
        this.router.navigate(['/courses']);
        return of();
      }));

  constructor(
    private courseService: CourseService,
    private router: Router,
    private store: Store<any>,
    private actions: Actions) {
  }
}
