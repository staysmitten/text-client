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
            <div className="column1">
              <div className='tagline'>
                <h2>Welcome To The Stay Smitten Family!</h2>
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

export default ThankYou;