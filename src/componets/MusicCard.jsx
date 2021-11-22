import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      checkbox: false,
      loading: false,
    };
  }

  favoriteSong = async ({ target: { id, checked } }) => {
    this.setState({ checkbox: checked, loading: true });
    const favorite = await addSong(id);
    this.setState({ loading: false });
    console.log(favorite);
  }

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { checkbox, loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <p>{trackName}</p>
        {trackId
        && (
          <div>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
            </audio>
            <label htmlFor={ trackId }>
              <input
                id={ trackId }
                type="checkbox"
                onChange={ this.favoriteSong }
                checked={ checkbox }
                data-testid={ `checkbox-music-${trackId}` }
              />
              Favorita
            </label>
          </div>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  favoriteSong: PropTypes.func.isRequired,
  checkbox: PropTypes.bool.isRequired,
};
