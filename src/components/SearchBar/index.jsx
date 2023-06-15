import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import validateMinCharactes from '../../services/validateSearchInput';
import './style.css';
import { fetchAlbum } from '../../redux/actions.js/searchAlbumAction';

const INITIAL_SEARCHBAR_STATE = {
  inputSearch: '',
  buttonDisabled: true,
};

class SearchBar extends Component {
  constructor() {
    super();

    this.state = INITIAL_SEARCHBAR_STATE;
  }

  onInputChange = ({ target: { value } }) => {
    this.setState(
      {
        inputSearch: value,
        buttonDisabled: validateMinCharactes(value),
      },
    );
  };

  onButtonClick = () => {
    const { dispatch } = this.props;
    const { inputSearch } = this.state;
    dispatch(fetchAlbum(inputSearch));
    this.setState(INITIAL_SEARCHBAR_STATE);
  }

  render() {
    const { inputSearch, buttonDisabled } = this.state;
    return (
      <section
        className="container-search-bar"
      >
        <label
          htmlFor="input-search"
          className="label-input"
        >
          <input
            type="text"
            id="input-search"
            className="input-search"
            value={ inputSearch }
            placeholder="Search"
            onChange={ this.onInputChange }
            onKeyUp={ ({ key }) => (key === 'Enter') && this.onButtonClick() }
            data-testid="search-artist-input"
          />
          <button
            type="button"
            className="button-search"
            disabled={ buttonDisabled }
            onClick={ this.onButtonClick }
            data-testid="search-artist-button"
          >
            <FaSearch className="icon" />
          </button>
        </label>

      </section>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  albums: state.albums,
});

export default connect(mapStateToProps)(SearchBar);
