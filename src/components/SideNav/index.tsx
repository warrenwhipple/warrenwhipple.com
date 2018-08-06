import * as React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => (
  <div className="sideNav">
    <h1>
      <Link to="/">Site Title</Link>
    </h1>
    <ul>
      <li>
        <Link to="/code">Code</Link>
      </li>
      <li>
        <Link to="/websites">Websites</Link>
      </li>
      <li>
        <Link to="/experience">Experience</Link>
      </li>
    </ul>
  </div>
);

export default SideNav;