import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideBar from '../../components/SideBar';
// import getMusics from '../../services/musicsAPI';
import Loading from '../../components/Loading';
import MusicCard from '../../components/MusicCard';
import MusicPlayer from '../../components/MusicPlayer';
import './style.css';
import { fetchMusic } from '../../redux/actions.js/fetchMusicsAction';

class Album extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id },
      } } = this.props;
    dispatch(fetchMusic(id));
  }

  render() {
    const { musics, isFetching } = this.props;
    return (
      <section className="page-album" data-testid="page-album">
        <SideBar />
        <section className="container-album">
          {isFetching ? (
            <Loading />
          ) : (
            musics.length !== 0 && (
              <section className="section-musics">
                <img
                  src={ musics[0].artworkUrl100 }
                  alt={ musics[0].collectionName }
                />
                <h2 data-testid="album-name">{musics[0].collectionName}</h2>
                <h4 data-testid="artist-name">{musics[0].artistName}</h4>
                <section className="list-musics">
                  {musics.slice(1).map((music, index) => (
                    <MusicCard { ...music } index={ index } key={ music.trackId } />
                  ))}
                </section>
              </section>
            )
          )}
        </section>
        <MusicPlayer />
      </section>
    );
  }
}

// https://stackoverflow.com/questions/47519612/eslint-match-is-missing-in-props-validation-react-prop-types

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  musics: PropTypes.objectOf.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  musics: state.fetchMusicsReducer.musics,
});

export default connect(mapStateToProps)(Album);
