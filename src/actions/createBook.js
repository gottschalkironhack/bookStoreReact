import { ADD_BOOK } from './actionTypes';
import { createBook } from '../services/BookApi';
import { handleApiErrors } from './handleApiErrors';
import { resetApiErrors } from './apiErrors';
import { resetApiSuccess, setApiSuccess } from './apiSuccess';

const addBookToStore = book => ({ type: ADD_BOOK, book });

export const handleCreateBook = book => dispatch => (
  new Promise((resolve, reject) => {
    dispatch(resetApiErrors());
    dispatch(resetApiSuccess());
    createBook(book)
      .then((newBook) => {
        dispatch(setApiSuccess(`Book ${newBook.title} has been saved succesfully`));
        dispatch(addBookToStore(newBook));
        resolve(newBook);
      }).catch((error) => {
        dispatch(handleApiErrors(error, 'Book could not be saved'));
        reject(error);
      });
  }));
