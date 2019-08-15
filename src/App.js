import React from 'react';
import logo from './assets/img/staySmittenLogo.jpg';
import './styles/App.css';
import API, { alertErrorHandler } from './services/API';
// components
import LoginForm from './components/LoginForm';

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
    // Login Request
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

  // handlePopulateData = async() => {
  //   const dataTemp = []
  //   await this.state.transactions.forEach(trans => {
  //     var residentName = '';
  //     var residentRoom = '';
  //     var userName = '';
  //     var indexOfResName = this.state.residents.findIndex(i => i.ResidentId === trans.ResidentId);
  //     var indexOfUserName = this.state.users.findIndex(i => i.username === trans.ServicedBy);
  //     if(indexOfResName >= 0) {
  //       residentName = this.state.residents[indexOfResName].SortName;
  //       residentRoom = this.state.residents[indexOfResName].Room;
  //     }
  //     if(indexOfUserName >= 0) {
  //       userName = this.state.users[indexOfUserName].SortName || trans.ServicedBy;
  //     }
  //     dataTemp.push( {
  //       'name': residentName,
  //       'serviceCode': trans.ServiceCode,
  //       'serviceBy': userName || trans.ServicedBy,
  //       'id': trans.ResidentId,
  //       'room': residentRoom,
  //       'date': trans.TransDate,
  //     });
  //   });
  //   this.setState({ 
  //     tableData: dataTemp,
  //     loading: false,
  //   });  
  // }

  handleLogin = async(credentials) => {
    // console.log(credentials);
    await this.handleAPICalls(credentials);
    // this.handlePopulateData();
  }


  render() {
    return ( 
        <div className="App">
        <header className="header">
          <img src={logo} className="headerLogo" alt="logo" />
        </header>
        <LoginForm handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
