import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaPlay } from 'react-icons/fa';
import { connect } from 'react-redux';
import { playingMusic } from '../../redux/actions.js/playingNowAction';
import './style.css';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      mouseOnCard: false,
    };
  }

  onMouseHover = ({ type }) => {
    this.setState({
      mouseOnCard: type === 'mouseenter',
    });
  }

  onButtonClick = () => {
    const {
      trackId: musicSelected,
      dispatch,
      musics,
    } = this.props;
    const findMusic = musics.find(({ trackId }) => trackId === musicSelected);
    dispatch(playingMusic(findMusic));
  }

  buttonElement = () => (
    <button
      type="button"
      className="btn"
      onClick={ this.onButtonClick }
    >
      <FaPlay className="icon" />
    </button>)

    textIndexAlbum = () => {
      const { index } = this.props;
      const text = `${index + 1}.`;
      return (<p className="btn">{text}</p>);
    }

    render() {
      const {
        trackName,
        artistName,
      } = this.props;
      const { mouseOnCard } = this.state;
      return (
        <div
          className="card-music"
          onMouseEnter={ this.onMouseHover }
          onMouseLeave={ this.onMouseHover }
        >
          <div className="div-btn-info">
            {mouseOnCard ? this.buttonElement() : this.textIndexAlbum()}
            <div>
              <p>{trackName}</p>
              <span>{artistName}</span>
            </div>
          </div>
          {/* <div>
            <Favorite songId={ trackId } />
          </div> */}
        </div>
      );
    }
}

MusicCard.propTypes = {
  index: PropTypes.number.isRequired,
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  artistName: PropTypes.string.isRequired,
  musics: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  musics: state.fetchMusicsReducer.musics,
});

export default connect(mapStateToProps)(MusicCard);
