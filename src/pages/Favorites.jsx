import React, { Component } from 'react';
import Header from '../componets/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        Favorites
      </div>
    );
  }
}