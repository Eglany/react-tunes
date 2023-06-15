import React, { Component } from 'react';
import Albums from '../../components/Albums';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';

import './style.css';

class Search extends Component {
  render() {
    return (
      <section className="page-search" data-testid="page-search">
        <SideBar />
        <section className="container-search-page">
          <SearchBar />
          <Albums />
        </section>
      </section>
    );
  }
}

export default Search;
