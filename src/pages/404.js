import React from 'react';
import PropTypes from 'prop-types';
import '../styles/404.css'

/**
 * Missing page - Someone went to the wrong location (404 error)
 * @param {Object} props Passed Props
 * @param {Object} props.location Location object passed from router
 * @param {string} props.location.pathname Path name
 */
const FourOhFour = ({ location: { pathname: pathName } }) => (
  <main className="fourOhFourMain">
  </main>
);

FourOhFour.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default FourOhFour;