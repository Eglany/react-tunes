import React, { Component } from 'react';
import Albums from '../componets/Albums';
import Header from '../componets/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputSearch: '',
      albums: [],
      actualArtist: '',
      buttonDisabled: true,
      search: false,
      loading: false,
    };
  }

  onInputChange = ({ target: { value } }) => {
    this.setState(
      {
        inputSearch: value,
      },
      this.validateButton,
    );
  };

  validateButton = () => {
    const { inputSearch } = this.state;
    const minCharactes = 2;

    this.setState({ buttonDisabled: inputSearch.length < minCharactes });
  };

  searchButton = async () => {
    const { inputSearch } = this.state;
    this.setState({
      loading: true,
      search: true,
      actualArtist: inputSearch,
    });
    const searchAlbum = await searchAlbumsAPI(inputSearch);
    this.setState({
      albums: searchAlbum,
      loading: false,
      buttonDisabled: true,
      inputSearch: '',
    });
  };

  render() {
    const { inputSearch, buttonDisabled, search } = this.state;
    return (
      <section data-testid="page-search">
        <Header />
        <div>
          <input
            type="text"
            value={ inputSearch }
            onChange={ this.onInputChange }
            data-testid="search-artist-input"
          />
          <button
            type="button"
            disabled={ buttonDisabled }
            onClick={ this.searchButton }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
          <div>
            { search && (<Albums { ...this.state } />) }
          </div>
        </div>
      </section>
    );
  }
}
