import React from 'react';
import Loader from 'react-loader-spinner';
import API, { alertErrorHandler } from '../services/API';
import { Redirect } from 'react-router';
// components

import UserPostForm from '../components/UserPostForm';
import couplePhoto from '../assets/img/stock/couple1.jpeg';
import '../styles/Home.css';

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
      redirect: false,
      loading: false,
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
    this.setState({loading: true});
    await this.handleAPICalls(credentials);
    this.setState({redirect: true});
  }

  getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hours = String(today.getHours()).padStart(2, '0');
    var minutes = String(today.getMinutes()).padStart(2, '0');
    var seconds = String(today.getSeconds()).padStart(2, '0');
  
    today = mm + '/' + dd + '/' + yyyy + ' ' + hours + ':' + minutes + ':' + seconds;
    document.write(today);
    // this.setState({redirect: true});
  }


  render() {
    if (this.state.redirect) {
      return <Redirect push to="/thankyou" />;
    }

    if (this.state.loading) {
      return (
        <div className="Home">
        <section className="signUpBanner">
          <div className="column1">
            <div className='tagline'>
              <h2>Giving you both a shared moment of joy and surprise in your busy lives!</h2>
            </div>
            <div className="formWrapper">
              <Loader className='loader' type="Hearts" color="#ce3e83" height={300} width={300} />
            </div>
          </div>
          <div className="column2">
          </div>
        </section>
      </div>
      );
    }
    return ( 
        <div className="Home">
          <section className="signUpBanner">
            <div className="column1">
              <div className='tagline'>
                <h2>Giving you both a shared moment of joy and surprise in your busy lives!</h2>
              </div>
              <div className="formWrapper">
                {/* <UserPostForm handleUserPost={this.handleUserPost}/> */}
                <button onClick={this.testDate}/>
              </div>
            </div>
            <div className="column2"/>
          </section>
        </div>
    );
  }
}

export default Home;