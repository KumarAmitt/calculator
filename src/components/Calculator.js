import React from 'react';
import App from './App';

const Calculator = () => {
  const tagline = 'Let\'s do some math!';

  return (
    <div className="Calculator">
      <h1 data-testid="tagline">{tagline}</h1>
      <App data-testid="app" />
    </div>
  );
};

export default Calculator;
