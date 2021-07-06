import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="Display">
    <h2 data-testid="result">{result}</h2>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
