import { combineReducers } from 'redux';
import books from './books';
import errors from './errors';
import success from './success';

export default combineReducers({
  books,
  errors,
  success,
});
