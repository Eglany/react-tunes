import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';
// import { getUser } from '../../services/userAPI';
// import Loading from '../Loading';
import './style.css';

export default class SideBar extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     userName: '',
  //     loading: true,
  //   };
  // }

  // getUserName = async () => {
  //   const user = await getUser();
  //   this.setState({ userName: user.name });
  //   this.setState({ loading: false });
  // }

  render() {
    // const { userName, loading } = this.state;
    // this.getUserName();
    return (
      <section className="container-sidebar">
        <h1>REACT TUNES</h1>
        <nav>
          <Link
            className="button-link"
            to="/search"
          >
            <FaSearch fontSize="1.5rem" />
            <span>Search</span>
          </Link>
          <Link
            className="button-link"
            to="/favorites"
          >
            <FaHeart fontSize="1.5rem" />
            <span>Favorites</span>
          </Link>
        </nav>

      </section>
    );
  }
}
