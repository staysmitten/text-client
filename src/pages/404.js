import React from 'react';
import PropTypes from 'prop-types';
import '../styles/404.css'
import errorImage from '../assets/img/Distracted404.png';

/**
 * Missing page - Someone went to the wrong location (404 error)
 * @param {Object} props Passed Props
 * @param {Object} props.location Location object passed from router
 * @param {string} props.location.pathname Path name
 */
const FourOhFour = ({ location: { pathname: pathName } }) => (
  <main className="fourOhFourMain">
    <img src={errorImage} className="fourOhFourImage"></img>
  </main>
);

FourOhFour.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default FourOhFour;