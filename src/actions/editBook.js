import { UPDATE_BOOK } from './actionTypes';
import { editBook } from '../services/BookApi';
import { handleApiErrors } from './handleApiErrors';
import { resetApiErrors } from './apiErrors';
import { resetApiSuccess, setApiSuccess } from './apiSuccess';

const updateBookFromStore = (book, id) => ({
  type: UPDATE_BOOK,
  book,
  id,
});

export const handleEditBook = (values, id) => dispatch => (
  new Promise((resolve, reject) => {
    dispatch(resetApiErrors());
    dispatch(resetApiSuccess());
    editBook(values, id)
      .then((updatedBook) => {
        dispatch(setApiSuccess(`Book ${updatedBook.title} has been updated succesfully`));
        dispatch(updateBookFromStore(updatedBook, id));
        resolve(updatedBook);
      }).catch((error) => {
        handleApiErrors(error, 'Book could not be updated');
        reject(error);
      });
  }));
