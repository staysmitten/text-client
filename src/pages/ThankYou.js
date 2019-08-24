import React from 'react';
import '../styles/ThankYou.css';
// components


class ThankYou extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return ( 
        <div className="ThankYou">
          <section className="thankYouBanner"> 
            <h2 className="taglineThankYou">Welcome To The Stay Smitten Family!</h2>
          </section>
        </div>
    );
  }
}

export default ThankYou;