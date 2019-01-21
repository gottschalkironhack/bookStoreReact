import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../storeConfig/history';
import books from './books';
import errors from './errors';
import success from './success';
import fetching from './fetching';

export default combineReducers({
  router: connectRouter(history),
  books,
  errors,
  success,
  fetching,
});
