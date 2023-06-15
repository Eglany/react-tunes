import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import getYearAlbum from '../../services/getYearAlbum';

// Aparecer nome todo do album alcolocar o mouse em cima do nome

export default class AlbumCard extends Component {
  render() {
    const { artworkUrl100, collectionId, collectionName, releaseDate } = this.props;
    return (
      <Link
        className="card-album"
        key={ collectionId }
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img src={ artworkUrl100 } alt="album" />
        <p>{collectionName}</p>
        <span>
          {getYearAlbum(releaseDate)}
          {' '}
          • Álbum
        </span>
      </Link>
    );
  }
}
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
AlbumCard.propTypes = {
  artworkUrl100: PropTypes.string.isRequired,
  collectionId: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
