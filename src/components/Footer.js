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
    <a href="https://staysmitten.com/">
      <img src={footerLogo} className="footerLogo" alt="logo" />
    </a>
    <p className="footerSS"> ©2019 Stay Smitten</p>
  </footer>
);

Footer.propTypes = {
  footerLogo: PropTypes.string.isRequired,
};

export default Footer;