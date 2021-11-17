import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav data-testid="header-component">
        <Link to="/search">Search</Link>
        <Link to="/album">Album</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Prodile</Link>
        <Link to="/Profile/edit">Profile Edit</Link>
      </nav>
    );
  }
}
