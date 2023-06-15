const STORAGE_NAME = 'favorite_songs';
const GET_STORAGE = JSON.parse(localStorage.getItem(STORAGE_NAME));

export const createStore = () => {
  if (!GET_STORAGE) localStorage.setItem(STORAGE_NAME, '[]');
};

export const addFavoriteSong = (song) => {
  createStore();
  const data = [...GET_STORAGE, song];
  localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  console.log(GET_STORAGE);
};

export const songAlreadyFavorite = (songId) => {
  console.log(GET_STORAGE);
  const isFavorite = GET_STORAGE.some(({ trackId }) => trackId === songId);
  console.log(isFavorite);
  return isFavorite;
};
