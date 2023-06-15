import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AlbumCard from '../AlbumCard';
import './style.css';

// criar sistema de loading

class Albums extends Component {
  render() {
    const { albums } = this.props;
    return (
      <section className="container-albuns">
        <div className="list-albuns">
          { albums.map((album) => (
            <AlbumCard { ...album } key={ album.artistId } />
          )) }
        </div>
      </section>
    );
  }
}

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
Albums.propTypes = {
  albums: PropTypes.arrayOf.isRequired,
  // iisFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  albums: state.searchAlbumReducer.albums,
  iisFetching: state.searchAlbumReducer.iisFetching,
});

export default connect(mapStateToProps)(Albums);
