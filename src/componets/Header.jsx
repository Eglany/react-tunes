import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Login</Link>
          <Link to="/search">Search</Link>
          <Link to="/album">Album</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Prodile</Link>
          <Link to="/Profile/edit">Profile Edit</Link>
          <Link to="*" />
        </div>
      </BrowserRouter>
    );
  }
}
