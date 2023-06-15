import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaHeartBroken, FaRegHeart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addFavoriteSong, songAlreadyFavorite } from '../../services/favoriteSongTools';
import './style.css';

class Favorite extends Component {
  constructor() {
    super();

    this.state = {
      isFavorite: false,
    };
  }

  // componentDidMount() {
  //   const { songId } = this.props;
  //   songAlreadyFavorite(songId);
  // }
  Eu

  componentDidUpdate(prevState, prevProps) {
    console.log(prevState, prevProps, this.state.isFavorite);
  }

  onButtonClick = () => {
    const { songId, musics } = this.props;
    if (songAlreadyFavorite(songId)) return this.setState({ isFavorite: false });
    const findMusic = musics.find(({ trackId }) => trackId === songId);
    this.setState({ isFavorite: true });
    addFavoriteSong(findMusic);
    songAlreadyFavorite(songId);
  };

  // verificar se a musica ja esta nos favoritos
  // Se a Musica ja estiver nos favortios, mudar icone
  render() {
    const { isFavorite } = this.state;
    return (
      <button
        type="button"
        className="button-favorite"
        onClick={ this.onButtonClick }
      >
        {
          isFavorite
            ? <FaHeartBroken className="favorite-icon" />
            : <FaRegHeart className="favorite-icon" />
        }
      </button>
    );
  }
}

Favorite.propTypes = {
  songId: PropTypes.number.isRequired,
  musics: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  musics: state.fetchMusicsReducer.musics,
});

export default connect(mapStateToProps)(Favorite);
