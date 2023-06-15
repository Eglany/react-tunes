import { combineReducers } from 'redux';
import playingNowReducer from './playingNowReducer';
import searchAlbumReducer from './searchAlbumReducer';
import fetchMusicsReducer from './fetchMusicsReducer';

const rootReducer = combineReducers({
  playingNowReducer,
  searchAlbumReducer,
  fetchMusicsReducer,
});

export default rootReducer;
