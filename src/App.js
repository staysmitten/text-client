import React from 'react';
import logo from './assets/img/logo/staySmittenLogo.png';
import footerLogo from './assets/img/logo/StaySmittenSmallLogoTransparent.png'
import './styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Admin, FourOhFour, ThankYou } from './pages';
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
          <Route path="/thankyou" exact component={ThankYou} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer footerLogo={footerLogo}></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
