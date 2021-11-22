import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      checkbox: false,
      loading: false,
    };
  }

  componentDidMount = () => {
    this.SavedSongs();
  }

  SavedSongs = async () => {
    const { trackId } = this.props;
    this.setState({ loading: true });
    const getSongs = await getFavoriteSongs();
    const findFavorites = getSongs.some((id) => Number(id) === trackId);
    this.setState({ checkbox: findFavorites });
    this.setState({ loading: false });
  }

  favoriteSong = async ({ target: { checked } }, props) => {
    this.setState({ loading: true });
    if (checked) {
      await addSong(props);
      this.setState({ checkbox: true });
    }
    if (!checked) {
      await removeSong(props);
      this.setState({ checkbox: false });
    }
    this.setState({ loading: false });
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
                onChange={ (event) => this.favoriteSong(event, this.props) }
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
};
