import { PLAY_MUSIC } from '../actions.js/playingNowAction';

const INITIAL_STATE = {};

const playingNowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PLAY_MUSIC:
    return action.payload;
  default:
    return state;
  }
};

export default playingNowReducer;
