import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';
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
   * Handle form input changes
   * @param {Event} event Submit event
   */
  handleUserPost = event => {
    event.preventDefault();
    const {
      firstNameInput,
      lastNameInput,
      phoneNumber,
      partnerFirstNameInput,
      partnerLastNameInput,
      partnerPhoneNumber,
      email,
    } = this.state;
    // Regex
    const emailCheck = /\S+@\S+\.\S+/;
    const phoneCheck = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    const nameCheck = /^[a-z ,.'-]+$/i;
    // FIXME: Create a validation middleware we can use instead of these checks here.
    // Validates inputs
    if (nameCheck.test(String(firstNameInput).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: 'Enter a first name',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (nameCheck.test(String(lastNameInput).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: 'Enter a last name',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (phoneCheck.test(String(phoneNumber).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: 'Enter a valid phone number',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (nameCheck.test(String(partnerFirstNameInput).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: "Enter your partner's first name",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (nameCheck.test(String(partnerLastNameInput).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: "Enter your partner's last name",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (phoneCheck.test(String(partnerPhoneNumber).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: 'Enter a valid partner phone number',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (emailCheck.test(String(email).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: 'Enter a valid email',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.props.handleUserPost({
        firstNameInput: document.getElementById('firstNameInput').value,
        lastNameInput: document.getElementById('lastNameInput').value,
        partnerFirstNameInput: document.getElementById('partnerFirstNameInput').value,
        partnerLastNameInput: document.getElementById('partnerLastNameInput').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        partnerPhoneNumber: document.getElementById('partnerPhoneNumber').value,
        email: document.getElementById('email').value,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleUserPost} className="credentialForm">
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
  handleUserPost: PropTypes.func.isRequired,
};

export default UserPostForm;
