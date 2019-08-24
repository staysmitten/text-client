import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import '../styles/LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUsernameInputValue: '',
      loginPasswordInputValue: '',
    };
  }

  /**
   * Text-based input change handler.
   *
   * `NOTE:` Requires some alteration for radio buttons and drop down selects.
   * @param {Event} event Input change event
   */
  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  /**
   * Login event handler
   * @param {Event} event Submit event
   */
  handleLogin = event => {
    event.preventDefault();
    this.props.handleLogin({
      // username: this.state.loginUsernameInputValue,
      // password: this.state.loginPasswordInputValue,
      username: document.getElementById('username-input').value,
      password: document.getElementById('password-input').value,
    });
  };


  render() {
    return (
      <form onSubmit={this.handleLogin} className="credentialForm">
        <h1 className="credentialTitle">Welcome back!</h1>
        <div className="usernameWrap">
              <TextField
              id="username-input"
              label="username"
              className="usernameInput"
              type="username"
              autoComplete="current-username"
              margin="normal"
              variant="outlined"
            />
        </div>
        
        <TextField
          id="password-input"
          label="password"
          className="passwordInput"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <button className="submitButton" type="submit">
          Login
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
