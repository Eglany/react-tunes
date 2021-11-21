import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from './Loading';

export default class Albums extends Component {
  render() {
    const { albums, loading, actualArtist } = this.props;
    if (loading) {
      return (<Loading />);
    }
    if (albums.length === 0 && !loading) {
      return (<h3>Nenhum álbum foi encontrado</h3>);
    }
    return (
      <div>
        <h3>
          Resultado de álbuns de:
          {' '}
          {actualArtist}
        </h3>
        <ol>
          {albums.map((
            { artistId, artworkUrl100, collectionId, collectionName },
          ) => (
            <li key={ artistId }>
              <img src={ artworkUrl100 } alt="album" />
              <br />
              <Link
                to={ `/album/${collectionId}` }
                data-testid={ `link-to-album-${collectionId}` }
              >
                {collectionName}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
Albums.propTypes = {
  albums: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  actualArtist: PropTypes.bool.isRequired,
};
