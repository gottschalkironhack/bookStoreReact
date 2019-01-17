import { getBookList } from '../services/BookApi';
import { handleErrors } from './handleErrors';
import { fetchBooksSuccess, fetchBooksBegin } from './receiveBooks';

export const getInitialData = () => (dispatch) => {
  dispatch(fetchBooksBegin());
  getBookList()
    .then((books) => {
      console.log('books in initialData', books);
      dispatch(fetchBooksSuccess(books));
    })
    .catch((error) => {
      handleErrors(error);
    });
};
