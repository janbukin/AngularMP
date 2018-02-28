import { createSelector } from '@ngrx/store';

import { Course } from 'app/shared/models/course.model';
import * as CoursesActions from './courses.actions';

export type Action = CoursesActions.All;

export interface CoursesState {
  courses: Course[];
  filter: string;
  loading: boolean;
}

export const defaultCoursesState: CoursesState = {
  courses: [],
  filter: '',
  loading: false,
};

export const getCoursesState = (state: any) => state.courses;
export const getCourses = createSelector(getCoursesState, (state: CoursesState) => state.courses);
export const getCoursesSearch = createSelector(getCoursesState, (state: CoursesState) => state.filter);

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function CoursesReducer(state: CoursesState = defaultCoursesState, action: Action) {
  switch (action.type) {

    // Get Courses
    case CoursesActions.GET_COURSES_REQUEST: {
      return newState(state, { loading: true });
    }
    case CoursesActions.GET_COURSES_REQUEST_SUCCESS: {
      return newState(state, {
        loading: false,
        courses: action.courses
      });
    }
    case CoursesActions.GET_COURSES_REQUEST_FAILED: {
      return newState(state, { loading: false, courses: [] });
    }

    // Delete Course
    case CoursesActions.DELETE_COURSE_REQUEST: {
      return newState(state, { loading: true });
    }
    case CoursesActions.DELETE_COURSE_REQUEST_SUCCESS: {
      return newState(state, { loading: false });
    }
    case CoursesActions.DELETE_COURSE_REQUEST_FAILED: {
      return newState(state, { loading: false });
    }

    // Change filter
    case CoursesActions.CHANGE_FILTER: {
      return newState(state, { filter: action.filter });
    }

    default:
      return state;
  }
}
