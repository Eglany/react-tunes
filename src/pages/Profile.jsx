import React, { Component } from 'react';
import Header from '../components/SideBar';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        Profile
      </div>
    );
  }
}
