import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const renderButton = (b) => <Button buttonName={b} clickHandler={clickHandler} />;

  return (
    <>
      <section className="button-panel">
        <div>
          {renderButton('AC')}
          {renderButton('+/-')}
          {renderButton('%')}
          {renderButton('÷')}
        </div>
        <div>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('X')}
        </div>
        <div>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-')}
        </div>
        <div>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('+')}
        </div>
        <div>
          {renderButton('0')}
          {renderButton('.')}
          {renderButton('=')}
        </div>
      </section>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
