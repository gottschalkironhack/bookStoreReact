import {
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  status: false,
};

export default function fetching(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        status: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        status: false,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}
