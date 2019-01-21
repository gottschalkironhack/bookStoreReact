import { DELETE_BOOK } from './actionTypes';
import { deleteBook } from '../services/BookApi';
import { handleApiErrors } from './handleApiErrors';
import { resetApiErrors } from './apiErrors';
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
      handleApiErrors(error);
    });
};
