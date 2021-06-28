import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName }) => (
  <>
    <h1>Button</h1>
  </>
);

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
