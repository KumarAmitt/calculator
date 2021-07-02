import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/calculator';

const Routing = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/calculator" exact>
          <Calculator />
        </Route>
        <Route path="/quote" exact>
          <Quote />
        </Route>
      </Switch>
    </Router>
  </>
);

export default Routing;
