import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';
import '../styles/UserPostForm.css';

class UserPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullNameInput: '',
      phoneNumber: '',
      partnerFullNameInput: '',
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
      fullNameInput,
      phoneNumber,
      partnerFullNameInput,
      partnerPhoneNumber,
      email,
    } = this.state;
    // Regex
    const emailCheck = /\S+@\S+\.\S+/;
    const phoneCheck = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    const nameCheck = /^[a-z ,.'-]+$/i;
    // FIXME: Create a validation middleware we can use instead of these checks here.
    // Validates inputs
    if (nameCheck.test(String(fullNameInput).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: 'Enter your full name',
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
    } else if (nameCheck.test(String(partnerFullNameInput).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: "Enter your partner's full name",
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
        fullNameInput: document.getElementById('fullNameInput').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        partnerFullNameInput: document.getElementById('partnerFullNameInput').value,
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
          id="fullNameInput"
          label="Full Name"
          className="fullNameInput"
          autoComplete="current-fullName"
          margin="normal"
          variant="outlined"
          value={this.state.fullNameInput}
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
          id="partnerFullNameInput"
          label="Partner Full Name"
          className="partnerFullNameInput"
          autoComplete="current-partnerFullName"
          margin="normal"
          variant="outlined"
          value={this.state.partnerFullNameInput}
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
