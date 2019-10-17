import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Swal from 'sweetalert2';
import '../styles/UserPostForm.css';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#C297FF',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#C297FF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#C297FF',
      },
    },
  },
})(TextField);

class UserPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullNameInput: '',
      phoneNumber: '',
      partnerFullNameInput: '',
      partnerPhoneNumber: '',
      email: '',
      status: 'Dating',
      currencies: [
        {
          value: 'Dating',
          label: 'Dating',
        },
        {
          value: 'Dating&Living',
          label: 'Dating & Living Together',
        },
        {
          value: 'Married',
          label: 'Married',
        },
        {
          value: 'Married&Kids',
          label: 'Married With Kid(s)',
        },
      ],
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
   * Select input change handler for status.
   *
   * `NOTE:` Requires some alteration for radio buttons and drop down selects.
   * @param {Event} event Input change event
   */
  handleInputStatusChange = event => {
    event.persist()
    const value = event.target.value;
    const name = 'status';

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
      status,
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
        status: document.getElementById('status').value,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleUserPost} className="credentialForm">
        <CssTextField
          id="fullNameInput"
          label="What's your full name?"
          className="fullNameInput"
          autoComplete="current-fullName"
          margin="normal"
          variant="outlined"
          value={this.state.fullNameInput}
          onChange={this.handleInputChange}
        />
        <CssTextField
          id="phoneNumber"
          label="What's your cell number?"
          className="numberInput"
          autoComplete="current-number"
          margin="normal"
          variant="outlined"
          value={this.state.phoneNumber}
          onChange={this.handleInputChange}
        />
        <CssTextField
          id="partnerFullNameInput"
          label="Your honey's full name"
          className="partnerFullNameInput"
          autoComplete="current-partnerFullName"
          margin="normal"
          variant="outlined"
          value={this.state.partnerFullNameInput}
          onChange={this.handleInputChange}
        />
        <CssTextField
          id="partnerPhoneNumber"
          label="Their cell number"
          className="partnerNumberInput"
          autoComplete="current-partnerNumber"
          margin="normal"
          variant="outlined"
          value={this.state.partnerPhoneNumber}
          onChange={this.handleInputChange}
        />
        <CssTextField
          id="email"
          label="What's your email?"
          className="emailInput"
          autoComplete="current-email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={this.handleInputChange}
        />     
        <CssTextField
          id="status"
          select
          label="Relationship Status"
          className="statusInput"
          value={this.state.status}
          onChange={this.handleInputStatusChange}
          SelectProps={{
            MenuProps: {
              className: 'statusMenu',
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {this.state.currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CssTextField> 
        <button className="submitButton" type="submit">
          JOIN STAY SMITTEN
        </button>
        <p className="formDetails">Once We Launch, Couples Will Receive Daily 2-Part Text Messages, Giving You Both A Shared Moment Of Joy And Surprise In Your Busy Lives.</p>
        <p className="formDetails">Join Stay Smitten now and be part of crafting our product into something couples all around the world want and love, please fill out the information above! </p>
      </form>
    );
  }
}

UserPostForm.propTypes = {
  handleUserPost: PropTypes.func.isRequired,
};

export default UserPostForm;
