import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from './Navbar';
import Home from './Home';
import Quote from './Quote';

const App = () => {
  const [data, setData] = useState({ total: '0', next: '', operation: '' });

  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };

  const { total, next, operation } = data;
  const output = operation === '=' ? total : `${total} ${operation} ${next}`;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/calculator" exact>
            <div className="App">
              <Display result={output} />
              <ButtonPanel clickHandler={handleClick} />
            </div>
          </Route>
          <Route path="/quote" exact>
            <Quote />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
