import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      loading: true,
    };
  }

  getUserName = async () => {
    const user = await getUser();
    this.setState({ userName: user.name });
    this.setState({ loading: false });
  }

  render() {
    const { userName, loading } = this.state;
    this.getUserName();
    return (
      <section>
        {
          loading ? <Loading />
            : (
              <div>
                <h3 data-testid="header-user-name">{userName}</h3>
                <nav data-testid="header-component">
                  <Link to="/search" data-testid="link-to-search">Search</Link>
                  <Link to="/album">Album</Link>
                  <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
                  <Link to="/profile" data-testid="link-to-profile">Prodile</Link>
                  <Link to="/Profile/edit">Profile Edit</Link>
                </nav>
              </div>)
        }
      </section>
    );
  }
}
