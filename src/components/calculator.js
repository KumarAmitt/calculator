import React from 'react';
import App from './App';

const Calculator = () => {
  const tagline = 'Let\'s do some math!';

  return (
    <div className="Calculator">
      <h1>{tagline}</h1>
      <App />
    </div>
  );
};

export default Calculator;
