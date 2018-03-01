import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as CoursesActions from './courses.actions';
import { getCoursesSearch } from './courses.reducer';
import { CourseService } from 'app/services';
import { Course } from 'app/shared/models/course.model';
import { RequestQuery } from '../../../shared/models/request-query.model';

type Action = CoursesActions.All;

@Injectable()
export class CoursesEffects {

  @Effect()
  public getCourses: Observable<Action> =
    this.actions.ofType(CoursesActions.GET_COURSES_REQUEST)
    .pipe(
      withLatestFrom(this.store.select(getCoursesSearch)),
      mergeMap(() => {
        // TODO: Replace by real parameters.
        let query = { start: 0, count: 10, sort: '' } as RequestQuery;
        return this.coursesService.getAll(query)
        .pipe(
          map((response: Course[]) =>
            new CoursesActions.GetCoursesRequestSuccess(response)),
          catchError((e: any) => of(new CoursesActions.GetCoursesRequestFailed()))
        );
      })
    );

  @Effect()
  public deleteCourse: Observable<Action> =
    this.actions.ofType(CoursesActions.DELETE_COURSE_REQUEST)
    .pipe(mergeMap((action: CoursesActions.DeleteCourseRequest) => {
      return this.coursesService.delete(action.id)
      .pipe(
        map(() => new CoursesActions.DeleteCourseRequestSuccess()),
        catchError((e: any) => of(new CoursesActions.DeleteCourseRequestFailed()))
      );
    }));

  @Effect()
  public deleteCourseSucess: Observable<Action> =
    this.actions.ofType(CoursesActions.DELETE_COURSE_REQUEST_SUCCESS)
    .pipe(mergeMap((action: CoursesActions.DeleteCourseRequestSuccess) => {
      return of(new CoursesActions.GetCoursesRequest());
    }));

  @Effect()
  public changeFilter: Observable<Action> =
    this.actions.ofType(CoursesActions.CHANGE_FILTER)
    .pipe(mergeMap((action: CoursesActions.ChangeFilter) => {
      return of(new CoursesActions.GetCoursesRequest());
    }));

  constructor(
    private coursesService: CourseService,
    private store: Store<any>,
    private actions: Actions
  ) { }
}
