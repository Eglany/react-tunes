import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      buttonLogin: true,
      loading: false,
      loginUser: false,
    };
  }

  onInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, this.validateLogin);
  }

  validateLogin = () => {
    const { userName } = this.state;
    const minCharactes = 3;

    this.setState({ buttonLogin: userName.length < minCharactes });
  }
  // https://stackoverflow.com/questions/43718103/arrow-functions-with-async-and-await-in-react-native

  onLoginButton = async () => {
    const { userName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: userName });
    this.setState({
      loading: false,
      loginUser: true,
    });

    console.log('chamou');
  }

  // https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
  render() {
    const { userName, buttonLogin, loading, loginUser } = this.state;
    if (loading) return <Loading />;
    if (loginUser) return <Redirect to="/search" />;
    return (
      <div data-testid="page-login">
        <h3>Tela de Login</h3>
        <input
          name="userName"
          type="text"
          value={ userName }
          onChange={ this.onInputChange }
          data-testid="login-name-input"
        />
        <button
          name="buttonLogin"
          type="button"
          onClick={ this.onLoginButton }
          disabled={ buttonLogin }
          data-testid="login-submit-button"
        >
          Login
        </button>
      </div>
    );
  }
}
