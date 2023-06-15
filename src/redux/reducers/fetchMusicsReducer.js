import {
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
} from '../actions.js/searchAlbumAction';

const INITIAL_STATE = {
  isFetching: false,
  musics: [],
  errorMessage: '',
};

const fetchMusicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_STARTED:
    return {
      ...state,
      musics: [],
      isFetching: true,
    };
  case REQUEST_SUCCESSFUL:
    return {
      ...state,
      isFetching: false,
      musics: action.payload,
      errorMessage: '',
    };
  case REQUEST_FAILED:
    return {
      ...state,
      isFetching: false,
      musics: [],
      errorMessage: action.payload,
    };
  default:
    return state;
  }
};

export default fetchMusicsReducer;
