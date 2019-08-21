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
    <img src={headerLogo} className="headerLogo" alt="logo" />
  </header>
);

Header.propTypes = {
  headerLogo: PropTypes.string.isRequired,
};

export default Header;