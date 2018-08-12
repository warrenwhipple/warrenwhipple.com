import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const SideNav = () => (
  <div className="sideNav">
    <h1>
      <NavLink to="/">Warren Whipple</NavLink>
    </h1>
    <ul>
      <li>
        <NavLink to="/code">Code</NavLink>
      </li>
      <li>
        <NavLink to="/websites">Websites</NavLink>
      </li>
    </ul>
  </div>
);

export default SideNav;
