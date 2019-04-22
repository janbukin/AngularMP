import { Action } from '@ngrx/store';
import { Course } from 'app/shared/models/course.model';

export const GET_COURSES_REQUEST = 'GET_COURSES_REQUEST';
export const GET_COURSES_REQUEST_SUCCESS = 'GET_COURSES_REQUEST_SUCCESS';
export const GET_COURSES_REQUEST_FAILED = 'GET_COURSES_REQUEST_FAILED';

export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST';
export const DELETE_COURSE_REQUEST_SUCCESS = 'DELETE_COURSE_REQUEST_SUCCESS';
export const DELETE_COURSE_REQUEST_FAILED = 'DELETE_COURSE_REQUEST_FAILED';

export const CHANGE_FILTER = 'CHANGE_FILTER';

// Get Course List

export class GetCoursesRequest implements Action {
    public readonly type = GET_COURSES_REQUEST;
    constructor() { }
}

// tslint:disable-next-line:max-classes-per-file
export class GetCoursesRequestSuccess implements Action {
    public readonly type = GET_COURSES_REQUEST_SUCCESS;
    constructor(public courses: Course[]) { }
}

// tslint:disable-next-line:max-classes-per-file
export class GetCoursesRequestFailed implements Action {
    public readonly type = GET_COURSES_REQUEST_FAILED;
    constructor() { }
}

// Delete Course

// tslint:disable-next-line:max-classes-per-file
export class DeleteCourseRequest implements Action {
    public readonly type = DELETE_COURSE_REQUEST;
    constructor(public id: number) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DeleteCourseRequestSuccess implements Action {
    public readonly type = DELETE_COURSE_REQUEST_SUCCESS;
    constructor() { }
}

// tslint:disable-next-line:max-classes-per-file
export class DeleteCourseRequestFailed implements Action {
    public readonly type = DELETE_COURSE_REQUEST_FAILED;
    constructor() { }
}

// Filter

// tslint:disable-next-line:max-classes-per-file
export class ChangeFilter implements Action {
    public readonly type = CHANGE_FILTER;
    constructor(public filter: string) { }
  }

export type All =
    GetCoursesRequest
    | GetCoursesRequestSuccess
    | GetCoursesRequestFailed
    | DeleteCourseRequest
    | DeleteCourseRequestSuccess
    | DeleteCourseRequestFailed
    | ChangeFilter;
