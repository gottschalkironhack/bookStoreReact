import { DELETE_BOOK } from './actionTypes';
import { deleteBook } from '../services/BookApi';
import { handleApiErrors } from './helpers/handleApiErrors';
import { resetApiErrors, setApiErrors } from './apiErrors';
import { resetApiSuccess, setApiSuccess } from './apiSuccess';

const deleteBookFromStore = id => ({
  type: DELETE_BOOK,
  id,
});

export const handleDeleteBook = id => (dispatch) => {
  dispatch(resetApiErrors());
  dispatch(resetApiSuccess());
  deleteBook(id)
    .then((deletedBook) => {
      dispatch(setApiSuccess(`Book ${deletedBook.title} has been deleted succesfully`));
      dispatch(deleteBookFromStore(deletedBook._id));
    }).catch((error) => {
      const errorMessage = handleApiErrors(error, 'Book could not be deleted');
      dispatch(setApiErrors(errorMessage));
    });
};
