import { createSelector } from '@ngrx/store';

import { Course } from 'app/shared/models/course.model';
import * as CourseActions from './course.actions';
export type Action = CourseActions.All;

export interface CourseState {
  course: Course;
}

export const defaultCourseState: CourseState = {
  course: {} as Course,
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export const getCourseState = (state: any) => state.course;
export const getCourse = createSelector(getCourseState, (state: CourseState) => state.course);

export function CourseReducer(state: CourseState = defaultCourseState, action: Action) {
  switch (action.type) {

    // Get Course
    case CourseActions.GET_COURSE_REQUEST: {
      return newState(state, { });
    }
    case CourseActions.GET_COURSE_REQUEST_SUCCESS: {
      return newState(state, { course: action.course });
    }
    case CourseActions.GET_COURSE_REQUEST_FAILED: {
      return newState(state, { course: null });
    }

    // Create Course
    case CourseActions.CREATE_COURSE_REQUEST: {
      return newState(state, { });
    }
    case CourseActions.CREATE_COURSE_REQUEST_SUCCESS: {
      return newState(state, { });
    }
    case CourseActions.CREATE_COURSE_REQUEST_FAILED: {
      return newState(state, { });
    }

    // Update Course
    case CourseActions.UPDATE_COURSE_REQUEST: {
      return newState(state, { });
    }
    case CourseActions.UPDATE_COURSE_REQUEST_SUCCESS: {
      return newState(state, { });
    }
    case CourseActions.UPDATE_COURSE_REQUEST_FAILED: {
      return newState(state, { });
    }

    // Clear State
    case CourseActions.CLEAR_STATE:
      return newState(state, { ...defaultCourseState });

    default:
      return state;
  }
}
