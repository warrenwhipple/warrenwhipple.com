import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SideNav = () => (
  <div className="topNav">
    <h1>
      <Link to="/">
        <span>Warren Whipple</span>
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="/code">Code</Link>
      </li>
      <li>
        <Link to="/websites">Sites</Link>
      </li>
      <li>
        <Link to="/experience">Exp</Link>
      </li>
    </ul>
  </div>
);

export default SideNav;
