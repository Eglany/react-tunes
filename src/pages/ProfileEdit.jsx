import React, { Component } from 'react';
import Header from '../components/SideBar';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        Profile Edit
      </div>
    );
  }
}
