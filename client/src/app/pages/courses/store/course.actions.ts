import { Action } from '@ngrx/store';
import { Course } from 'app/shared/models/course.model';

export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
export const GET_COURSE_REQUEST_SUCCESS = 'GET_COURSE_REQUEST_SUCCESS';
export const GET_COURSE_REQUEST_FAILED = 'GET_COURSE_REQUEST_FAILED';

export const CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST';
export const CREATE_COURSE_REQUEST_SUCCESS = 'CREATE_COURSE_REQUEST_SUCCESS';
export const CREATE_COURSE_REQUEST_FAILED = 'CREATE_COURSE_REQUEST_FAILED';

export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST';
export const UPDATE_COURSE_REQUEST_SUCCESS = 'UPDATE_COURSE_REQUEST_SUCCESS';
export const UPDATE_COURSE_REQUEST_FAILED = 'UPDATE_COURSE_REQUEST_FAILED';

export const CLEAR_STATE = 'CLEAR_STATE';

// Get Course

export class GetCourseRequest implements Action {
  public readonly type = GET_COURSE_REQUEST;
  constructor(public id: number) { }
}

// tslint:disable-next-line:max-classes-per-file
export class GetCourseRequestSuccess implements Action {
  public readonly type = GET_COURSE_REQUEST_SUCCESS;
  constructor(public course: Course) { }
}

// tslint:disable-next-line:max-classes-per-file
export class GetCourseRequestFailed implements Action {
  public readonly type = GET_COURSE_REQUEST_FAILED;
  constructor() { }
}

// Create Course

// tslint:disable-next-line:max-classes-per-file
export class CreateCourseRequest implements Action {
  public readonly type = CREATE_COURSE_REQUEST;
  constructor(public course: Course) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CreateCourseRequestSuccess implements Action {
  public readonly type = CREATE_COURSE_REQUEST_SUCCESS;
  constructor(public course: Course) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CreateCourseRequestFailed implements Action {
  public readonly type = CREATE_COURSE_REQUEST_FAILED;
  constructor() { }
}

// Update Course

// tslint:disable-next-line:max-classes-per-file
export class UpdateCourseRequest implements Action {
  public readonly type = UPDATE_COURSE_REQUEST;
  constructor(public course: Course) { }
}

// tslint:disable-next-line:max-classes-per-file
export class UpdateCourseRequestSuccess implements Action {
  public readonly type = UPDATE_COURSE_REQUEST_SUCCESS;
  constructor(public course: Course) { }
}

// tslint:disable-next-line:max-classes-per-file
export class UpdateCourseRequestFailed implements Action {
  public readonly type = UPDATE_COURSE_REQUEST_FAILED;
  constructor() { }
}

// Clear State

// tslint:disable-next-line:max-classes-per-file
export class ClearState implements Action {
  public readonly type = CLEAR_STATE;
  constructor() { }
}

export type All =
      GetCourseRequest
    | GetCourseRequestSuccess
    | GetCourseRequestFailed
    | CreateCourseRequest
    | CreateCourseRequestSuccess
    | CreateCourseRequestFailed
    | UpdateCourseRequest
    | UpdateCourseRequestSuccess
    | UpdateCourseRequestFailed
    | ClearState;
