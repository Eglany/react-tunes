export const PLAY_MUSIC = 'PLAY_MUSIC';

export const playingMusic = (music) => ({
  type: PLAY_MUSIC,
  payload: music,
});
