import React from 'react';
import logo from './assets/img/staySmittenLogo.jpg';
import footerLogo from './assets/img/StaySmittenCircleBorderLogo.png'
import './styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Admin, FourOhFour } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <Route path="/tempadmin" exact component={Admin} />
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
        <Footer footerLogo={footerLogo}></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
