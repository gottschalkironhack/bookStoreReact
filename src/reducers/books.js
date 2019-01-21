import {
  ADD_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  books: [],
  loading: true,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.books,
      };

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        books: [],
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };

    case UPDATE_BOOK:
      return {
        ...state,
        books: [
          ...state.books.map((book) => {
            if (book._id !== action.book._id) {
              return book;
            }
            return {
              _id: action.book._id,
              title: action.book.title,
              author: action.book.author,
              description: action.book.description,
              price: action.book.price,
            };
          }),
        ],
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: [
          ...state.books.filter(book => book._id !== action.id),
        ],
      };
    default:
      return state;
  }
}
