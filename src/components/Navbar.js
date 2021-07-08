import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 data-testid="name">Math Magicians</h1>
    <ul>
      <li>
        <Link data-testid="home" to="/">Home</Link>
      </li>
      <li>
        <Link data-testid="calculator" to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link data-testid="quote" to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
