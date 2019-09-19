import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

/**
 * Global navigation header
 * @param {Object} props Passed props
 * @param {string} props.headerLogo Logo URL
 * @param {boolean} props.isAuthenticated Authenticated flag
 */
const Header = ({ headerLogo}) => (
    <header className="header">
      <a href="https://staysmittentext.com/">
        <img src={headerLogo} className="headerLogo" alt="logo"/>
      </a>
    <section className="socialIcons">
      {/* <a className="facebookIcon" href="https://www.facebook.com/"></a> */}
      <a className="instaIcon" href="https://www.instagram.com/lovestaysmitten/"></a>
      <a className="twitterIcon" href="https://twitter.com/LoveStaySmitten"></a>
    </section>
  </header>
);

Header.propTypes = {
  headerLogo: PropTypes.string.isRequired,
};

export default Header;