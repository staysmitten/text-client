import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Footer.css';

/**
 * Global navigation footer
 * @param {Object} props Passed props
 * @param {string} props.headerLogo Logo URL
 * @param {boolean} props.isAuthenticated Authenticated flag
 */
const Footer = ({ footerLogo}) => (
  <footer className="footer">
    <img src={footerLogo} className="footerLogo" alt="logo" />
    <section className="socialIcons">
      <a className="facebookIcon" href="https://www.facebook.com/"></a>
      <a className="instaIcon" href="https://www.instagram.com/lovestaysmitten/"></a>
      <a className="twitterIcon" href="https://twitter.com/LoveStaySmitten"></a>
    </section>
    <p className="footerSS"> ©2019 Stay Smitten</p>
  </footer>
);

Footer.propTypes = {
  footerLogo: PropTypes.string.isRequired,
};

export default Footer;