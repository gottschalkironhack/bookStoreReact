import {
  SET_API_ERROR,
  RESET_API_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: null,
  status: false,
};

export default function errors(state = initialState, action) {
  switch (action.type) {
    case SET_API_ERROR:
      return {
        ...state,
        message: action.message,
        status: true,
      };
    case RESET_API_ERROR:
      return {
        ...state,
        message: null,
        status: false,
      };
    default:
      return state;
  }
}
