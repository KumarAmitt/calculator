import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState({ total: '0', next: '', operation: '' });

  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };

  const { total, next, operation } = data;
  const output = operation === '=' ? total : `${total} ${operation} ${next}`;
  return (
    <>
      <div className="App">
        <Display result={output} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
