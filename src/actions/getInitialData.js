import { getBookList } from '../services/BookApi';
import { handleApiErrors } from './handleApiErrors';
import { fetchBooksSuccess, fetchBooksBegin } from './receiveBooks';
import { resetApiErrors } from './apiErrors';
import { resetApiSuccess } from './apiSuccess';

export const getInitialData = () => (dispatch) => {
  dispatch(resetApiErrors());
  dispatch(fetchBooksBegin());
  dispatch(resetApiSuccess());
  getBookList()
    .then((books) => {
      dispatch(fetchBooksSuccess(books));
    })
    .catch((error) => {
      dispatch(handleApiErrors(error, 'Data could not be retrieved'));
    });
};
