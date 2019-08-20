import React from 'react';
import logo from './assets/img/staySmittenLogo.jpg';
import './styles/App.css';
import API, { alertErrorHandler } from './services/API';
// components
import UserPostForm from './components/UserPostForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        firstName: '',
        lastName: '',
        partnerFirstName: '',
        partnerLastName: '',
        number: '',
        partnerNumber: '',
        email: '',
      },
    };
  }


  handleAPICalls = async credentials => {
    // User Post Request
    await API.post('https://stay-smitten.herokuapp.com/api/user/add/', {
      firstName: credentials.firstNameInput,
      lastName: credentials.lastNameInput,
      partnerFirstName: credentials.partnerFirstNameInput,
      partnerLastName: credentials.partnerLastNameInput,
      number: credentials.phoneNumber,
      partnerNumber: credentials.partnerPhoneNumber,
      email: credentials.email,
      })
      .then(response => {
        // Sets session token
        console.log(response);
      })
    .catch(err => alertErrorHandler(err));    
  };

  handleUserPost = async(credentials) => {
    await this.handleAPICalls(credentials);
  }


  render() {
    return ( 
        <div className="App">
        <header className="header">
          <img src={logo} className="headerLogo" alt="logo" />
        </header>
        <div className="formWrapper">
         <UserPostForm handleUserPost={this.handleUserPost}/>
        </div>
      </div>
    );
  }
}

export default App;
