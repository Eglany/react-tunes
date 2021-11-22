import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../componets/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../componets/Loading';
import MusicCard from '../componets/MusicCard';

export default class Album extends Component {
  constructor() {
    super();

    this.state = {
      musics: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    await this.renderMusic(id);
  }

  renderMusic = async (id) => {
    this.setState({ loading: true });
    const musicsAPI = await getMusics(id);
    this.setState({
      loading: false,
      musics: musicsAPI,
    });
    console.log(musicsAPI);
  }

  render() {
    const { loading, musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          {loading ? <Loading />
            : musics.length !== 0
        && (
          <div>
            <img src={ musics[0].artworkUrl100 } alt={ musics[0].collectionName } />
            <h2 data-testid="album-name">{musics[0].collectionName}</h2>
            <h4 data-testid="artist-name">{musics[0].artistName}</h4>
            {musics.map((music) => <MusicCard key={ music.trackId } { ...music } />)}
          </div>
        )}
        </section>
      </div>
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
};
