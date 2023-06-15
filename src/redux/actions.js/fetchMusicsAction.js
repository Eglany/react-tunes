import getMusics from '../../services/musicsAPI';

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

export const fetchMusic = (album) => (dispatch) => {
  dispatch(requestStarted());
  getMusics(album)
    .then((response) => dispatch(requestSuccessful(response)))
    .catch((error) => dispatch(requestFailed(error)));
};
