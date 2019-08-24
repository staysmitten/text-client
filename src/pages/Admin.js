import React from 'react';
import '../styles/Admin.css';
import API, { alertErrorHandler } from '..//services/API';
// components
import LoginForm from '../components/LoginForm';
import PrimeDataTable from '../components/PrimeDataTable';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../../.env') });

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionToken: '',
      loading: false,
      loggedIn: false,
      showTable: false,
      residents: [],
      transactions: [],
      users: [],
      tableData: [],
    };
  }

  handleAPICalls = async credentials => {
    // Login Request
    // TODO: Handle Login On Backend
    // await API.post('login/', {
    //     username: credentials.username,
    //     password: credentials.password,
    //   },
    //   {
    //     headers: {
    //       'X-Appery-Database-Id': this.state.databaseId,
    //     }
    // })
    // .then(response => {
    //   // Sets session token
    //   this.setState({ 
    //     sessionToken: response.data.sessionToken,
    //     loading: true,
    //     loggedIn: true,
    //     showTable: true,
    //   });  
    // })
    // .catch(err => alertErrorHandler(err));

    // MOCK Login
      await API.get('/', {})
    .then(response => {
      // Sets session token
      this.setState({ 
        sessionToken: response.data.sessionToken,
        loading: true,
        loggedIn: true,
        showTable: true,
      });  
    });
  };

  handlePopulateData = async() => {
      console.log(this.loading);
    if (this.state.loggedIn) {
        // Table Data Get Request
        await API.get(`/api/user/`, {
        })
        .then(response => {
          this.setState({ 
            tableData: response.data,
          });  
        })
        .catch(err => alertErrorHandler(err));
    }  
    this.setState({ 
      loading: false,
    });  
  }

  handleLogin = async(credentials) => {
    await this.handleAPICalls(credentials);
    setTimeout(()=> this.handlePopulateData(), 2000);
  }

  handleRefresh = async() => {
    this.setState({ 
      loading: true,
    });  
    if (this.state.loggedIn) {
      // Table Data Get Request
      await API.get('api/user/', {
      })
      .then(response => {
        this.setState({ 
          tableData: response.data,
        });  
      })
      .catch(err => alertErrorHandler(err));
    }   
  }

  render() {
    return (
      <div className="Admin">
        {this.state.loggedIn ? null : (
            <div className="formWrapper">
            <LoginForm handleLogin={this.handleLogin}/>
            </div>
        )}
        {this.state.showTable ? (
          <div>
            <div className="tableHeaderWrapper">
              <p className="tableHeader">User Data</p>
            </div>
            <div className="tableBorder">
              <PrimeDataTable loading={this.state.loading} products={this.state.tableData} onRefresh={this.handleRefresh} />
            </div>
          </div>
        ) : null}

      </div>
    );
  }
}


export default Admin;
