import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SideNav = () => (
  <div className="sideNav">
    <h1>
      <Link to="/">Warren Whipple</Link>
    </h1>
    <ul>
      <li>
        <Link to="/code">Code</Link>
      </li>
      <li>
        <Link to="/websites">Websites</Link>
      </li>
    </ul>
  </div>
);

export default SideNav;
