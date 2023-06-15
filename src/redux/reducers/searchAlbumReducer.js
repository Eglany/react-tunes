import {
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
} from '../actions.js/searchAlbumAction';

const INITIAL_STATE = {
  isFetching: false,
  albums: [],
  errorMessage: '',
};

const searchAlbumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_STARTED:
    return {
      ...state,
      albums: [],
      isFetching: true,
    };
  case REQUEST_SUCCESSFUL:
    return {
      ...state,
      isFetching: false,
      albums: action.payload,
      errorMessage: '',
    };
  case REQUEST_FAILED:
    return {
      ...state,
      isFetching: false,
      albums: [],
      errorMessage: action.payload,
    };
  default:
    return state;
  }
};

export default searchAlbumReducer;
