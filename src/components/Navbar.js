import React from 'react';

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <link to="/" />
        Home
      </li>
      <li>
        <link to="/calculator" />
        Calculator
      </li>
      <li>
        <link to="/quote" />
        Quote
      </li>
    </ul>
  </nav>
);

export default Navbar;
