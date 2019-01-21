import {
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from './actionTypes';
import { getBookList } from '../services/BookApi';
import { handleApiErrors } from './helpers/handleApiErrors';
import { resetApiErrors, setApiErrors } from './apiErrors';
import { resetApiSuccess } from './apiSuccess';

const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN,
});

const fetchBooksSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  books,
});

const fetchBooksFailure = () => ({
  type: FETCH_BOOKS_FAILURE,
});

export const getInitialBookData = () => (dispatch) => {
  dispatch(resetApiErrors());
  dispatch(fetchBooksBegin());
  dispatch(resetApiSuccess());
  getBookList()
    .then((books) => {
      dispatch(fetchBooksSuccess(books));
    })
    .catch((error) => {
      dispatch(fetchBooksFailure());
      const errorMessage = handleApiErrors(error, 'Data could not be retrieved');
      dispatch(setApiErrors(errorMessage));
    });
};
