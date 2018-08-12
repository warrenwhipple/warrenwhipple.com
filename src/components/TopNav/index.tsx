import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const SideNav = () => (
  <div className="topNav">
    <h1>
      <NavLink to="/">
        <span>Warren Whipple</span>
      </NavLink>
    </h1>
    <ul>
      <li>
        <NavLink to="/code" activeClassName="active">
          Code
        </NavLink>
      </li>
      <li>
        <NavLink to="/websites">Sites</NavLink>
      </li>
    </ul>
  </div>
);

export default SideNav;
