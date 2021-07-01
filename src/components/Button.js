import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonName, clickHandler, color, wide,
}) => {
  let classNameValue = 'button';
  classNameValue = color === 'primary' ? `${classNameValue} primary` : `${classNameValue} secondary`;
  classNameValue = wide ? `${classNameValue} wide` : classNameValue;

  return (
    <>
      <button type="button" className={classNameValue} onClick={() => clickHandler(buttonName)}>{buttonName}</button>
    </>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
