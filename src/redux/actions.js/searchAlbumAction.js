import searchAlbumsAPI from '../../services/searchAlbumsAPI';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestStarted = () => ({ type: REQUEST_STARTED });

export const requestSuccessful = (albums) => ({
  type: REQUEST_SUCCESSFUL,
  payload: albums,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  payload: error,
});

export const fetchAlbum = (artist) => (dispatch) => {
  dispatch(requestStarted());
  searchAlbumsAPI(artist)
    .then((response) => dispatch(requestSuccessful(response)))
    .catch((error) => dispatch(requestFailed(error)));
};
