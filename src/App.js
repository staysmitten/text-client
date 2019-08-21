import React from 'react';
import logo from './assets/img/staySmittenLogo.jpg';
import './styles/App.css';
import API, { alertErrorHandler } from './services/API';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, FourOhFour } from './pages';
import Header from './components/Header';
// components
import UserPostForm from './components/UserPostForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return ( 

      <BrowserRouter>
        <Header headerLogo={logo} />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <ProtectedRoute
            path="/secretadmin"
            isAuthenticated={isAuthenticated}
            user={user}
            component={Dashboard}
            modalDetails={this.state.modalDetails}
            isModalShowing={this.state.isModalShowing}
            openModal={this.openModalHandler}
            closeModal={this.closeModalHandler}
            logout={this.handleLogout}
          /> */}
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
