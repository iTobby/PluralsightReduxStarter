import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, //courses: courses
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
