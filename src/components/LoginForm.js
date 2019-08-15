import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import '../styles/LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      partnerFirstNameInput: '',
      partnerLastNameInput: '',
      phoneNumber: '',
      partnerPhoneNumber: '',
      email: '',
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
      firstNameInput: document.getElementById('firstName-input').value,
      lastNameInput: document.getElementById('lastName-input').value,
      partnerFirstNameInput: document.getElementById('partnerFirstName-input').value,
      partnerLastNameInput: document.getElementById('partnerLastName-input').value,
      phoneNumber: document.getElementById('number-input').value,
      partnerPhoneNumber: document.getElementById('partnerNumber-input').value,
      email: document.getElementById('email-input').value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleLogin} className="credentialForm">
        <h1 className="credentialTitle">Welcome back!</h1>
        <TextField
          id="firstName-input"
          label="First Name"
          className="firstNameInput"
          autoComplete="current-firstName"
          margin="normal"
    
        />
        <TextField
          id="lastName-input"
          label="Last Name"
          className="lastNameInput"
          autoComplete="current-lastName"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="partnerFirstName-input"
          label="Partner First Name"
          className="partnerFirstNameInput"
          autoComplete="current-partnerFirstName"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="partnerLastName-input"
          label="Partner Last Name"
          className="partnerLastNameInput"
          autoComplete="current-partnerLastName"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="number-input"
          label="Phone Number"
          className="numberInput"
          autoComplete="current-number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="partnerNumber-input"
          label="Partner Number"
          className="partnerNumberInput"
          autoComplete="current-partnerNumber"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="email-input"
          label="Email"
          className="emailInput"
          autoComplete="current-email"
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
