import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const renderButton = ({ name, color = 'orange', wide = false }) => <Button buttonName={name} clickHandler={clickHandler} color={color} wide={wide} />;

  return (
    <>
      <section className="button-panel">
        <div>
          {renderButton({ name: 'AC' })}
          {renderButton({ name: '+/-' })}
          {renderButton({ name: '%' })}
          {renderButton({ name: '÷' })}
        </div>
        <div>
          {renderButton({ name: '7' })}
          {renderButton({ name: '8' })}
          {renderButton({ name: '9' })}
          {renderButton({ name: 'x' })}
        </div>
        <div>
          {renderButton({ name: '4' })}
          {renderButton({ name: '5' })}
          {renderButton({ name: '6' })}
          {renderButton({ name: '-' })}
        </div>
        <div>
          {renderButton({ name: '1' })}
          {renderButton({ name: '2' })}
          {renderButton({ name: '3' })}
          {renderButton({ name: '+' })}
        </div>
        <div>
          {renderButton({ name: '0', wide: true })}
          {renderButton({ name: '.' })}
          {renderButton({ name: '=' })}
        </div>
      </section>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
