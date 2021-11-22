import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { previewUrl, trackName, trackId } = this.props;
    return (
      <div>
        <p>{trackName}</p>
        {trackId
        && (
          <div>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
            </audio>
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
