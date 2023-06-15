import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

class MusicPlayer extends Component {
  render() {
    const { music: { artistName, previewUrl, trackName, artworkUrl30 } } = this.props;
    return (
      <section className="container-player">
        <section className="playing-now">
          <div className="music-artist">
            <img src={ artworkUrl30 } alt="" />
            <p id="music">{trackName}</p>
            <p id="artist">{artistName}</p>
          </div>
          <div>
            favoriteSong
          </div>
        </section>
        <section className="musica-player">
          <audio
            src={ previewUrl }
            controls
          >
            <track kind="captions" />
          </audio>
        </section>
        <section className="radio-volume">
          <label htmlFor="volume">
            <input type="range" id="volume" value={ 0 } />
          </label>
        </section>
      </section>
    );
  }
}

MusicPlayer.propTypes = {
  music: PropTypes.shape({
    artistName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackName: PropTypes.string,
    artworkUrl30: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  music: state.playingNowReducer,
});

export default connect(mapStateToProps)(MusicPlayer);

// React Icons

// FaPlay
// FaPause

// volume:
// FaVolumeUp
// FaVolumeMute
// FaVolumeDown
