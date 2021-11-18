import React, { Component } from 'react';
import Header from '../componets/Header';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputSearch: '',
      buttonDisabled: true,
    };
  }

  onInputChange = ({ target: { value } }) => {
    this.setState({
      inputSearch: value,
    }, this.validateButton);
  }

  validateButton = () => {
    const { inputSearch } = this.state;
    const minCharactes = 2;

    this.setState({ buttonDisabled: inputSearch.length < minCharactes });
  }

  render() {
    const { inputSearch, buttonDisabled } = this.state;
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
            data-testid="search-artist-button"
          >
            Pesquisar

          </button>
        </div>
      </section>
    );
  }
}
