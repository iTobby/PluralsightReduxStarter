import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses //ES6 Short Hand Property Name
  };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch(err => {
      throw(err);
    });
  };
}
