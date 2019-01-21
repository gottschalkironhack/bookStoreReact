import { UPDATE_BOOK } from './actionTypes';
import { editBook } from '../services/BookApi';
import { handleApiErrors } from './helpers/handleApiErrors';
import { resetApiErrors, setApiErrors } from './apiErrors';
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
        const errorMessage = handleApiErrors(error, 'Book could not be updated');
        dispatch(setApiErrors(errorMessage));
        reject(error);
      });
  }));
