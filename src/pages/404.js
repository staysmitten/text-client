import React from 'react';
import PropTypes from 'prop-types';

/**
 * Missing page - Someone went to the wrong location (404 error)
 * @param {Object} props Passed Props
 * @param {Object} props.location Location object passed from router
 * @param {string} props.location.pathname Path name
 */
const FourOhFour = ({ location: { pathname: pathName } }) => (
  <main className="fourOhFourMain">
    <h1 className="fourOhFourHeading">404 Error</h1>
    <h2 className="fourOhFourSubheading">Page Not Found</h2>
  </main>
);

FourOhFour.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default FourOhFour;