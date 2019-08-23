import React from 'react';
import '../styles/Home.css';
import API, { alertErrorHandler } from '../services/API';
// components

import UserPostForm from '../components/UserPostForm';
import couplePhoto from '../assets/img/stock/couple1.jpeg';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        fullName: '',
        number: '',
        partnerFullName: '',
        partnerNumber: '',
        email: '',
      },
    };
  }


  handleAPICalls = async credentials => {
    // User Post Request
    await API.post('/api/user/add/', {
      fullName: credentials.fullNameInput,
      number: credentials.phoneNumber,
      partnerFullName: credentials.partnerFullNameInput,
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
        <div className="Home">
          <section className="signUpBanner">
            <div className="column1">
              <div className='tagline'>
                <h2>Stay Smitten sends a short daily 2-part text message to you and your romantic partner</h2>
                <h2>Giving you both a shared moment of joy and surprise in your busy lives!</h2>
              </div>
              <div className="formWrapper">
                <UserPostForm handleUserPost={this.handleUserPost}/>
                <p className="formDetails">Hello! We are currently in beta test mode. If you would like to join Stay Smitten now and be a part of crafting our product into something couples all around the world want and love, please fill out the information below! </p>
              </div>
            </div>
            <div className="column2">
            {/* <img className="couplePic" src={couplePhoto} alt='couple'></img> */}
            </div>
          </section>
        </div>
    );
  }
}

export default Home;