import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import '../styles/UserPostForm.css';

class UserPostForm extends Component {
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
    event.persist()
    const value = event.target._valueTracker.getValue();
    const name = event.target.id;

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
        <h1 className="credentialTitle">Join Stay Smitten!</h1>
        <TextField
          id="firstNameInput"
          label="First Name"
          className="firstNameInput"
          autoComplete="current-firstName"
          margin="normal"
          variant="outlined"
          value={this.state.firstNameInput}
          onChange={this.handleInputChange}
        />
        <TextField
          id="lastNameInput"
          label="Last Name"
          className="lastNameInput"
          autoComplete="current-lastName"
          margin="normal"
          variant="outlined"
          value={this.state.lastNameInput}
          onChange={this.handleInputChange}
        />
          <TextField
            id="phoneNumber"
            label="Phone Number"
            className="numberInput"
            autoComplete="current-number"
            margin="normal"
            variant="outlined"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}
          />
        <TextField
          id="partnerFirstNameInput"
          label="Partner First Name"
          className="partnerFirstNameInput"
          autoComplete="current-partnerFirstName"
          margin="normal"
          variant="outlined"
          value={this.state.partnerFirstNameInput}
          onChange={this.handleInputChange}
        />
        <TextField
          id="partnerLastNameInput"
          label="Partner Last Name"
          className="partnerLastNameInput"
          autoComplete="current-partnerLastName"
          margin="normal"
          variant="outlined"
          value={this.state.partnerLastNameInput}
          onChange={this.handleInputChange}
        />
        <TextField
          id="partnerPhoneNumber"
          label="Partner Number"
          className="partnerNumberInput"
          autoComplete="current-partnerNumber"
          margin="normal"
          variant="outlined"
          value={this.state.partnerPhoneNumber}
          onChange={this.handleInputChange}
        />
        <TextField
          id="email"
          label="Email"
          className="emailInput"
          autoComplete="current-email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <button className="submitButton" type="submit">
          Get Stay Smitten Texts
        </button>
        
      </form>
    );
  }
}

UserPostForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default UserPostForm;
